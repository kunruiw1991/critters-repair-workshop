// 3D 45cm Tall Long-Limbed 4-Legged Nightmare Smiling Critters & Nightmare Critters
// Modeled after the 45cm (17.7in) tall arched-back quadrupedal Monster/Nightmare CatNap plush
// (https://qtplushies.com/products/catnap?variant=46189051150393) and smiling-critters-assets.

import { createPlushMaterial, createStitchSeamStrip } from './materials.js';

const T = window.THREE;

export const NIGHTMARE_SMILING_CRITTERS = {
  nightmare_catnap: {
    name: '夜梦猫小眠 (45cm)',
    enName: 'Nightmare CatNap',
    who: '45cm大长腿月光伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#6e3fa3',
    accent: '#3d1e6d',
    face: '#b89be0',
    inner: '#2a124d',
    charm: 'moon',
    charmColor: '#ffe253',
    pendantIcon: '🌙',
    earType: 'cat',
    tailType: 'cat',
    ref: 'nightmare_catnap.webp',
    hello: '喵呜……我是大长腿夜梦猫小眠，走太远的路爪爪有点酸，帮我修修吧！',
    thanks: '呼噜噜……四只大长腿又充满力气啦，祝你做个甜甜的好梦！',
  },
  nightmare_dogday: {
    name: '夜梦日小犬 (45cm)',
    enName: 'Nightmare DogDay',
    who: '45cm大长腿阳光伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#df7428',
    accent: '#692a12',
    face: '#f7c978',
    inner: '#4f1d0b',
    charm: 'sun',
    charmColor: '#ffd126',
    pendantIcon: '☀️',
    earType: 'dog',
    tailType: 'dog',
    hasBelt: true,
    ref: 'nightmare_dogday.webp',
    hello: '汪汪！我是高高大大的夜梦日小犬，我的太阳吊坠和长腿需要护理啦！',
    thanks: '太棒啦！大长腿又能奔跑跳跃了，小太阳永远照亮你！',
  },
  nightmare_hoppyhopscotch: {
    name: '夜梦跳跳兔 (45cm)',
    enName: 'Nightmare Hoppy Hopscotch',
    who: '45cm大长腿蹦跳伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#38b85e',
    accent: '#1b6633',
    face: '#b4f0c5',
    inner: '#247a40',
    charm: 'bolt',
    charmColor: '#ffe44c',
    pendantIcon: '⚡',
    earType: 'rabbit',
    tailType: 'puff',
    ref: 'nightmare_hoppyhopscotch.webp',
    hello: '咻咻！我是大长腿夜梦跳跳兔，刚才跳得太高擦伤啦，帮我检查一下吧！',
    thanks: '耶！四条大长腿又能蹦上云朵啦，我们一起跳格子吧！',
  },
  nightmare_bubbabubbaphant: {
    name: '夜梦泡泡象 (45cm)',
    enName: 'Nightmare Bubba Bubbaphant',
    who: '45cm大长腿聪明伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#3e96db',
    accent: '#1c4d78',
    face: '#bce2ff',
    inner: '#256094',
    charm: 'bulb',
    charmColor: '#ffe85b',
    pendantIcon: '💡',
    earType: 'elephant',
    tailType: 'elephant',
    hasTrunk: true,
    ref: 'nightmare_bubbabubbaphant.webp',
    hello: '嘟嘟！我是大长腿夜梦泡泡象，长鼻子和灯泡吊坠都有点灰尘啦！',
    thanks: '叮！小灯泡重新亮晶晶，大长腿泡泡象给你敬个礼！',
  },
  nightmare_craftycorn: {
    name: '夜梦巧巧独角兽 (45cm)',
    enName: 'Nightmare CraftyCorn',
    who: '45cm大长腿绘画伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#eef4fa',
    accent: '#2ea0b8',
    face: '#d8f2fa',
    inner: '#6ecce0',
    charm: 'flower',
    charmColor: '#ef6587',
    pendantIcon: '🌼',
    earType: 'cat',
    tailType: 'brush',
    hasHorn: true,
    ref: 'nightmare_craftycorn.webp',
    hello: '嗨！我是大长腿夜梦巧巧独角兽，画画时把颜料沾到长腿绒毛上啦！',
    thanks: '哇！独角和彩虹鬃毛都闪闪发光，我要画一幅画送给你！',
  },
  nightmare_pickypiggy: {
    name: '夜梦挑挑猪 (45cm)',
    enName: 'Nightmare PickyPiggy',
    who: '45cm大长腿野餐伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#e872aa',
    accent: '#822b58',
    face: '#ffcce4',
    inner: '#9e386d',
    charm: 'apple',
    charmColor: '#e53745',
    pendantIcon: '🍎',
    earType: 'pig',
    tailType: 'curly',
    hasPigSnout: true,
    ref: 'nightmare_pickypiggy.webp',
    hello: '哼哼！我是大长腿夜梦挑挑猪，找果子的时候把肚肚弄瘪啦，帮我充充棉吧！',
    thanks: '哼哼！肚肚圆滚滚、大长腿稳稳当当，请你吃甜苹果！',
  },
  nightmare_bobbybearhug: {
    name: '夜梦抱抱熊 (45cm)',
    enName: 'Nightmare Bobby BearHug',
    who: '45cm大长腿拥抱伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#cc2b44',
    accent: '#691220',
    face: '#fab8c4',
    inner: '#871b2d',
    charm: 'heart',
    charmColor: '#ff3b5c',
    pendantIcon: '❤️',
    earType: 'bear',
    tailType: 'puff',
    ref: 'nightmare_bobbybearhug.webp',
    hello: '来抱抱！我是大长腿夜梦抱抱熊，给你一个大大拥抱前想先洗个香香澡！',
    thanks: '好温暖呀！我的红心吊坠亮晶晶，给你最甜的大长腿拥抱！',
  },
  nightmare_kickinchicken: {
    name: '夜梦酷酷鸡 (45cm)',
    enName: 'Nightmare KickinChicken',
    who: '45cm大长腿活力伙伴',
    group: 'nightmare_smiling',
    isNightmare45cm: true,
    fur: '#eab308',
    accent: '#c2410c',
    face: '#fef08a',
    inner: '#d97706',
    charm: 'star',
    charmColor: '#ffe033',
    pendantIcon: '⭐',
    earType: 'tuft',
    tailType: 'feathers',
    hasBeak: true,
    hasComb: true,
    ref: 'nightmare_kickinchicken.webp',
    hello: '嘿哟！我是大长腿夜梦酷酷鸡，耍帅滑行时把羽毛弄乱啦，帮我顺顺毛吧！',
    thanks: '太酷啦！星星吊坠闪闪发亮，大长腿酷酷鸡给你比个耶！',
  },
};

