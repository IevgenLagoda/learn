from turtle import width
from PIL import Image, ImageDraw
#img = Image.open('photo.jpg')
#print(img.size)
# img.show()
#img.close()

img = Image.new('RGB', (300, 300), (255, 255, 255))
draw = ImageDraw.Draw(img)
for n in range(100, 200):
    draw.point((n, 5), fill=(255, 0, 0))
for n in range(1, 20):
    draw.line((n, n, n+50*n, n+60), fill=(0, 255, 0), width=2)    
draw.rectangle((100, 100, 200, 200), outline='#fffccc', fill='#aabbcc')
draw.polygon((200, 200, 220, 220, 240,240, 200, 200), outline='#ccc', fill='#eeff')
img.show()
img.close()