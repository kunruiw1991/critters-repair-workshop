#!/usr/bin/env python3
"""Builds a gbrowser batch file that plays a full v2 (3D) repair visit.

Usage: python3 tests/make_batch.py <port> <critter> <outdir> > batch.json
Then:  gbrowser batch @batch.json --width 1280 --height 900 --timeout 300s \
         --no-proxy-server --clean-profile
"""
import json
import sys

port, critter, out = sys.argv[1], sys.argv[2], sys.argv[3]

HARNESS = r"""
window.__errs = window.__errs || [];
window.addEventListener('error', (e) => __errs.push(String(e.message)));
window.addEventListener('unhandledrejection', (e) => __errs.push('rej:' + String(e.reason)));
window.__T = (() => {
  const cv = document.getElementById('gl');
  const ev = (t, x, y) => (t === 'pointerdown' ? cv : window).dispatchEvent(new PointerEvent(t, {clientX: x, clientY: y, bubbles: true, pointerId: 1, isPrimary: true, buttons: t === 'pointerup' ? 0 : 1}));
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const TOOLFOR = {mud: 'sponge', dust: 'brush', burr: 'tweezers', tear: 'needle', wet: 'dryer', eye: 'button', ear: 'needle', flat: 'cotton', faded: 'paint', pendant: 'cloth'};
  const HOLD = {sponge: 1, brush: 1, dryer: 1, paint: 1, cloth: 1};
  async function tap(x, y) { ev('pointerdown', x, y); await sleep(60); ev('pointerup', x, y); }
  async function hold(x, y, ms) { ev('pointerdown', x, y); for (let k = 0; k < ms / 100; k++) { ev('pointermove', x + (k % 2 ? 3 : -3), y); await sleep(100); } ev('pointerup', x, y); }
  async function fixAll(maxSteps) {
    const R = window.__REPAIR3D__, log = [];
    for (let s = 0; s < maxSteps && R.remaining() > 0; s++) {
      const ds = R.damages(); const i = ds.findIndex((d) => !d.done); const type = ds[i].type; const tool = TOOLFOR[type];
      R.spinToDamage(i); await sleep(1400);
      R.selectTool(tool);
      let p = R.screen(i);
      if (type === 'flat' || type === 'faded') p = R.critterScreen();
      if (HOLD[tool]) await hold(p.x, p.y, type === 'faded' ? 4500 : 2600);
      else if (type === 'flat') { for (let k = 0; k < 5 && !R.damages()[i].done; k++) { await tap(p.x, p.y); await sleep(1300); } }
      else if (type === 'tear') { for (let k = 0; k < 4; k++) { const q = R.screen(i); await tap(q.x, q.y); await sleep(250); } }
      else if (type === 'ear') { await tap(p.x, p.y); await sleep(2000); }
      else await tap(p.x, p.y);
      await sleep(500);
      log.push(type + (R.damages()[i].done ? ':ok' : ':NO(' + Math.round(p.x) + ',' + Math.round(p.y) + ',f=' + p.facing + ')'));
    }
    return log.join(' ') + ' | remaining=' + R.remaining();
  }
  return {ev, sleep, tap, hold, fixAll};
})();
'harness';
"""

steps = [
    {"action": "navigate", "url": f"http://127.0.0.1:{port}/index.html", "waitUntil": "none"},
    {"action": "sleep", "duration": "3s"},
    {"action": "eval", "expression": HARNESS},
    {"action": "eval", "expression": f"document.querySelector('.patient[data-k={critter}]').click(); document.getElementById('startBtn').click(); 'started'"},
    {"action": "sleep", "duration": "3500ms"},
    {"action": "eval", "print": "true", "expression": "JSON.stringify({st: __REPAIR3D__.state, dmg: __REPAIR3D__.damages().map(d=>d.type).join(','), verts: __REPAIR3D__.vertexCount()})"},
    {"action": "screenshot", "file": f"{out}/{critter}_1_broken.png"},
    {"action": "eval", "print": "true", "expression": "(async()=>{const r=await __T.fixAll(6);return r})()"},
    {"action": "screenshot", "file": f"{out}/{critter}_2_midway.png"},
    {"action": "eval", "print": "true", "expression": "(async()=>{const r=await __T.fixAll(40);return r})()"},
    {"action": "eval", "print": "true", "expression": "(async()=>{await __T.sleep(1500);const R=__REPAIR3D__;R.selectTool('heart');const c=R.critterScreen();await __T.tap(c.x,c.y);await __T.sleep(3500);return 'state='+R.state})()"},
    {"action": "screenshot", "file": f"{out}/{critter}_3_awake.png"},
    {"action": "eval", "print": "true", "expression": "(async()=>{await __T.sleep(2500);const it=[...document.querySelectorAll('#dressItems .tool')];it[0]&&it[0].click();it[2]&&it[2].click();await __T.sleep(1200);return 'dress items='+it.length})()"},
    {"action": "screenshot", "file": f"{out}/{critter}_4_dress.png"},
    {"action": "eval", "print": "true", "expression": "(async()=>{document.getElementById('shelfBtn').click();await __T.sleep(3800);return 'endVeil='+!document.getElementById('endVeil').classList.contains('hidden')+' save='+localStorage.getItem('critterRepair3D_v1')})()"},
    {"action": "screenshot", "file": f"{out}/{critter}_5_card.png"},
    {"action": "eval", "print": "true", "expression": "(async()=>{document.getElementById('nextBtn').click();await __T.sleep(1500);return 'state='+__REPAIR3D__.state+' errs='+JSON.stringify(__errs)})()"},
    {"action": "screenshot", "file": f"{out}/{critter}_6_home_shelf.png"},
]
print(json.dumps(steps, indent=1))
