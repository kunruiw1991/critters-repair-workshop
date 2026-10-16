// 3D plush interpretations of the user's smiling-critters-assets references.
// See icons/smiling-critters-sources.json for the exact reference images.
import { createPlushMaterial, createStitchSeamStrip } from './materials.js';
const T = window.THREE;
export const SMILING_CRITTERS = {
  dogday: {name: 'DogDay', fur: '#efa137', accent: '#ba4926', face: '#ffd268', inner: '#b84529', charm: 'sun', charmColor: '#ffd126', ref: '008_DogDay_Plushie.webp'},
  catnap: {name: 'CatNap', fur: '#8752be', accent: '#613399', face: '#8752be', inner: '#563082', charm: 'moon', charmColor: '#ffe253', ref: '022_CatNap_Plushie.webp'},
  hoppyhopscotch: {name: 'Hoppy Hopscotch', fur: '#76c442', accent: '#4b9e2c', face: '#9bdd57', inner: '#c1ec78', charm: 'bolt', charmColor: '#ffe44c', ref: '012_Hoppy_Hopscotch_Plushie.webp'},
  bubbabubbaphant: {name: 'Bubba Bubbaphant', fur: '#63c1df', accent: '#369fc6', face: '#88d8ed', inner: '#329cc9', charm: 'bulb', charmColor: '#ffe85b', ref: '029_Bubba_Bubbaphant_Plushie.webp'},
  craftycorn: {name: 'CraftyCorn', fur: '#f4f2ed', accent: '#75c7cc', face: '#f4f2ed', inner: '#8ccbd0', charm: 'flower', charmColor: '#ef6587', ref: '011_CraftyCorn_Plushie.webp'},
  pickypiggy: {name: 'PickyPiggy', fur: '#ed8dbe', accent: '#d3529d', face: '#f3a7cd', inner: '#b95095', charm: 'apple', charmColor: '#e53745', ref: '025_PickyPiggy_Plushie.webp'},
  bobbybearhug: {name: 'Bobby BearHug', fur: '#d9324d', accent: '#ef8d9b', face: '#e7465a', inner: '#ef9ea6', charm: 'heart', charmColor: '#a51235', ref: '026_Bobby_BearHug_s_second_cutout_artwork_pose.webp'},
  kickinchicken: {name: 'KickinChicken', fur: '#f6d52e', accent: '#ed8729', face: '#ffe256', inner: '#ffe256', charm: 'star', charmColor: '#f28327', ref: '053_KickinChicken.webp'}
};

