import React from 'react';
import { 
  Square, 
  MousePointer, 
  Armchair, 
  Trash2, 
  Box, 
  Compass, 
  Sun, 
  Sunset, 
  Moon, 
  FolderOpen, 
  Download, 
  RotateCcw
} from 'lucide-react';
import { ToolMode, ViewMode, TimeOfDay, HouseProject } from '../types';
import { SAMPLE_VILLA, SAMPLE_STUDIO } from '../utils/presets';

interface ToolbarProps {
  viewMode: ViewMode;
  onSetViewMode: (mode: ViewMode) => void;
  activeTool: ToolMode;
  onSetTool: (tool: ToolMode) => void;
  timeOfDay: TimeOfDay;
  onSetTimeOfDay: (time: TimeOfDay) => void;
  onOpenCatalog: () => void;
  project: HouseProject;
  onLoadProject: (proj: HouseProject) => void;
  onExportPNG: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  viewMode,
  onSetViewMode,
  activeTool,
  onSetTool,
  timeOfDay,
  onSetTimeOfDay,
  onOpenCatalog,
  project,
  onLoadProject,
  onExportPNG
}) => {
  const totalAreaSqFt = project.rooms.reduce((acc, r) => acc + (r.areaSqFt || 400), 0);

  return (
    <header className="h-16 px-6 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md flex items-center justify-between select-none z-30">
      {/* Brand & Stats */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/25">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
              Architect3D <span className="bg-sky-500/20 text-sky-400 text-[10px] px-2 py-0.5 rounded-full font-mono border border-sky-500/30">PRO</span>
            </h1>
            <p className="text-[11px] text-slate-400">Next-Gen Floor Plan & 3D Space Studio</p>
          </div>
        </div>

        {/* Live Architectural Metrics */}
        <div className="hidden lg:flex items-center gap-4 pl-6 border-l border-slate-800 text-xs">
          <div className="flex flex-col">
            <span className="text-slate-400 text-[10px] uppercase font-semibold">Total Area</span>
            <span className="font-mono font-bold text-sky-400">{totalAreaSqFt.toLocaleString()} sq.ft</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400 text-[10px] uppercase font-semibold">Rooms</span>
            <span className="font-mono text-slate-200">{project.rooms.length} Built</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400 text-[10px] uppercase font-semibold">Walls</span>
            <span className="font-mono text-slate-200">{project.walls.length} Segments</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400 text-[10px] uppercase font-semibold">Furniture</span>
            <span className="font-mono text-slate-200">{project.furniture.length} Items</span>
          </div>
        </div>
      </div>

      {/* Center 2D / 3D Mode Switcher */}
      <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
        <button
          onClick={() => onSetViewMode('2d')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            viewMode === '2d'
              ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Square className="w-4 h-4" />
          2D Floor Plan
        </button>
        <button
          onClick={() => onSetViewMode('3d')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            viewMode === '3d'
              ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Box className="w-4 h-4" />
          3D Walkthrough
        </button>
      </div>

      {/* Action Tools */}
      <div className="flex items-center gap-3">
        {/* 2D Tools Group */}
        {viewMode === '2d' ? (
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            <button
              onClick={() => onSetTool('select')}
              title="Select & Move (V)"
              className={`p-2 rounded-lg text-xs transition ${
                activeTool === 'select' ? 'bg-sky-500 text-white shadow' : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <MousePointer className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSetTool('wall')}
              title="Draw Walls (W)"
              className={`p-2 rounded-lg text-xs transition ${
                activeTool === 'wall' ? 'bg-sky-500 text-white shadow' : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <span className="font-bold text-xs px-1">━ Wall</span>
            </button>
            <button
              onClick={() => {
                onSetTool('furniture');
                onOpenCatalog();
              }}
              title="Add Furniture"
              className={`p-2 rounded-lg text-xs transition flex items-center gap-1.5 ${
                activeTool === 'furniture' ? 'bg-sky-500 text-white shadow' : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Armchair className="w-4 h-4" />
              <span>Furniture</span>
            </button>
            <button
              onClick={() => onSetTool('delete')}
              title="Eraser / Delete"
              className={`p-2 rounded-lg text-xs transition ${
                activeTool === 'delete' ? 'bg-rose-500 text-white shadow' : 'text-slate-300 hover:text-rose-400 hover:bg-slate-700'
              }`}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* 3D Lighting Mode Toggle */
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            <button
              onClick={() => onSetTimeOfDay('day')}
              title="Daylight"
              className={`p-2 rounded-lg transition ${timeOfDay === 'day' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSetTimeOfDay('warm')}
              title="Golden Sunset"
              className={`p-2 rounded-lg transition ${timeOfDay === 'warm' ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Sunset className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSetTimeOfDay('night')}
              title="Night Ambience"
              className={`p-2 rounded-lg transition ${timeOfDay === 'night' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Presets Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition">
            <FolderOpen className="w-4 h-4 text-sky-400" />
            <span>Templates</span>
          </button>
          <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-1.5 hidden group-hover:block z-50">
            <button
              onClick={() => onLoadProject(SAMPLE_VILLA)}
              className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              🏰 3BHK Luxury Villa
            </button>
            <button
              onClick={() => onLoadProject(SAMPLE_STUDIO)}
              className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              🏢 Modern Studio Loft
            </button>
            <button
              onClick={() => onLoadProject({ ...SAMPLE_STUDIO, id: `p_${Date.now()}`, name: 'Empty Canvas', walls: [], rooms: [], openings: [], furniture: [] })}
              className="w-full text-left px-3 py-2 rounded-lg text-xs text-rose-400 hover:bg-rose-950/40 transition"
            >
              📄 Blank Canvas
            </button>
          </div>
        </div>

        {/* Snapshot / Export PNG */}
        <button
          onClick={onExportPNG}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20 transition active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Export Plan</span>
        </button>

        {/* Reset */}
        <button
          onClick={() => onLoadProject(SAMPLE_VILLA)}
          title="Reset to Sample Villa"
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
