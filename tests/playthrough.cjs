// Run with NODE_PATH pointing to a Playwright installation, against a local static server.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path'), fs = require('node:fs');
const out = process.env.OUTPUT_DIR || path.join(require('node:os').tmpdir(), 'critter-repair-tests');
fs.mkdirSync(out, {recursive: true});
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1280,height:900}}), errors=[];
 page.on('pageerror',e=>{errors.push(e.message);console.error(e.message)});
 // Accelerate continuous tool frames, while exercising the same hit testing and repair handlers.
 await page.route('**/js/game.js',async route=>{
  const res=await route.fetch(); let source=await res.text();
  // Cover every optional repair for each rig; reduce only rendering resolution.
  source=source.replace('.slice(0, 3);','.slice(0, 5);')
    .replace('renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));','renderer.setPixelRatio(.5);');
  source+=`\nwindow.__VOICE_TEST__ = () => {const saved = voiceChoices; voiceChoices = [{name:'Google US English',lang:'en-US'}, {name:'Tingting',lang:'zh-CN'}, {name:'Microsoft Xiaoyi Online (Natural)',lang:'zh-CN'}, {name:'Sinji',lang:'zh-HK'}]; const chosen=gentleVoice();voiceChoices=saved;return chosen.name;};\nwindow.__PLAYTEST__ = async () => {
   const log=[];
   for(let step=0;step<100 && game.damages.some(d=>!d.done);step++) {
    const d=game.damages.find(d=>!d.done); findDamage(d.type);
    if(game.spinTo!=null) {turntable.rotation.y=game.spinTo;game.spinTo=null;}
    camera.position.copy(CAM.near.pos);camera.lookAt(CAM.near.look);
    game.arrive=1;animateCritter(game.critter,.05,game.t);game.critter.updateMatrixWorld(true);camera.updateMatrixWorld(true);
    selectTool(DMG[d.type].tool);
    for(let n=0;n<100 && !d.done;n++) {
     const pos=screenOf(d.body ? game.critter.parts.torso : d.anchor);
     if(TOOL[game.tool].hold) holdTool(pos.x,pos.y,.05);
     else if(d.type==='flat') {tapTool(pos.x,pos.y);await new Promise(r=>setTimeout(r,1000));}
     else {tapTool(pos.x,pos.y); if(d.type==='ear')await new Promise(r=>setTimeout(r,1800));}
    }
    if(!d.done) throw new Error('Unreachable repair: '+d.type+' on '+game.sel+' facing='+facing(d.anchor)+' parent='+d.anchor.parent?.name);
    log.push(d.type);
   }
   if(game.damages.some(d=>!d.done))throw new Error('Incomplete visit');
   turntable.rotation.y=0; game.spinTo=null; game.critter.updateMatrixWorld(true);
   return log;
  };`;
  await route.fulfill({response:res,body:source});
 });
 await page.addInitScript(()=>{window.__spoken=[]; speechSynthesis.speak=(u)=>{window.__spoken.push({text:u.text,lang:u.lang});};});
 await page.goto(process.env.GAME_URL || 'http://127.0.0.1:8765');await page.waitForFunction(()=>window.__REPAIR3D__);
 assert.equal(await page.evaluate(()=>__VOICE_TEST__()),'Microsoft Xiaoyi Online (Natural)');
 if(process.env.VOICE_ONLY){
  await page.click('#voicePreviewBtn');
  console.log('Mandarin voice preference and preview control PASS');
  await browser.close(); return;
 }
 await page.click('#voicePreviewBtn');
 const preview=await page.evaluate(()=>__spoken.at(-1));assert.match(preview.text,/你好/);assert.match(preview.lang,/^(zh|cmn)/i);
 assert.equal(await page.locator('html').getAttribute('lang'),'zh-CN');
 const ids=await page.evaluate(()=>__REPAIR3D__.characters());assert.equal(ids.length,11);
 const visitIds=process.env.CRITTERS ? process.env.CRITTERS.split(',') : ids;
 for(const id of visitIds){
  await page.click('.patient[data-k='+id+']');await page.click('#startBtn');await page.waitForTimeout(2100);
  const log=await page.evaluate(()=>__PLAYTEST__());assert(log.includes('tangle'));assert(log.includes('patch'));assert.equal(log.filter(x=>x==='checkup').length,3);
  for(const type of ['eye','ear','flat','faded','pendant'])assert(log.includes(type),id+' missed '+type);
  assert.equal(await page.locator('[data-t=heart]').count(),1);
  await page.evaluate(()=>{const R=__REPAIR3D__;R.selectTool('heart');const p=R.critterScreen();document.getElementById('gl').dispatchEvent(new PointerEvent('pointerdown',{clientX:p.x,clientY:p.y,bubbles:true}));window.dispatchEvent(new PointerEvent('pointerup'));});
   await page.waitForFunction(()=>__REPAIR3D__.state==='awake');await page.waitForTimeout(3000);
  await page.click('#dressItems [data-k=bow]');await page.click('#shelfBtn');await page.waitForSelector('#nextBtn');
  assert.equal(await page.evaluate(id=>__REPAIR3D__.save().fixed[id],id),1);
  console.log(id+': '+log.join(', ')+' → wake → dress → shelf PASS');
  if(id==='kickinchicken')await page.screenshot({path:path.join(out,'repair-finished.png')});
  await page.click('#nextBtn');
 }
 await page.reload();await page.waitForFunction(()=>window.__REPAIR3D__);assert.equal(await page.evaluate(()=>__REPAIR3D__.save().shelf.length),Math.min(visitIds.length,6));
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(out,'repair-mobile.png')});
 assert.equal(await page.locator('.patient').count(),11);
 for(const id of ids) {const box=await page.locator('.patient[data-k='+id+']').boundingBox();assert(box.x>=0 && box.x+box.width<=390);}
 await page.click('#startBtn');await page.click('#pauseBtn');assert.equal(await page.locator('#pauseVeil').isVisible(),true);await page.click('#resumeBtn');await page.click('#stopBtn');assert.equal(await page.evaluate(()=>__REPAIR3D__.state),'home');
 await page.evaluate(()=>{const key='critterRepair3D_v1',s=JSON.parse(localStorage.getItem(key));s.shelf.push({id:'cloverbunny',acc:[]});localStorage.setItem(key,JSON.stringify(s));});
 await page.reload();await page.waitForFunction(()=>window.__REPAIR3D__);assert.equal(await page.evaluate(()=>__REPAIR3D__.save().shelf.some(e=>e.id==='cloverbunny')),false);
 assert.deepEqual(errors,[]);console.log('Saved shelf, mobile selection, pause/resume/stop, and no runtime errors PASS');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
