/* ======================================================
   EDIT THESE — business contact details.
   Fill in as they become available; the site updates
   wherever they are shown.
   ====================================================== */
window.AYUSH = {
  phone: '+91 9818684074',
  whatsapp: '919818684074',
  gstin: '',           // e.g. '07XXXXXXXXXXZX'
  email: 'ayushinternational2008@gmail.com',
  address: 'Govindpuri, Gali No. 9, Kalkaji, New Delhi – 110019',
  yearStarted: 2007
};

/* ======================================================
   PRODUCT CATALOG — duplicate a block to add a new item.
   `colors` are hex codes used for the swatch dots.
   `holes`: 4, 2, or 0 (0 = shank button, no visible holes).
   Drop a photo in /images with the same name as `image`
   (for example images/p1.jpg). Until then, a placeholder shows.
   ====================================================== */
window.PRODUCTS = [
  {id:'p1', name:'Classic 4-Hole Plastic Button', category:'plastic', line:'16L – 36L', colors:['#F7F5EF','#21252A','#3B6FA0','#9C3B3B'], holes:4, image:'images/p1.jpg', blurb:'Everyday plastic button across a wide size run, mainly in white and core colours.'},
  {id:'p2', name:"Kids' Novelty Plastic Button", category:'plastic', line:'16L – 20L', colors:['#C0392B','#D98A29','#D4B23C','#4C8C4C','#3B6FA0','#6C4F9C'], holes:2, image:'images/p2.jpg', blurb:'Bright multi-colour plastic buttons for kidswear and fun pieces.'},
  {id:'p3', name:'4-Hole Shirt Button', category:'shirt', line:'14L – 24L', colors:['#F7F5EF','#EDE6D6'], holes:4, image:'images/p3.jpg', blurb:'Standard shirt button, mostly in white and off-white, for formal and casual shirting.'},
  {id:'p4', name:'Formal Shirt MOP Button', category:'shirt', line:'16L – 20L', colors:['#F3EFE4'], holes:4, image:'images/p4.jpg', blurb:'Mother-of-pearl shirt button with a natural sheen, used on premium shirting.'},
  {id:'p5', name:'Natural Shell / Seep Button', category:'shell', line:'18L – 40L', colors:['#EDE3C8','#D8C9A3'], holes:2, image:'images/p5.jpg', blurb:'Genuine shell (seep) button with natural grain — no two pieces are quite the same.'},
  {id:'p6', name:'Coat & Jacket Shell Button', category:'shell', line:'32L – 44L', colors:['#8C6A3D','#21252A'], holes:4, image:'images/p6.jpg', blurb:'Heavier shell button, sized for coats, blazers and jackets.'},
  {id:'p7', name:'Mother-of-Pearl (MOP) Button', category:'mop', line:'20L – 34L', colors:['#F3EFE4'], holes:2, image:'images/p7.jpg', blurb:'Classic real M.O.P. button with an iridescent finish.'},
  {id:'p8', name:'Rainbow Fancy Button', category:'fancy', line:'24L – 32L', colors:['#C0392B','#D98A29','#D4B23C','#4C8C4C','#3B6FA0','#6C4F9C'], holes:2, image:'images/p8.jpg', blurb:'Fashion button in a full rainbow / multi-colour range, sold by the line.'},
  {id:'p9', name:'Diamante Fancy Button', category:'fancy', line:'18L – 28L', colors:['#F7F5EF','#A97C3F'], holes:0, image:'images/p9.jpg', blurb:'Stone-set fancy button with a metal rim, for ethnic and eveningwear.'},
  {id:'p10', name:'Sea-Shell Button', category:'shell', line:'18L – 36L', colors:['#F7F1E4','#D4C4A0','#C4A574'], holes:2, image:'images/p10.jpg', blurb:'Sea-shell button with a natural surface, used on shirts, kurtas and light outerwear.'},
  {id:'p11', name:'Polyester Uniform Button', category:'plastic', line:'18L – 32L', colors:['#F7F5EF','#21252A','#3B4A6B'], holes:4, image:'images/p11.jpg', blurb:'Durable polyester button for uniforms, workwear and bulk garment runs.'},
  {id:'p12', name:'Metal Shank Fancy Button', category:'fancy', line:'24L – 40L', colors:['#A97C3F','#8A8A8A','#21252A'], holes:0, image:'images/p12.jpg', blurb:'Shank-back metal look button for jackets, coats and fashion pieces.'}
];

window.CATEGORIES = [
  {id:'all', label:'All buttons'},
  {id:'plastic', label:'Plastic'},
  {id:'shell', label:'Shell / Seep'},
  {id:'mop', label:'Mother-of-pearl'},
  {id:'fancy', label:'Fancy / Rainbow'},
  {id:'shirt', label:'Shirt'}
];
