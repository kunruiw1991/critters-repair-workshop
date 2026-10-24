// NightmareCritters.js (v4 — Authentic YouTube Fan-Made Bigger Bodies & Phase-2 Monster Edition)
import { createPlushMaterial } from './materials.js';

const THREE = window.THREE;
const plushMaterial = (hex) => createPlushMaterial(hex);
const darkPlushMaterial = (hex) => createPlushMaterial(hex, { roughness: 0.88 });
const eyeMaterial = () => new THREE.MeshStandardMaterial({ color: 0x090a13, roughness: 0.18, metalness: 0.12 });
const heartGemMaterial = (hex) => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.25, metalness: 0.18 });

export const NIGHTMARE_SMILING_CRITTERS = {
  nightmare_catnap: {
    name: '夜梦瞌睡猫 (巨型怪兽)',
    enName: 'Monster CatNap',
    who: '巨型长腿月光怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'feline_stalker',
    fur: '#62349c',
    accent: '#391966',
    face: '#9f75d6',
    inner: '#24113d',
    charm: 'moon',
    charmColor: '#ffd633',
    pendantIcon: '🌙',
    ref: 'nightmare_catnap.webp',
    hello: '嘶……我是巨型夜梦瞌睡猫，在管道里巡逻时把长爪子和月亮吊坠弄脏啦！',
    thanks: '呼噜噜……大长腿和弯月吊坠都修好啦，祝你做个甜甜的好梦！',
  },
  nightmare_dogday: {
    name: '夜梦晴天狗 (巨型怪兽)',
    enName: 'Monster DogDay',
    who: '巨型皮带阳光怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'biped_hound',
    fur: '#d4651b',
    accent: '#7a280c',
    face: '#f5be4f',
    inner: '#822c0c',
    charm: 'sun',
    charmColor: '#ffae19',
    pendantIcon: '☀️',
    ref: 'nightmare_dogday.webp',
    hello: '嗷呜！我是巨型夜梦晴天狗，快帮我把腰带、护腕和太阳徽章修好吧！',
    thanks: '太棒啦！护腕和金太阳又闪闪发光，谢谢你，我的小英雄！',
  },
  nightmare_hoppyhopscotch: {
    name: '夜梦跳跳兔 (巨型怪兽)',
    enName: 'Monster Hoppy Hopscotch',
    who: '巨型高挑闪电怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'biped_rabbit',
    fur: '#33b842',
    accent: '#187526',
    face: '#8ef096',
    inner: '#69d975',
    charm: 'bolt',
    charmColor: '#ffe029',
    pendantIcon: '⚡',
    ref: 'nightmare_hoppyhopscotch.webp',
    hello: '嘿！我是巨型夜梦跳跳兔，跳过高墙时把大长腿和闪电拉链刮破啦！',
    thanks: '耶！强壮的弹簧长腿修好啦，看我一口气跳上屋顶！',
  },
  nightmare_bubbabubbaphant: {
    name: '夜梦泡泡象 (巨型怪兽)',
    enName: 'Monster Bubba Bubbaphant',
    who: '巨型垂地长鼻怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'elephant_behemoth',
    fur: '#2f90d6',
    accent: '#174c78',
    face: '#7ec8f8',
    inner: '#174e80',
    charm: 'bulb',
    charmColor: '#ffe85b',
    pendantIcon: '💡',
    ref: 'nightmare_bubbabubbaphant.webp',
    hello: '嘟嘟！我是巨型夜梦泡泡象，垂到地上的超长象鼻和灯泡吊坠都有点灰尘啦！',
    thanks: '叮！小灯泡重新亮晶晶，巨型泡泡象用长鼻子给你敬个礼！',
  },
  nightmare_craftycorn: {
    name: '夜梦巧巧独角兽 (巨型怪兽)',
    enName: 'Monster CraftyCorn',
    who: '巨型长腿独角怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'equine_unicorn',
    fur: '#eef3f8',
    accent: '#1cb5cc',
    face: '#dceef5',
    inner: '#3bc8de',
    charm: 'flower',
    charmColor: '#ef6587',
    pendantIcon: '🌼',
    ref: 'nightmare_craftycorn.webp',
    hello: '嗨！我是巨型夜梦巧巧独角兽，奔跑时把青色长蹄和长鬃毛弄脏啦！',
    thanks: '哇！独角和蓝色长鬃毛都闪闪发光，我要画一幅彩虹送给你！',
  },
  nightmare_pickypiggy: {
    name: '夜梦挑挑猪 (巨型怪兽)',
    enName: 'Monster PickyPiggy',
    who: '巨型高挑野餐怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'biped_hog',
    fur: '#df629d',
    accent: '#9c1756',
    face: '#f7a6cc',
    inner: '#ab2968',
    charm: 'apple',
    charmColor: '#e53745',
    pendantIcon: '🍎',
    ref: 'nightmare_pickypiggy.webp',
    hello: '哼哼！我是巨型夜梦挑挑猪，找苹果的时候把长蹄子和拉链弄脏啦！',
    thanks: '真香呀！粉粉的大长腿干干净净，请你吃最大最甜的红苹果！',
  },
  nightmare_bobbybearhug: {
    name: '夜梦抱抱熊 (巨型怪兽)',
    enName: 'Monster Bobby BearHug',
    who: '巨型阔肩棕熊怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'knuckle_bear',
    fur: '#d11d2c',
    accent: '#7d0e19',
    face: '#f58292',
    inner: '#eb6c7e',
    charm: 'heart',
    charmColor: '#ff1e42',
    pendantIcon: '❤️',
    ref: 'nightmare_bobbybearhug.webp',
    hello: '抱抱！我是巨型夜梦抱抱熊，宽大的熊掌需要温柔地缝补一下！',
    thanks: '暖洋洋的！谢谢你的爱心修理，给你一个超级大熊抱！',
  },
  nightmare_kickinchicken: {
    name: '夜梦酷酷鸡 (巨型怪兽)',
    enName: 'Monster KickinChicken',
    who: '巨型高挑金鸡怪兽',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    posture: 'biped_raptor',
    fur: '#ebbd15',
    accent: '#e86412',
    face: '#fcdb56',
    inner: '#d44d19',
    charm: 'star',
    charmColor: '#e62e25',
    pendantIcon: '⭐',
    ref: 'nightmare_kickinchicken.webp',
    hello: '咯咯哒！我是巨型夜梦酷酷鸡，帅气的长手臂和大鸟爪沾上泥巴啦！',
    thanks: '太酷啦！星星胸章和拉链闪闪发亮，看我再来一个高空飞跃！',
  },
};

export const NIGHTMARE_CRITTERS = {
  nightmare_babachops: {
    name: '噩梦芭芭羊 (巨型怪兽)',
    enName: 'Monster Baba Chops',
    who: '巨型黑毛暗夜怪兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'woolly_sheep',
    fur: '#17171c',
    accent: '#e2e6ed',
    face: '#e8ecf2',
    inner: '#8c9099',
    charm: 'skull',
    charmColor: '#f5f7fa',
    pendantIcon: '💀',
    ref: 'babachops.webp',
    hello: '咩……我是巨型噩梦芭芭羊，帮我梳理一下蓬松黑毛和白色大蹄子吧！',
    thanks: '咩哈哈！蓬松的黑毛和白蹄子都焕然一新，谢谢你！',
  },
  nightmare_icky: {
    name: '噩梦伊奇蛙 (巨型怪兽)',
    enName: 'Monster Icky Licky',
    who: '巨型黄斑毒蛙怪兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'crouching_frog',
    fur: '#161a16',
    accent: '#d6de23',
    face: '#e0e838',
    inner: '#596e14',
    charm: 'biohazard',
    charmColor: '#e62229',
    pendantIcon: '☣️',
    ref: 'ickylicky.webp',
    hello: '呱呱！我是巨型噩梦伊奇蛙，跳得太猛把黄黑花纹和脚蹼弄脏啦！',
    thanks: '呱！黄黑毒蛙花纹亮晶晶，我的长蛙腿又能跳三米高啦！',
  },
  nightmare_rabie: {
    name: '噩梦蕾比蝠 (巨型怪兽)',
    enName: 'Monster Rabie Baby',
    who: '巨型赤翼蝙蝠怪兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'wing_walking_bat',
    fur: '#e2dfe8',
    accent: '#c41d52',
    face: '#f2eff7',
    inner: '#d9386a',
    charm: 'teardrop',
    charmColor: '#e01b24',
    pendantIcon: '🩸',
    ref: 'rabiebaby.webp',
    hello: '吱吱！我是巨型蝠翼蕾比蝠，夜里撑着大红蝠翼爬行时弄脏啦！',
    thanks: '太漂亮啦！高耸的红蝠翼和红宝石挂饰都亮晶晶的！',
  },
  nightmare_allister: {
    name: '噩梦阿利鳄 (巨型怪兽)',
    enName: 'Monster Allister Gator',
    who: '巨型利齿沼泽鳄兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'sprawling_gator',
    fur: '#3a6e28',
    accent: '#829c2c',
    face: '#85ab46',
    inner: '#244718',
    charm: 'crossbones',
    charmColor: '#f2f4f7',
    pendantIcon: '🦴',
    ref: 'allistergator.webp',
    hello: '嗷呜……我是巨型鳄鱼阿利，在泥潭里爬行太久，满嘴尖牙和鳞片都脏啦！',
    thanks: '哈哈！绿鳞片、尖牙和长尾巴都擦得发亮，我又可以晒太阳啦！',
  },
  nightmare_simon: {
    name: '噩梦西蒙龙 (巨型怪兽)',
    enName: 'Monster Simon Smoke',
    who: '巨型双翼火焰飞龙',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'winged_dragon',
    fur: '#c9251c',
    accent: '#e0b826',
    face: '#e8dec8',
    inner: '#80150f',
    charm: 'dollar',
    charmColor: '#ffd700',
    pendantIcon: '💲',
    ref: 'simonsmoke.webp',
    hello: '吼吼！我是巨型飞龙西蒙，展开双翼和龙爪飞越山谷时擦伤了，帮我修修吧！',
    thanks: '酷毙了！金龙角、双翼和白利爪闪闪发光，我们一起冲上云霄！',
  },
  nightmare_poe: {
    name: '噩梦坡小鸦 (巨型怪兽)',
    enName: 'Monster Poe',
    who: '巨型暗夜渡鸦怪兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'gothic_raven',
    fur: '#2f2942',
    accent: '#8378a6',
    face: '#8a7fb0',
    inner: '#1e192b',
    charm: 'stormcloud',
    charmColor: '#ffd23f',
    pendantIcon: '⛈️',
    ref: 'poe.webp',
    hello: '哑哑……我是巨型夜鸦坡，穿过暴风雨时把羽爪和尖鸟喙淋湿啦！',
    thanks: '羽毛利爪和雷云吊坠都修好啦，谢谢你温暖的手！',
  },
  nightmare_touille: {
    name: '噩梦图伊鼠 (巨型怪兽)',
    enName: 'Monster Touille',
    who: '巨型长爪大耳鼠兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'hunched_rat',
    fur: '#4a4542',
    accent: '#827770',
    face: '#a39890',
    inner: '#d4746a',
    charm: 'fishbone',
    charmColor: '#3db8d9',
    pendantIcon: '🐟',
    ref: 'touille.webp',
    hello: '吱吱！我是巨型图伊鼠，钻进管道寻宝时把大门牙、长利爪和尾巴弄脏啦！',
    thanks: '哈哈！大圆耳朵、长爪子和鱼骨挂饰干干净净，你真是个好朋友！',
  },
  nightmare_maggie: {
    name: '噩梦玛吉鲨 (巨型怪兽)',
    enName: 'Monster Maggie Mako',
    who: '巨型利齿深海鲨兽',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    posture: 'mako_shark',
    fur: '#1b8ca6',
    accent: '#0d4a5c',
    face: '#eef7fa',
    inner: '#125c73',
    charm: 'fishhook',
    charmColor: '#ebe0b5',
    pendantIcon: '🦈',
    ref: 'maggiemako.webp',
    hello: '哗啦！我是巨型玛吉鲨，冲出水面时把大背鳍和满嘴鲨鱼牙弄脏啦！',
    thanks: '太棒啦！鲨鱼头鳍、强壮胸鳍和尖牙亮晶晶，一起去乘风破浪吧！',
  },
};

