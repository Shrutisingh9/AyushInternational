import os
import urllib.request

out = r"c:\Users\SHRUTI SINGH\.vscode\Ayush International\images"
os.makedirs(out, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Referer": "https://www.justdial.com/",
}

# Real photos from the Justdial listing (product cards + gallery + shop)
files = {
    "shop.jpg": "https://content.jdmagicbox.com/v2/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/catalogue/ayush-international-delhi-a93ee-250.jpg",
    "p1.jpg": "https://images.jdmagicbox.com/quickquotes/images_main/mtc3nzuwndi2mq-1777504261-hguijf0t.jpeg",
    "p2.jpg": "https://images.jdmagicbox.com/quickquotes/images_main/mtc3nzuwnde5nw-1777504197-l9vqcxts.jpeg",
    "p3.jpg": "https://images.jdmagicbox.com/quickquotes/images_main/mtc3nzuwndixnq-1777504215-npibskmc.jpeg",
    "p4.jpg": "https://images.jdmagicbox.com/quickquotes/images_main/mtc3nzuwndizmq-1777504231-wpzlhevs.jpeg",
    "p5.jpg": "https://images.jdmagicbox.com/quickquotes/images_main/mtc3nzuwndi3oa-1777504278-8lyd0awr.jpeg",
    "g1.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-yt8a49n.jpg",
    "g2.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-7c3bzm0.jpg",
    "g3.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-hracwnu.jpg",
    "g4.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-l18tkzm.jpg",
    "g5.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-4jtvhq3.jpg",
    "g6.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-uzmk4ys.jpg",
    "g7.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-vcsjvav.jpg",
    "g8.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-b6etmzl.jpg",
    "g9.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-s5t0hxc.jpg",
    "g10.jpg": "https://content.jdmagicbox.com/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/menu/ayush-international-govind-puri-kalkaji-delhi-button-dealers-hjc2lkw.jpg",
    "catalogue.jpg": "https://content.jdmagicbox.com/v2/comp/delhi/x1/011pxx11.xx11.150711165346.f7x1/catalogue/ayush-international-govind-puri-kalkaji-delhi-suit-button-dealers-bwpbay9xzg-250.jpg",
}

for name, url in files.items():
    path = os.path.join(out, name)
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        with open(path, "wb") as f:
            f.write(data)
        print("OK", name, len(data))
    except Exception as e:
        print("FAIL", name, e)
