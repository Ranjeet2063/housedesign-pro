# 🏛️ Architect3D Pro Studio

> A high-performance, browser-based 2D architectural floor plan designer & hardware-accelerated 3D space walkthrough engine. 100% Free & Open Source.

![Architect3D Pro Studio Preview](https://raw.githubusercontent.com/Ranjeet2063/housedesign-pro/master/public/preview.png)

## ⚡ Highlights & Superior Capabilities

- **📐 Precise 2D Floor Plan CAD Engine**:
  - Interactive Snap-to-Grid wall drafting with real-time length metrics in feet and meters.
  - Automatic polygonal room area calculation (Sq. Ft & m²).
  - Architectural wall cutouts for doors (with swing arcs) and double-glazed windows.
  - Full drag-and-drop architectural furniture library (Sofa, Beds, Dining, Kitchen, Bath).
  - Keyboard shortcuts (<kbd>R</kbd> to rotate 45°/90°, <kbd>Del</kbd> to erase).

- **🎮 Hardware-Accelerated 3D Walkthrough (Three.js WebGL)**:
  - 1-Click instant extrusion of 2D plans into 3D solid structures.
  - Procedural realistic floor materials (Hardwood Oak, Carrara Marble, Ceramic Tile).
  - Procedural 3D furniture meshes with realistic cushions, frames, and foliage.
  - Multi-lighting modes: **Daylight**, **Golden Sunset**, and **Night Ambience** with soft shadow mapping (`PCFSoftShadowMap`).
  - Full 360° OrbitControls (Rotate, Pan, Zoom).

- **🚀 100% Free Zero-Cost Hosting**:
  - Deploys instantly to **Cloudflare Pages** (`*.pages.dev`) and **GitHub Pages** with zero domain cost, zero server fees, and unlimited CDN bandwidth.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **3D Graphics Engine**: Three.js (WebGL)
- **Icons**: Lucide React
- **Package Manager / Runtime**: Bun / Node.js

## 📦 Local Development

```bash
# Clone the repository
git clone https://github.com/Ranjeet2063/housedesign-pro.git
cd housedesign-pro

# Install dependencies
bun install   # or npm install

# Start local development server
bun run dev   # or npm run dev
```

## 🌐 Deploy to Cloudflare Pages in 1-Click

1. Open [Cloudflare Pages](https://pages.cloudflare.com).
2. Connect your GitHub account and select this repository `Ranjeet2063/housedesign-pro`.
3. Set build command: `bun run build` (or `npm run build`), Output directory: `dist`.
4. Click **Deploy**! Live at `https://your-custom-name.pages.dev` for $0 forever.

---
Built with ❤️ by [Ranjeet](https://github.com/Ranjeet2063).
