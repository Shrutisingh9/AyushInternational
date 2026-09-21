import os
import urllib.parse
import urllib.request

OUT = r"c:\Users\SHRUTI SINGH\.vscode\Ayush International\images"
os.makedirs(OUT, exist_ok=True)
UA = {"User-Agent": "AyushInternationalSite/1.0 (catalog images)"}

FILES = {
    "cat-polyester.jpg": "Plastic_&_fabric_buttons_showing_holes_&_shank.jpg",
    "cat-metal.jpg": "Shank_version_of_Spanish_1750_button.jpg",
    "cat-laser.jpg": "Post_medieval_button_(FindID_775474).jpg",
    "cat-embroidery.jpg": "Buttons,_18th_century_(CH_18323509).jpg",
    "cat-fabric.jpg": "Buttons_(Cloth_Covered,_Domed,_'Defiance_Buttons)_(48708530428).jpg",
    "cat-acrylic.jpg": "Green_vintage_buttons.jpg",
    "cat-wood.jpg": "Coconut_shell_buttons.jpg",
    "cat-horn.jpg": "Horn_'hunting'_buttons_with_shanks.jpg",
    "cat-shell.jpg": "Pions_et_boutons_de_chemises_en_nacre_et_coquillages_dont_la_nacre_est_extraite.jpg",
    "type-mop.jpg": "Buttons_(AM_1937.17-1).jpg",
    "type-coconut.jpg": "Coconut_shell_button.jpg",
    "type-bakelite.jpg": "Bakelite_Buttons_2007.068_(66948).jpg",
    "type-leather.jpg": "Leather_shank_button_up_close.jpg",
    "type-assort.jpg": "Buttons_(51359108692).jpg",
}

for dest, fname in FILES.items():
    url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + urllib.parse.quote(fname) + "?width=1000"
    path = os.path.join(OUT, dest)
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=45) as r:
            data = r.read()
        with open(path, "wb") as f:
            f.write(data)
        print("OK", dest, len(data))
    except Exception as e:
        print("FAIL", dest, e)