export const ALL_NIGHTMARE_CRITTERS = {
  ...NIGHTMARE_SMILING_CRITTERS,
  ...NIGHTMARE_CRITTERS,
};

/* ============================== Geometry Builders ============================== */

function taperedTube(points, radii, tubularSegments = 28, radialSegments = 14, mat) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const geo = new THREE.TubeGeometry(curve, tubularSegments, 1, radialSegments, false);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  const c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    const segIdx = Math.min(tubularSegments, Math.floor(i / (radialSegments + 1)));
    const t = segIdx / tubularSegments;
    const f = t * (radii.length - 1);
    const i0 = Math.floor(f);
    const i1 = Math.min(radii.length - 1, i0 + 1);
    const r = radii[i0] + (radii[i1] - radii[i0]) * (f - i0);
    curve.getPointAt(t, c);
    v.fromBufferAttribute(pos, i).sub(c).multiplyScalar(r).add(c);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function addStitchRing(parent, x, y, z, radius, count, stitchMat, axis = 'y') {
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.014, 0.014), stitchMat);
    bar.userData.noDecal = true;
    if (axis === 'y') {
      bar.position.set(x + Math.cos(a) * radius, y, z + Math.sin(a) * radius);
      bar.rotation.y = -a;
    } else {
      bar.position.set(x, y + Math.sin(a) * radius, z + Math.cos(a) * radius);
      bar.rotation.x = a;
    }
    parent.add(bar);
  }
}

function buildArticulatedLimb(pts, radii, mat, opts = {}) {
  const g = new THREE.Group();
  const tube = taperedTube(pts, radii, 26, 14, mat);
  g.add(tube);

  if (pts.length >= 3 && opts.jointSwelling !== false) {
    const mid = pts[1];
    const midR = (radii[1] || radii[0]) * 1.18;
    const jMesh = new THREE.Mesh(new THREE.SphereGeometry(midR, 12, 10), mat);
    jMesh.position.set(mid[0], mid[1], mid[2]);
    jMesh.scale.set(1.06, 0.92, 1.08);
    g.add(jMesh);
  }
  return g;
}

function buildMonsterGrabbingHand(side, mat, clawMat, numFingers = 4, scale = 1.0) {
  const g = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.SphereGeometry(0.092 * scale, 14, 12), mat);
  palm.scale.set(1.18, 0.78, 1.25);
  g.add(palm);

  // Long articulated monster fingers hanging/reaching down & forward (like q4_3_6csaZIgOxIU.jpg & q6_1_KzJvcqzyqP4.jpg)
  for (let i = 0; i < numFingers; i++) {
    const spread = (i - (numFingers - 1) / 2) * 0.052 * scale;
    const fTube = taperedTube(
      [
        [spread * 0.65, -0.04 * scale, 0.04 * scale],
        [spread * 1.15, -0.15 * scale, 0.11 * scale],
        [spread * 1.25, -0.25 * scale, 0.07 * scale],
      ],
      [0.028 * scale, 0.023 * scale, 0.016 * scale],
      10, 8, mat
    );
    g.add(fTube);

    if (clawMat) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.016 * scale, 0.070 * scale, 8), clawMat);
      claw.position.set(spread * 1.28, -0.29 * scale, 0.06 * scale);
      claw.rotation.x = Math.PI * 0.88;
      g.add(claw);
    }
  }

  // Opposable inner monster thumb
  const thumbX = -side * 0.08 * scale;
  const thumbTube = taperedTube(
    [
      [thumbX * 0.6, -0.02 * scale, 0.02 * scale],
      [thumbX * 1.25, -0.12 * scale, 0.08 * scale],
    ],
    [0.026 * scale, 0.017 * scale],
    8, 8, mat
  );
  g.add(thumbTube);
  return g;
}

function buildClawedPaw(mat, clawMat, numToes = 4, scale = 1.0, spread = 0.065) {
  const g = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.SphereGeometry(0.11 * scale, 14, 12), mat);
  palm.scale.set(1.25, 0.52, 1.45);
  palm.castShadow = true;
  g.add(palm);

  for (let i = 0; i < numToes; i++) {
    const off = (i - (numToes - 1) / 2) * spread * scale;
    const toe = new THREE.Mesh(new THREE.SphereGeometry(0.044 * scale, 10, 8), mat);
    toe.scale.set(0.88, 0.68, 1.65);
    toe.position.set(off, -0.01 * scale, 0.11 * scale);
    g.add(toe);

    if (clawMat) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.024 * scale, 0.105 * scale, 8), clawMat);
      claw.rotation.x = Math.PI * 0.44;
      claw.position.set(off, -0.015 * scale, 0.19 * scale);
      g.add(claw);
    }
  }
  return g;
}

function buildHoofFoot(hoofMat, scale = 1.0) {
  const g = new THREE.Group();
  const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.085 * scale, 0.112 * scale, 0.14 * scale, 14), hoofMat);
  hoof.position.y = 0.02 * scale;
  hoof.castShadow = true;
  g.add(hoof);
  const cleft = new THREE.Mesh(
    new THREE.BoxGeometry(0.020 * scale, 0.15 * scale, 0.065 * scale),
    new THREE.MeshStandardMaterial({ color: 0x0d0b10, roughness: 0.9 })
  );
  cleft.position.set(0, 0.02 * scale, 0.08 * scale);
  g.add(cleft);
  return g;
}

function buildZipperStrip(pts, matSilver) {
  const g = new THREE.Group();
  const track = taperedTube(pts, pts.map(() => 0.018), 16, 8, matSilver);
  track.userData.noDecal = true;
  g.add(track);
  const pull = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.075, 0.024), matSilver);
  pull.position.set(pts[0][0], pts[0][1] - 0.03, pts[0][2] + 0.015);
  pull.userData.noDecal = true;
  g.add(pull);
  return g;
}

/* ============================== Poppy Playtime Crescent-Cheek Monster Head Builder ============================== */

