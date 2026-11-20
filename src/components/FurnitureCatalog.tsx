import React from 'react';
import { Armchair, Bed, Bath, Utensils, X } from 'lucide-react';
import { FurnitureCategory } from '../types';

interface FurnitureCatalogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFurniture: (type: string) => void;
}

interface CatalogEntry {
  type: string;
  name: string;
  category: FurnitureCategory;
  dimensions: string;
  desc: string;
}

const CATALOG: CatalogEntry[] = [
  // Living
  { type: 'sofa', name: 'L-Shape Sectional Sofa', category: 'living', dimensions: '9ft x 4.5ft', desc: 'Plush modern corner sofa with chaise lounge' },
  { type: 'tv_unit', name: 'Floating TV & Media Console', category: 'living', dimensions: '8ft x 1.8ft', desc: 'Minimalist low-profile media cabinet' },
  { type: 'plant', name: 'Potted Indoor Tree', category: 'living', dimensions: '2.5ft x 2.5ft', desc: 'Air-purifying tropical architectural foliage' },

  // Bedroom
  { type: 'double_bed', name: 'King Platform Bed', category: 'bedroom', dimensions: '6.6ft x 7ft', desc: 'Upholstered headboard with floating frame' },
  { type: 'wardrobe', name: 'Sliding Mirror Wardrobe', category: 'bedroom', dimensions: '7ft x 2ft', desc: 'Full-height modular wardrobe system' },

  // Dining & Kitchen
  { type: 'dining_table', name: '6-Seater Dining Set', category: 'dining', dimensions: '6.5ft x 3.5ft', desc: 'Solid wood table with matching chairs' },
  { type: 'kitchen_counter', name: 'Chef Island & Cooktop', category: 'kitchen', dimensions: '12ft x 2.5ft', desc: 'Quartz countertop with integrated sink' },

  // Bathroom
  { type: 'bathtub', name: 'Freestanding Soaking Tub', category: 'bathroom', dimensions: '5.5ft x 3ft', desc: 'Deep acrylic tub with chrome floor faucet' },
  { type: 'toilet', name: 'Wall-Hung Smart Toilet', category: 'bathroom', dimensions: '1.8ft x 2.5ft', desc: 'Concealed tank with rimless bowl' }
];

export const FurnitureCatalog: React.FC<FurnitureCatalogProps> = ({ isOpen, onClose, onSelectFurniture }) => {
  const [selectedCat, setSelectedCat] = React.useState<FurnitureCategory | 'all'>('all');

  if (!isOpen) return null;

  const filtered = selectedCat === 'all' ? CATALOG : CATALOG.filter(i => i.category === selectedCat);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Armchair className="w-5 h-5 text-sky-400" />
              Architectural Furniture Catalog
            </h3>
            <p className="text-xs text-slate-400">Select an item to place onto your 2D floor plan</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-slate-900/60 overflow-x-auto">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'living', label: 'Living', icon: Armchair },
            { id: 'bedroom', label: 'Bedroom', icon: Bed },
            { id: 'dining', label: 'Dining', icon: Utensils },
            { id: 'kitchen', label: 'Kitchen', icon: Utensils },
            { id: 'bathroom', label: 'Bath', icon: Bath },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
                selectedCat === cat.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map(item => (
            <div
              key={item.type}
              onClick={() => {
                onSelectFurniture(item.type);
                onClose();
              }}
              className="group p-4 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 hover:border-sky-500/60 cursor-pointer transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm text-slate-200 group-hover:text-sky-300 transition">{item.name}</h4>
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400 font-mono">{item.dimensions}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-sky-400 font-medium">
                <span>Click to stamp</span>
                <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
