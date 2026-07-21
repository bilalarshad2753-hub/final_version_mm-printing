from pathlib import Path
from PIL import Image

src = Path('public/mm-logo.png')
if not src.exists():
    raise FileNotFoundError(f'Missing source file: {src}')

sizes = [(32, 32), (16, 16)]
for size in sizes:
    dest = Path(f'public/favicon-{size[0]}x{size[1]}.png')
    with Image.open(src) as img:
        icon = img.convert('RGBA')
        icon = icon.resize(size, Image.Resampling.LANCZOS)
        icon.save(dest)
        print(f'Wrote {dest}')

with Image.open(src) as img:
    icon = img.convert('RGBA')
    icon = icon.resize((256, 256), Image.Resampling.LANCZOS)
    icon.save('public/favicon.png')
    print('Wrote public/favicon.png')
