import { HouseProject } from '../types';

export const SAMPLE_VILLA: HouseProject = {
  id: 'modern-luxury-villa',
  name: 'Modern Luxury Villa 3BHK',
  unit: 'ft',
  gridSize: 20, // 20 pixels = 2 ft
  walls: [
    // Outer perimeter (60ft x 40ft) -> (600px x 400px)
    { id: 'w1', start: { x: 100, y: 100 }, end: { x: 700, y: 100 }, thickness: 10, height: 9 },
    { id: 'w2', start: { x: 700, y: 100 }, end: { x: 700, y: 500 }, thickness: 10, height: 9 },
    { id: 'w3', start: { x: 700, y: 500 }, end: { x: 100, y: 500 }, thickness: 10, height: 9 },
    { id: 'w4', start: { x: 100, y: 500 }, end: { x: 100, y: 100 }, thickness: 10, height: 9 },

    // Living / Master Bed vertical dividing wall
    { id: 'w5', start: { x: 400, y: 100 }, end: { x: 400, y: 500 }, thickness: 8, height: 9 },

    // Master Bed / Kitchen horizontal dividing wall
    { id: 'w6', start: { x: 400, y: 300 }, end: { x: 700, y: 300 }, thickness: 8, height: 9 },

    // Living / Bedroom 2 horizontal wall
    { id: 'w7', start: { x: 100, y: 320 }, end: { x: 400, y: 320 }, thickness: 8, height: 9 },

    // Bathroom wall inside master bed
    { id: 'w8', start: { x: 580, y: 100 }, end: { x: 580, y: 220 }, thickness: 6, height: 9 },
    { id: 'w9', start: { x: 580, y: 220 }, end: { x: 700, y: 220 }, thickness: 6, height: 9 }
  ],
  rooms: [
    {
      id: 'r1',
      name: 'Grand Living & Lounge',
      points: [{ x: 100, y: 100 }, { x: 400, y: 100 }, { x: 400, y: 320 }, { x: 100, y: 320 }],
      floorMaterial: 'marble',
      color: 'rgba(238, 242, 255, 0.4)',
      areaSqFt: 660
    },
    {
      id: 'r2',
      name: 'Guest Bedroom',
      points: [{ x: 100, y: 320 }, { x: 400, y: 320 }, { x: 400, y: 500 }, { x: 100, y: 500 }],
      floorMaterial: 'hardwood',
      color: 'rgba(254, 243, 199, 0.4)',
      areaSqFt: 540
    },
    {
      id: 'r3',
      name: 'Master Suite',
      points: [{ x: 400, y: 100 }, { x: 580, y: 100 }, { x: 580, y: 220 }, { x: 700, y: 220 }, { x: 700, y: 300 }, { x: 400, y: 300 }],
      floorMaterial: 'hardwood',
      color: 'rgba(240, 253, 244, 0.4)',
      areaSqFt: 580
    },
    {
      id: 'r4',
      name: 'Ensuite Bathroom',
      points: [{ x: 580, y: 100 }, { x: 700, y: 100 }, { x: 700, y: 220 }, { x: 580, y: 220 }],
      floorMaterial: 'tile',
      color: 'rgba(224, 242, 254, 0.4)',
      areaSqFt: 144
    },
    {
      id: 'r5',
      name: 'Modular Kitchen & Dining',
      points: [{ x: 400, y: 300 }, { x: 700, y: 300 }, { x: 700, y: 500 }, { x: 400, y: 500 }],
      floorMaterial: 'tile',
      color: 'rgba(255, 237, 213, 0.4)',
      areaSqFt: 600
    }
  ],
  openings: [
    // Main entrance door on bottom of living room
    { id: 'd1', wallId: 'w3', position: 0.35, width: 36, type: 'door', swingDirection: 'right' },
    // Master bed door
    { id: 'd2', wallId: 'w6', position: 0.25, width: 32, type: 'door', swingDirection: 'left' },
    // Bedroom 2 door
    { id: 'd3', wallId: 'w7', position: 0.75, width: 32, type: 'door', swingDirection: 'right' },
    // Bathroom door
    { id: 'd4', wallId: 'w8', position: 0.6, width: 28, type: 'door', swingDirection: 'left' },

    // Windows
    { id: 'wn1', wallId: 'w1', position: 0.25, width: 50, type: 'window' },
    { id: 'wn2', wallId: 'w1', position: 0.75, width: 50, type: 'window' },
    { id: 'wn3', wallId: 'w2', position: 0.7, width: 60, type: 'window' },
    { id: 'wn4', wallId: 'w4', position: 0.4, width: 50, type: 'window' },
    { id: 'wn5', wallId: 'w4', position: 0.8, width: 45, type: 'window' }
  ],
  furniture: [
    // Living Room Furniture
    { id: 'f1', type: 'sofa', name: 'L-Shape Luxury Sofa', category: 'living', x: 220, y: 170, rotation: 0, width: 90, depth: 45, height: 30, color: '#475569' },
    { id: 'f2', type: 'tv_unit', name: 'Media Console & 75" TV', category: 'living', x: 220, y: 115, rotation: 0, width: 80, depth: 18, height: 40, color: '#1e293b' },
    { id: 'f3', type: 'plant', name: 'Fiddle Leaf Fig Plant', category: 'living', x: 125, y: 125, rotation: 0, width: 25, depth: 25, height: 45, color: '#16a34a' },

    // Guest Bedroom Furniture
    { id: 'f4', type: 'double_bed', name: 'Queen Size Bed', category: 'bedroom', x: 200, y: 410, rotation: 0, width: 70, depth: 80, height: 35, color: '#64748b' },
    { id: 'f5', type: 'wardrobe', name: 'Built-in Sliding Wardrobe', category: 'bedroom', x: 375, y: 410, rotation: 90, width: 70, depth: 24, height: 75, color: '#334155' },

    // Master Bedroom Furniture
    { id: 'f6', type: 'double_bed', name: 'King Platform Bed', category: 'bedroom', x: 490, y: 220, rotation: 0, width: 80, depth: 85, height: 40, color: '#0284c7' },
    { id: 'f7', type: 'plant', name: 'Indoor Palm', category: 'bedroom', x: 425, y: 125, rotation: 0, width: 25, depth: 25, height: 50, color: '#15803d' },

    // Ensuite Bathroom
    { id: 'f8', type: 'bathtub', name: 'Freestanding Soaking Tub', category: 'bathroom', x: 640, y: 140, rotation: 0, width: 60, depth: 32, height: 26, color: '#f8fafc' },
    { id: 'f9', type: 'toilet', name: 'Modern Wall-Hung Commode', category: 'bathroom', x: 605, y: 195, rotation: 180, width: 20, depth: 28, height: 28, color: '#f1f5f9' },

    // Kitchen & Dining
    { id: 'f10', type: 'dining_table', name: '6-Seater Marble Dining Set', category: 'dining', x: 500, y: 400, rotation: 0, width: 75, depth: 50, height: 30, color: '#78716c' },
    { id: 'f11', type: 'kitchen_counter', name: 'Granite Countertop & Sink', category: 'kitchen', x: 675, y: 400, rotation: 90, width: 140, depth: 28, height: 36, color: '#0f172a' }
  ]
};

