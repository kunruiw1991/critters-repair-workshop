# 🧸 Critter Repair Workshop 3D

A cozy 3D plush-repair clinic for our family's Smiling Critters, built for a 5-year-old.
Inspired by doll-restoration videos, with only the gentle, satisfying parts kept.

**Play:** https://kunruiw1991.github.io/critters-repair-workshop/

## Patients
| Critter | Who |
|---|---|
| 🦇 LunaBat | Chuyu |
| 🦊 SunnyFox | Mom |
| 🍿 PoppyDash | Dad |

## How it plays
- Every visit rolls **random damage** on the 3D plush: mud, dust and cobwebs, prickly burrs, torn seams, plus 3 surprise problems (lost button eye, loose ear, flat stuffing, faded colors, dull pendant).
- Fix things **in any order**. Drag to spin the turntable; tap a ticket chip and the critter turns to show you that spot.
- **10 tools:** 🧹 brush, 🧽 sponge (leaves wet spots), 💨 dryer, 🪡 needle (4 stitches, also sews the ear back), 🔘 button eye, ☁️ cotton, 🖌️ color spray, 🧤 polish, tweezers, and the final 💝 wind-up heart that wakes the critter up.
- Wrong tool? The critter gives a friendly hint and the right tool wiggles.
- Dress-up (bow, flowers, party hat, scarf, star), then the critter hops onto the **Happy Shelf**. Before/after photo card. Shelf and stars are saved on the device.
- Slow, calm motion; ⏸ pause and ⏹ stop are always available.

## Tech
- Three.js r161, no build step, no backend. Open `index.html` from any static host.
- SunnyFox and LunaBat rigs come from [critters-airplane-3d](https://github.com/kunruiw1991/critters-airplane-3d). PoppyDash is a new rig in the same style.
- Background music (workshop theme, sewing lullaby, celebration) generated with Lyria; sound effects are synthesized with WebAudio.
- `tests/make_batch.py` builds a headless gbrowser playthrough that repairs every damage, wakes the critter, dresses it and checks the shelf save.
