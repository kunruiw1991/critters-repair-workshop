// Critter Repair Workshop 3D: free-order plush repair clinic for LunaBat (Chuyu), SunnyFox (Mom), PoppyDash (Dad).
// Mechanics adapted (kid-safe) from doll-restoration ASMR videos: pluck debris, scrub/sand grime, airbrush color back,
// pop a new eye in, re-attach a limb, stuff & stitch, polish, then a wind-up heart brings the critter to life.

import { buildSunnyFox } from './characters/SunnyFox.js';
import { buildLunaBat } from './characters/LunaBat.js';
import { buildPoppyDash } from './characters/PoppyDash.js';

const THREE = window.THREE;
const $ = (id) => document.getElementById(id);
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const ease = (t) => 1 - Math.pow(1 - clamp01(t), 3);

/* ============================== Data ============================== */
const CRITTERS = {
  lunabat: {
    name: 'LunaBat', who: 'Chuyu', icon: 'icons/critter_01_lunabat.jpg', build: buildLunaBat, fur: '#3a2278',
    thread: '#c9a8f2', pendantKey: 'moonStarPendant', pendantIcon: '🌙', earSide: 'leftEar',
    hello: 'Oh no! I got all messy flying through the forest. Can you fix me?',
    thanks: 'I feel brand new! Let\u2019s fly to the moon together, Chuyu!'
  },
  sunnyfox: {
    name: 'SunnyFox', who: 'Mom', icon: 'icons/critter_02_sunnyfox.jpg', build: buildSunnyFox, fur: '#e89125',
    thread: '#f07c78', pendantKey: 'lanternPendant', pendantIcon: '🏮', earSide: 'rightEar',
    hello: 'My lantern went dim on the muddy trail\u2026 can you help Mommy?',
    thanks: 'My lantern is glowing again! Thank you for taking care of Mommy, Chuyu!'
  },
  poppydash: {
    name: 'PoppyDash', who: 'Dad', icon: 'icons/critter_03_poppydash.jpg', build: buildPoppyDash, fur: '#34353d',
    thread: '#f2c14e', pendantKey: 'popcornPendant', pendantIcon: '🍿', earSide: 'rightEar',
    hello: 'I ran so fast I tumbled into a puddle! Can you patch up Daddy?',
    thanks: 'Fluffy again! Ready to run and share popcorn. Thanks, Chuyu!'
  }
};

const TOOLS = [
  { id: 'brush', icon: '🧹', name: 'Brush', hold: true },
  { id: 'sponge', icon: '🧽', name: 'Sponge', hold: true },
  { id: 'dryer', icon: '💨', name: 'Dryer', hold: true },
  { id: 'tweezers', icon: '🥢', name: 'Tweezers' },
  { id: 'needle', icon: '🪡', name: 'Needle' },
  { id: 'button', icon: '🔘', name: 'Button eye' },
  { id: 'cotton', icon: '☁️', name: 'Stuffing' },
  { id: 'paint', icon: '🖌️', name: 'Color spray', hold: true },
  { id: 'cloth', icon: '🧤', name: 'Polish', hold: true },
  { id: 'heart', icon: '💝', name: 'Wind-up heart' }
];
const TOOL = Object.fromEntries(TOOLS.map((t) => [t.id, t]));

const DMG = {
  dust:    { icon: '🕸️', tool: 'brush',    label: 'Dusty fluff' },
  mud:     { icon: '🟤', tool: 'sponge',   label: 'Mud splats' },
  wet:     { icon: '💧', tool: 'dryer',    label: 'Wet spots' },
  burr:    { icon: '🌰', tool: 'tweezers', label: 'Sticky burrs' },
  tear:    { icon: '🧵', tool: 'needle',   label: 'Torn seams' },
  ear:     { icon: '👂', tool: 'needle',   label: 'Loose ear' },
  eye:     { icon: '👁️', tool: 'button',   label: 'Lost eye' },
  flat:    { icon: '🎈', tool: 'cotton',   label: 'Flat & floppy' },
  faded:   { icon: '🩶', tool: 'paint',    label: 'Faded colors' },
  pendant: { icon: '💎', tool: 'cloth',    label: 'Dull pendant' }
};
const DMG_ORDER = ['dust', 'mud', 'wet', 'burr', 'tear', 'ear', 'eye', 'flat', 'faded', 'pendant'];

const CHEERS = ['Ahh, much better!', 'Yay! Thank you!', 'That feels so nice!', 'Wheee!', 'You\u2019re the best fixer!', 'Ooh, sparkly!'];
const TICKLES = ['Hee hee, that tickles!', 'Hi Chuyu!', 'Boop!', 'Giggle giggle!'];

/* ============================== Persistence ============================== */
const SAVE_KEY = 'critterRepair3D_v1';
const save = Object.assign({ stars: 0, shelf: [], fixed: {} }, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}'));
const persist = () => localStorage.setItem(SAVE_KEY, JSON.stringify(save));

/* ============================== Renderer & scene ============================== */
const canvas = $('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#3b2f3f');
scene.fog = new THREE.Fog('#3b2f3f', 12, 26);
const camera = new THREE.PerspectiveCamera(38, 1, 0.05, 60);
const CAM = {
  near: { pos: new THREE.Vector3(0, 1.75, 4.1), look: new THREE.Vector3(0, 1.0, 0) },
  far: { pos: new THREE.Vector3(0, 2.4, 6.4), look: new THREE.Vector3(0, 1.25, -0.4) },
  home: { pos: new THREE.Vector3(0.9, 2.2, 5.4), look: new THREE.Vector3(-0.2, 1.3, -0.3) }
};
let camMode = 'home';
const camLook = CAM.home.look.clone();
camera.position.copy(CAM.home.pos);

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = w / h < 1 ? 52 : 38;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();

/* ---------- procedural textures ---------- */
function canvasTex(w, h, draw, repeat = [1, 1], srgb = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 8;
  return t;
}
const woodTex = (base, dark, rep) => canvasTex(1024, 512, (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 140; i++) {
    const y = Math.random() * h, amp = rnd(2, 9), f = rnd(0.004, 0.012), ph = rnd(0, 6);
    g.strokeStyle = `rgba(${dark},${rnd(0.06, 0.2)})`; g.lineWidth = rnd(1, 3.5);
    g.beginPath();
    for (let x = 0; x <= w; x += 8) g.lineTo(x, y + Math.sin(x * f + ph) * amp);
    g.stroke();
  }
  for (let k = 0; k < 6; k++) {
    const x = rnd(0, w), y = rnd(0, h);
    g.strokeStyle = `rgba(${dark},.25)`; g.lineWidth = 2;
    for (let r = 4; r < 26; r += 5) { g.beginPath(); g.ellipse(x, y, r * 2.2, r * .7, 0, 0, 7); g.stroke(); }
  }
  for (let x = 0; x < w; x += 256) { g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(x, 0, 3, h); }
}, rep);
const wallpaperTex = canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#f3e4cc'; g.fillRect(0, 0, w, h);
  for (let x = 0; x < w; x += 64) { g.fillStyle = 'rgba(214,186,150,.35)'; g.fillRect(x, 0, 26, h); }
  g.fillStyle = 'rgba(190,150,110,.45)';
  for (let y = 32; y < h; y += 64) for (let x = 45; x < w; x += 64) {
    g.beginPath(); for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5 - Math.PI / 2, r = i % 2 ? 3 : 8; g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); } g.fill();
  }
}, [7, 4]);
const skyTex = canvasTex(1024, 820, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h);
  gr.addColorStop(0, '#141a45'); gr.addColorStop(.7, '#3d3a7c'); gr.addColorStop(1, '#6b5a9b');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(255,255,240,${rnd(.3, 1)})`; g.beginPath(); g.arc(rnd(0, w), rnd(0, h * .7), rnd(.6, 2.4), 0, 7); g.fill(); }
  g.fillStyle = '#fff4c4'; g.beginPath(); g.arc(780, 170, 70, 0, 7); g.fill();
  g.fillStyle = '#18204d'; g.beginPath(); g.arc(815, 150, 64, 0, 7); g.fill();
  g.fillStyle = '#1b1838'; g.beginPath(); g.moveTo(0, h); for (let x = 0; x <= w; x += 40) g.lineTo(x, h - 110 - Math.sin(x * .006) * 40 - Math.sin(x * .017) * 16); g.lineTo(w, h); g.fill();
  // Golden Gate silhouette for Mom
  g.strokeStyle = '#c4553e'; g.fillStyle = '#c4553e'; g.lineWidth = 6;
  [260, 560].forEach((x) => { g.fillRect(x - 9, h - 360, 18, 260); g.fillRect(x - 22, h - 330, 44, 10); g.fillRect(x - 22, h - 260, 44, 10); });
  g.lineWidth = 4; g.beginPath(); g.moveTo(60, h - 190); g.quadraticCurveTo(260, h - 150, 260, h - 360); g.quadraticCurveTo(410, h - 170, 560, h - 360); g.quadraticCurveTo(560, h - 150, 760, h - 190); g.stroke();
  g.fillRect(40, h - 170, 760, 10);
  g.fillStyle = '#ff6b6b'; [260, 560].forEach((x) => { g.beginPath(); g.arc(x, h - 368, 6, 0, 7); g.fill(); });
});
const matTex = canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#4f9a86'; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(255,255,255,.28)'; g.lineWidth = 1.5;
  for (let i = 0; i <= w; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
  g.strokeStyle = 'rgba(255,240,180,.55)'; g.lineWidth = 3; g.beginPath(); g.arc(w / 2, h / 2, 200, 0, 7); g.stroke();
  g.beginPath(); g.arc(w / 2, h / 2, 120, 0, 7); g.stroke();
});
const yarnTex = (col) => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = col; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 90; i++) { g.strokeStyle = `rgba(255,255,255,${rnd(.08, .25)})`; g.lineWidth = rnd(2, 5); g.beginPath(); const y = rnd(0, h); g.moveTo(0, y); g.bezierCurveTo(w * .3, y + rnd(-40, 40), w * .7, y + rnd(-40, 40), w, y + rnd(-20, 20)); g.stroke(); }
});
const spriteTex = (draw, s = 128) => { const t = canvasTex(s, s, draw); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t; };
const TEX = {
  soft: spriteTex((g, w) => { const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, w); }),
  bubble: spriteTex((g, w) => { g.strokeStyle = 'rgba(170,210,255,.95)'; g.lineWidth = 6; g.fillStyle = 'rgba(225,242,255,.35)'; g.beginPath(); g.arc(w / 2, w / 2, w / 2 - 6, 0, 7); g.fill(); g.stroke(); g.fillStyle = '#fff'; g.beginPath(); g.arc(w * .35, w * .33, w * .09, 0, 7); g.fill(); }),
  star: spriteTex((g, w) => { g.fillStyle = '#ffd766'; g.beginPath(); for (let i = 0; i < 10; i++) { const a = i * Math.PI / 5 - Math.PI / 2, r = i % 2 ? w * .2 : w * .48; g.lineTo(w / 2 + Math.cos(a) * r, w / 2 + Math.sin(a) * r); } g.fill(); }),
  sparkle: spriteTex((g, w) => { g.fillStyle = '#fff6c8'; g.beginPath(); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r = i % 2 ? w * .1 : w * .48; g.lineTo(w / 2 + Math.cos(a) * r, w / 2 + Math.sin(a) * r); } g.fill(); }),
  heart: spriteTex((g, w) => { g.font = `${w * .8}px serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('💗', w / 2, w / 2 + 6); }),
  puff: spriteTex((g, w) => { g.fillStyle = 'rgba(214,206,194,.9)'; [[.5, .5, .3], [.3, .55, .2], [.7, .55, .2], [.5, .32, .2]].forEach(([x, y, r]) => { g.beginPath(); g.arc(x * w, y * w, r * w, 0, 7); g.fill(); }); }),
  cotton: spriteTex((g, w) => { g.fillStyle = '#fffefa'; g.strokeStyle = '#e0d8ca'; g.lineWidth = 3; [[.5, .5, .28], [.28, .58, .2], [.72, .58, .2], [.5, .3, .2]].forEach(([x, y, r]) => { g.beginPath(); g.arc(x * w, y * w, r * w, 0, 7); g.fill(); g.stroke(); }); }),
  spray: spriteTex((g, w) => { const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, w); })
};

