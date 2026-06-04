"""One-off: strip the background from the ambassador portraits, keeping only
the person on a transparent canvas. Originals are recoverable via git."""
import io
from pathlib import Path

from PIL import Image
from rembg import remove, new_session

PUBLIC = Path(__file__).resolve().parent.parent / "public"
IMAGES = ["sarah-chen-cutout.png", "marcus-williams-cutout.png", "priya-desai-cutout.png"]

# u2net_human_seg is tuned for people -> cleaner cutouts than the generic model.
session = new_session("u2net_human_seg")

for name in IMAGES:
    src = PUBLIC / name
    data = src.read_bytes()
    out = remove(
        data,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=10,
    )
    img = Image.open(io.BytesIO(out)).convert("RGBA")
    img.save(src)
    print(f"done: {name}  ({img.size[0]}x{img.size[1]})")

print("all done")
