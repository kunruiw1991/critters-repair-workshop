"""Headless CDP playthrough of the Critter Repair Workshop (all 8 steps)."""
import asyncio, base64, json, sys
sys.path.insert(0, '/usr/local/google/home/kunruiwang/teamwork_projects/critters_airplane_3d/tests')
from cdp_driver import ChromeCdpSession, LocalHttpServer  # noqa: E402

ROOT = '/usr/local/google/home/kunruiwang/teamwork_projects/critters_repair_workshop'
OUT = '/usr/local/google/home/kunruiwang/.gemini/jetski/brain/9728da7f-273a-437b-8a57-a92dbcf7e708/scratch'
W, H = 896, 1200
CRITTER = sys.argv[1] if len(sys.argv) > 1 else 'lunabat'


async def shot(s, name):
  r = await s.send_cdp('Page.captureScreenshot', {'format': 'png'})
  open(f'{OUT}/{name}.png', 'wb').write(base64.b64decode(r['data']))


async def main():
  import os
  os.makedirs(OUT, exist_ok=True)
  with LocalHttpServer(ROOT) as srv:
    s = ChromeCdpSession(window_size=(1280, 900))
    await s.start()
    errs = []
    await s.send_cdp('Runtime.enable')
    await s.navigate(srv.base_url + '/index.html', wait_app_ready=False)
    await asyncio.sleep(1.0)
    await s.eval_js(f"document.querySelector('.pick[data-k={CRITTER}]').click()")
    await shot(s, f'{CRITTER}_0_home')
    await s.eval_js("document.getElementById('startBtn').click()")
    await asyncio.sleep(2.0)
    rect = await s.eval_js("(()=>{const r=document.getElementById('cv').getBoundingClientRect();return [r.left,r.top,r.width,r.height]})()")
    L, T, RW, RH = rect
    cx = lambda x: L + x * RW / W
    cy = lambda y: T + y * RH / H

    async def mouse(t, x, y, buttons=1):
      await s.send_cdp('Input.dispatchMouseEvent', {'type': t, 'x': cx(x), 'y': cy(y), 'button': 'left', 'buttons': buttons, 'clickCount': 1})

    async def click(x, y):
      await mouse('mousePressed', x, y); await mouse('mouseReleased', x, y, 0)

    async def scrub(x0, x1, y0, y1, step=45):
      await mouse('mouseMoved', x0, y0, 0); await mouse('mousePressed', x0, y0)
      y, d = y0, 1
      while y <= y1:
        xs = range(int(x0), int(x1), 40) if d > 0 else range(int(x1), int(x0), -40)
        for x in xs:
          await mouse('mouseMoved', x, y)
        y += step; d = -d
      await mouse('mouseReleased', x0, y1, 0)

    async def step():
      return await s.eval_js('window.__REPAIR__.step')

    await shot(s, f'{CRITTER}_1_broken')
    log = []
    for attempt in range(4):
      if await step() != 'dust': break
      await scrub(40, 860, 60, 1160); await asyncio.sleep(0.6)
    await asyncio.sleep(1.6); log.append(('after dust', await step()))
    for attempt in range(4):
      if await step() != 'wash': break
      await scrub(40, 860, 60, 1160); await asyncio.sleep(0.6)
    await asyncio.sleep(1.6); log.append(('after wash', await step()))
    await shot(s, f'{CRITTER}_2_clean_wet')
    for attempt in range(6):
      if await step() != 'dry': break
      await scrub(40, 860, 60, 1160, step=60); await asyncio.sleep(0.3)
    await asyncio.sleep(1.6); log.append(('after dry', await step()))
    await shot(s, f'{CRITTER}_3_flat')
    for i in range(5):
      await s.eval_js("document.getElementById('cotton').click()"); await asyncio.sleep(1.4)
    await asyncio.sleep(1.8); log.append(('after stuff', await step(), await s.eval_js('window.__REPAIR__.stuff')))
    await shot(s, f'{CRITTER}_4_stitch')
    pts = await s.eval_js('window.__REPAIR__.stitchPts()')
    for x, y in pts:
      await click(x, y); await asyncio.sleep(0.25)
    await asyncio.sleep(1.8); log.append(('after stitch', await step()))
    await shot(s, f'{CRITTER}_5_eye')
    e = await s.eval_js('window.__REPAIR__.eye()')
    await click(e['x'], e['y']); await asyncio.sleep(1.8); log.append(('after eye', await step()))
    p = await s.eval_js('window.__REPAIR__.pendant()')
    for attempt in range(5):
      if await step() != 'polish': break
      await scrub(p['x'] - p['r'] - 10, p['x'] + p['r'] + 10, p['y'] - p['r'] - 10, p['y'] + p['r'] + 10, step=14)
      await asyncio.sleep(0.5)
    await asyncio.sleep(1.8); log.append(('after polish', await step()))
    await s.eval_js("document.querySelector('.tool[data-g]').click()")
    await click(300, 250)
    await asyncio.sleep(0.8)
    await shot(s, f'{CRITTER}_6_gift')
    await s.eval_js("document.getElementById('doneBtn').click()")
    await asyncio.sleep(3.5)
    log.append(('celebrate', await s.eval_js('window.__REPAIR__.celebrate')))
    await shot(s, f'{CRITTER}_7_card')
    log.append(('shelf', await s.eval_js("localStorage.getItem('critterRepairShelf')")))
    print(json.dumps(log))
    try:
      s.assert_zero_errors('playthrough'); print('ZERO_ERRORS')
    except Exception as ex:  # pylint: disable=broad-except
      print('ERRORS', ex)
    await s.close()

asyncio.run(main())