/* ---------- room ---------- */
const room = new THREE.Group();
scene.add(room);
const std = (o) => new THREE.MeshStandardMaterial(o);

const wall = new THREE.Mesh(new THREE.PlaneGeometry(18, 10), std({ map: wallpaperTex, roughness: .95 }));
wall.position.set(0, 3, -2.6); wall.receiveShadow = true; room.add(wall);
const wainscot = new THREE.Mesh(new THREE.BoxGeometry(18, 1.6, .1), std({ map: woodTex('#a8764a', '70,40,20', [6, 1]), roughness: .8 }));
wainscot.position.set(0, .3, -2.55); room.add(wainscot);
const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), std({ map: woodTex('#6f4a2e', '40,22,10', [8, 8]), roughness: .9 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -2.2; room.add(floor);

const deskMat = std({ map: woodTex('#c08a5a', '90,50,24', [2, 1]), roughness: .62, metalness: .02 });
const desk = new THREE.Mesh(new THREE.BoxGeometry(8.6, .28, 3.8), deskMat);
desk.position.set(0, -.14, -.4); desk.receiveShadow = true; room.add(desk);
const apron = new THREE.Mesh(new THREE.BoxGeometry(8.6, .5, .1), std({ color: '#8d5b34', roughness: .7 }));
apron.position.set(0, -.5, 1.48); room.add(apron);

// Turntable + cutting mat
const turntable = new THREE.Group();
room.add(turntable);
const tBase = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.12, .06, 64), std({ color: '#d9b98f', roughness: .5 }));
tBase.position.y = .03; tBase.receiveShadow = true; tBase.castShadow = true; room.add(tBase);
const cutMat = new THREE.Mesh(new THREE.CylinderGeometry(.98, .98, .03, 64), [std({ color: '#3f7f6d' }), std({ map: matTex, roughness: .7 }), std({ color: '#3f7f6d' })]);
cutMat.position.y = .075; cutMat.receiveShadow = true; turntable.add(cutMat);
const holder = new THREE.Group(); holder.position.y = .09; turntable.add(holder);

// Window with night sky + Golden Gate
const win = new THREE.Group(); win.position.set(-3.5, 3.1, -2.56); room.add(win);
win.add(new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.9), new THREE.MeshBasicMaterial({ map: skyTex })));
const frameMat = std({ color: '#fbf3e4', roughness: .6 });
[[0, .98, 2.6, .12], [0, -.98, 2.6, .16], [-1.24, 0, .12, 2.1], [1.24, 0, .12, 2.1], [0, 0, .06, 1.9], [0, 0, 2.4, .06]].forEach(([x, y, w, h]) => {
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, .12), frameMat); b.position.set(x, y, .05); b.castShadow = true; win.add(b);
});
const sill = new THREE.Mesh(new THREE.BoxGeometry(2.9, .1, .4), frameMat); sill.position.set(0, -1.06, .2); win.add(sill);
const moonGlow = new THREE.PointLight('#9fb4ff', 3, 7, 1.5); moonGlow.position.set(-3.2, 3.3, -1.6); room.add(moonGlow);

// Family portraits
const loader = new THREE.TextureLoader();
Object.values(CRITTERS).forEach((c, i) => {
  const f = new THREE.Group(); f.position.set(-.95 + i * 0.95, 3.75, -2.53); f.rotation.z = [-.05, .02, .06][i]; room.add(f);
  const border = new THREE.Mesh(new THREE.BoxGeometry(.78, .78, .06), std({ color: ['#b9a2e6', '#f2b36a', '#8a8d99'][i], roughness: .5 }));
  border.castShadow = true; f.add(border);
  const tex = loader.load(c.icon); tex.colorSpace = THREE.SRGBColorSpace;
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(.64, .64), new THREE.MeshBasicMaterial({ map: tex }));
  pic.position.z = .035; f.add(pic);
});

// Shelves (lower = supplies, upper = Happy Shelf)
const shelfMat = std({ map: woodTex('#b7804f', '80,45,20', [1, 1]), roughness: .7 });
const SHELF_Y = [1.55, 2.75];
SHELF_Y.forEach((y) => {
  const s = new THREE.Mesh(new THREE.BoxGeometry(3.4, .1, .7), shelfMat); s.position.set(3.4, y, -2.22); s.castShadow = s.receiveShadow = true; room.add(s);
  [-1.4, 1.4].forEach((dx) => { const b = new THREE.Mesh(new THREE.BoxGeometry(.08, .3, .5), shelfMat); b.position.set(3.4 + dx, y - .2, -2.35); room.add(b); });
});
const happySign = canvasTex(512, 96, (g, w, h) => { g.fillStyle = '#fff6e6'; g.fillRect(0, 0, w, h); g.fillStyle = '#b35c7a'; g.font = '800 52px ui-rounded,system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('\u2665 Happy Shelf \u2665', w / 2, h / 2 + 3); });
happySign.wrapS = happySign.wrapT = THREE.ClampToEdgeWrapping;
const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, .28), new THREE.MeshBasicMaterial({ map: happySign })); sign.position.set(3.4, 3.62, -2.5); room.add(sign);

// Supplies: yarn balls, spools, button jar, pin cushion
const yarnCols = ['#ff9eb5', '#9ed8ff', '#ffe08a', '#b8a6ff'];
yarnCols.forEach((c, i) => {
  const y = new THREE.Mesh(new THREE.SphereGeometry(.2, 32, 24), std({ map: yarnTex(c), roughness: .95 }));
  y.position.set(2.2 + i * .42, SHELF_Y[0] + .25, -2.1); y.castShadow = true; room.add(y);
});
function spool(col, x, y, z) {
  const g = new THREE.Group(); g.position.set(x, y, z);
  const wood = std({ color: '#e7c592', roughness: .6 });
  const top = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .03, 24), wood); top.position.y = .09; g.add(top);
  const bot = top.clone(); bot.position.y = -.09; g.add(bot);
  const th = new THREE.Mesh(new THREE.CylinderGeometry(.075, .075, .15, 24), std({ color: col, roughness: .8 })); g.add(th);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  room.add(g); return g;
}
['#e2394a', '#7b6bd6', '#f2c14e', '#4f9a86', '#f07c78'].forEach((c, i) => spool(c, -3.0 + i * .24, .105, -.9 + (i % 2) * .22));
const jar = new THREE.Group(); jar.position.set(4.3, SHELF_Y[0] + .27, -2.1); room.add(jar);
jar.add(new THREE.Mesh(new THREE.CylinderGeometry(.2, .2, .42, 32, 1, true), new THREE.MeshPhysicalMaterial({ color: '#dff4ff', transparent: true, opacity: .35, roughness: .05, side: THREE.DoubleSide })));
for (let i = 0; i < 36; i++) {
  const b = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, .015, 14), std({ color: pick(['#ff6b8a', '#ffd166', '#6bd3ff', '#9b7bff', '#7ed6a8']), roughness: .4 }));
  b.position.set(rnd(-.14, .14), rnd(-.19, .05), rnd(-.14, .14)); b.rotation.set(rnd(0, 3), rnd(0, 3), 0); jar.add(b);
}
const lid = new THREE.Mesh(new THREE.CylinderGeometry(.22, .22, .05, 32), std({ color: '#d68c5a', roughness: .5 })); lid.position.y = .23; jar.add(lid);
const cushion = new THREE.Group(); cushion.position.set(-2.3, .16, .35); room.add(cushion);
const tomato = new THREE.Mesh(new THREE.SphereGeometry(.22, 32, 24), std({ color: '#e5484d', roughness: .8 })); tomato.scale.y = .72; tomato.castShadow = true; cushion.add(tomato);
for (let i = 0; i < 7; i++) {
  const pin = new THREE.Group(); const a = i * .9;
  pin.position.set(Math.cos(a) * .1, .1, Math.sin(a) * .1); pin.rotation.set(Math.sin(a) * .4, 0, Math.cos(a) * .4);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.006, .006, .16, 6), std({ color: '#ccc', metalness: .9, roughness: .2 })); shaft.position.y = .06; pin.add(shaft);
  const headPin = new THREE.Mesh(new THREE.SphereGeometry(.025, 12, 10), std({ color: pick(['#ffd166', '#6bd3ff', '#9b7bff', '#fff']), roughness: .3 })); headPin.position.y = .14; pin.add(headPin);
  cushion.add(pin);
}
// Sewing basket
const basket = new THREE.Mesh(new THREE.CylinderGeometry(.5, .42, .34, 40, 1, true), std({ map: yarnTex('#c9955f'), roughness: .9, side: THREE.DoubleSide }));
basket.position.set(-3.2, .17, .3); basket.castShadow = true; room.add(basket);
yarnCols.slice(0, 3).forEach((c, i) => { const y = new THREE.Mesh(new THREE.SphereGeometry(.17, 28, 20), std({ map: yarnTex(c), roughness: .95 })); y.position.set(-3.35 + i * .2, .33, .25 + (i % 2) * .15); room.add(y); });

