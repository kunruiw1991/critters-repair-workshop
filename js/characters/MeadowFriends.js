// Lightweight plush rigs sharing the repair workshop's named-part contract.
import { createPlushMaterial } from './materials.js';
const THREE = window.THREE;
export const MEADOW_FRIENDS = {
  cloverbunny: { name: 'CloverBunny', fur: '#8fcfac', inner: '#ffd0da', belly: '#e4f7df', charm: '#ff96bd', kind: 'bunny' },
  pebblepanda: { name: 'PebblePanda', fur: '#b2b8e2', inner: '#f5c6d9', belly: '#fff6e8', charm: '#ffd166', kind: 'panda' },
  sproutdragon: { name: 'SproutDragon', fur: '#68bdc1', inner: '#ffe0a3', belly: '#d7f0b5', charm: '#8fde91', kind: 'dragon' }
};
export function buildMeadowFriend(id) {
  const cfg = MEADOW_FRIENDS[id], root = new THREE.Group(), parts = {};
  root.name = cfg.name; root.characterId = cfg.name; root.displayName = cfg.name;
  const fur = createPlushMaterial(cfg.fur), inner = createPlushMaterial(cfg.inner), cream = createPlushMaterial(cfg.belly);
  const dark = new THREE.MeshStandardMaterial({color: '#292337', roughness: .18});
  const white = new THREE.MeshStandardMaterial({color: '#ffffff'});
  function group(name, parent, x, y, z) {
    const g = new THREE.Group(); g.name = name; g.position.set(x, y, z); parent.add(g); parts[name] = g; return g;
  }
  function ball(parent, mat, x, y, z, sx, sy, sz) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 18), mat);
    m.position.set(x, y, z); m.scale.set(sx, sy, sz); parent.add(m); return m;
  }
  const head = group('head', root, 0, .42, 0);
  ball(head, fur, 0, 0, 0, .49, .44, .41);
  for (const side of [-1, 1]) {
    const ear = group(side === 1 ? 'leftEar' : 'rightEar', head, side * .33, .35, -.025);
    const long = cfg.kind === 'bunny';
    ear.rotation.z = -side * (long ? .17 : .25);
    ball(ear, fur, 0, long ? .18 : .035, 0, long ? .12 : .16, long ? .34 : .17, .09);
    ball(ear, inner, 0, long ? .18 : .04, .075, long ? .067 : .095, long ? .25 : .10, .025);
  }
  const eyes = group('eyes', head, 0, .075, .36);
  for (const side of [-1, 1]) {
    if (cfg.kind === 'panda') ball(head, cream, side * .19, .075, .343, .17, .18, .065);
    const eye = group(side === 1 ? 'leftEye' : 'rightEye', eyes, side * .18, 0, .025);
    ball(eye, white, 0, 0, 0, .108, .12, .055);
    ball(eye, dark, 0, -.005, .035, .077, .089, .045);
    ball(eye, white, -.023, .028, .075, .024, .024, .012);
  }
  const muzzle = group('muzzle', head, 0, -.15, .34);
  ball(muzzle, cream, 0, 0, 0, .24, .14, .12);
  ball(muzzle, dark, 0, .055, .11, .047, .033, .025);
  const smile = new THREE.Mesh(new THREE.TorusGeometry(.072, .012, 8, 24, Math.PI), dark);
  smile.rotation.z = Math.PI; smile.position.set(0, -.005, .12); muzzle.add(smile);
  if (cfg.kind === 'bunny') ball(muzzle, white, 0, -.045, .13, .035, .035, .012);
  const torso = group('torso', root, 0, -.2, 0);
  ball(torso, fur, 0, 0, 0, .34, .40, .29);
  ball(torso, cream, 0, -.02, .245, .245, .29, .065);
  for (const side of [-1, 1]) {
    const arm = group(side === 1 ? 'leftArm' : 'rightArm', root, side * .32, .02, 0);
    arm.rotation.z = side * -.35; ball(arm, fur, 0, -.2, 0, .105, .25, .10);
    ball(arm, cream, 0, -.37, .035, .115, .12, .11);
    const leg = group(side === 1 ? 'leftLeg' : 'rightLeg', root, side * .16, -.54, 0);
    ball(leg, fur, 0, -.12, 0, .12, .19, .12);
    ball(leg, cream, 0, -.26, .06, .14, .10, .18);
  }
  const tail = group('tail', root, 0, -.35, -.28);
  ball(tail, cream, 0, .02, -.06, .17, .17, .17);
  if (cfg.kind === 'dragon') {
    ball(tail, fur, .17, .02, -.25, .22, .14, .32);
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.ConeGeometry(.24, .4, 3), inner);
      wing.scale.z = .22; wing.position.set(side * .38, .0, -.20); wing.rotation.z = -side * .85; torso.add(wing);
    }
    for (let i = 0; i < 3; i++) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(.065, .16, 8), cream);
      horn.position.set((i - 1) * .14, .43, -.06); head.add(horn);
    }
  }
  const pendant = group('gardenPendant', torso, 0, .17, .34);
  const glow = new THREE.MeshStandardMaterial({color: cfg.charm, emissive: cfg.charm, emissiveIntensity: .7, roughness: .35});
  if (cfg.kind === 'bunny') {
    for (let i = 0; i < 5; i++) ball(pendant, glow, Math.cos(i * Math.PI * .4) * .055, Math.sin(i * Math.PI * .4) * .055, 0, .04, .04, .022);
    ball(pendant, cream, 0, 0, .015, .03, .03, .02);
  } else if (cfg.kind === 'panda') {
    pendant.add(new THREE.Mesh(new THREE.OctahedronGeometry(.09), glow));
  } else {
    const leaf = ball(pendant, glow, 0, 0, 0, .055, .10, .024); leaf.rotation.z = -.4;
  }
  root.parts = parts;
  root.pendantEmissiveMesh = pendant.children[0];
  return root;
}