function buildSpeciesHead(id, cfg, furMat, accentMat, faceMat, innerMat, darkVoidMat) {
  const head = new THREE.Group();
  head.name = 'head';

  // Species-specific cheek flare & height ratio
  let cheekFlare = 0.54;
  let crownNarrow = 0.84;
  let yScale = 0.90;
  if (id === 'nightmare_catnap' || id === 'nightmare_bobbybearhug' || id === 'nightmare_icky') {
    cheekFlare = 0.64;
  } else if (id === 'nightmare_pickypiggy' || id === 'nightmare_bubbabubbaphant' || id === 'nightmare_maggie' || id === 'nightmare_allister') {
    cheekFlare = 0.58;
  }
  if (id === 'nightmare_icky') yScale = 0.76;
  if (id === 'nightmare_allister') yScale = 0.84;

  const skullGeo = new THREE.SphereGeometry(0.45, 40, 32);
  const pos = skullGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);
    const ny = y / 0.45;
    const nx = x / 0.45;
    const nz = z / 0.45;

    // 1. Narrower upper cranium above the smile cheeks (Poppy Playtime wedge/crescent head silhouette)
    if (ny > 0.08) {
      const upperT = Math.min(1.0, (ny - 0.08) / 0.85);
      x *= 1.0 - (1.0 - crownNarrow) * upperT;
    }

    // 2. Wide flaring crescent smile cheeks across the mid-lower face (-0.62 < ny < 0.20)
    const smileBand = Math.exp(-Math.pow((ny + 0.12) / 0.34, 2));
    x *= 1.06 + cheekFlare * smileBand * (0.40 + 0.60 * Math.abs(nx));

    // Upturned outer smile cheek tips (iconic CatNap / Bobby / Smiling Critters grin corners)
    if (Math.abs(nx) > 0.50 && ny > -0.45 && ny < 0.25) {
      y += 0.065 * smileBand * (Math.abs(nx) - 0.50);
    }

    // Deep U-jaw drop at bottom chin
    if (ny < -0.15) {
      y *= 1.18;
    } else {
      y *= yScale;
    }
    z *= 0.85;

    // 3. Carve a deep, wide recessed oral cavity across the lower front face (ny < 0.08, nz > 0.18)
    // so the wide crescent black mouthVoid, lipRim, and species teeth sit 100% UNOBSTRUCTED in front!
    if (nz > 0.18 && ny < 0.08 && ny > -0.88 && Math.abs(nx) < 0.90) {
      const mouthFactor = Math.cos((nx / 0.90) * (Math.PI / 2)) * Math.sin(((0.08 - ny) / 0.96) * Math.PI);
      z -= 0.18 * Math.max(0, mouthFactor);
    }

    pos.setXYZ(i, x, y, z);
  }
  skullGeo.computeVertexNormals();

  const headBaseMat = id === 'nightmare_babachops' ? faceMat : furMat;
  const skullMesh = new THREE.Mesh(skullGeo, headBaseMat);
  skullMesh.castShadow = true;
  skullMesh.receiveShadow = true;
  head.add(skullMesh);

  const mw = 0.44 + (cheekFlare - 0.54) * 0.45;

  // Lower jaw white mask on Maggie Mako (matches q6_0_-JaJLC7YLBg.jpg panel 5)
  if (id === 'nightmare_maggie') {
    const jawMask = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 18), faceMat);
    jawMask.scale.set(1.36, 0.66, 0.72);
    jawMask.position.set(0, -0.16, 0.14);
    head.add(jawMask);
  }

  // Rabie Baby fluffy white cheek ruff & crimson domino eye mask (matches q6_0_-JaJLC7YLBg.jpg panel 8)
  if (id === 'nightmare_rabie') {
    const ruffMat = plushMaterial('#f5f3fa');
    for (let i = 0; i < 10; i++) {
      const a = (i / 9) * Math.PI * 1.2 - Math.PI * 0.1;
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), ruffMat);
      puff.position.set(Math.cos(a) * 0.48, -0.08 - Math.sin(a) * 0.20, 0.10);
      head.add(puff);
    }
    [-1, 1].forEach((s) => {
      const patch = new THREE.Mesh(new THREE.SphereGeometry(0.145, 14, 12), accentMat);
      patch.scale.set(1.18, 0.95, 0.36);
      patch.position.set(s * 0.15, 0.16, 0.34);
      patch.rotation.z = -s * 0.18;
      head.add(patch);
    });
  }

  // Massive Cheek-to-Cheek Crescent Black Mouth Cavern (occupies ~70% of the lower face!)
  const mouthShape = new THREE.Shape();
  mouthShape.moveTo(-mw, 0.08);
  mouthShape.quadraticCurveTo(-mw * 0.46, -0.02, 0, -0.025);
  mouthShape.quadraticCurveTo(mw * 0.46, -0.02, mw, 0.08);
  mouthShape.bezierCurveTo(mw * 0.86, -0.22, mw * 0.40, -0.33, 0, -0.33);
  mouthShape.bezierCurveTo(-mw * 0.40, -0.33, -mw * 0.86, -0.22, -mw, 0.08);

  const mouthGeo = new THREE.ExtrudeGeometry(mouthShape, {
    depth: 0.12,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.012,
    bevelSegments: 3,
  });
  const mPos = mouthGeo.attributes.position;
  for (let i = 0; i < mPos.count; i++) {
    const mx = mPos.getX(i);
    const my = mPos.getY(i);
    const mz = mPos.getZ(i);
    mPos.setZ(i, mz - 0.24 * (mx * mx) - 0.08 * (my * my));
  }
  mouthGeo.computeVertexNormals();
  const mouthVoid = new THREE.Mesh(mouthGeo, darkVoidMat);
  mouthVoid.position.set(0, -0.01, 0.29);
  mouthVoid.userData.noDecal = true;
  head.add(mouthVoid);

  // Expressive sculpted lip rim tracing the wide crescent smile
  const zCorner = 0.38 - 0.24 * mw * mw;
  const rimPts = [
    [-mw * 1.01, 0.08, zCorner],
    [-mw * 0.66, -0.19, 0.39],
    [0, -0.33, 0.41],
    [mw * 0.66, -0.19, 0.39],
    [mw * 1.01, 0.08, zCorner],
    [mw * 0.52, -0.01, 0.40],
    [0, -0.03, 0.43],
    [-mw * 0.52, -0.01, 0.40],
    [-mw * 1.01, 0.08, zCorner],
  ];
  const rimMat = id === 'nightmare_icky' ? accentMat : (id === 'nightmare_dogday' || id === 'nightmare_maggie' ? faceMat : (id === 'nightmare_babachops' ? faceMat : furMat));
  const lipRim = taperedTube(rimPts, [0.028, 0.034, 0.038, 0.034, 0.028, 0.026, 0.028, 0.026, 0.028], 40, 12, rimMat);
  lipRim.userData.noDecal = true;
  head.add(lipRim);

  // Large Vertical-Oval Sunken Black Eye Sockets + Glowing White Ring Pupils (○)
  const eyes = new THREE.Group();
  eyes.name = 'eyes';
  const eyeX = id === 'nightmare_icky' ? 0.19 : 0.145;
  const eyeY = id === 'nightmare_icky' ? 0.34 : 0.165;
  const eyeZ = id === 'nightmare_icky' ? 0.22 : 0.35;

  const socketVoidMat = new THREE.MeshBasicMaterial({ color: 0x030206 });
  const pupilRingMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

  [-1, 1].forEach((side) => {
    const eg = new THREE.Group();
    eg.name = side < 0 ? 'leftEye' : 'rightEye';
    eg.position.set(side * eyeX, eyeY, eyeZ);

    if (id === 'nightmare_icky') {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.145, 16, 14), furMat);
      dome.position.set(0, 0.02, -0.03);
      eg.add(dome);
      const yellowBrow = new THREE.Mesh(new THREE.TorusGeometry(0.112, 0.022, 8, 18, Math.PI), accentMat);
      yellowBrow.position.set(0, 0.02, 0.06);
      eg.add(yellowBrow);
    }

    const sock = new THREE.Mesh(new THREE.SphereGeometry(0.118, 18, 14), socketVoidMat);
    sock.scale.set(0.94, 1.24, 0.48);
    sock.rotation.z = side * 0.08;
    sock.userData.noDecal = true;
    eg.add(sock);

    // Stark glowing white ring pupil (○) in center of pitch-black socket
    const pupil = new THREE.Mesh(new THREE.RingGeometry(0.015, 0.034, 22), pupilRingMat);
    pupil.position.set(-side * 0.006, -0.008, 0.058);
    pupil.userData.noDecal = true;
    eg.add(pupil);

    // Fierce V-scowling upper brow ridge for the 8 Nightmare Critters
    if (cfg.group === 'nightmare_critters' && id !== 'nightmare_icky') {
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.044, 0.08), id === 'nightmare_babachops' ? furMat : accentMat);
      brow.position.set(0, 0.095, 0.04);
      brow.rotation.z = side < 0 ? -0.34 : 0.34;
      brow.userData.noDecal = true;
      eg.add(brow);
    }

    eyes.add(eg);
  });
  head.add(eyes);

  // Species-specific muzzle mounds, noses, beaks, snouts, and teeth
  const whiteToothMat = new THREE.MeshStandardMaterial({ color: 0xf7f8fa, roughness: 0.25 });
  const blackNoseMat = eyeMaterial();

  // Colored muzzle mound on Bobby BearHug, DogDay & Touille (like q5_2_257mUiJAIx8.jpg & q6_0_-JaJLC7YLBg.jpg)
  if (id === 'nightmare_bobbybearhug' || id === 'nightmare_dogday' || id === 'nightmare_touille') {
    const muz = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 12), faceMat);
    muz.scale.set(1.38, 0.65, 0.65);
    muz.position.set(0, 0.035, 0.40);
    head.add(muz);
  }

  if (id === 'nightmare_kickinchicken' || id === 'nightmare_poe') {
    const beakMat = new THREE.MeshStandardMaterial({
      color: id === 'nightmare_kickinchicken' ? 0xf25c16 : 0x7c6ea3,
      roughness: 0.4,
    });
    const upperBeak = new THREE.Mesh(new THREE.ConeGeometry(0.088, 0.22, 12), beakMat);
    upperBeak.rotation.x = Math.PI * 0.46;
    upperBeak.scale.set(1.25, 1.0, 0.76);
    upperBeak.position.set(0, 0.04, 0.49);
    head.add(upperBeak);
  } else if (id === 'nightmare_pickypiggy') {
    const snout = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.13, 0.10, 18), faceMat);
    snout.rotation.x = Math.PI / 2;
    snout.scale.set(1.32, 1.0, 0.85);
    snout.position.set(0, 0.05, 0.45);
    head.add(snout);
    [-0.045, 0.045].forEach((nx) => {
      const hole = new THREE.Mesh(new THREE.SphereGeometry(0.026, 10, 8), darkVoidMat);
      hole.scale.set(0.8, 1.2, 0.5);
      hole.position.set(nx, 0.05, 0.50);
      head.add(hole);
    });
  } else if (id === 'nightmare_craftycorn') {
    const snout = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 12), furMat);
    snout.scale.set(1.25, 0.70, 0.88);
    snout.position.set(0, 0.035, 0.42);
    head.add(snout);
    [-0.045, 0.045].forEach((nx) => {
      const hole = new THREE.Mesh(new THREE.SphereGeometry(0.020, 8, 8), darkVoidMat);
      hole.position.set(nx, 0.04, 0.50);
      head.add(hole);
    });
  } else if (id === 'nightmare_allister' || id === 'nightmare_simon') {
    const snout = new THREE.Mesh(new THREE.SphereGeometry(0.165, 18, 14), furMat);
    snout.scale.set(1.42, 0.65, 1.22);
    snout.position.set(0, 0.035, 0.44);
    head.add(snout);
    [-0.065, 0.065].forEach((nx) => {
      const hole = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), darkVoidMat);
      hole.position.set(nx, 0.06, 0.58);
      head.add(hole);
    });
  } else if (id !== 'nightmare_bubbabubbaphant' && id !== 'nightmare_icky' && id !== 'nightmare_maggie') {
    const noseMat = id === 'nightmare_touille' ? new THREE.MeshStandardMaterial({ color: 0xe37b74, roughness: 0.45 }) : blackNoseMat;
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.054, 12, 10), noseMat);
    nose.scale.set(1.32, 0.82, 0.88);
    nose.position.set(0, 0.045, 0.46);
    head.add(nose);
  }

  // Canonical Species Teeth & Tongues (ONLY where present in YouTube Bigger Bodies / Phase-2 animations!)
  if (id === 'nightmare_touille') {
    // Touille's twin upper white rat incisors (q6_0_-JaJLC7YLBg.jpg panel 3)
    [-0.034, 0.034].forEach((tx) => {
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.054, 0.105, 0.026), whiteToothMat);
      tooth.position.set(tx, -0.075, 0.42);
      head.add(tooth);
    });
  } else if (id === 'nightmare_rabie' || id === 'nightmare_simon') {
    [-0.16, 0.16].forEach((tx) => {
      const fang = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.115, 10), whiteToothMat);
      fang.rotation.x = Math.PI;
      fang.position.set(tx, -0.055, 0.41);
      head.add(fang);
    });
    if (id === 'nightmare_simon') {
      [-0.11, 0.11].forEach((tx) => {
        const lfang = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.088, 10), whiteToothMat);
        lfang.position.set(tx, -0.30, 0.40);
        head.add(lfang);
      });
    }
  } else if (id === 'nightmare_allister') {
    [-0.26, -0.16, -0.06, 0.06, 0.16, 0.26].forEach((tx) => {
      const ut = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.082, 8), whiteToothMat);
      ut.rotation.x = Math.PI;
      ut.position.set(tx, -0.045 - Math.abs(tx) * 0.04, 0.41);
      head.add(ut);
    });
    [-0.20, -0.07, 0.07, 0.20].forEach((tx) => {
      const lt = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.076, 8), whiteToothMat);
      lt.position.set(tx, -0.30 + Math.abs(tx) * 0.14, 0.40);
      head.add(lt);
    });
  } else if (id === 'nightmare_maggie') {
    for (let i = -4; i <= 4; i++) {
      const tx = i * 0.068;
      const uy = -0.04 + Math.abs(i) * 0.012;
      const ut = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.088, 6), whiteToothMat);
      ut.rotation.x = Math.PI;
      ut.position.set(tx, uy, 0.41 - Math.abs(i) * 0.010);
      head.add(ut);
    }
    for (let i = -3; i <= 3; i++) {
      const tx = i * 0.070;
      const ly = -0.31 + Math.abs(i) * 0.020;
      const lt = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.080, 6), whiteToothMat);
      lt.position.set(tx, ly, 0.40 - Math.abs(i) * 0.010);
      head.add(lt);
    }
  } else if (id === 'nightmare_icky') {
    // Icky Licky's whipping crimson poison-dart frog tongue
    const tongueMat = plushMaterial('#e01b3c');
    const tongue = taperedTube(
      [[0, -0.20, 0.36], [0.04, -0.28, 0.50], [0.10, -0.38, 0.62], [0.06, -0.44, 0.56]],
      [0.036, 0.032, 0.028, 0.042],
      16, 10, tongueMat
    );
    head.add(tongue);
  }

  return { head, eyes };
}