// Desk lamp
const lamp = new THREE.Group(); lamp.position.set(4.3, 0, -1.3); room.add(lamp);
const lampMat = std({ color: '#f6d7a8', roughness: .35, metalness: .3 });
const lb = new THREE.Mesh(new THREE.CylinderGeometry(.3, .34, .08, 32), lampMat); lb.position.y = .04; lamp.add(lb);
const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, 1.4, 12), lampMat); arm1.position.set(-.18, .72, 0); arm1.rotation.z = .28; lamp.add(arm1);
const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 1.1, 12), lampMat); arm2.position.set(-.62, 1.55, 0); arm2.rotation.z = 1.05; lamp.add(arm2);
const shade = new THREE.Mesh(new THREE.ConeGeometry(.32, .42, 32, 1, true), std({ color: '#f39c7a', roughness: .5, side: THREE.DoubleSide })); shade.position.set(-1.1, 1.72, 0); shade.rotation.z = -.6; lamp.add(shade);
const bulb = new THREE.Mesh(new THREE.SphereGeometry(.1, 16, 12), new THREE.MeshBasicMaterial({ color: '#fff3d0' })); bulb.position.set(-1.16, 1.62, 0); lamp.add(bulb);
lamp.traverse((o) => { if (o.isMesh) o.castShadow = true; });

// Fairy lights
const fairy = [];
for (let i = 0; i < 22; i++) {
  const t = i / 21, x = -7 + t * 14, y = 4.95 - Math.sin(t * Math.PI * 3) * .18 - .1;
  const col = ['#ffd166', '#ff9eb5', '#9ed8ff', '#c9b6ff'][i % 4];
  const m = new THREE.Mesh(new THREE.SphereGeometry(.05, 12, 10), new THREE.MeshBasicMaterial({ color: col }));
  m.position.set(x, y, -2.5); room.add(m); fairy.push(m);
}

/* ---------- lights ---------- */
scene.add(new THREE.HemisphereLight('#fff1dc', '#5a4034', 1.15));
const key = new THREE.DirectionalLight('#fff4e2', 2.1);
key.position.set(-2.5, 5.5, 4.5); key.target.position.set(0, .9, 0);
key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = .02;
Object.assign(key.shadow.camera, { left: -4, right: 4, top: 4, bottom: -2, near: .5, far: 16 });
scene.add(key, key.target);
const lampSpot = new THREE.SpotLight('#ffd9a0', 34, 0, .6, .7, 1.3);
lampSpot.position.set(3.1, 1.66, -1.2); lampSpot.target.position.set(0, .9, .1);
scene.add(lampSpot, lampSpot.target);
const rim = new THREE.DirectionalLight('#b9c8ff', .9); rim.position.set(3, 3, -3); scene.add(rim);

// Dust motes floating slowly in the lamp light
const moteGeo = new THREE.BufferGeometry();
const motePos = new Float32Array(90 * 3);
for (let i = 0; i < 90; i++) { motePos[i * 3] = rnd(-3, 3); motePos[i * 3 + 1] = rnd(.2, 4); motePos[i * 3 + 2] = rnd(-2, 1.5); }
moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
const motes = new THREE.Points(moteGeo, new THREE.PointsMaterial({ map: TEX.soft, size: .05, transparent: true, opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending, color: '#fff2cc' }));
scene.add(motes);

/* ============================== Particles ============================== */
const fx = [];
function spawn(tex, pos, o = {}) {
  if (fx.length > 140) return null;
  const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, color: o.color || '#ffffff', opacity: o.opacity ?? 1, blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending });
  const s = new THREE.Sprite(m);
  s.position.copy(pos);
  const size = o.size ?? .08; s.scale.set(size, size, 1);
  s.userData = { vel: o.vel || new THREE.Vector3(), life: o.life ?? 1.5, t: 0, size, grow: o.grow ?? 0, grav: o.grav ?? 0, op: o.opacity ?? 1, to: o.to || null, onArrive: o.onArrive || null, spin: o.spin ?? 0 };
  scene.add(s); fx.push(s); return s;
}
function updateFx(dt) {
  for (let i = fx.length - 1; i >= 0; i--) {
    const s = fx[i], u = s.userData; u.t += dt;
    if (u.to) {
      const k = ease(u.t / u.life);
      s.position.lerpVectors(u.from || (u.from = s.position.clone()), u.to, k);
      s.position.y += Math.sin(k * Math.PI) * .5;
    } else {
      u.vel.y -= u.grav * dt; s.position.addScaledVector(u.vel, dt);
    }
    const sz = u.size * (1 + u.grow * u.t); s.scale.set(sz, sz, 1);
    s.material.rotation += u.spin * dt;
    const a = u.t / u.life; s.material.opacity = u.op * (a < .15 ? a / .15 : a > .7 ? (1 - a) / .3 : 1);
    if (u.t >= u.life) {
      if (u.onArrive) u.onArrive();
      scene.remove(s); s.material.dispose(); fx.splice(i, 1);
    }
  }
}
const burst = (pos, n = 8, tex = TEX.sparkle, spread = .5) => {
  for (let i = 0; i < n; i++) spawn(tex, pos.clone().add(new THREE.Vector3(rnd(-.1, .1), rnd(-.1, .1), rnd(-.1, .1))), { vel: new THREE.Vector3(rnd(-spread, spread), rnd(.2, .8), rnd(-spread, spread)), life: rnd(1.2, 2), size: rnd(.06, .12), add: true, spin: rnd(-2, 2) });
};

/* ============================== Audio: music + soft SFX ============================== */
const music = {
  on: true, vol: .34, cur: null,
  tracks: { theme: new Audio('music/workshop_theme.mp3'), sew: new Audio('music/sewing_lullaby.mp3'), party: new Audio('music/celebration.mp3') },
  started: false,
  init() {
    Object.entries(this.tracks).forEach(([k, a]) => { a.loop = k !== 'party'; a.volume = 0; a.preload = 'auto'; a._target = 0; });
    this.tracks.party.addEventListener('ended', () => this.play(game.tool === 'needle' ? 'sew' : 'theme'));
  },
  play(name) {
    if (this.cur === name) return;
    this.cur = name;
    Object.entries(this.tracks).forEach(([k, a]) => {
      a._target = k === name && this.on ? this.vol : 0;
      if (k === name && this.on) { if (k === 'party') a.currentTime = 0; a.play().catch(() => {}); }
    });
  },
  toggle() {
    this.on = !this.on; $('musicBtn').classList.toggle('off', !this.on);
    const c = this.cur; this.cur = null; this.play(c || 'theme');
  },
  update(dt) {
    Object.values(this.tracks).forEach((a) => {
      const v = a.volume + (a._target - a.volume) * Math.min(1, dt * 1.6);
      a.volume = Math.max(0, Math.min(1, v));
      if (a._target === 0 && a.volume < .01 && !a.paused) a.pause();
    });
  }
};
music.init();

let ac = null, noiseBuf = null, soundOn = true;
function audio() {
  if (!ac) {
    const A = window.AudioContext || window.webkitAudioContext; if (!A) return null;
    ac = new A(); noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ac.state === 'suspended') ac.resume();
  return ac;
}
function noise(freq, q, gain, dur, type = 'bandpass') {
  if (!soundOn || !audio()) return;
  const s = ac.createBufferSource(); s.buffer = noiseBuf;
  const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ac.createGain(), t = ac.currentTime;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + dur * .3); g.gain.linearRampToValueAtTime(0, t + dur);
  s.connect(f).connect(g).connect(ac.destination); s.start(t, Math.random() * .5); s.stop(t + dur + .05);
}
function tone(f1, f2, dur, gain = .05, type = 'sine', delay = 0) {
  if (!soundOn || !audio()) return;
  const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + delay;
  o.type = type; o.frequency.setValueAtTime(f1, t); o.frequency.exponentialRampToValueAtTime(f2, t + dur);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  o.connect(g).connect(ac.destination); o.start(t); o.stop(t + dur + .05);
}
const chime = (notes, gap = .13, gain = .045) => notes.forEach((n, i) => tone(n, n * 1.002, 1, gain, 'sine', i * gap));
const loops = {};
function loopNoise(key, on, freq = 700, type = 'lowpass', gain = .045) {
  if (on && soundOn && audio() && !loops[key]) {
    const s = ac.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq;
    const g = ac.createGain(); g.gain.setValueAtTime(0, ac.currentTime); g.gain.linearRampToValueAtTime(gain, ac.currentTime + .25);
    s.connect(f).connect(g).connect(ac.destination); s.start(); loops[key] = { s, g };
  } else if (!on && loops[key]) {
    const { s, g } = loops[key]; g.gain.linearRampToValueAtTime(0, ac.currentTime + .2); s.stop(ac.currentTime + .25); delete loops[key];
  }
}
let lastRub = 0;
function rubSfx(tool) {
  const now = performance.now(); if (now - lastRub < 140) return; lastRub = now;
  if (tool === 'brush') noise(2600, .9, .04, .13);
  if (tool === 'sponge') { noise(850, 1.3, .05, .16); if (Math.random() < .4) tone(rnd(500, 800), 1000, .08, .03); }
  if (tool === 'cloth') { noise(4200, 2, .025, .1); if (Math.random() < .3) tone(1760, 2200, .18, .018); }
}
function say(text) {
  if (!soundOn || !('speechSynthesis' in window) || !text) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.rate = .9; u.pitch = 1.2; u.lang = 'en-US';
  speechSynthesis.speak(u);
}

