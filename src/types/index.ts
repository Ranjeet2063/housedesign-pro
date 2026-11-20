export type ToolMode = 'select' | 'wall' | 'room' | 'door' | 'window' | 'furniture' | 'delete' | 'measure';
export type ViewMode = '2d' | '3d';
export type UnitType = 'ft' | 'm';
export type FloorMaterial = 'hardwood' | 'marble' | 'tile' | 'concrete' | 'carpet';
export type TimeOfDay = 'day' | 'warm' | 'night';

export interface Point {
  x: number;
  y: number;
}

export interface Wall {
  id: string;
  start: Point;
  end: Point;
  thickness: number; // in feet or meters
  height: number;
  color?: string;
}

export interface Room {
  id: string;
  name: string;
  points: Point[];
  floorMaterial: FloorMaterial;
  color: string;
  areaSqFt?: number;
}

export interface WallOpening {
  id: string;
  wallId: string;
  position: number; // 0.0 to 1.0 along the wall
  width: number;
  type: 'door' | 'window';
  swingDirection?: 'left' | 'right';
}

export type FurnitureCategory = 'living' | 'bedroom' | 'kitchen' | 'dining' | 'bathroom' | 'office' | 'outdoor';

export interface FurnitureItem {
  id: string;
  type: string;
  name: string;
  category: FurnitureCategory;
  x: number;
  y: number;
  rotation: number; // in degrees
  width: number;
  depth: number;
  height: number;
  color: string;
}

export interface HouseProject {
  id: string;
  name: string;
  walls: Wall[];
  rooms: Room[];
  openings: WallOpening[];
  furniture: FurnitureItem[];
  unit: UnitType;
  gridSize: number;
}
