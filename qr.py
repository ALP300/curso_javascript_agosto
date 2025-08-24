# Requisitos:
#   pip install qrcode[pil]

import qrcode

url = "https://play.google.com/store/apps/details?id=com.proy.micole1"

img = qrcode.make(url)               # genera el QR con configuración por defecto
img.save("qr_micole1.png")           # guarda el archivo PNG
print("QR creado: qr_micole1.png")