/* ============================== Game state ============================== */
const game = {
  state: 'home', sel: 'lunabat', critter: null, meta: null, tool: null, paused: false,
  damages: [], total: 0, fixedCount: 0, flat: 0, flatTarget: 0, faded: 0, fadedActive: false, pendantShine: 1,
  ear: null, eye: null, anim: 'idle', t: 0, heartIn: false, accessories: new Set(), before: null, arrive: 0
};
const raycaster = new THREE.Raycaster();
const tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3(), tmpQ = new THREE.Quaternion();

function buildCritter(id) {
  const root = CRITTERS[id].build();
  if (root.parts.pilotGear) root.parts.pilotGear.visible = false;
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  // Mark small/feature meshes so damage never lands on eyes, mouth, zipper or pendant.
  const p = root.parts;
  [p.eyes, p.muzzle, p.zipper, p.nose, p[CRITTERS[id].pendantKey], p.pilotGear].forEach((g) => g && g.traverse((o) => { o.userData.noDecal = true; }));
  root.userData.base = {};
  ['head', 'leftArm', 'rightArm', 'leftWingArm', 'rightWingArm', 'leftEar', 'rightEar', 'tail'].forEach((k) => {
    if (p[k]) root.userData.base[k] = { r: p[k].rotation.clone(), p: p[k].position.clone() };
  });
  return root;
}

/* ---------- damage placement on the plush surface ---------- */
function surfaceHits(root, n, minDist, prefer) {
  root.updateMatrixWorld(true);
  const center = new THREE.Vector3(0, .95, 0).add(holder.getWorldPosition(new THREE.Vector3()));
  const meshes = [];
  root.traverse((o) => { if (o.isMesh && !o.userData.noDecal && o.geometry) meshes.push(o); });
  const out = [];
  for (let tries = 0; tries < 400 && out.length < n; tries++) {
    const dir = new THREE.Vector3(rnd(-1, 1), rnd(-.6, 1), rnd(-1, 1));
    if (prefer === 'front') dir.z = Math.abs(dir.z) + .6;
    dir.normalize();
    const origin = center.clone().addScaledVector(dir, 3).add(new THREE.Vector3(0, rnd(-.6, .7), 0));
    raycaster.set(origin, center.clone().add(new THREE.Vector3(rnd(-.25, .25), rnd(-.7, .8), rnd(-.2, .2))).sub(origin).normalize());
    const hit = raycaster.intersectObjects(meshes, false)[0];
    if (!hit || !hit.face) continue;
    const r = hit.object.geometry.boundingSphere || (hit.object.geometry.computeBoundingSphere(), hit.object.geometry.boundingSphere);
    if (r.radius < .07) continue;
    if (out.some((h) => h.point.distanceTo(hit.point) < minDist)) continue;
    if (game.damages.some((d) => d.anchor.getWorldPosition(tmpV).distanceTo(hit.point) < minDist)) continue;
    const normal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
    if (normal.y < -.2) continue;  // underside: never reachable by turning the turntable
    out.push({ point: hit.point.clone(), normal, object: hit.object });
  }
  return out;
}
function placeOnSurface(obj, hit, spin = rnd(0, 6.28)) {
  obj.position.copy(hit.point).addScaledVector(hit.normal, .006);
  obj.lookAt(hit.point.clone().add(hit.normal));
  obj.rotateZ(spin);
  scene.add(obj);
  obj.updateMatrixWorld(true);
  hit.object.attach(obj);
  return obj;
}
const M = {
  mud: std({ color: '#6a4629', roughness: 1 }), mud2: std({ color: '#4e321c', roughness: 1 }),
  dust: std({ color: '#d2cbc0', roughness: 1, transparent: true, opacity: .96 }),
  web: new THREE.LineBasicMaterial({ color: '#f4f1ea', transparent: true, opacity: .8 }),
  wet: new THREE.MeshPhysicalMaterial({ color: '#a8dcff', roughness: .04, metalness: 0, transparent: true, opacity: .78, clearcoat: 1, emissive: '#3b7fb3', emissiveIntensity: .25 }),
  slit: std({ color: '#261b2a', roughness: .9 }), cottonM: std({ color: '#fffdf7', roughness: 1 }),
  burr: std({ color: '#7d6b33', roughness: .95 }), burr2: std({ color: '#5f5226', roughness: .95 })
};
function makeDecal(type) {
  const g = new THREE.Group();
  if (type === 'mud') {
    for (let i = 0; i < 4; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(rnd(.045, .085), 20, 14), i ? M.mud : M.mud2);
      b.scale.z = .22; b.position.set(rnd(-.06, .06), rnd(-.05, .05), .005 * i); g.add(b);
    }
    for (let i = 0; i < 5; i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(rnd(.012, .022), 10, 8), M.mud2); d.scale.z = .3; const a = rnd(0, 6.28); d.position.set(Math.cos(a) * .12, Math.sin(a) * .12, 0); g.add(d); }
  } else if (type === 'dust') {
    for (let i = 0; i < 9; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(rnd(.025, .045), 14, 10), M.dust); b.position.set(rnd(-.07, .07), rnd(-.05, .05), rnd(.0, .03)); g.add(b); }
    const pts = []; for (let a = 0; a < 6; a++) { pts.push(new THREE.Vector3(0, 0, .03), new THREE.Vector3(Math.cos(a) * .15, Math.sin(a) * .15, .01)); }
    for (let r = .05; r <= .15; r += .05) for (let a = 0; a < 6; a++) pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, .015), new THREE.Vector3(Math.cos(a + 1) * r, Math.sin(a + 1) * r, .015));
    g.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), M.web));
  } else if (type === 'wet') {
    for (let i = 0; i < 3; i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(rnd(.022, .036), 18, 14), M.wet); d.scale.set(1, 1.3, .55); d.position.set(rnd(-.06, .06), rnd(-.06, .06), .01); g.add(d); }
  } else if (type === 'tear') {
    const slit = new THREE.Mesh(new THREE.CapsuleGeometry(.022, .15, 6, 12), M.slit);
    slit.rotation.z = Math.PI / 2; slit.scale.z = .35; slit.name = 'slit'; g.add(slit);
    const puffs = new THREE.Group(); puffs.name = 'puffs';
    for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.SphereGeometry(rnd(.018, .028), 12, 10), M.cottonM); c.position.set(-.06 + i * .04, rnd(-.01, .01), .018); puffs.add(c); }
    g.add(puffs); g.userData.stitches = 0;
  } else if (type === 'burr') {
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.04, 1), M.burr); core.position.z = .03; g.add(core);
    for (let i = 0; i < 16; i++) {
      const s = new THREE.Mesh(new THREE.ConeGeometry(.008, .045, 6), M.burr2);
      const v = new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-.2, 1)).normalize();
      s.position.copy(v.clone().multiplyScalar(.045)).add(new THREE.Vector3(0, 0, .03));
      s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v); g.add(s);
    }
  }
  if (type === 'mud' || type === 'dust') {
    const inner = new THREE.Group(); inner.scale.setScalar(type === 'mud' ? 1.6 : 1.45);
    while (g.children.length) inner.add(g.children[0]);
    g.add(inner);
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.userData.noDecal = true; } });
  return g;
}
function addDamage(type, hit) {
  const g = makeDecal(type);
  placeOnSurface(g, hit);
  const d = { type, anchor: g, hp: 1, done: false, id: game.damages.length };
  game.damages.push(d);
  return d;
}

/* ---------- special damages ---------- */
function applyFaded(root, on) {
  const mats = new Set();
  root.traverse((o) => { if (o.isMesh && !o.userData.noDecal && o.material && o.material.isMeshStandardMaterial && !o.material.emissiveIntensity) mats.add(o.material); });
  mats.forEach((m) => { if (!m.userData.orig) m.userData.orig = m.color.clone(); });
  game.fadedMats = [...mats];
  game.faded = on ? 0 : 1;
}
function updateFadedColors() {
  if (!game.fadedMats) return;
  const k = ease(game.faded);
  game.fadedMats.forEach((m) => {
    const o = m.userData.orig, l = o.r * .3 + o.g * .59 + o.b * .11;
    const grey = new THREE.Color(l * .8 + .12, l * .78 + .11, l * .74 + .1);
    m.color.copy(grey).lerp(o, k);
  });
}
function pendantParts(root) {
  const g = root.parts[game.meta.pendantKey];
  const mats = [];
  g.traverse((o) => { if (o.isMesh && o.material && o.material.emissive && o.material.emissiveIntensity > 0) { o.material.userData.e0 = o.material.userData.e0 ?? o.material.emissiveIntensity; o.material.userData.c0 = o.material.userData.c0 || o.material.color.clone(); mats.push(o.material); } });
  return { g, mats, light: root.pendantLight, l0: root.pendantLight ? (root.pendantLight.userData.l0 ?? (root.pendantLight.userData.l0 = root.pendantLight.intensity)) : 0 };
}
function updatePendant() {
  if (!game.pend) return;
  const k = ease(game.pendantShine);
  game.pend.mats.forEach((m) => { m.emissiveIntensity = m.userData.e0 * k; m.color.copy(new THREE.Color('#7a746a')).lerp(m.userData.c0, k); });
  if (game.pend.light) game.pend.light.intensity = game.pend.l0 * k;
}
function makeSocket(eyeGroup) {
  const tex = spriteTex((g, w) => {
    g.fillStyle = game.meta.fur; g.beginPath(); g.arc(w / 2, w / 2, w / 2, 0, 7); g.fill();
    g.setLineDash([8, 8]); g.lineWidth = 5; g.strokeStyle = 'rgba(0,0,0,.35)'; g.beginPath(); g.arc(w / 2, w / 2, w * .3, 0, 7); g.stroke();
    g.fillStyle = 'rgba(0,0,0,.4)'; [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([x, y]) => { g.beginPath(); g.arc(w / 2 + x * 12, w / 2 + y * 12, 5, 0, 7); g.fill(); });
  });
  const s = new THREE.Mesh(new THREE.CircleGeometry(.1, 32), new THREE.MeshStandardMaterial({ map: tex, roughness: .9, transparent: true }));
  s.position.copy(eyeGroup.position); s.position.z += .035;
  s.userData.noDecal = true;
  eyeGroup.parent.add(s);
  return s;
}