export const NIGHTMARE_CRITTERS = {
  babachops: {
    name: '芭芭小黑羊 (45cm)',
    enName: 'Baba Chops',
    who: '45cm夜梦蓬蓬小羊',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#2f2f38',
    accent: '#18181f',
    face: '#eef0f6',
    inner: '#4b4b59',
    charm: 'skull',
    charmColor: '#e2e6f2',
    pendantIcon: '💀',
    earType: 'sheep',
    tailType: 'puff',
    hasWoolCrown: true,
    woolColor: '#f4f6fb',
    ref: 'babachops.webp',
    hello: '咩……我是大长腿芭芭小黑羊，白白的羊毛领子沾上小树叶啦，帮我理理吧！',
    thanks: '咩嘿！羊毛蓬松又柔软，我要在星空下安静散步啦！',
  },
  ickylicky: {
    name: '伊奇跳跳蛙 (45cm)',
    enName: 'Icky Licky',
    who: '45cm夜梦活力小蛙',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#55c428',
    accent: '#d93829',
    face: '#f7ce38',
    inner: '#b82518',
    charm: 'biohazard',
    charmColor: '#c8ff3d',
    pendantIcon: '🐸',
    earType: 'frog',
    tailType: 'curly',
    ref: 'ickylicky.webp',
    hello: '呱呱！我是大长腿伊奇跳跳蛙，在荷叶间跳太快摔了一跤，帮我擦擦泥巴吧！',
    thanks: '呱哈哈！浑身干净亮堂堂，我又能拿跳远冠军啦！',
  },
  rabiebaby: {
    name: '蕾比小蝙蝠 (45cm)',
    enName: 'Rabie Baby',
    who: '45cm夜梦甜心蝙蝠',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#e04894',
    accent: '#2a183b',
    face: '#f7f2fa',
    inner: '#42205c',
    charm: 'teardrop',
    charmColor: '#52d6ff',
    pendantIcon: '💧',
    earType: 'bat',
    tailType: 'dragon',
    hasWings: true,
    wingColor: '#2a183b',
    hasWoolCrown: true,
    woolColor: '#f7f2fa',
    ref: 'rabiebaby.webp',
    hello: '啾啾！我是大长腿蕾比小蝙蝠，亮晶晶的水滴吊坠不亮了，快帮我充能吧！',
    thanks: '哇！小翅膀和粉色长腿都美美哒，告诉你一个开心的小秘密！',
  },
  allistergator: {
    name: '阿利小鳄鱼 (45cm)',
    enName: 'Allister Gator',
    who: '45cm夜梦悠闲鳄鱼',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#3b8c3e',
    accent: '#1d4d21',
    face: '#cbe896',
    inner: '#27632b',
    charm: 'crossbones',
    charmColor: '#f2f4f8',
    pendantIcon: '🦴',
    earType: 'gator',
    tailType: 'gator',
    hasBackSpines: true,
    ref: 'allistergator.webp',
    hello: '哈欠……我是大长腿阿利小鳄鱼，晒太阳的时候背脊沾了灰尘，帮我刷刷吧！',
    thanks: '真舒服呀！鳄鱼长尾巴威风凛凛，我要继续懒洋洋晒太阳啦！',
  },
  simonsmoke: {
    name: '赛门小火龙 (45cm)',
    enName: 'Simon Smoke',
    who: '45cm夜梦金翼火龙',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#d62828',
    accent: '#6e1111',
    face: '#f7b801',
    inner: '#f7b801',
    charm: 'dollar',
    charmColor: '#ffd633',
    pendantIcon: '🐉',
    earType: 'dragon',
    tailType: 'dragon',
    hasWings: true,
    wingColor: '#f7b801',
    hasBackSpines: true,
    ref: 'simonsmoke.webp',
    hello: '呼呼！我是大长腿赛门小火龙，飞越山谷时把金翅膀弄皱啦，帮我整理一下吧！',
    thanks: '吼呜！金色翅膀和红色大长腿闪耀夺目，你是最棒的修理师！',
  },
  poe: {
    name: '坡坡小乌鸦 (45cm)',
    enName: 'Poe',
    who: '45cm夜梦星夜乌鸦',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#45306e',
    accent: '#211538',
    face: '#a999cf',
    inner: '#2e1f4d',
    charm: 'stormcloud',
    charmColor: '#b98eff',
    pendantIcon: '⛈️',
    earType: 'tuft',
    tailType: 'feathers',
    hasBeak: true,
    hasWings: true,
    wingColor: '#261842',
    ref: 'poe.webp',
    hello: '嘎嘎……我是大长腿坡坡小乌鸦，夜空里的云朵吊坠淋湿啦，帮我吹干吧！',
    thanks: '羽毛柔顺又闪亮，紫色云朵吊坠重新发光啦，谢谢你！',
  },
  touille: {
    name: '图伊小灰鼠 (45cm)',
    enName: 'Touille',
    who: '45cm夜梦机灵小鼠',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#737882',
    accent: '#d98a9c',
    face: '#c9ced9',
    inner: '#e69eb0',
    charm: 'fishbone',
    charmColor: '#e8edf5',
    pendantIcon: '🐟',
    earType: 'mouse',
    tailType: 'cat',
    ref: 'touille.webp',
    hello: '吱吱！我是大长腿图伊小灰鼠，圆耳朵和粉尾巴挂上毛球啦，帮我摘掉吧！',
    thanks: '吱吱！胡须整整齐齐、大长腿轻快灵敏，送你一颗小奶酪糖！',
  },
  maggiemako: {
    name: '玛吉小鲨鱼 (45cm)',
    enName: 'Maggie Mako',
    who: '45cm夜梦海浪鲨鱼',
    group: 'nightmare_critters',
    isNightmare45cm: true,
    fur: '#2888b8',
    accent: '#144563',
    face: '#f0f7fc',
    inner: '#1b5c82',
    charm: 'sharktooth',
    charmColor: '#f7fbff',
    pendantIcon: '🦈',
    earType: 'shark',
    tailType: 'shark',
    hasDorsalFin: true,
    ref: 'maggiemako.webp',
    hello: '哗啦！我是大长腿玛吉小鲨鱼，冲浪回来背鳍和长腿需要护理一下啦！',
    thanks: '太酷啦！鲨鱼牙吊坠闪闪发光，我们一起去海浪里探险吧！',
  },
};