/* ============================== Ears & Head Crests Builder ============================== */

function attachSpeciesEarsAndCrests(id, cfg, head, furMat, accentMat, faceMat, innerMat) {
  let leftEar = null;
  let rightEar = null;

  const makePair = (buildOne) => {
    leftEar = buildOne(-1);
    leftEar.name = 'leftEar';
    rightEar = buildOne(1);
    rightEar.name = 'rightEar';
    head.add(leftEar, rightEar);
  };

  if (id === 'nightmare_hoppyhopscotch') {
    // Enormous wide V-splayed rabbit ears (like q4_3_6csaZIgOxIU.jpg & q6_1_KzJvcqzyqP4.jpg)
    makePair((s) => {
      const g = new THREE.Group();
      const outer = taperedTube(
        [[0, 0, 0], [s * 0.16, 0.40, -0.02], [s * 0.34, 0.80, 0.02], [s * 0.46, 1.08, 0.06]],
        [0.095, 0.125, 0.105, 0.040], 20, 12, furMat
      );
      outer.scale.z = 0.46;
      const inner = taperedTube(
        [[0, 0.06, 0.03], [s * 0.15, 0.40, 0.01], [s * 0.32, 0.76, 0.04], [s * 0.42, 0.98, 0.07]],
        [0.055, 0.080, 0.065, 0.022], 16, 10, innerMat
      );
      inner.scale.z = 0.34;
      g.add(outer, inner);
      g.position.set(s * 0.12, 0.36, -0.02);
      return g;
    });
  } else if (id === 'nightmare_bubbabubbaphant') {
    makePair((s) => {
      const g = new THREE.Group();
      const main = new THREE.Mesh(new THREE.SphereGeometry(0.43, 24, 20), furMat);
      main.scale.set(0.90, 1.28, 0.20);
      main.position.set(s * 0.22, -0.02, -0.04);
      const inner = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 16), innerMat);
      inner.scale.set(0.84, 1.18, 0.16);
      inner.position.set(s * 0.21, -0.02, 0.02);
      g.add(main, inner);
      g.position.set(s * 0.32, 0.08, -0.06);
      return g;
    });
  } else if (id === 'nightmare_dogday') {
    makePair((s) => {
      const g = taperedTube(
        [[0, 0, 0], [s * 0.14, -0.06, 0], [s * 0.18, -0.34, 0.03], [s * 0.14, -0.58, 0.05]],
        [0.11, 0.15, 0.17, 0.10], 18, 12, innerMat
      );
      g.scale.z = 0.45;
      g.position.set(s * 0.32, 0.24, -0.02);
      return g;
    });
    [-0.08, 0, 0.08].forEach((tx, idx) => {
      const tuft = new THREE.Mesh(new THREE.SphereGeometry(0.068, 10, 10), innerMat);
      tuft.scale.set(0.9, 1.35, 0.9);
      tuft.position.set(tx, 0.42 + (idx === 1 ? 0.02 : 0), 0.08);
      head.add(tuft);
    });
  } else if (id === 'nightmare_bobbybearhug') {
    makePair((s) => {
      const g = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 14), furMat);
      outer.scale.set(1.05, 1.05, 0.46);
      const inner = new THREE.Mesh(new THREE.SphereGeometry(0.10, 14, 12), innerMat);
      inner.scale.set(1.0, 1.0, 0.35);
      inner.position.set(0, -0.01, 0.04);
      g.add(outer, inner);
      g.position.set(s * 0.30, 0.35, -0.02);
      return g;
    });
    const topNub = new THREE.Mesh(new THREE.CapsuleGeometry(0.038, 0.075, 8, 10), furMat);
    topNub.position.set(0, 0.44, 0.04);
    head.add(topNub);
  } else if (id === 'nightmare_pickypiggy') {
    makePair((s) => {
      const g = taperedTube(
        [[0, 0, 0], [s * 0.16, 0.12, 0.02], [s * 0.28, 0.18, 0.06]],
        [0.11, 0.13, 0.03], 14, 10, furMat
      );
      g.scale.z = 0.46;
      g.position.set(s * 0.26, 0.30, 0.02);
      return g;
    });
  } else if (id === 'nightmare_craftycorn') {
    makePair((s) => {
      const g = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.ConeGeometry(0.10, 0.26, 12), furMat);
      outer.scale.z = 0.52;
      outer.position.y = 0.11;
      const inner = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.18, 10), accentMat);
      inner.scale.z = 0.35;
      inner.position.set(0, 0.10, 0.03);
      g.add(outer, inner);
      g.position.set(s * 0.28, 0.30, -0.02);
      g.rotation.z = -s * 0.48;
      return g;
    });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xf4f8fc, roughness: 0.25, metalness: 0.15 });
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.068, 0.44, 16), hornMat);
    horn.position.set(0, 0.60, 0.12);
    horn.rotation.x = 0.18;
    head.add(horn);
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.056 - i * 0.011, 0.010, 8, 16), accentMat);
      ring.rotation.x = Math.PI / 2 + 0.18;
      ring.position.set(0, 0.43 + i * 0.085, 0.10 + i * 0.015);
      head.add(ring);
    }
    [-0.14, -0.05, 0.05, 0.14].forEach((bx, idx) => {
      const curl = new THREE.Mesh(new THREE.SphereGeometry(0.095, 14, 12), accentMat);
      curl.scale.set(1.15, 0.9, 1.15);
      curl.position.set(bx, 0.36 + (idx % 2) * 0.03, 0.20);
      head.add(curl);
    });
  } else if (id === 'nightmare_kickinchicken' || id === 'nightmare_poe') {
    makePair((s) => {
      const g = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.20, 10), furMat);
      g.position.set(s * 0.36, 0.08, -0.02);
      g.rotation.z = -s * 1.1;
      return g;
    });
    [-1, 0, 1].forEach((i) => {
      const plume = taperedTube(
        [[i * 0.04, 0.36, 0.02], [i * 0.08, 0.54, 0.06], [i * 0.11, 0.62, -0.04]],
        [0.065, 0.075, 0.025], 12, 10, furMat
      );
      head.add(plume);
    });
  } else if (id === 'nightmare_touille') {
    makePair((s) => {
      const g = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.SphereGeometry(0.25, 20, 16), furMat);
      outer.scale.set(1.0, 1.15, 0.24);
      const inner = new THREE.Mesh(new THREE.SphereGeometry(0.19, 18, 14), innerMat);
      inner.scale.set(1.0, 1.12, 0.20);
      inner.position.set(0, -0.01, 0.03);
      g.add(outer, inner);
      g.position.set(s * 0.32, 0.38, -0.02);
      g.rotation.z = -s * 0.34;
      return g;
    });
  } else if (id === 'nightmare_rabie') {
    makePair((s) => {
      const g = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 14), furMat);
      outer.scale.z = 0.38;
      outer.position.y = 0.16;
      const inner = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.32, 12), innerMat);
      inner.scale.z = 0.28;
      inner.position.set(0, 0.14, 0.03);
      g.add(outer, inner);
      g.position.set(s * 0.28, 0.34, -0.02);
      g.rotation.z = -s * 0.24;
      return g;
    });
  } else if (id === 'nightmare_simon') {
    makePair((s) => {
      const g = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.24, 10), furMat);
      g.position.set(s * 0.34, 0.24, -0.04);
      g.rotation.z = -s * 0.85;
      return g;
    });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xf5d43d, roughness: 0.28, metalness: 0.18 });
    [-1, 1].forEach((s) => {
      const horn = taperedTube(
        [[s * 0.16, 0.36, 0.04], [s * 0.32, 0.60, 0.02], [s * 0.40, 0.82, 0.08], [s * 0.28, 0.98, 0.16]],
        [0.082, 0.066, 0.044, 0.016], 18, 12, hornMat
      );
      head.add(horn);
    });
    [-0.07, 0, 0.07].forEach((cx, idx) => {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.048, 0.16 + (idx === 1 ? 0.04 : 0), 8), furMat);
      spike.position.set(cx, 0.44, 0.08);
      head.add(spike);
    });
  } else if (id === 'nightmare_maggie') {
    const headFin = taperedTube(
      [[0, 0.36, 0.06], [0, 0.64, -0.02], [0, 0.86, -0.14]],
      [0.11, 0.075, 0.018], 14, 10, accentMat
    );
    headFin.scale.x = 0.30;
    head.add(headFin);
    makePair((s) => {
      const fin = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 8), accentMat);
      fin.scale.z = 0.35;
      fin.position.set(s * 0.40, 0.04, -0.04);
      fin.rotation.z = -s * 1.25;
      return fin;
    });
  } else if (id === 'nightmare_babachops') {
    const hoodPositions = [
      [0, 0.40, 0.04, 0.20], [-0.20, 0.36, 0.04, 0.18], [0.20, 0.36, 0.04, 0.18],
      [-0.36, 0.22, -0.02, 0.18], [0.36, 0.22, -0.02, 0.18],
      [-0.42, 0.02, -0.04, 0.17], [0.42, 0.02, -0.04, 0.17],
      [0, 0.28, -0.22, 0.26], [-0.22, 0.20, -0.20, 0.22], [0.22, 0.20, -0.20, 0.22],
    ];
    hoodPositions.forEach(([wx, wy, wz, wr]) => {
      const p = new THREE.Mesh(new THREE.SphereGeometry(wr, 12, 10), furMat);
      p.position.set(wx, wy, wz);
      head.add(p);
    });
    makePair((s) => {
      const g = new THREE.Group();
      const base = new THREE.Mesh(new THREE.SphereGeometry(0.095, 12, 10), furMat);
      base.scale.set(1.4, 0.7, 0.6);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 10), faceMat);
      tip.scale.set(1.2, 0.65, 0.55);
      tip.position.set(s * 0.07, 0.02, 0.02);
      g.add(base, tip);
      g.position.set(s * 0.34, 0.30, 0.08);
      return g;
    });
  } else if (id === 'nightmare_icky' || id === 'nightmare_allister') {
    makePair((s) => {
      const ridge = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), accentMat);
      ridge.scale.set(0.7, 0.9, 1.3);
      ridge.position.set(s * 0.38, 0.14, -0.06);
      return ridge;
    });
  } else {
    makePair((s) => {
      const g = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.34, 14), furMat);
      outer.scale.z = 0.45;
      outer.position.y = 0.14;
      const inner = new THREE.Mesh(new THREE.ConeGeometry(0.095, 0.24, 12), innerMat);
      inner.scale.z = 0.32;
      inner.position.set(0, 0.12, 0.03);
      g.add(outer, inner);
      g.position.set(s * 0.26, 0.32, -0.02);
      g.rotation.z = -s * 0.20;
      return g;
    });
  }

  return { leftEar, rightEar };
}