/* ============================== Visit lifecycle ============================== */
function clearCritter() {
  if (game.critter) { game.critter.parent && game.critter.parent.remove(game.critter); }
  if (game.ear && game.ear.obj.parent === scene) scene.remove(game.ear.obj);
  game.critter = null; game.damages = []; game.ear = null; game.eye = null; game.pend = null; game.fadedMats = null;
}
function previewCritter(id) {
  clearCritter();
  game.meta = CRITTERS[id];
  const c = buildCritter(id);
  c.position.y = .97; holder.add(c);
  game.critter = c; game.anim = 'awake'; game.flat = 1; game.flatTarget = 1;
}
function startVisit() {
  audio();
  music.play('theme');
  const id = game.sel; clearCritter();
  game.meta = CRITTERS[id];
  const c = buildCritter(id);
  c.position.y = .97; holder.add(c); holder.rotation.y = 0; turntable.rotation.y = 0;
  game.critter = c; game.anim = 'asleep'; game.heartIn = false; game.accessories = new Set(); game.fixedCount = 0;
  c.updateMatrixWorld(true);

  // Pick a random set of damages: every visit is different.
  const optional = ['eye', 'ear', 'flat', 'faded', 'pendant'].sort(() => Math.random() - .5).slice(0, 3);
  const counts = { mud: 2 + (Math.random() < .5), dust: 2 + (Math.random() < .4), burr: 1 + (Math.random() < .5), tear: 1 + (Math.random() < .35) };
  // Surface decals (tears biased to the front so they are easy to find).
  surfaceHits(c, counts.tear, .35, 'front').forEach((h) => addDamage('tear', h));
  surfaceHits(c, counts.mud, .3).forEach((h) => addDamage('mud', h));
  surfaceHits(c, counts.dust, .3).forEach((h) => addDamage('dust', h));
  surfaceHits(c, counts.burr, .28).forEach((h) => addDamage('burr', h));

  if (optional.includes('eye')) {
    const eyes = c.parts.eyes, side = pick(['leftEye', 'rightEye']);
    const eg = eyes.children.find((o) => o.name === side);
    eg.visible = false;
    const socket = makeSocket(eg);
    game.eye = { group: eg, socket };
    game.damages.push({ type: 'eye', anchor: socket, hp: 1, done: false, id: game.damages.length });
  }
  if (optional.includes('ear')) {
    const ear = c.parts[game.meta.earSide];
    const info = { obj: ear, parent: ear.parent, p: ear.position.clone(), q: ear.quaternion.clone(), s: ear.scale.clone(), t: -1 };
    scene.attach(ear);
    ear.position.set(1.0, .12, .25); ear.rotation.set(-Math.PI / 2 + .3, 0, .8); ear.scale.multiplyScalar(.75);
    game.ear = info;
    game.damages.push({ type: 'ear', anchor: ear, hp: 1, done: false, id: game.damages.length, loose: true });
  }
  if (optional.includes('flat')) { game.flat = 0; game.flatTarget = 0; game.damages.push({ type: 'flat', anchor: c.parts.torso, hp: 4, done: false, id: game.damages.length, body: true }); }
  else { game.flat = 1; game.flatTarget = 1; }
  applyFaded(c, optional.includes('faded'));
  if (optional.includes('faded')) game.damages.push({ type: 'faded', anchor: c.parts.head, hp: 1, done: false, id: game.damages.length, body: true });
  game.pend = pendantParts(c);
  game.pendantShine = optional.includes('pendant') ? 0 : 1;
  if (optional.includes('pendant')) game.damages.push({ type: 'pendant', anchor: game.pend.g, hp: 1, done: false, id: game.damages.length });
  updateFadedColors(); updatePendant();

  game.total = game.damages.length;
  game.state = 'repair'; game.arrive = 0;
  c.position.y = 3.6;
  setCam('near');
  $('home').classList.add('hidden');
  ['ticket', 'toolbox', 'turn', 'pauseBtn', 'stopBtn'].forEach((id2) => $(id2).classList.remove('hidden'));
  $('dress').classList.add('hidden');
  $('tkIcon').src = game.meta.icon; $('tkName').textContent = game.meta.name; $('tkWho').textContent = game.meta.who === 'Chuyu' ? 'Chuyu\u2019s critter' : `${game.meta.who}\u2019s critter`;
  selectTool(null);
  renderTools(); renderTicket();
  setTimeout(() => { bubble(game.meta.hello, 4200); say(game.meta.hello); }, 1300);
  setTimeout(() => { renderer.render(scene, camera); game.before = canvas.toDataURL('image/jpeg', .85); }, 1900);
}

/* ============================== HUD ============================== */
function renderTools() {
  const allFixed = game.state === 'repair' && game.damages.every((d) => d.done);
  $('tools').innerHTML = TOOLS.filter((t) => t.id !== 'heart' || allFixed).map((t) =>
    `<div class="tool ${game.tool === t.id ? 'sel' : ''} ${t.id === 'heart' ? 'heart glow' : ''}" data-t="${t.id}"><div class="face">${t.icon}</div><span>${t.name}</span></div>`).join('');
  $('tools').querySelectorAll('.tool').forEach((el) => el.onclick = () => { selectTool(game.tool === el.dataset.t ? null : el.dataset.t); tone(620, 780, .1, .03); });
}
function selectTool(id) {
  game.tool = id;
  document.querySelectorAll('#tools .tool').forEach((el) => el.classList.toggle('sel', el.dataset.t === id));
  $('cursor').textContent = id ? TOOL[id].icon : '';
  canvas.classList.toggle('tool', !!id);
  if (game.state === 'repair' && music.cur !== 'party') music.play(id === 'needle' ? 'sew' : 'theme');
}
function renderTicket() {
  const byType = {};
  game.damages.forEach((d) => { (byType[d.type] = byType[d.type] || { left: 0, all: 0 }); byType[d.type].all++; if (!d.done) byType[d.type].left++; });
  $('chips').innerHTML = DMG_ORDER.filter((k) => byType[k]).map((k) => {
    const b = byType[k], icon = k === 'pendant' ? game.meta.pendantIcon : DMG[k].icon;
    return `<div class="chip ${b.left ? '' : 'done'}" data-k="${k}"><i>${icon}</i>${DMG[k].label}<span class="n">${b.left ? b.left : '✓'}</span></div>`;
  }).join('');
  $('chips').querySelectorAll('.chip').forEach((el) => el.onclick = () => findDamage(el.dataset.k));
  const done = game.damages.filter((d) => d.done).length;
  $('heartFill').style.width = `${(done / Math.max(1, game.damages.length)) * 100}%`;
}
function findDamage(type) {
  const d = game.damages.find((x) => x.type === type && !x.done);
  if (!d) return;
  const toolEl = document.querySelector(`#tools .tool[data-t="${DMG[type].tool}"]`);
  if (toolEl) { toolEl.classList.remove('wiggle'); void toolEl.offsetWidth; toolEl.classList.add('wiggle'); }
  if (!d.loose && !d.body) {
    // Spin the turntable so the damage's surface faces the camera (use its normal, not its position:
    // spots near the spin axis like the head top or belly have almost no horizontal offset).
    const n = new THREE.Vector3(0, 0, 1).applyQuaternion(d.anchor.getWorldQuaternion(new THREE.Quaternion()));
    const local = n.applyQuaternion(turntable.getWorldQuaternion(new THREE.Quaternion()).invert());
    const target = -Math.atan2(local.x, local.z);
    let delta = target - turntable.rotation.y; delta = Math.atan2(Math.sin(delta), Math.cos(delta));
    game.spinTo = turntable.rotation.y + delta;
    setTimeout(() => { const pos = d.anchor.getWorldPosition(new THREE.Vector3()); burst(pos, 6); }, 900);
  }
  bubble(`Try the ${TOOL[DMG[type].tool].icon} ${TOOL[DMG[type].tool].name}!`, 2200);
}
let bubbleTimer = 0;
function bubble(text, ms = 2400) {
  const b = $('bubble'); b.textContent = text; b.classList.remove('hidden'); b.style.opacity = 1;
  clearTimeout(bubbleTimer); bubbleTimer = setTimeout(() => { b.style.opacity = 0; setTimeout(() => b.classList.add('hidden'), 400); }, ms);
}
function toast(text) { const t = $('toast'); t.textContent = text; t.classList.remove('hidden'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.add('hidden'), 2200); }
function addStars(n, from) {
  save.stars += n; persist(); $('stars').textContent = save.stars;
  const pill = $('starPill'); pill.classList.remove('pop'); void pill.offsetWidth; pill.classList.add('pop');
  if (from) spawn(TEX.star, from.clone(), { to: camera.position.clone().add(new THREE.Vector3(2.2, 1.4, -2.5)), life: 1.1, size: .16 });
}