export const ALL_NIGHTMARE_CRITTERS = {
  ...NIGHTMARE_SMILING_CRITTERS,
  ...NIGHTMARE_CRITTERS,
};

function markNoDecal(obj) {
  obj.traverse((o) => {
    if (o.isMesh) o.userData.noDecal = true;
  });
  return obj;
}

export function buildNightmareCritter(id) {
  const cfg = ALL_NIGHTMARE_CRITTERS[id] || NIGHTMARE_SMILING_CRITTERS.nightmare_catnap;
  const root = new T.Group();
  root.name = cfg.name;
  root.characterId = id;
  root.displayName = cfg.name;

  const parts = {};
  const fur = createPlushMaterial(cfg.fur);
  const accent = createPlushMaterial(cfg.accent);
  const face = createPlushMaterial(cfg.face);
  const inner = createPlushMaterial(cfg.inner);
  const black = new T.MeshStandardMaterial({ color: '#090a13', roughness: 0.16, metalness: 0.12 });
  const mouthMat = new T.MeshStandardMaterial({ color: '#120b18', roughness: 0.92 });
  const white = new T.MeshBasicMaterial({ color: '#ffffff' });
  const pink = createPlushMaterial('#ec7d92');
  const clawMat = createPlushMaterial('#1d1526');
  const zipMat = new T.MeshStandardMaterial({ color: '#b5b4bd', metalness: 0.65, roughness: 0.4 });

  function group(name, parent, x = 0, y = 0, z = 0) {
    const g = new T.Group();
    g.name = name;
    g.position.set(x, y, z);
    parent.add(g);
    parts[name] = g;
    return g;
  }
  function oval(parent, mat, x, y, z, sx, sy, sz, allowDecal = false) {
    const mesh = new T.Mesh(new T.SphereGeometry(1, 32, 24), mat);
    mesh.position.set(x, y, z);
    mesh.scale.set(sx, sy, sz);
    if (!allowDecal) mesh.userData.noDecal = true;
    parent.add(mesh);
    return mesh;
  }
  function tube(parent, points, radius, mat) {
    const curve = new T.CatmullRomCurve3(points.map((p) => new T.Vector3(...p)));
    const mesh = new T.Mesh(new T.TubeGeometry(curve, 32, radius, 12, false), mat);
    mesh.userData.noDecal = true;
    parent.add(mesh);
    return mesh;
  }
  function shapeMesh(shape, mat, depth = 0.025, bevel = 0.008) {
    const m = new T.Mesh(
      new T.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelSize: bevel,
        bevelThickness: bevel,
        bevelSegments: 3,
        steps: 1,
        curveSegments: 24,
      }),
      mat,
    );
    m.userData.noDecal = true;
    return m;
  }
  function polygon(points, mat) {
    const s = new T.Shape();
    s.moveTo(...points[0]);
    points.slice(1).forEach((p) => s.lineTo(...p));
    s.closePath();
    return shapeMesh(s, mat);
  }

  // ============================================================================
  // 1. OVERSIZED WIDE-CHEEKED 45CM NIGHTMARE HEAD (forward-craned on long neck)
  // ============================================================================
  const head = group('head', root, 0, 0.48, 0.08);
  // Main skull mesh — allowDecal = true so surfaceHits places head decals cleanly
  const skull = oval(head, fur, 0, 0, 0, 0.54, 0.46, 0.41, true);
  skull.name = 'skullMesh';

  // Wide flared Monster/Nightmare cheek jowls (signature qtplushies 45cm CatNap head shape)
  for (const side of [-1, 1]) {
    oval(head, fur, side * 0.34, -0.07, 0.06, 0.24, 0.21, 0.24, false);
  }
  // Subtle facial mask patch
  oval(head, face, 0, -0.03, 0.30, 0.46, 0.36, 0.12, false);

  // Ears: independent pivots at side === 1 ('leftEar') and side === -1 ('rightEar')
  for (const side of [-1, 1]) {
    const ear = group(side === 1 ? 'leftEar' : 'rightEar', head, side * 0.36, 0.33, -0.04);
    if (cfg.earType === 'dog' || cfg.earType === 'sheep') {
      ear.position.set(side * 0.42, 0.28, -0.015);
      ear.rotation.z = side * 0.18;
      tube(ear, [[0, 0, 0], [side * 0.09, -0.07, 0.01], [side * 0.11, -0.25, 0.04], [side * 0.08, -0.44, 0.07]], 0.11, accent);
      oval(ear, accent, side * 0.08, -0.44, 0.07, 0.12, 0.15, 0.10);
    } else if (cfg.earType === 'rabbit') {
      ear.position.set(side * 0.26, 0.36, -0.05);
      ear.rotation.z = -side * 0.24;
      oval(ear, fur, 0, 0.28, 0, 0.12, 0.41, 0.09);
      oval(ear, inner, 0, 0.28, 0.075, 0.07, 0.31, 0.025);
    } else if (cfg.earType === 'elephant') {
      ear.position.set(side * 0.46, 0.12, -0.11);
      ear.rotation.z = -side * 0.18;
      oval(ear, fur, side * 0.07, 0.02, 0, 0.33, 0.39, 0.11);
      oval(ear, inner, side * 0.08, 0.02, 0.095, 0.25, 0.31, 0.035);
    } else if (cfg.earType === 'bear' || cfg.earType === 'mouse' || cfg.earType === 'frog') {
      const r = cfg.earType === 'mouse' ? 0.22 : 0.18;
      oval(ear, fur, 0, 0.05, 0, r, r, 0.10);
      oval(ear, inner, 0, 0.05, 0.09, r * 0.65, r * 0.65, 0.028);
    } else if (cfg.earType === 'dragon') {
      ear.rotation.z = -side * 0.28;
      const horn = new T.Mesh(new T.ConeGeometry(0.075, 0.32, 18), inner);
      horn.position.set(0, 0.16, -0.02);
      horn.userData.noDecal = true;
      ear.add(horn);
      oval(ear, fur, side * 0.06, 0.04, 0, 0.12, 0.08, 0.06);
    } else if (cfg.earType === 'tuft') {
      ear.position.set(side * 0.44, 0.02, 0);
      for (let j = 0; j < 3; j++) {
        oval(ear, fur, side * j * 0.03, -j * 0.05, 0.02, 0.12, 0.05, 0.06);
      }
    } else {
      // 'cat', 'bat', 'pig', 'gator', 'shark' — tall pointed Nightmare ears
      const isBat = cfg.earType === 'bat';
      const isPig = cfg.earType === 'pig';
      ear.rotation.z = -side * (isPig ? 0.68 : 0.22);
      const hTop = isBat ? 0.44 : isPig ? 0.26 : 0.39;
      const outline = [[-0.16, 0], [-0.15, 0.22], [0, hTop], [0.16, 0.12], [0.14, -0.02]];
      const outer = polygon(outline, fur);
      outer.position.z = -0.03;
      ear.add(outer);
      const inside = polygon(outline, inner);
      inside.scale.set(0.66, 0.66, 0.4);
      inside.position.set(0, 0.04, 0.016);
      ear.add(inside);
    }
    markNoDecal(ear);
  }

  // Huge cavernous Nightmare grin (wider & deeper than standard Smiling Critters)
  const muzzle = group('muzzle', head, 0, -0.08, 0.40);
  const smile = new T.Shape();
  smile.moveTo(-0.43, 0.12);
  smile.bezierCurveTo(-0.33, 0.16, -0.26, -0.01, 0, -0.02);
  smile.bezierCurveTo(0.26, -0.01, 0.33, 0.16, 0.43, 0.12);
  smile.bezierCurveTo(0.47, -0.04, 0.31, -0.34, 0, -0.36);
  smile.bezierCurveTo(-0.31, -0.34, -0.47, -0.04, -0.43, 0.12);
  const mouth = shapeMesh(smile, mouthMat, 0.022, 0.012);
  muzzle.add(mouth);

  const edge = smile.getPoints(64).map((p) => new T.Vector3(p.x, p.y, 0.03));
  const rim = new T.Mesh(
    new T.TubeGeometry(new T.CatmullRomCurve3(edge, false, 'centripetal'), 90, 0.021, 8, false),
    face,
  );
  rim.userData.noDecal = true;
  muzzle.add(rim);

  // Soft plush tongue inside lower grin
  oval(muzzle, pink, 0, -0.29, 0.038, 0.115, 0.032, 0.014);

  // Species nose / trunk / beak / pig snout
  if (cfg.hasTrunk) {
    const trunk = group('trunk', muzzle, 0, 0.16, 0.04);
    tube(trunk, [[0, 0, 0], [0, -0.09, 0.05], [0.01, -0.24, 0.10], [0.015, -0.32, 0.16]], 0.064, fur);
    oval(trunk, accent, 0.015, -0.32, 0.165, 0.066, 0.048, 0.052);
  } else if (cfg.hasPigSnout) {
    oval(muzzle, accent, 0, 0.14, 0.048, 0.11, 0.068, 0.048);
    [-1, 1].forEach((s) => oval(muzzle, inner, s * 0.04, 0.14, 0.09, 0.016, 0.022, 0.009));
  } else if (cfg.hasBeak) {
    const beak = polygon([[-0.10, 0.14], [0, 0.24], [0.10, 0.14], [0, 0.07]], accent);
    beak.position.z = 0.048;
    muzzle.add(beak);
  } else {
    const nose = oval(muzzle, black, 0, 0.125, 0.052, 0.06, 0.036, 0.028);
    nose.rotation.z = Math.PI;
  }

  // Deep-set Nightmare Eyes with Glowing White Ring Irises (signature qtplushies Monster CatNap eyes)
  const eyes = group('eyes', head, 0, 0.15, 0.39);
  for (const side of [-1, 1]) {
    const eye = group(side === 1 ? 'leftEye' : 'rightEye', eyes, side * 0.19, 0, 0);
    // Deep black eye socket
    oval(eye, black, 0, 0, 0, 0.112, 0.128, 0.078);
    // Glowing white Nightmare ring pupil (white ring + dark center pinpoint)
    const ringIris = new T.Mesh(new T.TorusGeometry(0.046, 0.011, 10, 28), white);
    ringIris.position.set(0, 0, 0.072);
    ringIris.userData.noDecal = true;
    eye.add(ringIris);
    // Catchlight sparkle dot
    oval(eye, white, -0.028, 0.042, 0.074, 0.018, 0.020, 0.009);
    // Sculpted plush brow ridge
    tube(head, [[side * 0.10, 0.31, 0.30], [side * 0.19, 0.33, 0.31], [side * 0.28, 0.29, 0.28]], 0.016, accent);
  }

  // Forehead horn / crown / comb details
  if (cfg.hasHorn) {
    for (let i = 0; i < 5; i++) {
      const tuft = oval(head, accent, (i - 2) * 0.08, 0.37 - Math.abs(i - 2) * 0.025, 0.21, 0.09, 0.14, 0.08);
      tuft.rotation.z = (i - 2) * -0.3;
    }
    const horn = new T.Mesh(
      new T.ConeGeometry(0.078, 0.29, 28),
      new T.MeshStandardMaterial({ color: '#e2dff0', metalness: 0.35, roughness: 0.35 }),
    );
    horn.position.set(0, 0.56, 0.10);
    horn.rotation.x = 0.22;
    horn.userData.noDecal = true;
    head.add(horn);
  }
  if (cfg.hasComb) {
    for (let i = 0; i < 3; i++) {
      const tuft = oval(head, accent, -0.12 + i * 0.11, 0.41 + i * 0.04, 0.02, 0.18, 0.10, 0.09);
      tuft.rotation.z = -0.35 - i * 0.35;
    }
  }
  if (cfg.hasWoolCrown) {
    const woolMat = createPlushMaterial(cfg.woolColor || '#f4f6fb');
    for (let i = -2; i <= 2; i++) {
      oval(head, woolMat, i * 0.09, 0.39 - Math.abs(i) * 0.02, 0.12, 0.11, 0.10, 0.10);
    }
  }

  // ============================================================================
  // 2. LARGE ARCHED-BACK 4-LEGGED MONSTER PLUSH TORSO (45cm proportions)
  // ============================================================================
  const torso = group('torso', root, 0, -0.14, 0);
  // Central arched chest/rib body — allowDecal = true so surfaceHits places body decals cleanly
  const body = oval(torso, fur, 0, 0, 0, 0.35, 0.42, 0.29, true);
  body.name = 'bodyMesh';

  // High hunched front shoulder dome + arched rear quadruped spine & haunches
  oval(torso, fur, 0, 0.20, 0.05, 0.33, 0.24, 0.26, false);
  oval(torso, fur, 0, 0.04, -0.22, 0.28, 0.26, 0.26, false);
  oval(torso, fur, 0, -0.12, -0.36, 0.27, 0.25, 0.24, false);

  // Subtle stitched plush rib ridges along the flanks (signature Monster CatNap plush torso)
  for (let i = 0; i < 3; i++) {
    const ry = 0.06 - i * 0.11;
    tube(
      torso,
      [[-0.31, ry, 0.06], [-0.35, ry - 0.02, 0.17], [-0.18, ry - 0.03, 0.26]],
      0.014,
      accent,
    );
    tube(
      torso,
      [[0.31, ry, 0.06], [0.35, ry - 0.02, 0.17], [0.18, ry - 0.03, 0.26]],
      0.014,
      accent,
    );
  }

  // Soft contrasting front belly patch
  oval(torso, face, 0, -0.02, 0.245, 0.22, 0.32, 0.06, false);

  // DogDay belt
  if (cfg.hasBelt) {
    tube(torso, [[-0.33, -0.18, 0.08], [0, -0.19, 0.29], [0.33, -0.18, 0.08]], 0.026, accent);
    const buckle = new T.Mesh(new T.BoxGeometry(0.11, 0.08, 0.03), zipMat);
    buckle.position.set(0, -0.19, 0.30);
    buckle.userData.noDecal = true;
    torso.add(buckle);
  }

  // Baba Chops / Rabie Baby fluffy neck wool ruff
  if (cfg.hasWoolCrown) {
    const woolMat = createPlushMaterial(cfg.woolColor || '#f4f6fb');
    for (let i = 0; i < 7; i++) {
      const a = -0.9 + (i / 6) * 1.8;
      oval(torso, woolMat, Math.sin(a) * 0.28, 0.28, Math.cos(a) * 0.24, 0.10, 0.09, 0.09);
    }
  }

  // Side plush wings (Rabie Baby, Simon Smoke, Poe)
  if (cfg.hasWings) {
    const wMat = createPlushMaterial(cfg.wingColor || cfg.accent);
    for (const side of [-1, 1]) {
      const wing = polygon([[0, 0], [side * 0.42, 0.22], [side * 0.48, -0.06], [side * 0.24, -0.22]], wMat);
      wing.position.set(side * 0.26, 0.08, -0.08);
      wing.rotation.y = -side * 0.28;
      torso.add(wing);
    }
  }

  // Dorsal spines / shark fin
  if (cfg.hasBackSpines) {
    for (let i = 0; i < 4; i++) {
      const sp = new T.Mesh(new T.ConeGeometry(0.045, 0.12, 10), accent);
      sp.position.set(0, 0.32 - i * 0.11, -0.12 - i * 0.09);
      sp.rotation.x = -0.55;
      sp.userData.noDecal = true;
      torso.add(sp);
    }
  }
  if (cfg.hasDorsalFin) {
    const fin = polygon([[0, 0], [0, 0.28], [-0.22, -0.08]], fur);
    fin.rotation.y = Math.PI / 2;
    fin.position.set(0, 0.24, -0.22);
    torso.add(fin);
  }

  // Front zipper track & teeth
  const zipper = group('zipper', torso, 0, -0.02, 0.305);
  const tape = new T.Mesh(new T.BoxGeometry(0.032, 0.52, 0.014), accent);
  tape.userData.noDecal = true;
  zipper.add(tape);
  for (let i = 0; i < 16; i++) {
    const tooth = new T.Mesh(new T.BoxGeometry(0.019, 0.010, 0.011), zipMat);
    tooth.position.set((i % 2 ? 1 : -1) * 0.006, -0.23 + i * 0.03, 0.011);
    tooth.userData.noDecal = true;
    zipper.add(tooth);
  }

  // Dangling signature pendant charm on collar below the grin
  const pendant = group('smilingPendant', torso, 0, 0.22, 0.34);
  const charmMat = new T.MeshStandardMaterial({
    color: cfg.charmColor,
    emissive: cfg.charmColor,
    emissiveIntensity: 0.32,
    roughness: 0.35,
    metalness: 0.25,
  });

  const heartShape = () => {
    const s = new T.Shape();
    s.moveTo(0, -0.095);
    s.bezierCurveTo(-0.19, 0.025, -0.075, 0.145, 0, 0.065);
    s.bezierCurveTo(0.075, 0.145, 0.19, 0.025, 0, -0.095);
    return s;
  };
  let charm;
  if (cfg.charm === 'heart') {
    charm = shapeMesh(heartShape(), charmMat);
  } else if (cfg.charm === 'star' || cfg.charm === 'sun' || cfg.charm === 'biohazard') {
    const pts = [];
    const count = cfg.charm === 'sun' ? 12 : cfg.charm === 'biohazard' ? 6 : 10;
    for (let i = 0; i < count; i++) {
      const a = Math.PI / 2 + (i * Math.PI * 2) / count;
      const r = i % 2 ? 0.058 : 0.108;
      pts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    charm = polygon(pts, charmMat);
    if (cfg.charm === 'sun') oval(pendant, charmMat, 0, 0, 0.03, 0.065, 0.065, 0.022);
  } else if (cfg.charm === 'moon') {
    const s = new T.Shape();
    s.moveTo(0.06, 0.095);
    s.bezierCurveTo(-0.13, 0.115, -0.15, -0.115, 0.06, -0.095);
    s.bezierCurveTo(-0.038, -0.058, -0.038, 0.058, 0.06, 0.095);
    charm = shapeMesh(s, charmMat);
  } else if (cfg.charm === 'bolt') {
    charm = polygon([[0.015, 0.115], [-0.085, -0.015], [-0.015, -0.015], [-0.038, -0.115], [0.09, 0.025], [0.015, 0.025]], charmMat);
  } else if (cfg.charm === 'bulb' || cfg.charm === 'skull' || cfg.charm === 'dollar' || cfg.charm === 'stormcloud') {
    charm = oval(pendant, charmMat, 0, 0.015, 0, 0.085, 0.085, 0.028);
    const base = new T.Mesh(new T.BoxGeometry(0.064, 0.038, 0.03), zipMat);
    base.position.y = -0.062;
    base.userData.noDecal = true;
    pendant.add(base);
  } else if (cfg.charm === 'flower') {
    const cols = ['#eb6496', '#8e60c1', '#66a8df', '#73bd57', '#f6cc32'];
    for (let i = 0; i < 5; i++) {
      oval(
        pendant,
        new T.MeshStandardMaterial({ color: cols[i], emissive: cols[i], emissiveIntensity: 0.28 }),
        Math.sin(i * 1.257) * 0.068,
        Math.cos(i * 1.257) * 0.068,
        0,
        0.046,
        0.046,
        0.019,
      );
    }
    charm = oval(pendant, charmMat, 0, 0, 0.024, 0.04, 0.04, 0.019);
  } else if (cfg.charm === 'apple' || cfg.charm === 'teardrop') {
    const s = new T.Shape();
    s.moveTo(0, 0.08);
    s.bezierCurveTo(-0.12, 0.12, -0.12, -0.10, 0, -0.095);
    s.bezierCurveTo(0.12, -0.10, 0.12, 0.12, 0, 0.08);
    charm = shapeMesh(s, charmMat);
  } else {
    // 'sharktooth', 'crossbones', 'fishbone'
    charm = polygon([[-0.08, 0.07], [0.08, 0.07], [0, -0.11]], charmMat);
  }
  if (charm && charm.parent !== pendant) pendant.add(charm);
  const bail = new T.Mesh(new T.TorusGeometry(0.02, 0.006, 8, 16), zipMat);
  bail.position.set(0, 0.12, 0);
  bail.userData.noDecal = true;
  pendant.add(bail);
  markNoDecal(pendant);

  // ============================================================================
  // 3. FOUR TALL LONG-LIMBED NIGHTMARE LEGS (45cm quadrupedal arched stance)
  // ============================================================================
  // Front long legs (leftArm at side=1, rightArm at side=-1) + Hind long legs (leftLeg, rightLeg)
  for (const side of [-1, 1]) {
    // Tall jointed front leg reaching from high shoulder down to the turntable mat (y ≈ -0.94)
    const arm = group(side === 1 ? 'leftArm' : 'rightArm', root, side * 0.34, 0.04, 0.14);
    arm.rotation.z = side * -0.08;
    // Upper humerus + prominent spherical plush elbow joint + lower forearm
    oval(arm, fur, 0, -0.22, 0.02, 0.092, 0.28, 0.092);
    oval(arm, fur, 0, -0.48, 0.05, 0.105, 0.095, 0.105);
    oval(arm, fur, 0, -0.70, 0.06, 0.086, 0.26, 0.088);
    // Large dark 4-clawed front paw resting on the turntable mat
    oval(arm, accent, 0, -0.92, 0.12, 0.135, 0.085, 0.165);
    for (let c = -1.5; c <= 1.5; c += 1) {
      const claw = new T.Mesh(new T.ConeGeometry(0.016, 0.055, 8), clawMat);
      claw.rotation.x = Math.PI * 0.44;
      claw.position.set(c * 0.032, -0.94, 0.27);
      claw.userData.noDecal = true;
      arm.add(claw);
    }
    markNoDecal(arm);

    // Tall jointed hind leg descending from rear haunches to the turntable mat.
    // Pivot of leftLeg is placed at (side * 0.26, -0.48, 0.0) with unrotated axes so that
    // checkup marker (0, 0, 0.4) on leftLeg projects cleanly in front of the left hind leg!
    const leg = group(side === 1 ? 'leftLeg' : 'rightLeg', root, side * 0.26, -0.48, 0.0);
    // Upper thigh from rear haunch + spherical knee bulge + long lower shin
    oval(leg, fur, side * 0.04, 0.22, -0.28, 0.115, 0.26, 0.115);
    oval(leg, fur, side * 0.04, -0.02, -0.24, 0.108, 0.095, 0.108);
    oval(leg, fur, side * 0.04, -0.24, -0.22, 0.092, 0.24, 0.092);
    // Large dark 4-clawed hind paw on the turntable mat
    oval(leg, accent, side * 0.04, -0.44, -0.14, 0.14, 0.085, 0.175);
    for (let c = -1.5; c <= 1.5; c += 1) {
      const claw = new T.Mesh(new T.ConeGeometry(0.016, 0.055, 8), clawMat);
      claw.rotation.x = Math.PI * 0.44;
      claw.position.set(side * 0.04 + c * 0.032, -0.46, 0.02);
      claw.userData.noDecal = true;
      leg.add(claw);
    }
    markNoDecal(leg);
  }

  // ============================================================================
  // 4. EXTRA-LONG CURVED NIGHTMARE TAIL
  // ============================================================================
  const tail = group('tail', root, 0, -0.26, -0.38);
  if (cfg.tailType === 'puff') {
    const pMat = cfg.hasWoolCrown ? createPlushMaterial(cfg.woolColor || '#f4f6fb') : face;
    oval(tail, pMat, 0, 0, -0.12, 0.15, 0.15, 0.15);
  } else if (cfg.tailType === 'curly') {
    const points = [];
    for (let i = 0; i < 30; i++) {
      const a = (i / 29) * Math.PI * 4;
      points.push([0.085 * Math.cos(a), 0.085 * Math.sin(a), -0.04 - i * 0.006]);
    }
    tube(tail, points, 0.026, accent);
  } else if (cfg.tailType === 'brush') {
    for (let i = 0; i < 3; i++) {
      tube(tail, [[0, 0, 0], [0.14 + i * 0.05, -0.04, -0.16], [0.24 + i * 0.05, -0.18, -0.28]], 0.05, accent);
    }
  } else if (cfg.tailType === 'feathers') {
    for (let i = 0; i < 3; i++) {
      const f = oval(tail, fur, 0.12 + i * 0.08, 0.07 + i * 0.04, -0.12, 0.18, 0.07, 0.065);
      f.rotation.z = 0.3 + i * 0.2;
    }
  } else if (cfg.tailType === 'shark') {
    const fin = polygon([[0, 0], [-0.26, 0.24], [-0.14, 0], [-0.26, -0.22]], fur);
    fin.rotation.y = Math.PI / 2;
    fin.position.set(0, 0.04, -0.06);
    tail.add(fin);
  } else {
    // Extra-long sweeping S-curve tail for CatNap, DogDay, Gator, Dragon, Touille, Elephant
    const tMat = id === 'touille' || cfg.tailType === 'dog' ? accent : fur;
    tube(
      tail,
      [
        [0, 0, 0],
        [0.28, -0.12, -0.24],
        [0.54, 0.18, -0.20],
        [0.68, 0.56, -0.08],
        [0.48, 0.72, 0.02],
      ],
      0.072,
      tMat,
    );
    oval(tail, accent, 0.48, 0.72, 0.02, 0.088, 0.088, 0.088);
  }
  markNoDecal(tail);

  // Decorative side seam stitch strip on torso
  const seam = createStitchSeamStrip(
    [new T.Vector3(-0.27, -0.14, 0.18), new T.Vector3(-0.31, 0.02, 0.13), new T.Vector3(-0.23, 0.24, 0.15)],
    cfg.accent,
    10,
    'sideSeam',
  );
  markNoDecal(seam);
  torso.add(seam);

  root.parts = parts;
  root.pendantEmissiveMesh = charm;
  return root;
}