/* ============================== Charm Pendant Builder ============================== */

function buildCharm(type, colorHex) {
  const g = new THREE.Group();
  g.name = 'smilingPendant';
  const mat = heartGemMaterial(colorHex);
  const strapMat = darkPlushMaterial('#14111a');

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.020, 10, 24), strapMat);
  collar.rotation.x = Math.PI / 2 + 0.20;
  collar.position.set(0, 0.10, -0.04);
  g.add(collar);

  const badge = new THREE.Group();
  badge.position.set(0, -0.04, 0.13);

  if (type === 'flower') {
    // CraftyCorn's 5-petal rainbow flower charm (matches q4_3_6csaZIgOxIU.jpg & q6_3_7j62XsVgKPk.jpg)
    const petalColors = [0xff2e4c, 0xff8c1a, 0xffe026, 0x2ecc40, 0x268cff];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 10), heartGemMaterial(petalColors[i]));
      pMesh.scale.set(1.0, 1.0, 0.45);
      pMesh.position.set(Math.cos(a) * 0.058, Math.sin(a) * 0.058, 0);
      badge.add(pMesh);
    }
    const center = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 10), heartGemMaterial(0xffe629));
    center.scale.set(1, 1, 0.55);
    center.position.z = 0.01;
    badge.add(center);
    g.add(badge);
    return g;
  }

  const shape = new THREE.Shape();
  if (type === 'moon') {
    shape.absarc(0, 0, 0.11, -Math.PI * 0.65, Math.PI * 0.65, false);
    shape.absarc(0.05, 0.02, 0.085, Math.PI * 0.55, -Math.PI * 0.55, true);
  } else if (type === 'bolt') {
    shape.moveTo(0.02, 0.12); shape.lineTo(-0.08, 0.01); shape.lineTo(-0.01, 0.01);
    shape.lineTo(-0.05, -0.12); shape.lineTo(0.08, 0.01); shape.lineTo(0.01, 0.01);
    shape.closePath();
  } else if (type === 'star') {
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 0.11 : 0.048;
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
      else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    shape.closePath();
  } else if (type === 'heart') {
    shape.moveTo(0, -0.10);
    shape.bezierCurveTo(-0.12, -0.02, -0.12, 0.10, 0, 0.04);
    shape.bezierCurveTo(0.12, 0.10, 0.12, -0.02, 0, -0.10);
  } else {
    shape.absarc(0, 0, 0.095, 0, Math.PI * 2, false);
  }
  const mesh = new THREE.Mesh(
    new THREE.ExtrudeGeometry(shape, { depth: 0.026, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008 }),
    mat
  );
  mesh.position.z = -0.013;
  badge.add(mesh);
  g.add(badge);
  return g;
}

/* ============================== Main Monster Critter Builder ============================== */