/* ============================== Repair actions ============================== */
function screenOf(obj, out = new THREE.Vector2()) {
  obj.getWorldPosition(tmpV); tmpV.project(camera);
  const r = canvas.getBoundingClientRect();
  out.set((tmpV.x + 1) / 2 * r.width + r.left, (1 - tmpV.y) / 2 * r.height + r.top);
  return out;
}
function facing(obj) {
  if (obj === (game.ear && game.ear.obj)) return true;
  obj.getWorldPosition(tmpV); obj.getWorldQuaternion(tmpQ);
  const n = tmpV2.set(0, 0, 1).applyQuaternion(tmpQ);
  return n.dot(camera.position.clone().sub(tmpV).normalize()) > -.05;
}
function nearestDamage(x, y, types, radius = 78) {
  let best = null, bd = radius;
  const sp = new THREE.Vector2();
  game.damages.forEach((d) => {
    if (d.done || d.body || (types && !types.includes(d.type))) return;
    if (!facing(d.anchor)) return;
    screenOf(d.anchor, sp);
    const dist = Math.hypot(sp.x - x, sp.y - y);
    if (dist < bd) { bd = dist; best = d; }
  });
  return best;
}
function hitCritter(x, y) {
  if (!game.critter) return null;
  const r = canvas.getBoundingClientRect();
  raycaster.setFromCamera(new THREE.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1), camera);
  return raycaster.intersectObject(game.critter, true)[0] || null;
}
function fixed(d, where) {
  d.done = true; game.fixedCount++;
  addStars(1, where);
  chime([659, 784, 988]);
  if (Math.random() < .7) bubble(pick(CHEERS), 1800);
  renderTicket();
  if (game.damages.every((x) => x.done)) {
    renderTools();
    setTimeout(() => { bubble('I\u2019m all fixed\u2026 but I\u2019m still sleepy. Give me the wind-up heart! 💝', 4200); say('I am all fixed! Now give me the wind-up heart.'); }, 900);
  }
}
function removeDecal(d, flyTo) {
  const g = d.anchor, start = g.getWorldPosition(new THREE.Vector3());
  if (flyTo) {
    scene.attach(g);
    const t0 = performance.now();
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / 900);
      g.position.lerpVectors(start, flyTo, ease(k)); g.position.y += Math.sin(k * Math.PI) * .6;
      g.scale.setScalar(1 - k * .6); g.rotation.z += .08;
      if (k < 1) requestAnimationFrame(step); else scene.remove(g);
    };
    step();
  } else {
    const t0 = performance.now(), s0 = g.scale.clone();
    const step = () => { const k = Math.min(1, (performance.now() - t0) / 450); g.scale.copy(s0).multiplyScalar(1 - k); if (k < 1) requestAnimationFrame(step); else g.parent && g.parent.remove(g); };
    step();
  }
}
// Hold tools: called every frame while pressed.
function holdTool(x, y, dt) {
  const t = game.tool;
  if (t === 'paint') {
    const d = game.damages.find((q) => q.type === 'faded' && !q.done);
    const hit = hitCritter(x, y);
    if (hit) {
      loopNoise('spray', true, 3200, 'highpass', .03);
      if (Math.random() < .5) spawn(TEX.spray, hit.point.clone().add(new THREE.Vector3(rnd(-.05, .05), rnd(-.05, .05), .05)), { vel: new THREE.Vector3(rnd(-.1, .1), rnd(-.05, .1), rnd(-.1, .1)), life: 1, size: .12, grow: 1.2, opacity: .5, color: pick(['#ffd1e8', '#d6c8ff', '#fff1b8']) });
      if (d) { game.faded = Math.min(1, game.faded + dt / 3.6); updateFadedColors(); if (game.faded >= 1) fixed(d, hit.point); }
    } else loopNoise('spray', false);
    return;
  }
  if (t === 'cloth') {
    const d = game.damages.find((q) => q.type === 'pendant' && !q.done);
    if (d && facing(d.anchor)) {
      const sp = screenOf(d.anchor);
      if (Math.hypot(sp.x - x, sp.y - y) < 90) {
        rubSfx('cloth');
        game.pendantShine = Math.min(1, game.pendantShine + dt / 2.4); updatePendant();
        if (Math.random() < .2) burst(d.anchor.getWorldPosition(new THREE.Vector3()), 1);
        if (game.pendantShine >= 1) { burst(d.anchor.getWorldPosition(new THREE.Vector3()), 12); fixed(d, d.anchor.getWorldPosition(new THREE.Vector3())); }
      }
    }
    return;
  }
  const type = { brush: 'dust', sponge: 'mud', dryer: 'wet' }[t];
  if (!type) return;
  if (t === 'dryer') loopNoise('dryer', true, 650, 'lowpass', .045); else rubSfx(t);
  const d = nearestDamage(x, y, [type], 95);
  if (!d) return;
  d.hp -= dt / (t === 'dryer' ? 1.3 : 1.6);
  const p = d.anchor.getWorldPosition(new THREE.Vector3());
  d.anchor.scale.setScalar(.35 + .65 * Math.max(0, d.hp));
  if (t === 'sponge' && Math.random() < .25) spawn(TEX.bubble, p.clone().add(new THREE.Vector3(rnd(-.08, .08), rnd(-.02, .06), .06)), { vel: new THREE.Vector3(rnd(-.05, .05), rnd(.12, .25), rnd(-.02, .05)), life: rnd(1.8, 2.8), size: rnd(.05, .09), grow: .3 });
  if (t === 'brush' && Math.random() < .18) spawn(TEX.puff, p.clone(), { vel: new THREE.Vector3(rnd(-.25, .25), rnd(.05, .2), .15), life: 1.6, size: .1, grow: .8, opacity: .8 });
  if (t === 'dryer' && Math.random() < .2) spawn(TEX.soft, p.clone(), { vel: new THREE.Vector3(rnd(-.1, .1), .3, .1), life: 1.2, size: .08, grow: 1.5, opacity: .35 });
  if (d.hp <= 0) {
    removeDecal(d);
    fixed(d, p);
    if (type === 'mud') {
      // Washing leaves the fur wet: new drops appear to dry (a tiny chain reaction).
      const hit = { point: p, normal: tmpV2.set(0, 0, 1).applyQuaternion(d.anchor.getWorldQuaternion(tmpQ)).clone(), object: d.anchor.parent || game.critter };
      if (hit.object && hit.object !== scene) { const w = addDamage('wet', hit); w.anchor.scale.setScalar(.9); game.total++; renderTicket(); }
    }
  }
}
// Tap tools.
function tapTool(x, y) {
  const t = game.tool, hit = hitCritter(x, y);
  if (t === 'heart') {
    if (hit && game.damages.every((d) => d.done) && !game.heartIn) wakeUp(hit.point);
    return true;
  }
  if (t === 'tweezers') {
    const d = nearestDamage(x, y, ['burr']);
    if (d) { const p = d.anchor.getWorldPosition(new THREE.Vector3()); tone(900, 300, .18, .05, 'triangle'); tone(300, 600, .12, .04, 'sine', .12); removeDecal(d, new THREE.Vector3(-2.3, .6, .35)); fixed(d, p); return true; }
  }
  if (t === 'needle') {
    if (game.ear && game.ear.t < 0) {
      const sp = screenOf(game.ear.obj);
      if (Math.hypot(sp.x - x, sp.y - y) < 110) { game.ear.t = 0; tone(700, 1100, .2, .04, 'triangle'); noise(3000, 3, .03, .12); return true; }
    }
    const d = nearestDamage(x, y, ['tear']);
    if (d) {
      const g = d.anchor, i = g.userData.stitches++;
      const st = new THREE.Mesh(new THREE.CapsuleGeometry(.007, .07, 4, 8), std({ color: game.meta.thread, roughness: .6 }));
      st.position.set(-.066 + i * .044, 0, .03); st.rotation.z = i % 2 ? .55 : -.55; g.add(st);
      const st2 = st.clone(); st2.rotation.z = -st.rotation.z; g.add(st2);
      tone(880, 1320, .09, .04, 'triangle'); noise(3200, 3, .03, .08);
      const p = g.getWorldPosition(new THREE.Vector3()); burst(p, 2);
      if (g.userData.stitches >= 4) {
        const slit = g.getObjectByName('slit'), puffs = g.getObjectByName('puffs');
        const t0 = performance.now(); const step = () => { const k = Math.min(1, (performance.now() - t0) / 600); slit.scale.set(1 - k, 1 - k, .35 * (1 - k) + .001); puffs.scale.setScalar(1 - k); if (k < 1) requestAnimationFrame(step); };
        step(); fixed(d, p);
      }
      return true;
    }
  }
  if (t === 'button') {
    const d = nearestDamage(x, y, ['eye'], 90);
    if (d) {
      const eg = game.eye.group; eg.visible = true; eg.scale.setScalar(.01);
      const t0 = performance.now(); const step = () => { const k = Math.min(1, (performance.now() - t0) / 500); const s = k < .7 ? k / .7 * 1.2 : 1.2 - (k - .7) / .3 * .2; eg.scale.setScalar(Math.max(.01, s)); game.eye.socket.scale.setScalar(1 - k); if (k < 1) requestAnimationFrame(step); else game.eye.socket.visible = false; };
      step(); tone(500, 250, .14, .06); tone(1200, 1400, .08, .03, 'sine', .1);
      fixed(d, d.anchor.getWorldPosition(new THREE.Vector3())); return true;
    }
  }
  if (t === 'cotton') {
    const d = game.damages.find((q) => q.type === 'flat' && !q.done);
    if (d && hit) {
      const from = camera.position.clone().add(new THREE.Vector3(0, -1.2, -1.2));
      spawn(TEX.cotton, from, { to: hit.point.clone(), life: .9, size: .22, onArrive: () => {
        d.hp--; game.flatTarget = 1 - d.hp / 4; tone(300 + (4 - d.hp) * 70, 520 + (4 - d.hp) * 70, .25, .04); noise(420, .7, .04, .3, 'lowpass');
        game.wobble = .08;
        if (d.hp <= 0 && !d.done) fixed(d, hit.point);
      } });
      noise(500, .7, .04, .3, 'lowpass');
      return true;
    }
  }
  return false;
}
function wrongToolHint(x, y) {
  const d = nearestDamage(x, y, null, 90);
  const needFlat = game.damages.find((q) => q.type === 'flat' && !q.done);
  const needFade = game.damages.find((q) => q.type === 'faded' && !q.done);
  let need = d ? DMG[d.type].tool : null;
  if (!need && hitCritter(x, y)) need = needFlat ? 'cotton' : needFade ? 'paint' : null;
  if (need && need !== game.tool) {
    const el = document.querySelector(`#tools .tool[data-t="${need}"]`);
    if (el) { el.classList.remove('wiggle'); void el.offsetWidth; el.classList.add('wiggle'); }
    bubble(`Hmm\u2026 maybe the ${TOOL[need].icon} ${TOOL[need].name}?`, 2000); tone(330, 300, .15, .03);
    return true;
  }
  return false;
}

/* ---------- finale: wind-up heart ---------- */
function wakeUp(point) {
  game.heartIn = true; game.state = 'waking';
  game.spinTo = Math.round(turntable.rotation.y / (Math.PI * 2)) * Math.PI * 2;  // turn to face the child
  selectTool(null); renderTools();
  const chest = game.critter.parts.torso.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, .05, .3));
  spawn(TEX.heart, camera.position.clone().add(new THREE.Vector3(0, -1, -1.3)), { to: chest, life: 1.2, size: .3, onArrive: () => {
    burst(chest, 14, TEX.heart, .6);
    for (let i = 0; i < 6; i++) tone(1400, 1300, .05, .03, 'square', i * .12);  // wind-up key clicks
    setTimeout(() => {
      game.anim = 'awake'; game.state = 'awake';
      music.play('party');
      chime([523, 659, 784, 1047], .18, .05);
      for (let i = 0; i < 30; i++) setTimeout(() => spawn(TEX.soft, new THREE.Vector3(rnd(-1.6, 1.6), rnd(2.6, 3.4), rnd(-.4, .6)), { vel: new THREE.Vector3(rnd(-.1, .1), -rnd(.25, .45), 0), life: 4, size: .07, color: pick(['#ffd166', '#ff9eb5', '#9ed8ff', '#c9b6ff', '#8fe0c0']) }), i * 70);
      bubble(game.meta.thanks, 5000); say(game.meta.thanks);
      addStars(3, chest);
      save.fixed[game.sel] = (save.fixed[game.sel] || 0) + 1; persist();
      setTimeout(showDress, 2600);
    }, 900);
  } });
}

