/* ======================================================
   EDIT THESE — business contact details.
   ====================================================== */
window.AYUSH = {
  phone: '+91 9818684074',
  whatsapp: '919818684074',
  gstin: '',
  email: 'ayushinternational2008@gmail.com',
  proprietor: 'Munna Singh',
  address: '1041, Govindpuri, Gali No. 9, Kalkaji, New Delhi – 110019',
  yearStarted: 2007
};

window.CATEGORIES = [
  {id:'all', label:'All buttons'},
  {id:'shell', label:'Shell / MOP'},
  {id:'polyester', label:'Polyester'},
  {id:'metal', label:'Metal'},
  {id:'laser', label:'Laser'},
  {id:'embroidery', label:'Embroidery'},
  {id:'fabric', label:'Fabric / Covered'},
  {id:'acrylic', label:'Acrylic'},
  {id:'wood', label:'Wooden'},
  {id:'horn', label:'Horn'}
];

window.SIZE_CHART = [
  {l:'10L', mm:'6.35 mm', use:'Small / kidswear'},
  {l:'12L', mm:'7.62 mm', use:'Kidswear / shirts'},
  {l:'14L', mm:'8.89 mm', use:'Shirts'},
  {l:'16L', mm:'10.16 mm', use:'Shirts'},
  {l:'18L', mm:'11.43 mm', use:'Shirts / blouses'},
  {l:'20L', mm:'12.70 mm', use:'Shirts'},
  {l:'22L', mm:'13.97 mm', use:'Shirts / fashion'},
  {l:'24L', mm:'15.24 mm', use:'Shirts / jackets'},
  {l:'28L', mm:'17.78 mm', use:'Jackets / fashion'},
  {l:'30L', mm:'19.05 mm', use:'Jackets'},
  {l:'32L', mm:'20.32 mm', use:'Jackets'},
  {l:'36L', mm:'22.86 mm', use:'Jackets / coats'},
  {l:'40L', mm:'25.40 mm', use:'Coats / blazers'},
  {l:'44L', mm:'27.94 mm', use:'Coats'},
  {l:'48L', mm:'30.48 mm', use:'Coats / decorative'},
  {l:'54L', mm:'34.29 mm', use:'Coats / decorative'},
  {l:'60L', mm:'38.10 mm', use:'Large decorative'},
  {l:'70L', mm:'44.45 mm', use:'Fashion / decorative'},
  {l:'80L', mm:'50.80 mm', use:'Large decorative'}
];