export const SAMPLE_STUDIO: HouseProject = {
  id: 'modern-studio-apartment',
  name: 'Minimalist Studio Loft',
  unit: 'ft',
  gridSize: 20,
  walls: [
    { id: 'sw1', start: { x: 150, y: 120 }, end: { x: 650, y: 120 }, thickness: 10, height: 9 },
    { id: 'sw2', start: { x: 650, y: 120 }, end: { x: 650, y: 480 }, thickness: 10, height: 9 },
    { id: 'sw3', start: { x: 650, y: 480 }, end: { x: 150, y: 480 }, thickness: 10, height: 9 },
    { id: 'sw4', start: { x: 150, y: 480 }, end: { x: 150, y: 120 }, thickness: 10, height: 9 },
    // Bath partition
    { id: 'sw5', start: { x: 150, y: 260 }, end: { x: 300, y: 260 }, thickness: 6, height: 9 },
    { id: 'sw6', start: { x: 300, y: 260 }, end: { x: 300, y: 120 }, thickness: 6, height: 9 }
  ],
  rooms: [
    {
      id: 'sr1',
      name: 'Open Studio Space',
      points: [{ x: 300, y: 120 }, { x: 650, y: 120 }, { x: 650, y: 480 }, { x: 150, y: 480 }, { x: 150, y: 260 }, { x: 300, y: 260 }],
      floorMaterial: 'hardwood',
      color: 'rgba(254, 243, 199, 0.4)',
      areaSqFt: 620
    },
    {
      id: 'sr2',
      name: 'Bath & Powder Room',
      points: [{ x: 150, y: 120 }, { x: 300, y: 120 }, { x: 300, y: 260 }, { x: 150, y: 260 }],
      floorMaterial: 'marble',
      color: 'rgba(224, 242, 254, 0.4)',
      areaSqFt: 110
    }
  ],
  openings: [
    { id: 'sd1', wallId: 'sw3', position: 0.5, width: 36, type: 'door' },
    { id: 'sd2', wallId: 'sw5', position: 0.6, width: 28, type: 'door' },
    { id: 'swn1', wallId: 'sw1', position: 0.7, width: 60, type: 'window' }
  ],
  furniture: [
    { id: 'sf1', type: 'double_bed', name: 'Queen Storage Bed', category: 'bedroom', x: 550, y: 200, rotation: 0, width: 70, depth: 80, height: 35, color: '#475569' },
    { id: 'sf2', type: 'sofa', name: '3-Seater Velvet Sofa', category: 'living', x: 420, y: 350, rotation: 0, width: 75, depth: 36, height: 30, color: '#059669' },
    { id: 'sf3', type: 'bathtub', name: 'Compact Shower / Tub', category: 'bathroom', x: 220, y: 160, rotation: 0, width: 50, depth: 28, height: 26, color: '#f8fafc' }
  ]
};