/* ---------- dress-up + happy shelf ---------- */
function makeAccessory(kind) {
  const g = new THREE.Group(); g.name = 'acc_' + kind;
  if (kind === 'bow') {
    const m = std({ color: '#ff7aa2', roughness: .5 });
    [-1, 1].forEach((s) => { const c = new THREE.Mesh(new THREE.ConeGeometry(.09, .16, 20), m); c.rotation.z = s * Math.PI / 2; c.position.x = s * .08; g.add(c); });
    g.add(new THREE.Mesh(new THREE.SphereGeometry(.045, 16, 12), m));
    g.position.set(-.26, .38, .28); g.rotation.z = .3;
  } else if (kind === 'crown') {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.33, .025, 10, 48), std({ color: '#7ccf7a', roughness: .7 }));
    ring.rotation.x = Math.PI / 2; g.add(ring);
    for (let i = 0; i < 9; i++) {
      const a = i / 9 * Math.PI * 2, f = new THREE.Group();
      f.position.set(Math.cos(a) * .33, .02, Math.sin(a) * .33);
      const col = pick(['#ffd166', '#ff9eb5', '#ffffff', '#c9b6ff']);
      for (let k = 0; k < 5; k++) { const p = new THREE.Mesh(new THREE.SphereGeometry(.03, 10, 8), std({ color: col, roughness: .6 })); p.position.set(Math.cos(k * 1.26) * .035, .02, Math.sin(k * 1.26) * .035); f.add(p); }
      f.add(new THREE.Mesh(new THREE.SphereGeometry(.022, 10, 8), std({ color: '#f4a340' })));
      g.add(f);
    }
    g.position.set(0, .4, 0);
  } else if (kind === 'hat') {
    const tex = canvasTex(256, 256, (c, w, h) => { c.fillStyle = '#7b6bd6'; c.fillRect(0, 0, w, h); c.fillStyle = '#ffd166'; for (let y = 0; y < h; y += 40) c.fillRect(0, y, w, 16); });
    const cone = new THREE.Mesh(new THREE.ConeGeometry(.16, .38, 32), std({ map: tex, roughness: .6 })); g.add(cone);
    const pom = new THREE.Mesh(new THREE.SphereGeometry(.05, 16, 12), std({ color: '#ff9eb5' })); pom.position.y = .21; g.add(pom);
    g.position.set(.12, .6, .02); g.rotation.z = -.2;
  } else if (kind === 'scarf') {
    const m = std({ color: '#e2394a', roughness: .8 });
    const t = new THREE.Mesh(new THREE.TorusGeometry(.3, .06, 14, 40), m); t.rotation.x = Math.PI / 2; t.scale.set(1.05, 1, 1); g.add(t);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(.12, .3, .04), m); tail.position.set(.18, -.14, .26); tail.rotation.z = .2; g.add(tail);
    g.position.set(0, .3, 0); g.userData.onTorso = true;
  } else if (kind === 'star') {
    const s = new THREE.Mesh(new THREE.OctahedronGeometry(.07, 0), std({ color: '#ffd166', emissive: '#ffb300', emissiveIntensity: .8, metalness: .5, roughness: .3 }));
    s.scale.set(1, 1, .4); g.add(s); g.position.set(.3, .3, .32);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
const DRESS = [['bow', '🎀', 'Bow'], ['crown', '🌼', 'Flowers'], ['hat', '🥳', 'Party hat'], ['scarf', '🧣', 'Scarf'], ['star', '⭐', 'Star clip']];
function showDress() {
  $('toolbox').classList.add('hidden'); $('dress').classList.remove('hidden');
  $('dressItems').innerHTML = DRESS.map(([k, i, n]) => `<div class="tool" data-k="${k}"><div class="face">${i}</div><span>${n}</span></div>`).join('');
  $('dressItems').querySelectorAll('.tool').forEach((el) => el.onclick = () => toggleAccessory(game.critter, el.dataset.k, el));
}
function toggleAccessory(critter, k, el) {
  const parent = makeAccessory(k).userData.onTorso ? critter.parts.torso : critter.parts.head;
  const existing = parent.getObjectByName('acc_' + k);
  if (existing) { parent.remove(existing); game.accessories.delete(k); el && el.classList.remove('sel'); tone(500, 400, .1, .03); return; }
  parent.add(makeAccessory(k)); game.accessories.add(k); el && el.classList.add('sel');
  tone(660, 990, .18, .04); burst(parent.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, .3, .3)), 6);
}
const shelfMinis = [];
function shelfSpot(i) { return new THREE.Vector3(2.15 + (i % 6) * .5, SHELF_Y[1] + .05 + .32, -2.1); }
function makeMini(entry, i) {
  const c = buildCritter(entry.id);
  c.traverse((o) => { if (o.isLight) o.visible = false; });
  (entry.acc || []).forEach((k) => toggleAccessory(c, k));
  c.scale.setScalar(.32); c.position.copy(shelfSpot(i)); c.rotation.y = rnd(-.3, .3);
  scene.add(c); shelfMinis.push(c); return c;
}
save.shelf.slice(-6).forEach((e, i) => makeMini(e, i));
function goToShelf() {
  $('dress').classList.add('hidden');
  game.state = 'leaving';
  renderer.render(scene, camera); const after = canvas.toDataURL('image/jpeg', .85);
  const c = game.critter; const idx = Math.min(save.shelf.length, 5);
  if (shelfMinis.length >= 6) { scene.remove(shelfMinis.shift()); shelfMinis.forEach((m, i) => m.position.copy(shelfSpot(i))); }
  const entry = { id: game.sel, acc: [...game.accessories] };
  save.shelf.push(entry); save.shelf = save.shelf.slice(-6); persist();
  scene.attach(c);
  const start = c.position.clone(), s0 = c.scale.x, end = shelfSpot(Math.min(idx, shelfMinis.length)), t0 = performance.now();
  setCam('far');
  const step = () => {
    const k = Math.min(1, (performance.now() - t0) / 2600);
    c.position.lerpVectors(start, end, ease(k)); c.position.y += Math.abs(Math.sin(k * Math.PI * 3)) * .35 * (1 - k);
    c.scale.setScalar(s0 + (.32 - s0) * ease(k));
    if (k < 1) requestAnimationFrame(step);
    else { c.traverse((o) => { if (o.isLight) o.visible = false; }); shelfMinis.push(c); game.critter = null; game.anim = 'idle'; showCard(after); }
  };
  step(); tone(400, 800, .3, .04);
}
function showCard(after) {
  const v = $('endVeil');
  v.innerHTML = `<div class="card glass"><h2>${game.meta.name} is all better!</h2><p>${game.meta.thanks}</p>
    <div class="ba"><figure><img src="${game.before || after}" alt="before"><figcaption>Before</figcaption></figure><figure><img src="${after}" alt="after"><figcaption>After</figcaption></figure></div>
    <div class="btnrow"><button class="cta small" id="nextBtn">🧸 Fix another friend</button><button class="ghost" id="saveBtn">📸 Save photo</button></div></div>`;
  v.classList.remove('hidden');
  $('nextBtn').onclick = () => { v.classList.add('hidden'); goHome(); };
  $('saveBtn').onclick = () => { const a = document.createElement('a'); a.download = `${game.meta.name}-repaired.jpg`; a.href = after; a.click(); };
}

/* ============================== Home ============================== */
function renderPatients() {
  $('patients').innerHTML = Object.entries(CRITTERS).map(([k, c]) => `<div class="patient ${k === game.sel ? 'sel' : ''}" data-k="${k}">
    <img src="${c.icon}" alt="${c.name}"><b>${c.name}</b><span>${c.who}</span><div class="st">${save.fixed[k] ? '★'.repeat(Math.min(5, save.fixed[k])) : ''}</div></div>`).join('');
  $('patients').querySelectorAll('.patient').forEach((el) => el.onclick = () => { game.sel = el.dataset.k; tone(600, 760, .12, .03); renderPatients(); previewCritter(game.sel); });
}
function goHome() {
  game.state = 'home'; game.paused = false;
  ['ticket', 'toolbox', 'turn', 'dress', 'pauseBtn', 'stopBtn', 'pauseVeil', 'endVeil', 'bubble'].forEach((id) => $(id).classList.add('hidden'));
  $('home').classList.remove('hidden');
  Object.keys(loops).forEach((k) => loopNoise(k, false));
  selectTool(null); setCam('home'); renderPatients(); previewCritter(game.sel);
  if (music.started) music.play('theme');
}
function setCam(mode) { camMode = mode; }