export function buildNightmareCritter(id) {
  const cfg = ALL_NIGHTMARE_CRITTERS[id] || NIGHTMARE_SMILING_CRITTERS.nightmare_catnap;
  const root = new THREE.Group();
  root.name = id;

  const furMat = plushMaterial(cfg.fur);
  const accentMat = darkPlushMaterial(cfg.accent);
  const faceMat = plushMaterial(cfg.face);
  const innerMat = plushMaterial(cfg.inner);
  const darkVoidMat = new THREE.MeshBasicMaterial({ color: 0x040307 });
  const clawMat = new THREE.MeshStandardMaterial({ color: 0x141218, roughness: 0.4 });
  const whiteClawMat = new THREE.MeshStandardMaterial({ color: 0xf4f5f8, roughness: 0.3 });
  const silverMat = new THREE.MeshStandardMaterial({ color: 0xd0d7e0, roughness: 0.3, metalness: 0.22 });
  const stitchMat = new THREE.MeshStandardMaterial({ color: 0x0b0a0f, roughness: 0.85 });

  const { head, eyes } = buildSpeciesHead(id, cfg, furMat, accentMat, faceMat, innerMat, darkVoidMat);
  const { leftEar, rightEar } = attachSpeciesEarsAndCrests(id, cfg, head, furMat, accentMat, faceMat, innerMat);

  const torso = new THREE.Group();
  torso.name = 'torso';
  const leftArm = new THREE.Group(); leftArm.name = 'leftArm';
  const rightArm = new THREE.Group(); rightArm.name = 'rightArm';
  const leftLeg = new THREE.Group(); leftLeg.name = 'leftLeg';
  const rightLeg = new THREE.Group(); rightLeg.name = 'rightLeg';
  const tail = new THREE.Group(); tail.name = 'tail';
  const charm = buildCharm(cfg.charm, cfg.charmColor);

  const p = cfg.posture;

  // ============================================================================
  // GROUP A: TALL LANKY BIGGER BODIES BIPEDS (DogDay, Hoppy, PickyPiggy, KickinChicken)
  // Modeled directly after q4_3_6csaZIgOxIU.jpg & q6_1_KzJvcqzyqP4.jpg:
  // High pelvis (y = +0.16), narrow stitched waist, long stalk legs, long hanging arms + 4-fingered hands!
  // ============================================================================
  if (p === 'biped_rabbit' || p === 'biped_raptor' || p === 'biped_hound' || p === 'biped_hog') {
    const isChicken = p === 'biped_raptor';
    const isRabbit = p === 'biped_rabbit';
    const isHog = p === 'biped_hog';
    const isHound = p === 'biped_hound';

    const hipY = isRabbit ? 0.20 : 0.16;
    const shoulderY = isRabbit ? 0.68 : 0.64;
    const neckTopY = isChicken ? 0.86 : 0.76;

    head.scale.setScalar(isChicken ? 0.72 : 0.74);
    head.position.set(0, neckTopY + 0.14, 0.14);
    charm.position.set(0, shoulderY - 0.12, 0.20);

    const waistR = isHog ? 0.18 : (isRabbit ? 0.135 : 0.15);
    const chestR = isHog ? 0.22 : (isRabbit ? 0.185 : 0.20);
    const bodyTube = taperedTube(
      [[0, hipY - 0.04, 0.0], [0, (hipY + shoulderY) * 0.45, 0.03], [0, shoulderY, 0.05], [0, neckTopY, 0.07]],
      [waistR * 1.05, waistR, chestR, waistR * 0.55], 28, 16, furMat
    );
    torso.add(bodyTube);

    const zipper = buildZipperStrip(
      [[0, shoulderY - 0.02, chestR + 0.03], [0, (hipY + shoulderY) * 0.5, waistR + 0.03], [0, hipY, waistR + 0.02]],
      silverMat
    );
    torso.add(zipper);

    // Prominent black cross-stitch seams around shoulders, neck, and hip sockets (q4_3_6csaZIgOxIU.jpg)
    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * (chestR + 0.01), shoulderY - 0.02, 0.05, 0.088, 9, stitchMat, 'x');
      addStitchRing(torso, s * 0.14, hipY, 0.01, 0.082, 8, stitchMat, 'y');
    });
    addStitchRing(torso, 0, shoulderY + 0.06, 0.06, 0.088, 9, stitchMat, 'y');

    if (isRabbit) {
      // Hoppy's skeletal protruding rib cage bars
      for (let i = 0; i < 4; i++) {
        const rib = new THREE.Mesh(new THREE.TorusGeometry(0.175 + i * 0.005, 0.015, 8, 18, Math.PI), accentMat);
        rib.rotation.x = Math.PI / 2 + 0.15;
        rib.position.set(0, hipY + 0.12 + i * 0.095, 0.03);
        torso.add(rib);
      }
    } else if (isHound) {
      const belly = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 14), faceMat);
      belly.scale.set(0.92, 1.55, 0.42);
      belly.position.set(0, (hipY + shoulderY) * 0.5, 0.11);
      torso.add(belly);

      const beltMat = darkPlushMaterial('#2b160c');
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.09, 20), beltMat);
      belt.position.set(0, hipY + 0.05, 0.02);
      torso.add(belt);
      const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.10, 0.04), silverMat);
      buckle.position.set(0, hipY + 0.05, 0.18);
      torso.add(buckle);
    }

    // Super long hanging / reaching monster arms reaching past the hips down to y = -0.18!
    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      const wristX = s * (isHound ? 0.48 : 0.42);
      const wristY = isHound ? -0.06 : -0.18;
      const wristZ = isHound ? 0.30 : 0.20;
      const limb = buildArticulatedLimb(
        [[s * (chestR + 0.02), shoulderY - 0.02, 0.05], [s * 0.40, (shoulderY + wristY) * 0.52, 0.12], [wristX, wristY, wristZ]],
        [0.072, 0.058, 0.052], furMat
      );
      armGrp.add(limb);
      addStitchRing(armGrp, wristX, wristY + 0.04, wristZ, 0.056, 8, stitchMat, 'y');

      if (isHog) {
        const hoof = buildHoofFoot(accentMat, 0.96);
        hoof.position.set(wristX, wristY - 0.05, wristZ);
        armGrp.add(hoof);
      } else {
        const handMat = isHound ? accentMat : furMat;
        const hand = buildMonsterGrabbingHand(s, handMat, clawMat, 4, 1.05);
        hand.position.set(wristX, wristY - 0.02, wristZ + 0.02);
        armGrp.add(hand);
      }
    });

    // Long lanky stalk legs from hipY (+0.16..+0.20) down to turntable (-0.76)
    [-1, 1].forEach((s) => {
      const legGrp = s < 0 ? leftLeg : rightLeg;
      const legPts = isRabbit
        ? [[s * 0.14, hipY, 0.0], [s * 0.24, -0.18, 0.16], [s * 0.17, -0.52, -0.08], [s * 0.20, -0.76, 0.08]]
        : [[s * 0.15, hipY, 0.0], [s * 0.20, (hipY - 0.76) * 0.48, 0.07], [s * 0.20, -0.76, 0.04]];
      const legRadii = isRabbit ? [0.082, 0.066, 0.058, 0.052] : [0.085, 0.068, 0.062];
      legGrp.add(buildArticulatedLimb(legPts, legRadii, furMat));
      addStitchRing(legGrp, s * 0.20, -0.68, 0.05, 0.064, 8, stitchMat, 'y');

      if (isChicken) {
        const foot = buildClawedPaw(accentMat, clawMat, 3, 1.25, 0.085);
        foot.position.set(s * 0.20, -0.78, 0.10);
        legGrp.add(foot);
      } else if (isHog) {
        const hoof = buildHoofFoot(accentMat, 1.08);
        hoof.position.set(s * 0.20, -0.78, 0.05);
        legGrp.add(hoof);
      } else if (isRabbit) {
        const foot = buildClawedPaw(furMat, clawMat, 3, 1.28, 0.085);
        foot.position.set(s * 0.20, -0.78, 0.14);
        legGrp.add(foot);
      } else {
        const foot = buildClawedPaw(accentMat, null, 4, 1.30, 0.07);
        foot.position.set(s * 0.20, -0.78, 0.10);
        legGrp.add(foot);
      }
    });

    if (isHog) {
      tail.add(taperedTube(
        [[0, hipY, -0.14], [0.05, hipY - 0.08, -0.24], [-0.05, hipY - 0.16, -0.28], [0.04, hipY - 0.24, -0.32]],
        [0.028, 0.024, 0.020, 0.012], 18, 8, furMat
      ));
    } else if (isRabbit) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.10, 12, 10), furMat);
      puff.position.set(0, hipY, -0.16);
      tail.add(puff);
    } else {
      tail.add(taperedTube(
        [[0, hipY, -0.14], [0, hipY + 0.10, -0.34], [0, hipY + 0.22, -0.46]],
        [0.050, 0.040, 0.020], 14, 10, furMat
      ));
    }
  }

  // ============================================================================
  // GROUP B: BESPOKE MONSTER PROWLERS / BEHEMOTHS / FLYERS / SWIMMERS
  // ============================================================================
  else if (p === 'feline_stalker') {
    // CatNap: Towering gaunt arched feline stalker (q4_3_6csaZIgOxIU.jpg & q6_1_KzJvcqzyqP4.jpg)
    head.scale.setScalar(0.80);
    head.position.set(0, 0.64, 0.46);
    charm.position.set(0, 0.26, 0.42);

    const spine = taperedTube(
      [[0, 0.42, -0.58], [0, 0.80, -0.22], [0, 0.72, 0.12], [0, 0.50, 0.38]],
      [0.14, 0.22, 0.24, 0.19], 32, 16, furMat
    );
    torso.add(spine);

    for (let i = 0; i < 5; i++) {
      const t = i / 4;
      const rib = new THREE.Mesh(new THREE.TorusGeometry(0.20 - t * 0.025, 0.016, 8, 18, Math.PI * 1.15), accentMat);
      rib.rotation.x = Math.PI * 0.55;
      rib.position.set(0, 0.68 - t * 0.10, -0.24 + t * 0.44);
      torso.add(rib);
    }

    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * 0.20, 0.48, 0.28, 0.088, 9, stitchMat, 'x');
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.18, 0.48, 0.28], [s * 0.64, 0.34, 0.34], [s * 0.46, -0.26, 0.36], [s * 0.40, -0.76, 0.34]],
        [0.078, 0.064, 0.058, 0.052], furMat
      ));
      const paw = buildClawedPaw(accentMat, clawMat, 4, 1.18);
      paw.position.set(s * 0.40, -0.78, 0.38);
      armGrp.add(paw);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.16, 0.42, -0.48], [s * 0.44, 0.08, -0.44], [s * 0.32, -0.42, -0.34], [s * 0.28, -0.76, -0.28]],
        [0.080, 0.064, 0.056, 0.050], furMat
      ));
      const hpaw = buildClawedPaw(accentMat, clawMat, 4, 1.10);
      hpaw.position.set(s * 0.28, -0.78, -0.24);
      legGrp.add(hpaw);
    });

    // Long serpentine cat tail curling up high AND sweeping out
    tail.add(taperedTube(
      [[0, 0.44, -0.56], [0.16, 0.86, -0.72], [-0.18, 1.22, -0.64], [0.14, 1.48, -0.48]],
      [0.058, 0.048, 0.038, 0.024], 28, 12, furMat
    ));
  }

  else if (p === 'knuckle_bear') {
    // Bobby BearHug: Wide spider-limbed crimson bear crouch with huge pink 4-clawed paws (q6_1_KzJvcqzyqP4.jpg)
    head.scale.setScalar(0.84);
    head.position.set(0, 0.44, 0.48);
    charm.position.set(0, 0.08, 0.44);

    const bearBody = taperedTube(
      [[0, 0.28, -0.56], [0, 0.54, -0.18], [0, 0.48, 0.20], [0, 0.38, 0.40]],
      [0.24, 0.34, 0.38, 0.26], 28, 16, furMat
    );
    torso.add(bearBody);

    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * 0.26, 0.36, 0.26, 0.11, 10, stitchMat, 'x');
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.26, 0.36, 0.26], [s * 0.72, 0.08, 0.34], [s * 0.54, -0.38, 0.38], [s * 0.48, -0.75, 0.36]],
        [0.115, 0.098, 0.090, 0.088], furMat
      ));
      const paw = buildClawedPaw(faceMat, clawMat, 4, 1.44, 0.075);
      paw.position.set(s * 0.48, -0.78, 0.42);
      armGrp.add(paw);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.22, 0.28, -0.46], [s * 0.42, -0.15, -0.36], [s * 0.32, -0.75, -0.26]],
        [0.11, 0.090, 0.082], furMat
      ));
      const hpaw = buildClawedPaw(faceMat, clawMat, 4, 1.20, 0.07);
      hpaw.position.set(s * 0.32, -0.78, -0.20);
      legGrp.add(hpaw);
    });

    const bearTail = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), furMat);
    bearTail.position.set(0, 0.32, -0.66);
    tail.add(bearTail);
  }

  else if (p === 'elephant_behemoth') {
    // Bubba Bubbaphant: Towering elephant stalker with floor-length trunk (q4_3_6csaZIgOxIU.jpg & q6_1_KzJvcqzyqP4.jpg)
    head.scale.setScalar(0.80);
    head.position.set(0, 0.62, 0.38);
    charm.position.set(0, 0.22, 0.38);

    const trunk = taperedTube(
      [[0, 0.06, 0.42], [0, -0.35, 0.50], [0, -0.82, 0.48], [0, -1.26, 0.46], [0, -1.36, 0.58], [0, -1.22, 0.68]],
      [0.135, 0.12, 0.11, 0.105, 0.11, 0.115], 32, 14, furMat
    );
    head.add(trunk);
    const trunkTip = new THREE.Mesh(new THREE.CylinderGeometry(0.118, 0.118, 0.16, 16), accentMat);
    trunkTip.position.set(0, -1.24, 0.66);
    trunkTip.rotation.x = -0.35;
    head.add(trunkTip);

    const elBody = taperedTube(
      [[0, 0.30, -0.54], [0, 0.58, -0.16], [0, 0.58, 0.22]],
      [0.24, 0.34, 0.32], 28, 16, furMat
    );
    torso.add(elBody);

    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * 0.24, 0.46, 0.22, 0.11, 10, stitchMat, 'x');
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.24, 0.46, 0.22], [s * 0.54, 0.16, 0.28], [s * 0.40, -0.74, 0.30]],
        [0.115, 0.10, 0.11], furMat
      ));
      const foot = buildClawedPaw(accentMat, whiteClawMat, 3, 1.32, 0.08);
      foot.position.set(s * 0.40, -0.78, 0.34);
      armGrp.add(foot);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.24, 0.30, -0.44], [s * 0.56, 0.10, -0.30], [s * 0.42, -0.74, -0.20]],
        [0.115, 0.10, 0.105], furMat
      ));
      const hfoot = buildClawedPaw(accentMat, whiteClawMat, 3, 1.24, 0.08);
      hfoot.position.set(s * 0.42, -0.78, -0.16);
      legGrp.add(hfoot);
    });

    tail.add(taperedTube([[0, 0.30, -0.56], [0, 0.02, -0.70]], [0.04, 0.025], 12, 8, furMat));
  }

  else if (p === 'equine_unicorn') {
    // CraftyCorn: All 4 cyan hooves planted firmly on the ground with wide-bowed spider-unicorn front elbows (q6_1_KzJvcqzyqP4.jpg)
    head.scale.setScalar(0.78);
    head.position.set(0, 0.58, 0.42);
    charm.position.set(0, 0.18, 0.40);

    const eqBody = taperedTube(
      [[0, 0.34, -0.54], [0, 0.54, -0.18], [0, 0.56, 0.16], [0, 0.58, 0.32]],
      [0.20, 0.25, 0.27, 0.20], 28, 16, furMat
    );
    torso.add(eqBody);

    for (let i = 0; i < 5; i++) {
      const lock = new THREE.Mesh(new THREE.SphereGeometry(0.10, 12, 10), accentMat);
      lock.scale.set(0.65, 1.2, 1.35);
      lock.position.set(0, 0.66 - i * 0.06, 0.14 - i * 0.10);
      torso.add(lock);
    }

    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * 0.20, 0.44, 0.24, 0.09, 9, stitchMat, 'x');
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.20, 0.44, 0.24], [s * 0.62, 0.08, 0.32], [s * 0.38, -0.72, 0.34]],
        [0.090, 0.076, 0.072], furMat
      ));
      const fHoof = buildHoofFoot(accentMat, 1.12);
      fHoof.position.set(s * 0.38, -0.78, 0.34);
      armGrp.add(fHoof);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.19, 0.32, -0.44], [s * 0.36, -0.16, -0.36], [s * 0.28, -0.72, -0.28]],
        [0.092, 0.076, 0.070], furMat
      ));
      const bHoof = buildHoofFoot(accentMat, 1.08);
      bHoof.position.set(s * 0.28, -0.78, -0.28);
      legGrp.add(bHoof);
    });

    // Huge sweeping cyan horse tail reaching down between the legs (q4_3_6csaZIgOxIU.jpg)
    tail.add(taperedTube(
      [[0, 0.34, -0.54], [0.04, 0.05, -0.42], [0.02, -0.38, -0.22], [0.0, -0.68, -0.08]],
      [0.085, 0.155, 0.185, 0.065], 24, 14, accentMat
    ));
  }

  else if (p === 'woolly_sheep') {
    // Baba Chops: Billowing black wool cloud back + skull-white sheep face + white cloven hooves (q6_0_-JaJLC7YLBg.jpg panel 6)
    head.scale.setScalar(0.78);
    head.position.set(0, 0.36, 0.48);
    charm.position.set(0, 0.04, 0.42);

    const sheepBody = taperedTube(
      [[0, 0.44, -0.62], [0, 0.66, -0.22], [0, 0.52, 0.18], [0, 0.36, 0.38]],
      [0.26, 0.38, 0.40, 0.28], 28, 16, furMat
    );
    torso.add(sheepBody);

    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.17 + (i % 3) * 0.025, 12, 10), furMat);
      puff.position.set(Math.cos(a) * 0.28, 0.50 + Math.sin(a * 2) * 0.14, -0.38 + (i / 20) * 0.70);
      torso.add(puff);
    }

    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.24, 0.32, 0.22], [s * 0.58, 0.10, 0.32], [s * 0.42, -0.68, 0.38]],
        [0.10, 0.082, 0.076], furMat
      ));
      const hoof = buildHoofFoot(faceMat, 1.28);
      hoof.position.set(s * 0.42, -0.76, 0.38);
      armGrp.add(hoof);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.22, 0.36, -0.48], [s * 0.44, -0.08, -0.38], [s * 0.30, -0.70, -0.26]],
        [0.10, 0.080, 0.072], furMat
      ));
      const bHoof = buildHoofFoot(faceMat, 1.18);
      bHoof.position.set(s * 0.30, -0.76, -0.26);
      legGrp.add(bHoof);
    });

    const woolTail = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), furMat);
    woolTail.position.set(0, 0.46, -0.74);
    tail.add(woolTail);
  }

  else if (p === 'crouching_frog') {
    // Icky Licky: Ultra-low belly-crouching poison-dart bullfrog with high Z-folded hind jumping legs (q6_0_-JaJLC7YLBg.jpg panel 4)
    head.scale.setScalar(0.80);
    head.position.set(0, 0.08, 0.52);
    charm.position.set(0, -0.22, 0.44);

    const frogBody = taperedTube(
      [[0, -0.04, -0.52], [0, 0.22, -0.14], [0, 0.12, 0.26]],
      [0.22, 0.35, 0.32], 26, 16, furMat
    );
    torso.add(frogBody);

    [
      [0, 0.26, -0.14, 0.22, 0.08, 0.32],
      [-0.22, 0.16, -0.04, 0.14, 0.12, 0.22],
      [0.22, 0.16, -0.04, 0.14, 0.12, 0.22],
      [-0.18, 0.08, -0.36, 0.15, 0.10, 0.20],
      [0.18, 0.08, -0.36, 0.15, 0.10, 0.20],
    ].forEach(([bx, by, bz, sx, sy, sz]) => {
      const patch = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 12), accentMat);
      patch.scale.set(sx, sy, sz);
      patch.position.set(bx, by, bz);
      torso.add(patch);
    });

    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.24, 0.04, 0.22], [s * 0.68, -0.08, 0.32], [s * 0.46, -0.74, 0.38]],
        [0.095, 0.082, 0.070], furMat
      ));
      const band = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), accentMat);
      band.position.set(s * 0.64, -0.08, 0.32);
      armGrp.add(band);
      const webbedHand = buildClawedPaw(furMat, accentMat, 3, 1.28, 0.085);
      webbedHand.position.set(s * 0.46, -0.78, 0.42);
      armGrp.add(webbedHand);

      // High Z-folded hind jumping frog knees rising way above his back to y = +0.58!
      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.22, -0.04, -0.44], [s * 0.68, 0.58, -0.18], [s * 0.42, -0.74, -0.16]],
        [0.115, 0.098, 0.075], furMat
      ));
      const hband = new THREE.Mesh(new THREE.SphereGeometry(0.105, 12, 10), accentMat);
      hband.position.set(s * 0.64, 0.54, -0.18);
      legGrp.add(hband);
      const webbedFoot = buildClawedPaw(furMat, accentMat, 3, 1.32, 0.09);
      webbedFoot.position.set(s * 0.42, -0.78, -0.10);
      legGrp.add(webbedFoot);
    });
  }

  else if (p === 'wing_walking_bat') {
    // Rabie Baby: Towering `/ \` crimson wing-walking vampire bat (q6_0_-JaJLC7YLBg.jpg panel 8)
    head.scale.setScalar(0.78);
    head.position.set(0, 0.34, 0.46);
    charm.position.set(0, 0.00, 0.40);

    const batBody = taperedTube(
      [[0, 0.48, -0.48], [0, 0.66, -0.12], [0, 0.42, 0.24]],
      [0.20, 0.30, 0.26], 24, 16, furMat
    );
    torso.add(batBody);

    const wingMemMat = new THREE.MeshStandardMaterial({
      color: 0xa81442,
      roughness: 0.65,
      side: THREE.DoubleSide,
    });
    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * 0.20, 0.46, 0.16, 0.095, 9, stitchMat, 'x');
      const armGrp = s < 0 ? leftArm : rightArm;
      const wingStrut = buildArticulatedLimb(
        [[s * 0.20, 0.46, 0.16], [s * 0.72, 0.92, 0.22], [s * 0.56, -0.74, 0.34]],
        [0.095, 0.088, 0.074], accentMat
      );
      armGrp.add(wingStrut);

      const wShape = new THREE.Shape();
      wShape.moveTo(s * 0.18, 0.42);
      wShape.lineTo(s * 0.71, 0.90);
      wShape.lineTo(s * 0.56, -0.46);
      wShape.quadraticCurveTo(s * 0.38, -0.05, s * 0.18, 0.10);
      wShape.closePath();
      const mem = new THREE.Mesh(new THREE.ShapeGeometry(wShape), wingMemMat);
      mem.position.z = 0.18;
      armGrp.add(mem);

      const clawFoot = buildClawedPaw(accentMat, clawMat, 3, 1.18);
      clawFoot.position.set(s * 0.56, -0.78, 0.38);
      armGrp.add(clawFoot);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.18, 0.36, -0.38], [s * 0.32, -0.18, -0.30], [s * 0.24, -0.74, -0.22]],
        [0.082, 0.068, 0.060], furMat
      ));
      const bFoot = buildClawedPaw(accentMat, clawMat, 3, 1.05);
      bFoot.position.set(s * 0.24, -0.78, -0.18);
      legGrp.add(bFoot);
    });
  }

  else if (p === 'sprawling_gator') {
    // Allister Gator: Flat belly-crawling armored swamp crocodile (q6_0_-JaJLC7YLBg.jpg panel 2)
    head.scale.setScalar(0.80);
    head.position.set(0, 0.04, 0.54);
    charm.position.set(0, -0.26, 0.44);

    const gatorBody = taperedTube(
      [[0, -0.06, -0.68], [0, 0.20, -0.20], [0, 0.10, 0.26]],
      [0.22, 0.36, 0.32], 28, 16, furMat
    );
    torso.add(gatorBody);

    for (let i = 0; i < 7; i++) {
      const scute = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.18, 8), accentMat);
      scute.position.set(0, 0.26 - i * 0.03, 0.14 - i * 0.13);
      torso.add(scute);
    }

    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.26, 0.02, 0.22], [s * 0.74, -0.12, 0.32], [s * 0.50, -0.74, 0.38]],
        [0.115, 0.098, 0.090], furMat
      ));
      const gPaw = buildClawedPaw(faceMat, clawMat, 4, 1.35, 0.075);
      gPaw.position.set(s * 0.50, -0.78, 0.44);
      armGrp.add(gPaw);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.24, -0.04, -0.48], [s * 0.64, -0.18, -0.36], [s * 0.40, -0.74, -0.24]],
        [0.115, 0.095, 0.088], furMat
      ));
      const hPaw = buildClawedPaw(faceMat, clawMat, 4, 1.25, 0.07);
      hPaw.position.set(s * 0.40, -0.78, -0.18);
      legGrp.add(hPaw);
    });

    tail.add(taperedTube(
      [[0, -0.06, -0.64], [0.18, -0.24, -0.96], [0.38, -0.44, -1.22], [0.54, -0.52, -1.40]],
      [0.18, 0.13, 0.08, 0.03], 24, 14, furMat
    ));
  }

  else if (p === 'winged_dragon') {
    // Simon Smoke: Rearing semi-bipedal Winged Wyvern Dragon (NOT on all fours — rearing chest & spread dragon wings!)
    head.scale.setScalar(0.76);
    head.position.set(0, 0.80, 0.28);
    charm.position.set(0, 0.44, 0.28);

    const dragonBody = taperedTube(
      [[0, 0.02, -0.28], [0, 0.34, -0.06], [0, 0.64, 0.12]],
      [0.22, 0.28, 0.26], 28, 16, furMat
    );
    torso.add(dragonBody);

    const wingMemMat = new THREE.MeshStandardMaterial({
      color: 0xf2e6d0,
      roughness: 0.65,
      side: THREE.DoubleSide,
    });
    [-1, 1].forEach((s) => {
      const wing = new THREE.Group();
      const strut = taperedTube(
        [[s * 0.16, 0.60, 0.04], [s * 0.66, 1.12, -0.08], [s * 1.04, 0.84, -0.16]],
        [0.068, 0.054, 0.028], 18, 12, furMat
      );
      wing.add(strut);
      const wShape = new THREE.Shape();
      wShape.moveTo(s * 0.16, 0.56);
      wShape.lineTo(s * 0.66, 1.10);
      wShape.lineTo(s * 1.02, 0.82);
      wShape.quadraticCurveTo(s * 0.72, 0.38, s * 0.54, 0.20);
      wShape.quadraticCurveTo(s * 0.34, 0.26, s * 0.18, 0.24);
      wShape.closePath();
      const mem = new THREE.Mesh(new THREE.ShapeGeometry(wShape), wingMemMat);
      mem.position.z = -0.08;
      wing.add(mem);
      torso.add(wing);
    });

    // Raised muscular dragon forearms with 3 huge curved white talons reaching forward!
    [-1, 1].forEach((s) => {
      addStitchRing(torso, s * 0.22, 0.56, 0.12, 0.095, 9, stitchMat, 'x');
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.22, 0.56, 0.12], [s * 0.56, 0.32, 0.26], [s * 0.46, 0.04, 0.42]],
        [0.10, 0.088, 0.080], furMat
      ));
      const talon = buildMonsterGrabbingHand(s, furMat, whiteClawMat, 3, 1.22);
      talon.position.set(s * 0.46, 0.00, 0.44);
      armGrp.add(talon);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.18, 0.04, -0.22], [s * 0.34, -0.34, -0.04], [s * 0.28, -0.74, -0.08]],
        [0.11, 0.092, 0.082], furMat
      ));
      const bTalon = buildClawedPaw(furMat, whiteClawMat, 3, 1.32, 0.085);
      bTalon.position.set(s * 0.28, -0.78, -0.02);
      legGrp.add(bTalon);
    });

    tail.add(taperedTube(
      [[0, 0.00, -0.28], [-0.18, -0.24, -0.68], [-0.36, -0.10, -0.98]],
      [0.10, 0.065, 0.030], 20, 10, furMat
    ));
  }

  else if (p === 'gothic_raven') {
    // Poe: Hunched Bipedal Gothic Raven with wide spread feathered wing-arms & 3-taloned claws (q6_0_-JaJLC7YLBg.jpg panel 1)
    head.scale.setScalar(0.76);
    head.position.set(0, 0.68, 0.30);
    charm.position.set(0, 0.32, 0.28);

    const crowBody = taperedTube(
      [[0, 0.04, -0.24], [0, 0.42, -0.06], [0, 0.60, 0.14]],
      [0.20, 0.30, 0.24], 28, 16, furMat
    );
    torso.add(crowBody);

    for (let i = 0; i < 5; i++) {
      const plume = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.26, 8), accentMat);
      plume.rotation.x = -0.65;
      plume.position.set((i - 2) * 0.08, 0.56 - Math.abs(i - 2) * 0.04, -0.12);
      torso.add(plume);
    }

    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      // Wide-bowed pale lavender-grey raven wing-arms reaching down & outward
      armGrp.add(buildArticulatedLimb(
        [[s * 0.20, 0.52, 0.12], [s * 0.68, 0.36, 0.22], [s * 0.56, -0.22, 0.32]],
        [0.090, 0.078, 0.068], accentMat
      ));
      // Layered dark raven wing-feathers swept outward & backward along forearm
      for (let f = 0; f < 5; f++) {
        const feather = new THREE.Mesh(new THREE.ConeGeometry(0.048, 0.28, 8), furMat);
        feather.rotation.z = s * (1.05 + f * 0.08);
        feather.rotation.y = -s * 0.35;
        feather.position.set(s * (0.58 + f * 0.03), 0.30 - f * 0.11, 0.18);
        armGrp.add(feather);
      }
      const talon = buildMonsterGrabbingHand(s, accentMat, clawMat, 3, 1.15);
      talon.position.set(s * 0.56, -0.26, 0.34);
      armGrp.add(talon);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.16, 0.06, -0.18], [s * 0.28, -0.36, -0.04], [s * 0.24, -0.74, -0.06]],
        [0.092, 0.075, 0.065], furMat
      ));
      const bTalon = buildClawedPaw(accentMat, clawMat, 3, 1.25, 0.085);
      bTalon.position.set(s * 0.24, -0.78, 0.00);
      legGrp.add(bTalon);
    });

    [-2, -1, 0, 1, 2].forEach((i) => {
      const f = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.42, 8), furMat);
      f.rotation.x = -Math.PI * 0.42;
      f.rotation.z = i * 0.16;
      f.position.set(i * 0.06, 0.02, -0.44);
      tail.add(f);
    });
  }

  else if (p === 'hunched_rat') {
    // Touille: Hunched Bipedal / Knuckle-Lunging Sewer Rat with reaching 4-clawed rat hands (q6_0_-JaJLC7YLBg.jpg panel 3)
    head.scale.setScalar(0.78);
    head.position.set(0, 0.62, 0.36);
    charm.position.set(0, 0.26, 0.34);

    const ratBody = taperedTube(
      [[0, 0.08, -0.34], [0, 0.52, -0.08], [0, 0.56, 0.20]],
      [0.22, 0.32, 0.26], 28, 16, furMat
    );
    torso.add(ratBody);

    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      // Asymmetric prowling rat arms: right arm reaching forward, left arm planted low
      const wristY = s < 0 ? -0.12 : -0.68;
      const wristZ = s < 0 ? 0.46 : 0.38;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.20, 0.48, 0.18], [s * 0.62, 0.22, 0.28], [s * 0.38, wristY, wristZ]],
        [0.088, 0.076, 0.072], furMat
      ));
      if (s < 0) {
        const ratHand = buildMonsterGrabbingHand(s, furMat, clawMat, 4, 1.18);
        ratHand.position.set(s * 0.38, wristY - 0.04, wristZ + 0.02);
        armGrp.add(ratHand);
      } else {
        const ratPaw = buildClawedPaw(furMat, clawMat, 4, 1.32, 0.075);
        ratPaw.position.set(s * 0.38, -0.78, 0.42);
        armGrp.add(ratPaw);
      }

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.18, 0.10, -0.28], [s * 0.38, -0.28, -0.14], [s * 0.28, -0.74, -0.14]],
        [0.095, 0.078, 0.068], furMat
      ));
      const bPaw = buildClawedPaw(innerMat, clawMat, 4, 1.18, 0.07);
      bPaw.position.set(s * 0.28, -0.78, -0.08);
      legGrp.add(bPaw);
    });

    tail.add(taperedTube(
      [[0, 0.08, -0.34], [0.24, -0.18, -0.68], [0.46, 0.04, -0.86], [0.32, 0.36, -0.78]],
      [0.055, 0.040, 0.028, 0.014], 24, 10, innerMat
    ));
  }

  else {
    // Maggie Mako: Lunging Apex Mako Shark Monster (q6_0_-JaJLC7YLBg.jpg panel 5)
    head.scale.setScalar(0.80);
    head.position.set(0, 0.34, 0.48);
    charm.position.set(0, -0.02, 0.40);

    const sharkBody = taperedTube(
      [[0, 0.82, -0.54], [0, 0.70, -0.18], [0, 0.44, 0.20]],
      [0.22, 0.34, 0.30], 28, 16, furMat
    );
    torso.add(sharkBody);

    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 14), faceMat);
    belly.scale.set(0.92, 1.15, 1.35);
    belly.position.set(0, 0.42, 0.04);
    torso.add(belly);

    const backFin = taperedTube(
      [[0, 0.70, -0.18], [0, 1.08, -0.34], [0, 1.24, -0.48]],
      [0.11, 0.075, 0.02], 14, 10, accentMat
    );
    backFin.scale.x = 0.32;
    torso.add(backFin);

    [-1, 1].forEach((s) => {
      const armGrp = s < 0 ? leftArm : rightArm;
      armGrp.add(buildArticulatedLimb(
        [[s * 0.24, 0.38, 0.20], [s * 0.68, 0.14, 0.30], [s * 0.44, -0.72, 0.38]],
        [0.115, 0.105, 0.095], furMat
      ));
      const finEdge = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.38, 8), accentMat);
      finEdge.scale.z = 0.30;
      finEdge.rotation.z = -s * 1.15;
      finEdge.position.set(s * 0.70, 0.12, 0.26);
      armGrp.add(finEdge);

      const webbedPaw = buildClawedPaw(furMat, clawMat, 4, 1.28, 0.075);
      webbedPaw.position.set(s * 0.44, -0.78, 0.42);
      armGrp.add(webbedPaw);

      const legGrp = s < 0 ? leftLeg : rightLeg;
      legGrp.add(buildArticulatedLimb(
        [[s * 0.22, 0.56, -0.44], [s * 0.56, 0.12, -0.32], [s * 0.38, -0.74, -0.22]],
        [0.105, 0.088, 0.078], furMat
      ));
      const bPaw = buildClawedPaw(furMat, clawMat, 4, 1.15, 0.07);
      bPaw.position.set(s * 0.38, -0.78, -0.16);
      legGrp.add(bPaw);
    });

    const tailStock = taperedTube(
      [[0, 0.80, -0.52], [0, 1.04, -0.78], [0, 1.20, -0.96]],
      [0.16, 0.10, 0.05], 16, 12, furMat
    );
    tail.add(tailStock);
    const finUpper = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.42, 10), accentMat);
    finUpper.scale.x = 0.30;
    finUpper.position.set(0, 1.36, -1.04);
    finUpper.rotation.x = -0.45;
    tail.add(finUpper);
  }

  root.add(torso, head, charm, leftArm, rightArm, leftLeg, rightLeg, tail);
  root.scale.setScalar(0.92);

  root.parts = {
    root,
    head,
    torso,
    eyes,
    leftEar,
    rightEar,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    tail,
    smilingPendant: charm,
  };
  return root;
}
