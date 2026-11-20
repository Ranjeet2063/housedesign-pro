import React, { useRef, useState, useEffect } from 'react';
import { HouseProject, ToolMode, Wall, FurnitureItem } from '../types';

interface Canvas2DProps {
  project: HouseProject;
  onUpdateProject: (updater: (prev: HouseProject) => HouseProject) => void;
  activeTool: ToolMode;
  selectedFurnitureType: string | null;
}

export const Canvas2D: React.FC<Canvas2DProps> = ({
  project,
  onUpdateProject,
  activeTool,
  selectedFurnitureType
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 50, y: 50 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // Drawing state
  const [drawingWallStart, setDrawingWallStart] = useState<{ x: number; y: number } | null>(null);
  const [currentMousePos, setCurrentMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isDraggingItem, setIsDraggingItem] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Snap to grid (20px = 2ft)
  const snap = (val: number, gridSize = 10) => Math.round(val / gridSize) * gridSize;

  // Screen to World coordinates
  const screenToWorld = (screenX: number, screenY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: (screenX - rect.left - pan.x) / zoom,
      y: (screenY - rect.top - pan.y) / zoom
    };
  };

  // Redraw Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.parentElement?.clientWidth || 1000;
    canvas.height = canvas.parentElement?.clientHeight || 800;

    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply Pan & Zoom
    ctx.translate(pan.x, pan.y);
    ctx.scale(zoom, zoom);

    // 1. Draw Architectural Grid
    const gridSize = project.gridSize || 20;
    const viewLeft = -pan.x / zoom;
    const viewTop = -pan.y / zoom;
    const viewRight = viewLeft + canvas.width / zoom;
    const viewBottom = viewTop + canvas.height / zoom;

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#1e293b'; // slate 800
    for (let x = Math.floor(viewLeft / gridSize) * gridSize; x < viewRight; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, viewTop);
      ctx.lineTo(x, viewBottom);
      ctx.stroke();
    }
    for (let y = Math.floor(viewTop / gridSize) * gridSize; y < viewBottom; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(viewLeft, y);
      ctx.lineTo(viewRight, y);
      ctx.stroke();
    }

    // Major grid lines (every 5 units)
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#334155'; // slate 700
    for (let x = Math.floor(viewLeft / (gridSize * 5)) * (gridSize * 5); x < viewRight; x += gridSize * 5) {
      ctx.beginPath();
      ctx.moveTo(x, viewTop);
      ctx.lineTo(x, viewBottom);
      ctx.stroke();
    }
    for (let y = Math.floor(viewTop / (gridSize * 5)) * (gridSize * 5); y < viewBottom; y += gridSize * 5) {
      ctx.beginPath();
      ctx.moveTo(viewLeft, y);
      ctx.lineTo(viewRight, y);
      ctx.stroke();
    }

    // 2. Draw Rooms (Floor polygons & Area labels)
    project.rooms.forEach(room => {
      if (room.points.length < 3) return;
      ctx.fillStyle = room.color || 'rgba(56, 189, 248, 0.15)';
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.moveTo(room.points[0].x, room.points[0].y);
      for (let i = 1; i < room.points.length; i++) {
        ctx.lineTo(room.points[i].x, room.points[i].y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Calculate centroid for Room Tag
      const cx = room.points.reduce((sum, p) => sum + p.x, 0) / room.points.length;
      const cy = room.points.reduce((sum, p) => sum + p.y, 0) / room.points.length;

      // Room Name & Area Badge
      ctx.save();
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(room.name, cx, cy - 8);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText(`${room.areaSqFt || 450} sq.ft (${Math.round((room.areaSqFt || 450) * 0.0929)} m²)`, cx, cy + 8);
      ctx.restore();
    });

    // 3. Draw Walls
    project.walls.forEach(wall => {
      const isSelected = selectedItemId === wall.id;
      ctx.lineWidth = wall.thickness;
      ctx.lineCap = 'square';
      ctx.strokeStyle = isSelected ? '#38bdf8' : (wall.color || '#e2e8f0');

      ctx.beginPath();
      ctx.moveTo(wall.start.x, wall.start.y);
      ctx.lineTo(wall.end.x, wall.end.y);
      ctx.stroke();

      // Dimension badge on wall
      const dx = wall.end.x - wall.start.x;
      const dy = wall.end.y - wall.start.y;
      const lenPx = Math.sqrt(dx * dx + dy * dy);
      const lenFt = (lenPx / 10).toFixed(1); // 10px = 1ft
      const midX = (wall.start.x + wall.end.x) / 2;
      const midY = (wall.start.y + wall.end.y) / 2;

      ctx.save();
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      const tagText = `${lenFt} ft`;
      ctx.font = '9px "JetBrains Mono", monospace';
      const tw = ctx.measureText(tagText).width;

      ctx.fillRect(midX - tw / 2 - 4, midY - 7, tw + 8, 14);
      ctx.strokeRect(midX - tw / 2 - 4, midY - 7, tw + 8, 14);

      ctx.fillStyle = '#38bdf8';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(tagText, midX, midY);
      ctx.restore();
    });

    // 4. Draw Openings (Doors & Windows)
    project.openings.forEach(op => {
      const wall = project.walls.find(w => w.id === op.wallId);
      if (!wall) return;
      const px = wall.start.x + (wall.end.x - wall.start.x) * op.position;
      const py = wall.start.y + (wall.end.y - wall.start.y) * op.position;

      const angle = Math.atan2(wall.end.y - wall.start.y, wall.end.x - wall.start.x);

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(angle);

      if (op.type === 'door') {
        // Cutout
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-op.width / 2, -wall.thickness / 2 - 1, op.width, wall.thickness + 2);

        // Door leaf & swing arc
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-op.width / 2, 0);
        ctx.lineTo(-op.width / 2, -op.width);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(-op.width / 2, 0, op.width, -Math.PI / 2, 0);
        ctx.stroke();
      } else {
        // Window
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-op.width / 2, -wall.thickness / 2 - 1, op.width, wall.thickness + 2);

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-op.width / 2, 0);
        ctx.lineTo(op.width / 2, 0);
        ctx.stroke();
      }
      ctx.restore();
    });

    // 5. Draw Furniture
    project.furniture.forEach(item => {
      const isSelected = selectedItemId === item.id;
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.rotate((item.rotation * Math.PI) / 180);

      // Body box
      ctx.fillStyle = item.color || '#334155';
      ctx.strokeStyle = isSelected ? '#38bdf8' : '#64748b';
      ctx.lineWidth = isSelected ? 2.5 : 1.5;

      ctx.beginPath();
      ctx.roundRect(-item.width / 2, -item.depth / 2, item.width, item.depth, 4);
      ctx.fill();
      ctx.stroke();

      // Stylized internal details
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      if (item.type === 'sofa') {
        // Cushions
        ctx.fillRect(-item.width / 2 + 6, -item.depth / 2 + 6, item.width - 12, 10);
      } else if (item.type === 'double_bed') {
        // Pillows
        ctx.fillRect(-item.width / 2 + 8, -item.depth / 2 + 6, item.width * 0.4, 14);
        ctx.fillRect(item.width * 0.1, -item.depth / 2 + 6, item.width * 0.4, 14);
      }

      // Name label
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.name.split(' ')[0], 0, 0);

      // Selection bounding box with rotate handle
      if (isSelected) {
        ctx.strokeStyle = '#0284c7';
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(-item.width / 2 - 6, -item.depth / 2 - 6, item.width + 12, item.depth + 12);

        // Rotation indicator
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(0, -item.depth / 2 - 16, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    // 6. Live Wall in progress
    if (drawingWallStart && activeTool === 'wall') {
      const endSnap = { x: snap(currentMousePos.x), y: snap(currentMousePos.y) };
      ctx.strokeStyle = '#22c55e'; // green line
      ctx.lineWidth = 10;
      ctx.lineCap = 'square';
      ctx.beginPath();
      ctx.moveTo(drawingWallStart.x, drawingWallStart.y);
      ctx.lineTo(endSnap.x, endSnap.y);
      ctx.stroke();

      // Live length tag
      const dx = endSnap.x - drawingWallStart.x;
      const dy = endSnap.y - drawingWallStart.y;
      const lenFt = (Math.sqrt(dx * dx + dy * dy) / 10).toFixed(1);

      ctx.save();
      ctx.fillStyle = '#22c55e';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText(`${lenFt} ft`, (drawingWallStart.x + endSnap.x) / 2, (drawingWallStart.y + endSnap.y) / 2 - 12);
      ctx.restore();
    }

    ctx.restore();
  }, [project, zoom, pan, drawingWallStart, currentMousePos, selectedItemId, activeTool]);

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const worldPos = screenToWorld(e.clientX, e.clientY);

    // Pan with Middle Click or Alt/Space
    if (e.button === 1 || e.altKey) {
      setIsPanning(true);
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      return;
    }

    if (activeTool === 'wall') {
      const snapped = { x: snap(worldPos.x), y: snap(worldPos.y) };
      if (!drawingWallStart) {
        setDrawingWallStart(snapped);
      } else {
        // Complete Wall
        const newWall: Wall = {
          id: `w_${Date.now()}`,
          start: drawingWallStart,
          end: snapped,
          thickness: 10,
          height: 9,
          color: '#e2e8f0'
        };
        onUpdateProject(prev => ({
          ...prev,
          walls: [...prev.walls, newWall]
        }));
        setDrawingWallStart(null);
      }
    } else if (activeTool === 'furniture' && selectedFurnitureType) {
      // Stamp Furniture
      const newItem: FurnitureItem = {
        id: `f_${Date.now()}`,
        type: selectedFurnitureType,
        name: selectedFurnitureType.toUpperCase(),
        category: 'living',
        x: snap(worldPos.x),
        y: snap(worldPos.y),
        rotation: 0,
        width: 60,
        depth: 40,
        height: 30,
        color: '#38bdf8'
      };
      onUpdateProject(prev => ({
        ...prev,
        furniture: [...prev.furniture, newItem]
      }));
    } else if (activeTool === 'select') {
      // Hit testing for furniture
      const clickedItem = [...project.furniture].reverse().find(item => {
        const dx = Math.abs(worldPos.x - item.x);
        const dy = Math.abs(worldPos.y - item.y);
        return dx <= item.width / 2 + 5 && dy <= item.depth / 2 + 5;
      });

      if (clickedItem) {
        setSelectedItemId(clickedItem.id);
        setIsDraggingItem(true);
        setDragOffset({ x: worldPos.x - clickedItem.x, y: worldPos.y - clickedItem.y });
      } else {
        setSelectedItemId(null);
        // Start pan if clicking on empty space
        setIsPanning(true);
        setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      }
    } else if (activeTool === 'delete') {
      // Delete furniture or wall
      const hitFurniture = project.furniture.find(f => Math.hypot(f.x - worldPos.x, f.y - worldPos.y) < 30);
      if (hitFurniture) {
        onUpdateProject(prev => ({
          ...prev,
          furniture: prev.furniture.filter(f => f.id !== hitFurniture.id)
        }));
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const worldPos = screenToWorld(e.clientX, e.clientY);
    setCurrentMousePos(worldPos);

    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
    } else if (isDraggingItem && selectedItemId) {
      const snappedX = snap(worldPos.x - dragOffset.x);
      const snappedY = snap(worldPos.y - dragOffset.y);
      onUpdateProject(prev => ({
        ...prev,
        furniture: prev.furniture.map(f => f.id === selectedItemId ? { ...f, x: snappedX, y: snappedY } : f)
      }));
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setIsDraggingItem(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setZoom(prev => Math.min(Math.max(prev * zoomFactor, 0.3), 3.0));
  };

  // Keyboard Shortcuts: 'R' to rotate, 'Delete' to delete
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItemId) return;
      if (e.key === 'r' || e.key === 'R') {
        onUpdateProject(prev => ({
          ...prev,
          furniture: prev.furniture.map(f => f.id === selectedItemId ? { ...f, rotation: (f.rotation + 45) % 360 } : f)
        }));
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        onUpdateProject(prev => ({
          ...prev,
          furniture: prev.furniture.filter(f => f.id !== selectedItemId),
          walls: prev.walls.filter(w => w.id !== selectedItemId)
        }));
        setSelectedItemId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemId]);

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-crosshair"
      />

      {/* Floating Instructions & Status */}
      <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/60 shadow-xl flex items-center gap-3 text-xs">
        <span className="flex items-center gap-1.5 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Tool: <strong className="text-white capitalize">{activeTool}</strong>
        </span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400">Zoom: {Math.round(zoom * 100)}%</span>
        {selectedItemId && (
          <>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 flex items-center gap-1 font-medium">
              Press <kbd className="bg-slate-800 px-1 py-0.5 rounded text-white border border-slate-700">R</kbd> Rotate
              <kbd className="bg-slate-800 px-1 py-0.5 rounded text-white border border-slate-700 ml-1">Del</kbd> Remove
            </span>
          </>
        )}
      </div>
    </div>
  );
};
