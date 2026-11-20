import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { HouseProject, TimeOfDay } from '../types';

interface Viewport3DProps {
  project: HouseProject;
  timeOfDay: TimeOfDay;
}

export const Viewport3D: React.FC<Viewport3DProps> = ({ project, timeOfDay }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Background color based on time of day
    const bgColors = {
      day: 0x0f172a,   // Slate 900
      warm: 0x1c1917,  // Stone 900
      night: 0x020617  // Slate 950
    };
    scene.background = new THREE.Color(bgColors[timeOfDay]);
    scene.fog = new THREE.FogExp2(bgColors[timeOfDay], 0.0015);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
    // Center camera on project bounds
    camera.position.set(400, 500, 650);
    camera.lookAt(400, 0, 300);
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting based on time of day
    const hemiLight = new THREE.HemisphereLight(
      timeOfDay === 'warm' ? 0xffeedd : 0xffffff,
      timeOfDay === 'night' ? 0x050510 : 0x334155,
      timeOfDay === 'night' ? 0.3 : 0.7
    );
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(
      timeOfDay === 'warm' ? 0xff9944 : (timeOfDay === 'night' ? 0x8899bb : 0xffffff),
      timeOfDay === 'night' ? 0.4 : 1.2
    );
    dirLight.position.set(300, 600, 400);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 100;
    dirLight.shadow.camera.far = 1500;
    const d = 500;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Warm interior ambient lights if night or warm
    if (timeOfDay === 'night' || timeOfDay === 'warm') {
      const interiorLight = new THREE.PointLight(0xffaa44, 1.2, 500);
      interiorLight.position.set(400, 100, 300);
      scene.add(interiorLight);
    }

    // 5. Ground Plane (Surrounding Grass/Garden)
    const groundGeo = new THREE.PlaneGeometry(3000, 3000);
    const groundMat = new THREE.MeshStandardMaterial({
      color: timeOfDay === 'night' ? 0x061a10 : (timeOfDay === 'warm' ? 0x143820 : 0x1e3a24),
      roughness: 0.9,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    scene.add(ground);

    // Helper textures generator
    const createFloorCanvas = (type: string) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d')!;
      if (type === 'hardwood') {
        ctx.fillStyle = '#b45309';
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = '#92400e';
        for (let y = 0; y < 256; y += 32) {
          ctx.fillRect(0, y, 256, 2);
          for (let x = (y % 64 === 0 ? 0 : 64); x < 256; x += 128) {
            ctx.fillRect(x, y, 2, 32);
          }
        }
      } else if (type === 'marble') {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, 256, 256);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 3;
        ctx.strokeRect(4, 4, 248, 248);
      } else {
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(0, 0, 256, 256);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.strokeRect(2, 2, 252, 252);
      }
      return new THREE.CanvasTexture(c);
    };

    // 6. Build Rooms & Floors
    project.rooms.forEach(room => {
      if (room.points.length < 3) return;
      const shape = new THREE.Shape();
      shape.moveTo(room.points[0].x, room.points[0].y);
      for (let i = 1; i < room.points.length; i++) {
        shape.lineTo(room.points[i].x, room.points[i].y);
      }
      shape.closePath();

      const floorGeo = new THREE.ShapeGeometry(shape);
      const tex = createFloorCanvas(room.floorMaterial);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(0.02, 0.02);

      const floorMat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: room.floorMaterial === 'marble' ? 0.2 : 0.6,
        metalness: room.floorMaterial === 'marble' ? 0.3 : 0.05
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      floorMesh.rotation.x = Math.PI / 2;
      floorMesh.scale.set(1, -1, 1);
      floorMesh.position.y = 0.2;
      floorMesh.receiveShadow = true;
      scene.add(floorMesh);
    });

    // 7. Build Walls (3D Extrusion)
    const wallHeight = 80; // ~9-10 ft scaled
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.8,
      metalness: 0.1
    });

    project.walls.forEach(wall => {
      const dx = wall.end.x - wall.start.x;
      const dy = wall.end.y - wall.start.y;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      const wallGeo = new THREE.BoxGeometry(length, wallHeight, wall.thickness);
      const wallMesh = new THREE.Mesh(wallGeo, wallMat);

      // Center position
      const midX = (wall.start.x + wall.end.x) / 2;
      const midZ = (wall.start.y + wall.end.y) / 2;

      wallMesh.position.set(midX, wallHeight / 2, midZ);
      wallMesh.rotation.y = -angle;
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      scene.add(wallMesh);

      // Top Trim / Molding
      const trimGeo = new THREE.BoxGeometry(length + 2, 4, wall.thickness + 2);
      const trimMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
      const trimMesh = new THREE.Mesh(trimGeo, trimMat);
      trimMesh.position.set(midX, wallHeight + 2, midZ);
      trimMesh.rotation.y = -angle;
      scene.add(trimMesh);
    });

    // 8. Build 3D Furniture Procedural Models
    project.furniture.forEach(item => {
      const group = new THREE.Group();
      const color = new THREE.Color(item.color);

      if (item.type === 'sofa') {
        // Base / Cushion
        const baseMat = new THREE.MeshStandardMaterial({ color, roughness: 0.8 });
        const base = new THREE.Mesh(new THREE.BoxGeometry(item.width, 16, item.depth), baseMat);
        base.position.y = 8;
        base.castShadow = true;
        group.add(base);

        // Backrest
        const back = new THREE.Mesh(new THREE.BoxGeometry(item.width, 24, 10), baseMat);
        back.position.set(0, 20, -item.depth / 2 + 5);
        back.castShadow = true;
        group.add(back);

        // Armrests
        const armL = new THREE.Mesh(new THREE.BoxGeometry(8, 20, item.depth), baseMat);
        armL.position.set(-item.width / 2 + 4, 18, 0);
        group.add(armL);
        const armR = armL.clone();
        armR.position.x = item.width / 2 - 4;
        group.add(armR);

      } else if (item.type === 'double_bed') {
        // Frame
        const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });
        const frame = new THREE.Mesh(new THREE.BoxGeometry(item.width, 12, item.depth), frameMat);
        frame.position.y = 6;
        frame.castShadow = true;
        group.add(frame);

        // Mattress & Duvet
        const matMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 });
        const mattress = new THREE.Mesh(new THREE.BoxGeometry(item.width - 6, 12, item.depth - 8), matMat);
        mattress.position.y = 16;
        mattress.castShadow = true;
        group.add(mattress);

        // Pillows
        const pillowMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0 });
        const pillow1 = new THREE.Mesh(new THREE.BoxGeometry(item.width * 0.4, 6, 14), pillowMat);
        pillow1.position.set(-item.width * 0.22, 23, -item.depth / 2 + 15);
        group.add(pillow1);
        const pillow2 = pillow1.clone();
        pillow2.position.x = item.width * 0.22;
        group.add(pillow2);

        // Headboard
        const hbMat = new THREE.MeshStandardMaterial({ color, roughness: 0.6 });
        const headboard = new THREE.Mesh(new THREE.BoxGeometry(item.width, 36, 6), hbMat);
        headboard.position.set(0, 22, -item.depth / 2 + 3);
        headboard.castShadow = true;
        group.add(headboard);

      } else if (item.type === 'dining_table') {
        // Tabletop
        const tableMat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.2 });
        const top = new THREE.Mesh(new THREE.BoxGeometry(item.width, 5, item.depth), tableMat);
        top.position.y = 28;
        top.castShadow = true;
        group.add(top);

        // 4 Legs
        const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
        const legGeo = new THREE.CylinderGeometry(2, 2, 28);
        const lx = item.width / 2 - 6;
        const lz = item.depth / 2 - 6;
        [[-lx, -lz], [lx, -lz], [-lx, lz], [lx, lz]].forEach(([x, z]) => {
          const leg = new THREE.Mesh(legGeo, legMat);
          leg.position.set(x, 14, z);
          leg.castShadow = true;
          group.add(leg);
        });

      } else if (item.type === 'bathtub') {
        // Luxury Freestanding Tub
        const tubMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.1 });
        const tub = new THREE.Mesh(new THREE.BoxGeometry(item.width, 22, item.depth), tubMat);
        tub.position.y = 11;
        tub.castShadow = true;
        group.add(tub);

        // Water surface
        const waterMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.05, opacity: 0.8, transparent: true });
        const water = new THREE.Mesh(new THREE.BoxGeometry(item.width - 6, 2, item.depth - 6), waterMat);
        water.position.y = 19;
        group.add(water);

      } else if (item.type === 'plant') {
        // Pot
        const potMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7 });
        const pot = new THREE.Mesh(new THREE.CylinderGeometry(8, 6, 16), potMat);
        pot.position.y = 8;
        pot.castShadow = true;
        group.add(pot);

        // Foliage
        const leafMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.5 });
        const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(14, 1), leafMat);
        foliage.position.y = 26;
        foliage.castShadow = true;
        group.add(foliage);

      } else {
        // Generic modern cabinet / furniture block
        const meshMat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });
        const block = new THREE.Mesh(new THREE.BoxGeometry(item.width, item.height || 30, item.depth), meshMat);
        block.position.y = (item.height || 30) / 2;
        block.castShadow = true;
        group.add(block);
      }

      group.position.set(item.x, 0, item.y);
      group.rotation.y = (item.rotation * Math.PI) / 180;
      scene.add(group);
    });

    // 9. Interactive Orbit Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let spherical = { radius: 850, theta: Math.PI / 4, phi: Math.PI / 3 };
    const centerTarget = new THREE.Vector3(400, 30, 300);

    const updateCamera = () => {
      camera.position.x = centerTarget.x + spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
      camera.position.y = centerTarget.y + spherical.radius * Math.cos(spherical.phi);
      camera.position.z = centerTarget.z + spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      camera.lookAt(centerTarget);
    };
    updateCamera();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      if (e.buttons === 1) { // Left click: Orbit
        spherical.theta -= dx * 0.006;
        spherical.phi = Math.max(0.1, Math.min(Math.PI / 2.1, spherical.phi - dy * 0.006));
      } else if (e.buttons === 2) { // Right click: Pan
        centerTarget.x -= dx * 0.5;
        centerTarget.z -= dy * 0.5;
      }
      updateCamera();
    };

    const onMouseUp = () => { isDragging = false; };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      spherical.radius = Math.max(150, Math.min(1800, spherical.radius + e.deltaY * 0.7));
      updateCamera();
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());

    // 10. Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (containerRef.current && dom.parentNode === containerRef.current) {
        containerRef.current.removeChild(dom);
      }
    };
  }, [project, timeOfDay]);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-950">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* 3D Floating Camera Hint */}
      <div className="absolute bottom-5 left-5 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-center gap-3 shadow-xl pointer-events-none">
        <span className="flex items-center gap-1.5"><kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-200">Left Click</kbd> Rotate</span>
        <span className="text-slate-600">•</span>
        <span className="flex items-center gap-1.5"><kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-200">Right Click</kbd> Pan</span>
        <span className="text-slate-600">•</span>
        <span className="flex items-center gap-1.5"><kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-200">Scroll</kbd> Zoom</span>
      </div>
    </div>
  );
};