/* ============================== Input ============================== */
const pointer = { down: false, x: 0, y: 0, lastX: 0, mode: null };
canvas.addEventListener('pointerdown', (e) => {
  audio();
  if (game.paused) return;
  try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* synthetic events */ }
  Object.assign(pointer, { down: true, x: e.clientX, y: e.clientY, lastX: e.clientX, mode: 'rotate' });
  moveCursor(e);
  if (game.state !== 'repair' && game.state !== 'awake' && game.state !== 'waking') return;
  const t = game.tool;
  const onCritter = hitCritter(e.clientX, e.clientY);
  const onEar = game.ear && game.ear.t < 0 && Math.hypot(screenOf(game.ear.obj).x - e.clientX, screenOf(game.ear.obj).y - e.clientY) < 110;
  const nearDamage = nearestDamage(e.clientX, e.clientY, null, 90);
  if (game.state === 'repair' && t && (onCritter || onEar || nearDamage)) {
    if (TOOL[t].hold) {
      pointer.mode = 'hold';
      const matches = { brush: 'dust', sponge: 'mud', dryer: 'wet', cloth: 'pendant', paint: 'faded' }[t];
      const any = game.damages.some((d) => !d.done && d.type === matches);
      if (!any || (nearDamage && DMG[nearDamage.type].tool !== t && !['paint'].includes(t))) wrongToolHint(e.clientX, e.clientY);
    } else {
      pointer.mode = 'tap';
      if (!tapTool(e.clientX, e.clientY)) wrongToolHint(e.clientX, e.clientY);
    }
  } else if (onCritter && !t) {
    pointer.mode = 'tickle';
    game.wobble = .06; bubble(pick(TICKLES), 1500); tone(700, 900, .12, .035); tone(900, 1200, .1, .03, 'sine', .1);
  }
});
window.addEventListener('pointermove', (e) => {
  moveCursor(e);
  if (!pointer.down) return;
  pointer.x = e.clientX; pointer.y = e.clientY;
  if (pointer.mode === 'rotate' || pointer.mode === 'tickle') {
    turntable.rotation.y += (e.clientX - pointer.lastX) * .008; game.spinTo = null;
  }
  pointer.lastX = e.clientX;
});
const endPointer = () => { pointer.down = false; pointer.mode = null; loopNoise('dryer', false); loopNoise('spray', false); };
window.addEventListener('pointerup', endPointer);
window.addEventListener('pointercancel', endPointer);
function moveCursor(e) {
  const c = $('cursor');
  c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px';
  c.style.opacity = game.tool && e.target === canvas ? 1 : 0;
}
$('rotL').onclick = () => { game.spinTo = turntable.rotation.y - Math.PI / 3; tone(500, 600, .1, .03); };
$('rotR').onclick = () => { game.spinTo = turntable.rotation.y + Math.PI / 3; tone(500, 600, .1, .03); };
$('zoomBtn').onclick = () => setCam(camMode === 'near' ? 'far' : 'near');
$('startBtn').onclick = () => { music.started = true; startVisit(); };
$('stopBtn').onclick = goHome;
$('pauseBtn').onclick = () => setPaused(!game.paused);
$('resumeBtn').onclick = () => setPaused(false);
$('shelfBtn').onclick = goToShelf;
$('musicBtn').onclick = () => { music.started = true; music.toggle(); };
$('soundBtn').onclick = () => { soundOn = !soundOn; $('soundBtn').classList.toggle('off', !soundOn); if (!soundOn) { Object.keys(loops).forEach((k) => loopNoise(k, false)); if ('speechSynthesis' in window) speechSynthesis.cancel(); } };
function setPaused(p) {
  game.paused = p; $('pauseVeil').classList.toggle('hidden', !p); $('pauseBtn').textContent = p ? '▶' : '⏸';
  if (p) { endPointer(); Object.values(music.tracks).forEach((a) => a.pause()); } else { const c = music.cur; music.cur = null; music.play(c || 'theme'); }
}

/* ============================== Animation loop ============================== */
function animateCritter(c, dt, t) {
  const p = c.parts, base = c.userData.base;
  const reset = (k) => { if (p[k] && base[k]) { p[k].rotation.copy(base[k].r); } };
  Object.keys(base).forEach(reset);
  // Stuffing: flat & floppy -> round & fluffy
  game.flat += (game.flatTarget - game.flat) * Math.min(1, dt * 2.5);
  game.wobble = (game.wobble || 0) * Math.pow(.05, dt);
  const f = ease(game.flat), w = Math.sin(t * 14) * (game.wobble || 0);
  let sy = 1 - .26 * (1 - f) - w, sxz = 1 + .12 * (1 - f) + w;
  let y = .97 - .2 * (1 - f);
  if (game.anim === 'asleep') {
    const br = Math.sin(t * 1.3) * .012;
    sy += br;
    if (p.head) { p.head.rotation.z = base.head.r.z + .2; p.head.rotation.x = base.head.r.x + .12; }
    ['leftArm', 'leftWingArm'].forEach((k) => p[k] && (p[k].rotation.z = base[k].r.z + .35));
    ['rightArm', 'rightWingArm'].forEach((k) => p[k] && (p[k].rotation.z = base[k].r.z - .35));
  } else if (game.anim === 'awake') {
    const hop = game.state === 'awake' ? Math.abs(Math.sin(t * 2.4)) * .08 : 0;
    y += hop;
    if (p.head) { p.head.rotation.z = base.head.r.z + Math.sin(t * 1.2) * .08; p.head.rotation.y = Math.sin(t * .7) * .15; }
    const wave = game.state === 'awake' ? Math.sin(t * 5) * .5 - .6 : Math.sin(t * 1.5) * .08;
    ['leftArm', 'leftWingArm'].forEach((k) => p[k] && (p[k].rotation.z = base[k].r.z + wave));
    ['rightArm', 'rightWingArm'].forEach((k) => p[k] && (p[k].rotation.z = base[k].r.z - Math.sin(t * 1.5 + 1) * .08));
    ['leftEar', 'rightEar'].forEach((k, i) => p[k] && p[k].parent !== scene && (p[k].rotation.z = base[k].r.z + Math.max(0, Math.sin(t * 3 + i * 2) - .9) * 2));
    if (p.tail) p.tail.rotation.y = base.tail.r.y + Math.sin(t * 2) * .15;
    if (p.eyes) { const b = (t % 3.6) < .12 ? .15 : 1; p.eyes.scale.y = b; }
  }
  c.scale.set(sxz, sy, sxz);
  if (game.state === 'repair' && game.arrive < 1 && c === game.critter) {
    game.arrive = Math.min(1, game.arrive + dt / 1.3);
    const k = game.arrive, bounce = k < .7 ? 1 - ease(k / .7) : Math.sin((k - .7) / .3 * Math.PI) * .08;
    y += bounce * 2.6;
    if (k >= 1) noise(300, .6, .05, .3, 'lowpass');
  }
  c.position.y = y;
}
function updateEar(dt) {
  const e = game.ear; if (!e || e.t < 0) return;
  e.t = Math.min(1, e.t + dt / 1.4);
  const target = new THREE.Matrix4().compose(e.p, e.q, e.s).premultiply(e.parent.matrixWorld);
  const tp = new THREE.Vector3(), tq = new THREE.Quaternion(), ts = new THREE.Vector3();
  target.decompose(tp, tq, ts);
  if (!e.from) e.from = { p: e.obj.position.clone(), q: e.obj.quaternion.clone(), s: e.obj.scale.clone() };
  const k = ease(e.t);
  e.obj.position.lerpVectors(e.from.p, tp, k); e.obj.position.y += Math.sin(k * Math.PI) * .5;
  e.obj.quaternion.slerpQuaternions(e.from.q, tq, k); e.obj.scale.lerpVectors(e.from.s, ts, k);
  if (Math.random() < .3) spawn(TEX.sparkle, e.obj.getWorldPosition(new THREE.Vector3()), { vel: new THREE.Vector3(0, .1, 0), life: .8, size: .06, add: true });
  if (e.t >= 1) {
    e.parent.add(e.obj); e.obj.position.copy(e.p); e.obj.quaternion.copy(e.q); e.obj.scale.copy(e.s);
    const d = game.damages.find((q) => q.type === 'ear'); tone(880, 1320, .12, .04, 'triangle');
    game.ear.t = 2; if (d && !d.done) fixed(d, e.obj.getWorldPosition(new THREE.Vector3()));
  }
}
let last = performance.now();
function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  music.update(dt);
  if (!game.paused) {
    game.t += dt;
    const t = game.t;
    // Camera easing between framings
    const cm = CAM[camMode];
    camera.position.lerp(cm.pos, Math.min(1, dt * 1.8));
    camLook.lerp(cm.look, Math.min(1, dt * 1.8));
    camera.lookAt(camLook);
    if (game.spinTo != null) { turntable.rotation.y += (game.spinTo - turntable.rotation.y) * Math.min(1, dt * 3); if (Math.abs(game.spinTo - turntable.rotation.y) < .002) game.spinTo = null; }
    if (game.state === 'home') turntable.rotation.y += dt * .25;
    if (game.critter) animateCritter(game.critter, dt, t);
    updateEar(dt);
    shelfMinis.forEach((m, i) => { m.position.y = shelfSpot(i).y + Math.abs(Math.sin(t * 1.5 + i)) * .02; });
    fairy.forEach((m, i) => m.material.color.setHSL(((i * 0.13) % 1), .7, .62 + Math.sin(t * .8 + i) * .12));
    const mp = moteGeo.attributes.position; for (let i = 0; i < mp.count; i++) { let yv = mp.getY(i) + dt * .03; if (yv > 4.2) yv = .2; mp.setY(i, yv); mp.setX(i, mp.getX(i) + Math.sin(t * .3 + i) * dt * .02); } mp.needsUpdate = true;
    if (pointer.down && pointer.mode === 'hold' && game.state === 'repair') holdTool(pointer.x, pointer.y, dt);
    updateFx(dt);
    // Speech bubble follows the critter's head
    if (game.critter && !$('bubble').classList.contains('hidden')) {
      const hp = game.critter.parts.head.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, .85, 0)).project(camera);
      $('bubble').style.left = `${(hp.x + 1) / 2 * window.innerWidth}px`; $('bubble').style.top = `${Math.max(96, (1 - hp.y) / 2 * window.innerHeight)}px`;
    }
  }
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
$('stars').textContent = save.stars;
renderPatients();
previewCritter(game.sel);
requestAnimationFrame(frame);

/* ============================== Test hooks ============================== */
window.__REPAIR3D__ = {
  get state() { return game.state; },
  get tool() { return game.tool; },
  damages: () => game.damages.map((d) => ({ type: d.type, done: d.done })),
  remaining: () => game.damages.filter((d) => !d.done).length,
  screen: (i) => { const d = game.damages[i]; const s = screenOf(d.anchor); return { x: s.x, y: s.y, facing: facing(d.anchor), type: d.type, done: d.done }; },
  critterScreen: () => { const s = screenOf(game.critter.parts.torso); return { x: s.x, y: s.y }; },
  spinToDamage: (i) => findDamage(game.damages[i].type),
  selectTool,
  vertexCount: () => { let n = 0; game.critter && game.critter.traverse((o) => { if (o.isMesh) n += o.geometry.attributes.position.count; }); return n; },
  save: () => save
};
