"""Normalise the cutout portraits so every ambassador appears at the same
scale, horizontally centred, and standing on a common bottom baseline inside
a uniform 3:4 canvas. Runs on the already-transparent PNGs (no model needed)."""
from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / "public"
IMAGES = ["sarah-chen-cutout.png", "marcus-williams-cutout.png", "priya-desai-cutout.png"]

CANVAS_W, CANVAS_H = 960, 1280          # 3 : 4
TARGET_H_RATIO = 0.95                    # person fills 95% of the height
MAX_W_RATIO = 0.96                       # but never wider than 96% of the width
BOTTOM_MARGIN = 22                       # px gap below the feet

for name in IMAGES:
    src = PUBLIC / name
    img = Image.open(src).convert("RGBA")

    # tight bounding box of the visible person (ignore faint stray pixels)
    mask = img.getchannel("A").point(lambda p: 255 if p > 10 else 0)
    bbox = mask.getbbox()
    if bbox is None:
        print(f"skip (empty): {name}")
        continue
    person = img.crop(bbox)
    pw, ph = person.size

    # scale to a consistent height, but clamp so wide poses still fit the width
    scale = min((CANVAS_H * TARGET_H_RATIO) / ph, (CANVAS_W * MAX_W_RATIO) / pw)
    nw, nh = max(1, round(pw * scale)), max(1, round(ph * scale))
    person = person.resize((nw, nh), Image.LANCZOS)

    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    x = (CANVAS_W - nw) // 2                       # centre horizontally
    y = CANVAS_H - nh - BOTTOM_MARGIN              # anchor to the baseline
    canvas.paste(person, (x, y), person)
    canvas.save(src)
    print(f"done: {name}  person {pw}x{ph} -> {nw}x{nh}  canvas {CANVAS_W}x{CANVAS_H}")

print("all done")
