import React, { useState } from 'react';
import { Toolbar } from './components/Toolbar';
import { Canvas2D } from './components/Canvas2D';
import { Viewport3D } from './components/Viewport3D';
import { FurnitureCatalog } from './components/FurnitureCatalog';
import { HouseProject, ToolMode, ViewMode, TimeOfDay } from './types';
import { SAMPLE_VILLA } from './utils/presets';

export const App: React.FC = () => {
  const [project, setProject] = useState<HouseProject>(SAMPLE_VILLA);
  const [viewMode, setViewMode] = useState<ViewMode>('2d');
  const [activeTool, setActiveTool] = useState<ToolMode>('select');
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedFurnitureType, setSelectedFurnitureType] = useState<string | null>('sofa');

  // Export current canvas or 3D view to high-res PNG
  const handleExportPNG = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name.toLowerCase().replace(/\s+/g, '-')}-${viewMode}-plan.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-slate-950 font-sans">
      {/* Top Professional Toolbar */}
      <Toolbar
        viewMode={viewMode}
        onSetViewMode={setViewMode}
        activeTool={activeTool}
        onSetTool={setActiveTool}
        timeOfDay={timeOfDay}
        onSetTimeOfDay={setTimeOfDay}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        project={project}
        onLoadProject={setProject}
        onExportPNG={handleExportPNG}
      />

      {/* Main Studio Viewport (2D or 3D) */}
      <main className="flex-1 relative overflow-hidden">
        {viewMode === '2d' ? (
          <Canvas2D
            project={project}
            onUpdateProject={setProject}
            activeTool={activeTool}
            selectedFurnitureType={selectedFurnitureType}
          />
        ) : (
          <Viewport3D project={project} timeOfDay={timeOfDay} />
        )}
      </main>

      {/* Furniture Drawer / Modal */}
      <FurnitureCatalog
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectFurniture={(type) => {
          setSelectedFurnitureType(type);
          setActiveTool('furniture');
        }}
      />
    </div>
  );
};

export default App;