(function buildCatalog() {
  var S = {
    full: ['10L','12L','14L','16L','18L','20L','22L','24L','28L','30L','32L','36L','40L','44L','48L','54L','60L'],
    garment: ['14L','16L','18L','20L','24L','28L','32L','36L'],
    metal: ['12L','14L','16L','18L','20L','24L','28L','32L','36L','40L','44L','48L','54L','60L'],
    jeans: ['17 mm','18 mm','20 mm','22 mm','24 mm','25 mm','27 mm','30 mm','32 mm','35 mm','38 mm'],
    embroider: ['12L','14L','16L','18L','20L','22L','24L','28L','32L','36L','40L','44L','48L'],
    fabric: ['10L','12L','14L','16L','18L','20L','22L','24L','28L','30L','32L','36L','40L','44L','48L','54L','60L','70L','80L'],
    acrylic: ['10L','12L','14L','16L','18L','20L','24L','28L','32L','36L','40L','44L','48L','54L','60L','70L','80L'],
    wood: ['10L','12L','14L','16L','18L','20L','24L','28L','32L','36L','40L','44L','48L','54L','60L','70L','80L'],
    horn: ['14L','16L','18L','20L','24L','28L','32L','36L','40L','44L','48L','54L','60L'],
    laser: ['10L','12L','14L','16L','18L','20L','24L','28L','32L','36L','40L','44L','48L','54L','60L']
  };

  var P = {
    polyester: {
      names: ['White','Off White','Ivory','Cream','Black','Grey','Navy Blue','Royal Blue','Red','Maroon','Pink','Bottle Green','Mustard','Purple','Marble','Horn effect','Shell effect','Two-tone','Multi-colour','Pearl'],
      hex: ['#F7F5EF','#EDE6D6','#21252A','#6B6E73','#1F3A6B','#C0392B','#7A1F3D','#E8A0B0','#1F5C45','#D4A017','#6C4F9C','#8C6A3D']
    },
    metal: {
      names: ['Silver','Gold','Rose Gold','Black','Gunmetal','Bronze','Copper','Brass','Antique Silver','Antique Gold','Oxidized Black','Brushed Metal'],
      hex: ['#C0C4C8','#C9A227','#B76E79','#21252A','#4A4E55','#8C6A3D','#B87333','#A97C3F','#8A8A8A','#7C5A2C']
    },
    laser: {
      names: ['White','Black','Cream','Beige','Brown','Red','Maroon','Navy','Royal Blue','Green','Olive','Mustard','Metallic Gold','Metallic Silver','Natural Wood'],
      hex: ['#F7F5EF','#21252A','#EDE6D6','#C4A574','#8C6A3D','#C0392B','#1F3A6B','#1F5C45','#C9A227','#C0C4C8']
    },
    embroidery: {
      names: ['White','Black','Cream','Ivory','Beige','Red','Maroon','Pink','Navy','Royal Blue','Olive','Mustard','Metallic Gold','Metallic Silver'],
      hex: ['#F7F5EF','#21252A','#EDE6D6','#C0392B','#7A1F3D','#E8A0B0','#1F3A6B','#1F5C45','#C9A227']
    },
    fabric: {
      names: ['White','Ivory','Beige','Tan','Brown','Black','Grey','Red','Maroon','Pink','Navy','Royal Blue','Olive','Mustard','Teal','Lavender'],
      hex: ['#F7F5EF','#EDE6D6','#C4A574','#8C6A3D','#21252A','#C0392B','#1F3A6B','#1F5C45','#2A6F6A','#9B8EC4']
    },
    acrylic: {
      names: ['White','Black','Red','Pink','Orange','Yellow','Green','Blue','Purple','Clear','Smoke','Glitter','Pearl','Frosted','Mirror','Neon'],
      hex: ['#F7F5EF','#21252A','#C0392B','#E8A0B0','#D98A29','#D4B23C','#4C8C4C','#3B6FA0','#6C4F9C','#D8D8D8']
    },
    wood: {
      names: ['Natural Beige','Honey','Tan','Medium Brown','Walnut','Chocolate','White','Black','Red','Olive','Navy','Multicolour'],
      hex: ['#EDE3C8','#D4A574','#C4A574','#8C6A3D','#5C3A1E','#F7F5EF','#21252A','#C0392B','#1F5C45','#1F3A6B']
    },
    horn: {
      names: ['Cream','Ivory','Beige','Tan','Brown','Dark Brown','Black/Brown','Tortoise','Amber','Caramel','Multi-tone'],
      hex: ['#F3EFE4','#EDE3C8','#C4A574','#8C6A3D','#5C3A1E','#3A2414','#B56A2B','#D4A017']
    },
    shell: {
      names: ['White','Ivory','Pearl White','Natural Shell','Beige','Grey','Brown','Black','Iridescent','Rainbow','Dyed Navy','Dyed Green'],
      hex: ['#F7F5EF','#F3EFE4','#EDE3C8','#D8C9A3','#C4A574','#8A8A8A','#8C6A3D','#21252A','#C9B8D4','#1F3A6B']
    }
  };

  // var IMAGES = ['images/Plain Polyster.jpg','images/Dyed Polyseter.jpg','images/Matt Polyster.jpg','images/Shiny Polyster.jpg','images/Marble Polyster.jpg','images/Horn-Look Polyster.jpg','images/Shell-Look Polyster.jpg','images/Wood-Look Polyster.jpg','images/Two-Tone Polyster.jpg','images/Multi-Colour Polyster.jpg','images/Custom Polyster.jpg','images/Brass Buttons.jpg','images/Stainless Steel Buttons.jpg','images/Aluminium Buttons.jpg','images/Zinc Alloy Buttons.jpg','images/Iron Buttons.jpg','images/Copper Buttons.jpg','images/Antique Metal Buttons.jpg','images/Matte Metal Buttons.jpg','images/Shiny Metal Buttons.jpg','images/Oxidized Metal Buttons.jpg','images/Embossed Metal Buttons.jpg','images/Engraved Metal Buttons.jpg','images/Custom Logo Metal Buttons.jpg','images/Laser Printed Buttons.jpg','images/Laser Engraved Buttons.jpg','images/Laser Logo Buttons.jpg','images/Laser Pattern Buttons.jpg','images/Laser Wood Buttons.jpg','images/Laser Acrylic Buttons.jpg','images/Custom Laser Buttons.jpg','images/Embroidered Fabric Buttons.jpg','images/Embroidered Logo Buttons.jpg','images/Thread Embroidery Buttons.jpg','images/Chenille Buttons.jpg','images/Custom Embroidery Buttons.jpg','images/Custom Fabric Buttons.jpg','images/Custom Acrylic Buttons.jpg','images/Custom Wood Buttons.jpg','images/Custom Horn Buttons.jpg','images/Custom Shell Buttons.jpg'];

  // function inr(id, min, max) {
  //   var h = 0, i;
  //   for (i = 0; i < id.length; i++) h = ((h * 33) + id.charCodeAt(i)) >>> 0;
  //   var n = min + (h % (max - min + 1));
  //   return Math.round(n / 5) * 5;
  // }

  // function lineRange(sizes) {
  //   return sizes[0] + ' – ' + sizes[sizes.length - 1];
  // }

  // var n = 0;
  // function make(id, name, cat, sizes, holes, min, max, extra, blurb) {
  //   var pal = P[cat];
  //   n += 1;
  //   return {
  //     id: id,
  //     name: name,
  //     category: cat,
  //     line: extra && extra.line ? extra.line : lineRange(sizes),
  //     sizes: sizes,
  //     colorNames: pal.names,
  //     colors: pal.hex,
  //     holes: holes,
  //     price: inr(id, min, max),
  //     unit: 'per 100 pcs',
  //     image: IMAGES[(n - 1) % IMAGES.length],
  //     blurb: blurb
  //   };
  // }

  
  /* ---------------------------------------------------------------
     IMAGE MAPPING
     Har product id ke saamne uski sahi image file ka naam hai.
     Jin products ke liye alag se photo nahi khichi, unko usi
     category ke sabse close-matching / "Custom" image de di hai —
     taki kabhi bhi galat product par galat image na dikhe.
     Naya image add karna ho: bas neeche filename change/add karo,
     order se koi fark nahi padega.
     --------------------------------------------------------------- */
     var IMAGE_MAP = {
      
      // Shell
      'sh-mop':      'images/MOP Button.jpg',
      'sh-natural':  'images/Natural Shell.jpg',
      'sh-effect':   'images/Shell Effect.jpg',      // closest visual match
      'sh-irid':     'images/Iridescent Shell.jpg',
      'sh-dyed':     'images/Dyed Shell.jpg',
      'sh-european':    'images/European Button.jpg',
    'sh-cufflink':    'images/Cufflink Button.jpg',
    'sh-laserlogo':   'images/Shell Laser Logo Button.jpg',
    'sh-abalone':     'images/Abalone Button.jpg',
    'sh-specialart':  'images/Special Art Button.jpg',
    'sh-tigershell':  'images/Tiger Shell Button.jpg',
    'sh-javashell':   'images/Java Shell Button.jpg',
    'sh-redshell':    'images/Red Shell Button.jpg',
    'sh-blackmop':    'images/Black MOP Button.jpg',
    'sh-budha':       'images/Budha Button.jpg',
    'sh-whitemop':    'images/White MOP Button.jpg',
    'sh-paua':        'images/Paua Button.jpg',
    'sh-brownmop':    'images/Brown MOP Button.jpg',
    'sh-greenmop':    'images/Green MOP Button.jpg',
    'sh-rivershell':  'images/River Shell Button.jpg',
    'sh-blackmussel': 'images/Black Mussel Shell Button.jpg',
    'sh-printed':     'images/Printed Button.jpg',
    'sh-agoya':       'images/Agoya Shell Button.jpg',
    'sh-color':       'images/Color Button.jpg',
    'sh-indianriver': 'images/Indian River Shell Button.jpg',

      // Polyester
      'poly-plain':     'images/Plain Polyseter.jpg',
      'poly-dyed':      'images/Dyed Polyseter.jpg',
      'poly-matt':      'images/Matt Polyseter.jpg',
      'poly-glossy':    'images/Shiny Polyseter.jpg',
      'poly-marble':    'images/Marbel Polyester.jpg',
      'poly-hornlook':  'images/Horn Polyster.jpg',
      'poly-shelllook': 'images/Shell Polyseter.jpg',
      'poly-woodlook':  'images/Wood Polyster.jpg',
      'poly-twotone':   'images/Two Tone Polyster.jpg',
      'poly-multi':     'images/Multicolor Polyster.jpg',
      'poly-custom':    'images/Custom Polyster.jpeg',
   
      // Metal
      'met-brass':   'images/Brass Button.jpg',
      'met-ss':      'images/Stainless Steel Button.jpg',
      'met-alu':     'images/Aluminum Button.jpg',
      'met-zinc':    'images/Zinc Alloy Button.jpeg',
      'met-iron':    'images/Iron Button.jpg',
      'met-copper':  'images/Copper Button.jpg',
      'met-antique': 'images/Antique Metal Button.jpg',
      'met-matte':   'images/Mate Metal Button.jpg',
      'met-shiny':   'images/Polished Button.jpg',
      'met-oxi':     'images/Oxidised Metal.jpg',
      'met-emboss':  'images/Emboshed Metal.jpg',
      'met-engrave': 'images/Engraved Metal.jpg',
      'met-logo':    'images/Custome logo Metal.jpg',
   
      // Laser
      'las-print':   'images/Laser Printed Button.jpg',
      'las-engrave': 'images/Laser Engraved Button.jpeg',
      'las-logo':    'images/Laser Logo Button.jpg',
      'las-pattern': 'images/Laser Pattern Button.jpg',
      'las-wood':    'images/Laser Wood Button.jpg',
      'las-acrylic': 'images/Laser Acrylic Button.jpg',
      'las-custom':  'images/Custome Laser Button.jpg',
   
      // Embroidery
      'emb-fabric':   'images/Embroidery Fabric Button.jpg',
      // 'emb-logo':     'images/Embroidered Logo Buttons.jpg',
      'emb-thread':   'images/Thread Embroidery Button.jpg',
      'emb-chenille': 'images/Chenille Button.jpg',
      // 'emb-applique': 'images/Embroidered Logo Buttons.jpg', // no dedicated photo yet
      'emb-custom':   'images/Custome Embroidery Button.jpg',
   
      // Fabric / Covered — no dedicated photos yet, sab "Custom Fabric" use karenge
      'fab-covered': 'images/Custom Fabric Buttons.jpg',
      'fab-cotton':  'images/Custom Fabric Buttons.jpg',
      'fab-linen':   'images/Custom Fabric Buttons.jpg',
      'fab-velvet':  'images/Custom Fabric Buttons.jpg',
      'fab-satin':   'images/Custom Fabric Buttons.jpg',
      'fab-denim':   'images/Custom Fabric Buttons.jpg',
      'fab-printed': 'images/Custom Fabric Buttons.jpg',
      'fab-pattern': 'images/Custom Fabric Buttons.jpg',
      'fab-custom':  'images/Custom Fabric Buttons.jpg',
   
      // Acrylic
      'acr-clear':    'images/Custom Acrylic Buttons.jpg',
      'acr-trans':    'images/Custom Acrylic Buttons.jpg',
      'acr-colored':  'images/Custom Acrylic Buttons.jpg',
      'acr-printed':  'images/Custom Acrylic Buttons.jpg',
      'acr-glitter':  'images/Custom Acrylic Buttons.jpg',
      'acr-frosted':  'images/Custom Acrylic Buttons.jpg',
      'acr-mirror':   'images/Custom Acrylic Buttons.jpg',
      'acr-laser':    'images/Laser Acrylic Buttons.jpg',   // matches "laser cut" better
      'acr-custom':   'images/Custom Acrylic Buttons.jpg',
   
      // Wood
      'wd-natural':  'images/Natural Wood.jpg',
      'wd-painted':  'images/Custom Wood Buttons.jpg',
      'wd-printed':  'images/Custom Wood Buttons.jpg',
      'wd-engraved': 'images/laser engraved.jpg',       // matches "laser engraved" better
      'wd-burnt':    'images/Custom Wood Buttons.jpg',
      'wd-bamboo':   'images/Custom Wood Buttons.jpg',
      'wd-coconut':  'images/Coconut Shell Button.jpg',
      'wd-custom':   'images/Custom Wood Buttons.jpg',
   
      // Horn
      'hn-natural':  'images/Custom Horn Buttons.jpg',
      'hn-look':     'images/Horn-Look Polyster.jpg',       // closest visual match
      'hn-tortoise': 'images/Custom Horn Buttons.jpg'
    };
   
    var FALLBACK_IMAGE = 'images/Custom Polyster.jpg';
   
    function inr(id, min, max) {
      var h = 0, i;
      for (i = 0; i < id.length; i++) h = ((h * 33) + id.charCodeAt(i)) >>> 0;
      var n = min + (h % (max - min + 1));
      return Math.round(n / 5) * 5;
    }
   
    function lineRange(sizes) {
      return sizes[0] + ' – ' + sizes[sizes.length - 1];
    }
   
    function make(id, name, cat, sizes, holes, min, max, extra, blurb) {
      var pal = P[cat];
      return {
        id: id,
        name: name,
        category: cat,
        line: extra && extra.line ? extra.line : lineRange(sizes),
        sizes: sizes,
        colorNames: pal.names,
        colors: pal.hex,
        holes: holes,
        image: IMAGE_MAP[id] || FALLBACK_IMAGE,
        blurb: blurb
      };
    }

  window.PRODUCTS = [
    make('sh-mop', 'Mother of Pearl', 'shell', S.full, 4, 420, 860, null, 'Real M.O.P. — pearl white, iridescent and formal shirt lines.'),
    make('sh-natural', 'Natural Shell', 'shell', S.full, 2, 360, 740, null, 'Natural seep / sea-shell with grain. Sold by the line.'),
    make('sh-effect', 'Shell Effect', 'shell', S.garment, 4, 140, 280, null, 'Shell-effect polyester / acrylic when real shell is not required.'),
    make('sh-irid', 'Iridescent Shell', 'shell', S.full, 2, 400, 820, null, 'Iridescent pearl, silver, pink, blue and rainbow faces.'),
    make('sh-dyed', 'Dyed Shell', 'shell', S.full, 4, 380, 780, null, 'Dyed shell — navy, green, maroon, black and fashion shades.'),
    make('sh-european', 'European Buttons', 'shell', S.full, 4, 380, 760, null, 'European-style fashion shell buttons for jackets and coats.'),
    make('sh-cufflink', 'Cufflink Buttons', 'shell', S.garment, 0, 450, 900, null, 'Shell cufflink-style buttons for formal shirts, no holes.'),
    make('sh-laserlogo', 'Laser Logo Buttons', 'shell', S.garment, 2, 420, 820, null, 'Shell buttons with a laser-etched brand logo.'),
    make('sh-abalone', 'Abalone Buttons', 'shell', S.full, 4, 480, 940, null, 'Abalone shell buttons with vivid natural iridescence.'),
    make('sh-specialart', 'Special Art Buttons', 'shell', S.garment, 2, 400, 800, null, 'Hand-finished decorative art shell buttons.'),
    make('sh-tigershell', 'Tiger Shell Buttons', 'shell', S.full, 4, 400, 780, null, 'Tiger cowrie-pattern shell buttons.'),
    make('sh-javashell', 'Java Shell Buttons', 'shell', S.full, 4, 360, 720, null, 'Java shell buttons with natural grain variation.'),
    make('sh-redshell', 'Red Shell Buttons', 'shell', S.full, 4, 380, 760, null, 'Dyed red shell buttons for festive and fashion wear.'),
    make('sh-blackmop', 'Black MOP Buttons', 'shell', S.full, 4, 420, 860, null, 'Black mother-of-pearl buttons for formalwear and jackets.'),
    make('sh-budha', 'Budha Buttons', 'shell', S.full, 4, 360, 720, null, 'Budha shell buttons, a classic trade-shell finish.'),
    make('sh-whitemop', 'White MOP Buttons', 'shell', S.full, 4, 420, 860, null, 'Classic white mother-of-pearl for formal shirts.'),
    make('sh-paua', 'Paua Buttons', 'shell', S.full, 4, 460, 920, null, 'Paua shell buttons with deep blue-green iridescence.'),
    make('sh-brownmop', 'Brown MOP Buttons', 'shell', S.full, 4, 400, 800, null, 'Brown mother-of-pearl for earthy, natural looks.'),
    make('sh-greenmop', 'Green MOP Buttons', 'shell', S.full, 4, 420, 840, null, 'Green mother-of-pearl for fashion outerwear.'),
    make('sh-rivershell', 'River Shell Buttons', 'shell', S.full, 4, 340, 680, null, 'Freshwater river shell buttons, light and natural.'),
    make('sh-blackmussel', 'Black Mussel Shell Buttons', 'shell', S.full, 4, 360, 720, null, 'Black mussel shell buttons with a dark natural sheen.'),
    make('sh-printed', 'Printed Buttons', 'shell', S.garment, 4, 300, 600, null, 'Printed motifs on a shell base.'),
    make('sh-agoya', 'Agoya Shell Buttons', 'shell', S.full, 4, 440, 880, null, 'Agoya (Akoya) pearl-shell buttons with a fine lustre.'),
    make('sh-color', 'Color Buttons', 'shell', S.garment, 4, 320, 640, null, 'Dyed, colour-finished shell buttons.'),
    make('sh-indianriver', 'Indian River Shell Buttons', 'shell', S.full, 4, 340, 680, null, 'Indian river shell buttons, a domestic natural-shell option.'),

    make('poly-plain', 'Plain Polyester', 'polyester', S.full, 4, 70, 140, null, 'Everyday plain polyester — shirts, uniforms and bulk garment runs. Common sizes 14L–36L.'),
    make('poly-dyed', 'Dyed Polyester', 'polyester', S.full, 4, 80, 155, null, 'Solution-dyed polyester in basic, red, blue, green, yellow and purple families.'),
    make('poly-matt', 'Matt Polyester', 'polyester', S.full, 4, 85, 160, null, 'Low-sheen matt polyester for formalwear and uniforms.'),
    make('poly-glossy', 'Shiny / Glossy Polyester', 'polyester', S.full, 4, 90, 170, null, 'High-gloss polyester for fashion shirts and kidswear.'),
    make('poly-marble', 'Marble Polyester', 'polyester', S.garment, 4, 110, 195, null, 'Marble-effect polyester. Special-effect range — no two lots look identical.'),
    make('poly-hornlook', 'Horn-Look Polyester', 'polyester', S.garment, 4, 120, 210, null, 'Horn-effect polyester for jackets and coats without the cost of real horn.'),
    make('poly-shelllook', 'Shell-Look Polyester', 'polyester', S.garment, 4, 120, 210, null, 'Shell-effect polyester with a pearl sheen, used on shirts and light outerwear.'),
    make('poly-woodlook', 'Wood-Look Polyester', 'polyester', S.garment, 4, 115, 200, null, 'Wood-grain polyester for casual and ethnicwear.'),
    make('poly-twotone', 'Two-Tone Polyester', 'polyester', S.garment, 4, 100, 185, null, 'Two-tone polyester — contrast face and reverse, sold by the line.'),
    make('poly-multi', 'Multi-Colour Polyester', 'polyester', S.garment, 2, 95, 180, null, 'Rainbow / multi-colour polyester for kidswear and fashion pieces.'),
    make('poly-custom', 'Custom Polyester', 'polyester', S.full, 4, 150, 280, null, 'Custom colour, mould and size. Confirm pantone, line and quantity when you order.'),

    make('met-brass', 'Brass Buttons', 'metal', S.metal, 0, 280, 520, null, 'Brass buttons — bright, antique or brushed. Shirt, jacket and coat lines.'),
    make('met-ss', 'Stainless Steel Buttons', 'metal', S.metal, 0, 260, 480, null, 'Stainless steel for workwear, uniforms and jeans hardware.'),
    make('met-alu', 'Aluminium Buttons', 'metal', S.metal, 0, 220, 420, null, 'Lightweight aluminium — silver, gunmetal and painted finishes.'),
    make('met-zinc', 'Zinc Alloy Buttons', 'metal', S.metal, 0, 240, 450, null, 'Zinc alloy fashion buttons, including jeans and jacket sizes in mm.'),
    make('met-iron', 'Iron Buttons', 'metal', S.metal, 0, 200, 390, null, 'Iron buttons with plated finishes for coats and workwear.'),
    make('met-copper', 'Copper Buttons', 'metal', S.metal, 0, 300, 560, null, 'Copper and antique-copper plating for ethnic and heritage looks.'),
    make('met-antique', 'Antique Metal Buttons', 'metal', S.metal, 0, 310, 580, null, 'Antique silver, gold, brass and copper finishes.'),
    make('met-matte', 'Matte Metal Buttons', 'metal', S.metal, 0, 250, 470, null, 'Matt silver and gunmetal — low reflection for tailoring.'),
    make('met-shiny', 'Shiny / Polished Metal', 'metal', S.metal, 0, 260, 490, null, 'Polished gold, silver and rose gold for fashion and uniforms.'),
    make('met-oxi', 'Oxidized Metal', 'metal', S.metal, 0, 290, 540, null, 'Oxidized black and antique oxidized surfaces.'),
    make('met-emboss', 'Embossed Metal', 'metal', S.metal, 0, 320, 620, null, 'Embossed crests, rims and patterns. Custom dies on request.'),
    make('met-engrave', 'Engraved Metal', 'metal', S.metal, 0, 340, 650, null, 'Engraved metal — logos and line work for brands.'),
    make('met-logo', 'Custom Logo Metal', 'metal', S.metal.concat(S.jeans), 0, 380, 720, {line:'12L – 60L + jeans mm'}, 'Custom logo metal buttons. Die, plating and size confirmed per order.'),

    make('las-print', 'Laser Printed Buttons', 'laser', S.laser, 4, 180, 340, null, 'Laser-printed faces on polyester, acrylic or wood bases.'),
    make('las-engrave', 'Laser Engraved Buttons', 'laser', S.laser, 4, 200, 380, null, 'Laser-engraved logos and patterns. Custom artwork accepted.'),
    make('las-logo', 'Laser Logo Buttons', 'laser', S.laser, 4, 220, 420, null, 'Brand-mark laser logos on white, black, navy and wood tones.'),
    make('las-pattern', 'Laser Pattern Buttons', 'laser', S.laser, 4, 210, 400, null, 'Repeat patterns — grain, marble, geometric — laser-cut or marked.'),
    make('las-wood', 'Laser Wood Buttons', 'laser', S.wood, 2, 240, 440, null, 'Laser work on natural wood and bamboo.'),
    make('las-acrylic', 'Laser Acrylic Buttons', 'laser', S.acrylic, 4, 190, 360, null, 'Laser-cut and marked acrylic, including clear and coloured stock.'),
    make('las-custom', 'Custom Laser Buttons', 'laser', S.laser, 4, 260, 520, null, 'Custom laser size, colour and artwork. Sample first on bulk orders.'),

    make('emb-fabric', 'Embroidered Fabric Buttons', 'embroidery', S.embroider, 0, 280, 520, null, 'Fabric buttons with thread embroidery on the face.'),
    // make('emb-logo', 'Embroidered Logo Buttons', 'embroidery', S.embroider, 0, 320, 620, null, 'Logo embroidery — single, two-colour or metallic thread.'),
    make('emb-thread', 'Thread Embroidery Buttons', 'embroidery', S.embroider, 0, 270, 500, null, 'Decorative thread work. Contrast and gradient thread available.'),
    make('emb-chenille', 'Chenille Buttons', 'embroidery', S.embroider, 0, 340, 640, null, 'Chenille-texture embroidered buttons for fashion and kidswear.'),
    // make('emb-applique', 'Appliqué Buttons', 'embroidery', S.embroider, 0, 300, 580, null, 'Appliqué fabric buttons with stitched overlay.'),
    make('emb-custom', 'Custom Embroidery Buttons', 'embroidery', S.embroider, 0, 360, 720, null, 'Custom stitch count, thread colours and size.'),

    make('fab-covered', 'Fabric Covered Buttons', 'fabric', S.fabric, 0, 160, 320, null, 'Classic covered buttons. Almost any fabric colour can be produced.'),
    make('fab-cotton', 'Cotton Fabric Buttons', 'fabric', S.fabric, 0, 150, 300, null, 'Cotton-covered — shirts, kurtas and light garments.'),
    make('fab-linen', 'Linen Buttons', 'fabric', S.fabric, 0, 170, 330, null, 'Linen-covered for summer and ethnicwear.'),
    make('fab-velvet', 'Velvet Buttons', 'fabric', S.fabric, 0, 220, 420, null, 'Velvet-covered for coats, festive and eveningwear.'),
    make('fab-satin', 'Satin Buttons', 'fabric', S.fabric, 0, 200, 390, null, 'Satin-covered with a dress-fabric sheen.'),
    make('fab-denim', 'Denim Buttons', 'fabric', S.fabric, 0, 180, 360, null, 'Denim-covered and jeans-style covered buttons.'),
    make('fab-printed', 'Printed Fabric Buttons', 'fabric', S.fabric, 0, 190, 380, null, 'Printed cotton / polyester fabric covers.'),
    make('fab-pattern', 'Patterned Fabric Buttons', 'fabric', S.fabric, 0, 200, 400, null, 'Jacquard, brocade and patterned covers.'),
    make('fab-custom', 'Custom Covered Buttons', 'fabric', S.fabric, 0, 240, 480, null, 'Send fabric or specify mill shade. Custom size including 70L and 80L.'),

    make('acr-clear', 'Clear Acrylic', 'acrylic', S.acrylic, 4, 90, 220, null, 'Clear / transparent acrylic. Custom shapes on request.'),
    make('acr-trans', 'Transparent Acrylic', 'acrylic', S.acrylic, 4, 95, 230, null, 'Tinted transparent — smoke, amber, blue, green, pink.'),
    make('acr-colored', 'Coloured Acrylic', 'acrylic', S.acrylic, 4, 100, 250, null, 'Solid coloured acrylic in the full basic palette.'),
    make('acr-printed', 'Printed Acrylic', 'acrylic', S.acrylic, 4, 140, 300, null, 'Printed acrylic faces — logos and patterns.'),
    make('acr-glitter', 'Glitter Acrylic', 'acrylic', S.acrylic, 4, 150, 320, null, 'Glitter, confetti and sparkle acrylic for fashion.'),
    make('acr-frosted', 'Frosted Acrylic', 'acrylic', S.acrylic, 4, 120, 270, null, 'Frosted / satin acrylic with a soft face.'),
    make('acr-mirror', 'Mirror Acrylic', 'acrylic', S.acrylic, 0, 180, 360, null, 'Mirror and holographic acrylic.'),
    make('acr-laser', 'Laser Cut Acrylic', 'acrylic', S.acrylic, 4, 160, 340, null, 'Laser-cut acrylic shapes beyond the round stock.'),
    make('acr-custom', 'Custom Acrylic', 'acrylic', S.acrylic, 4, 200, 420, null, 'Custom colour, shape and size — including 70L and 80L.'),

    make('wd-natural', 'Natural Wood', 'wood', S.wood, 2, 140, 280, null, 'Unfinished and natural-grain wood buttons.'),
    make('wd-painted', 'Painted Wood', 'wood', S.wood, 2, 150, 300, null, 'Painted wood in solids and multicolour.'),
    make('wd-printed', 'Printed Wood', 'wood', S.wood, 2, 170, 330, null, 'Printed grain and motif on wood discs.'),
    make('wd-engraved', 'Laser Engraved Wood', 'wood', S.wood, 2, 200, 380, null, 'Laser-engraved logos and patterns on wood.'),
    make('wd-burnt', 'Burnt / Pyrography Wood', 'wood', S.wood, 2, 210, 400, null, 'Burnt and rustic pyrography finishes.'),
    make('wd-bamboo', 'Bamboo Buttons', 'wood', S.wood, 2, 160, 320, null, 'Bamboo — light, natural and laser-ready.'),
    make('wd-coconut', 'Coconut Shell Buttons', 'wood', S.wood, 2, 180, 360, null, 'Coconut shell with natural bark and grain.'),
    make('wd-custom', 'Custom Wooden Buttons', 'wood', S.wood, 2, 230, 450, null, 'Custom wood species, paint and size.'),

    make('hn-natural', 'Natural Horn', 'horn', S.horn, 2, 380, 720, null, 'Natural horn mix — cream through dark brown. No two pieces match exactly.'),
    make('hn-look', 'Horn-Look', 'horn', S.horn, 4, 160, 320, null, 'Horn-effect (polyester / resin) in light, dark and multi-tone.'),
    make('hn-tortoise', 'Tortoise / Amber Horn-Look', 'horn', S.horn, 4, 180, 360, null, 'Tortoise, amber and caramel horn-look for coats and fashion.')
  ];
})();