export function buildSmilingCritter(id) {
  const cfg = SMILING_CRITTERS[id];
  const root = new T.Group(); root.name = cfg.name; root.characterId = id; root.displayName = cfg.name;
  const parts = {}, fur = createPlushMaterial(cfg.fur), accent = createPlushMaterial(cfg.accent);
  const face = createPlushMaterial(cfg.face), inner = createPlushMaterial(cfg.inner);
  const black = new T.MeshStandardMaterial({color: '#090a13', roughness: .16, metalness: .12});
  const mouthMat = new T.MeshStandardMaterial({color: '#17101c', roughness: .92});
  const white = new T.MeshBasicMaterial({color: '#ffffff'});
  const pink = createPlushMaterial('#ec7d92');
  function group(name, parent, x = 0, y = 0, z = 0) {
    const g = new T.Group();g.name = name;g.position.set(x,y,z);parent.add(g);parts[name] = g;return g;
  }
  function oval(parent, mat, x,y,z, sx,sy,sz) {
    const mesh = new T.Mesh(new T.SphereGeometry(1,32,24),mat);
    mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);parent.add(mesh);return mesh;
  }
  function tube(parent, points, radius, mat) {
    const curve = new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));
    const mesh = new T.Mesh(new T.TubeGeometry(curve,32,radius,12,false),mat);parent.add(mesh);return mesh;
  }
  function shapeMesh(shape, mat, depth = .025, bevel = .008) {
    return new T.Mesh(new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:bevel,bevelThickness:bevel,bevelSegments:3,steps:1,curveSegments:24}),mat);
  }
  function polygon(points, mat) {
    const s = new T.Shape();s.moveTo(...points[0]);points.slice(1).forEach(p=>s.lineTo(...p));s.closePath();return shapeMesh(s,mat);
  }
  const head = group('head',root,0,.43,0);
  const skull = oval(head,fur,0,0,0,.49,.45,.39); skull.name = 'skullMesh';
  if (id === 'dogday' || id === 'hoppyhopscotch' || id === 'bubbabubbaphant' || id === 'pickypiggy') {
    oval(head,face,0,-.025,.285,.445,.385,.125);
  }

  // Ears are independent pivots so every character supports the loose-ear repair.
  for(const side of [-1,1]) {
    const ear = group(side===1?'leftEar':'rightEar',head,side*.34,.31,-.045);
    if(id==='dogday') {
      ear.position.set(side*.40,.28,-.015);ear.rotation.z=side*.16;
      tube(ear,[[0,0,0],[side*.08,-.06,.01],[side*.10,-.22,.04],[side*.07,-.40,.07]],.105,accent);
      oval(ear,accent,side*.07,-.4,.07,.115,.14,.10);
      tube(ear,[[side*.01,-.02,.095],[side*.04,-.16,.105],[side*.035,-.32,.15]],.035,inner);
    } else if(id==='hoppyhopscotch') {
      ear.position.set(side*.25,.35,-.055);ear.rotation.z=-side*.28;
      oval(ear,fur,0,.25,0,.115,.37,.085);
      oval(ear,inner,0,.26,.072,.065,.28,.023);
      ear.add(createStitchSeamStrip([new T.Vector3(-.07,.1,.067),new T.Vector3(-.085,.28,.06),new T.Vector3(-.04,.52,.05)],cfg.accent,10));
    } else if(id==='bubbabubbaphant') {
      ear.position.set(side*.43,.12,-.12);ear.rotation.z=-side*.18;
      oval(ear,fur,side*.06,.015,0,.30,.36,.105);
      oval(ear,inner,side*.075,.015,.09,.235,.29,.035);
      tube(ear,[[side*.05,-.25,.115],[side*.22,-.1,.12],[side*.24,.12,.11]],.012,face);
    } else if(id==='catnap' || id==='craftycorn' || id==='pickypiggy') {
      const pig=id==='pickypiggy';ear.rotation.z=-side*(pig?.75:.24);
      const outline = pig ? [[-.13,0],[-.14,.25],[.02,.21],[.14,.04]] : [[-.15,0],[-.14,.20],[0,.35],[.15,.10],[.13,-.02]];
      const outer = polygon(outline,fur);outer.position.z=-.03;ear.add(outer);
      const inside = polygon(outline,inner);inside.scale.set(.65,.65,.4);inside.position.set(0,.04,.015);ear.add(inside);
    } else if(id==='bobbybearhug') {
      oval(ear,fur,0,.04,0,.17,.18,.10);oval(ear,inner,0,.045,.09,.10,.11,.025);
    } else {
      // Small cheek feathers remain attachable when selected as the loose part.
      ear.position.set(side*.41,-.02,0);
      for(let j=0;j<3;j++)oval(ear,fur,side*j*.025,-j*.045,.02,.10,.045,.055);
    }
  }

  // Signature wide smile: a curved plush rim around a deep black mouth.
  const muzzle = group('muzzle',head,0,-.08,.38);
  const smile = new T.Shape();
  smile.moveTo(-.38,.10);smile.bezierCurveTo(-.30,.14,-.25,-.015,0,-.025);
  smile.bezierCurveTo(.25,-.015,.30,.14,.38,.10);
  smile.bezierCurveTo(.42,-.03,.27,-.30,0,-.32);
  smile.bezierCurveTo(-.27,-.30,-.42,-.03,-.38,.10);
  const mouth = shapeMesh(smile,mouthMat,.018,.012);muzzle.add(mouth);
  const edge = smile.getPoints(64).map(p=>new T.Vector3(p.x,p.y,.028));
  const rim = new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(edge,false,'centripetal'),90,.018,8,false),face);muzzle.add(rim);
  oval(muzzle,pink,0,-.275,.035,.10,.027,.012);
  if(id!=='bubbabubbaphant' && id!=='kickinchicken' && id!=='pickypiggy') {
    const nose=oval(muzzle,black,0,.12,.05,.055,.032,.025);nose.rotation.z=Math.PI;
  }
  if(id==='bobbybearhug') {
    [-1,1].forEach(side=>oval(muzzle,accent,side*.07,.105,.028,.075,.045,.022));
    oval(muzzle,black,0,.13,.057,.055,.032,.025);
  }
  if(id==='pickypiggy') {
    oval(muzzle,accent,0,.14,.045,.10,.062,.045);
    [-1,1].forEach(side=>oval(muzzle,inner,side*.038,.14,.085,.014,.02,.008));
  }
  if(id==='kickinchicken') {
    const beak=polygon([[-.09,.14],[0,.22],[.09,.14],[0,.075]],accent);beak.position.z=.045;muzzle.add(beak);
  }
  if(id==='bubbabubbaphant') {
    const trunk=group('trunk',muzzle,0,.16,.035);
    tube(trunk,[[0,0,0],[0,-.08,.045],[.01,-.22,.09],[.015,-.29,.14]],.060,fur);
    oval(trunk,accent,.015,-.29,.145,.063,.045,.05);
    oval(trunk,inner,.015,-.29,.19,.035,.026,.009);
    for(let i=0;i<3;i++)tube(trunk,[[-.035,-.07-i*.055,.083],[0,-.08-i*.055,.105],[.035,-.07-i*.055,.083]],.004,accent);
  }

  const eyes=group('eyes',head,0,.15,.37);
  for(const side of [-1,1]) {
    const eye=group(side===1?'leftEye':'rightEye',eyes,side*.18,0,0);
    oval(eye,black,0,0,0,.105,.12,.075);
    oval(eye,white,-.027,.038,.067,.031,.035,.012);
    oval(eye,white,.028,-.031,.068,.012,.014,.009);
    tube(head,[[side*.11,.31,.28],[side*.18,.325,.29],[side*.25,.30,.27]],.013,accent);
  }

  // Hair and species details follow the reference silhouettes.
  if(id==='craftycorn') {
    for(let i=0;i<5;i++) {
      const tuft=oval(head,accent,(i-2)*.08,.36-Math.abs(i-2)*.025,.21,.09,.14,.08);tuft.rotation.z=(i-2)*-.3;
    }
    const horn=new T.Mesh(new T.ConeGeometry(.075,.27,28),new T.MeshStandardMaterial({color:'#cbc8d5',metalness:.35,roughness:.4}));
    horn.position.set(0,.55,.09);horn.rotation.x=.2;head.add(horn);
    for(let i=0;i<4;i++) {
      const ring=new T.Mesh(new T.TorusGeometry(.065-i*.013,.007,6,24),accent);
      ring.rotation.x=Math.PI/2;ring.position.set(0,.45+i*.05,.11-i*.01);head.add(ring);
    }
    for(let i=0;i<4;i++)oval(head,accent,.27+i*.027,.15-i*.13,-.24,.12,.15,.11);
  } else if(id==='kickinchicken') {
    for(let i=0;i<3;i++) {
      const tuft=oval(head,fur,-.13+i*.11,.39+i*.05,.015,.20,.10,.09);tuft.rotation.z=-.35-i*.35;
    }
  } else if(id==='dogday') {
    for(let i=0;i<3;i++) {
      const tuft=oval(head,accent,-.20+i*.13,.40+i*.01,-.01,.16,.11,.09);tuft.rotation.z=.3;
    }
  }

  const torso=group('torso',root,0,-.22,0);
  const body=oval(torso,fur,0,0,0,.30,.39,.25);body.name='bodyMesh';
  oval(torso,id==='bobbybearhug'?accent:face,0,-.015,.217,.19,.29,.055);
  const zipper=group('zipper',torso,0,-.02,.28);
  const tape=new T.Mesh(new T.BoxGeometry(.030,.49,.013),createPlushMaterial(cfg.accent));zipper.add(tape);
  const zipMat = new T.MeshStandardMaterial({color:'#a1a0a8',metalness:.65,roughness:.45});
  for(let i=0;i<16;i++) {
    const tooth=new T.Mesh(new T.BoxGeometry(.018,.009,.010),zipMat);
    tooth.position.set((i%2?1:-1)*.006,-.225+i*.028,.011);zipper.add(tooth);
  }

  const pendant=group('smilingPendant',torso,0,.18,.315);
  const charmMat=new T.MeshStandardMaterial({color:cfg.charmColor,emissive:cfg.charmColor,emissiveIntensity:.25,roughness:.4,metalness:.25});
  const heartShape=()=>{const s=new T.Shape();s.moveTo(0,-.09);s.bezierCurveTo(-.18,.025,-.07,.14,0,.06);s.bezierCurveTo(.07,.14,.18,.025,0,-.09);return s;};
  let charm;
  if(cfg.charm==='heart')charm=shapeMesh(heartShape(),charmMat);
  if(cfg.charm==='star' || cfg.charm==='sun') {
    const pts=[],count=cfg.charm==='sun'?12:10;
    for(let i=0;i<count;i++){const a=Math.PI/2+i*Math.PI*2/count,r=i%2?.055:.10;pts.push([Math.cos(a)*r,Math.sin(a)*r]);}
    charm=polygon(pts,charmMat);
    if(cfg.charm==='sun')oval(pendant,charmMat,0,0,.03,.061,.061,.02);
  }
  if(cfg.charm==='moon') {
    const s=new T.Shape();s.moveTo(.055,.09);s.bezierCurveTo(-.12,.11,-.14,-.11,.055,-.09);s.bezierCurveTo(-.035,-.055,-.035,.055,.055,.09);charm=shapeMesh(s,charmMat);
  }
  if(cfg.charm==='bolt')charm=polygon([[.015,.11],[-.08,-.015],[-.015,-.015],[-.035,-.11],[.085,.025],[.015,.025]],charmMat);
  if(cfg.charm==='bulb') {
    charm=oval(pendant,charmMat,0,.022,0,.075,.075,.026);
    const base=new T.Mesh(new T.BoxGeometry(.062,.035,.03),zipMat);base.position.y=-.061;pendant.add(base);
    tube(pendant,[[-.025,.04,.031],[0,.065,.031],[.03,.035,.031]],.005,white);
  }
  if(cfg.charm==='flower') {
    const cols=['#eb6496','#8e60c1','#66a8df','#73bd57','#f6cc32'];
    for(let i=0;i<5;i++)oval(pendant,new T.MeshStandardMaterial({color:cols[i],emissive:cols[i],emissiveIntensity:.25}),Math.sin(i*1.257)*.065,Math.cos(i*1.257)*.065,0,.044,.044,.018);
    charm=oval(pendant,charmMat,0,0,.022,.037,.037,.018);
  }
  if(cfg.charm==='apple') {
    const s=new T.Shape();s.moveTo(0,.07);s.bezierCurveTo(-.12,.12,-.12,-.1,-.025,-.09);s.quadraticCurveTo(0,-.07,.025,-.09);s.bezierCurveTo(.12,-.1,.12,.12,0,.07);charm=shapeMesh(s,charmMat);
    tube(pendant,[[0,.07,0],[.008,.12,0]],.009,accent);
    const leaf=oval(pendant,createPlushMaterial('#71b74d'),.035,.115,0,.03,.014,.01);leaf.rotation.z=.5;
  }
  if(charm && charm.parent!==pendant)pendant.add(charm);
  const bail=new T.Mesh(new T.TorusGeometry(.018,.006,8,16),zipMat);bail.position.set(0,.12,0);pendant.add(bail);

  for(const side of [-1,1]) {
    const arm=group(side===1?'leftArm':'rightArm',root,side*.29,.025,0);
    arm.rotation.z=side*-.2;
    if(id==='kickinchicken') {
      oval(arm,fur,0,-.18,.015,.10,.22,.08);
      for(let j=0;j<3;j++)oval(arm,fur,(j-1)*.046,-.35-Math.abs(j-1)*.01,.04,.035,.10,.055);
    } else {
      oval(arm,fur,0,-.18,0,.088,.23,.09);
      oval(arm,accent,0,-.37,.035,.11,.12,.10);
      for(let j=0;j<2;j++)tube(arm,[[-.04+j*.06,-.43,.116],[-.045+j*.06,-.38,.132]],.004,fur);
    }
    const leg=group(side===1?'leftLeg':'rightLeg',root,side*.15,-.53,0);
    oval(leg,fur,0,-.13,0,.104,.19,.10);
    oval(leg,accent,0,-.28,.08,.14,.105,.17);
    if(id==='kickinchicken')for(let j=0;j<3;j++)oval(leg,accent,(j-1)*.07,-.30,.20,.045,.04,.10);
  }
  const tail=group('tail',root,0,-.38,-.24);
  if(id==='catnap') {
    tube(tail,[[0,0,0],[.32,.05,-.22],[.61,.35,-.15],[.67,.65,-.06],[.48,.70,0]],.075,fur);
    oval(tail,accent,.48,.70,0,.078,.08,.08);
  } else if(id==='dogday') {
    tube(tail,[[0,0,0],[.20,.03,-.10],[.33,.16,-.08],[.31,.25,0]],.075,accent);
  } else if(id==='hoppyhopscotch')oval(tail,face,0,0,-.10,.14,.14,.14);
  else if(id==='craftycorn') {
    for(let i=0;i<3;i++)tube(tail,[[0,0,0],[.12+i*.04,-.02,-.14],[.20+i*.04,-.12,-.24]],.045,accent);
  } else if(id==='pickypiggy') {
    const points=[];for(let i=0;i<30;i++){const a=i/29*Math.PI*4;points.push([.075*Math.cos(a),.075*Math.sin(a),-.03-i*.005]);}tube(tail,points,.022,accent);
  } else if(id==='bubbabubbaphant') {
    tube(tail,[[0,0,0],[.22,-.04,-.06],[.28,.02,-.12]],.022,fur);oval(tail,accent,.28,.02,-.12,.055,.035,.04);
  } else if(id==='kickinchicken') {
    for(let i=0;i<3;i++){const f=oval(tail,fur,.11+i*.07,.06+i*.035,-.10,.16,.065,.06);f.rotation.z=.3+i*.2;}
  } else oval(tail,fur,0,0,-.06,.09,.09,.09);
  torso.add(createStitchSeamStrip([new T.Vector3(-.24,-.12,.15),new T.Vector3(-.27,.02,.11),new T.Vector3(-.20,.23,.13)],cfg.accent,10,'sideSeam'));
  root.parts=parts;root.pendantEmissiveMesh=charm;
  return root;
}
