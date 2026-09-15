(function () {
  const PRODUCTS = window.PRODUCTS || [];
  const CATEGORIES = window.CATEGORIES || [];
  const BIZ = window.AYUSH || {};

  function loadJSON(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v || fallback;
    } catch (e) {
      return fallback;
    }
  }

  let cart = loadJSON('ayush_cart', {});
  let wishlist = loadJSON('ayush_wishlist', []);
  let ratings = loadJSON('ayush_ratings', {});
  let myRatings = loadJSON('ayush_my_ratings', {});
  let activeCategory = 'all';

  function saveCart() { localStorage.setItem('ayush_cart', JSON.stringify(cart)); }
  function saveWishlist() { localStorage.setItem('ayush_wishlist', JSON.stringify(wishlist)); }
  function saveRatings() { localStorage.setItem('ayush_ratings', JSON.stringify(ratings)); }
  function saveMyRatings() { localStorage.setItem('ayush_my_ratings', JSON.stringify(myRatings)); }

  function productById(id) {
    return PRODUCTS.find(function (x) { return x.id === id; });
  }

  function buttonIcon(color, holes) {
    let holesMarkup = '';
    if (holes === 4) holesMarkup = '<circle cx="42" cy="42" r="4"/><circle cx="58" cy="42" r="4"/><circle cx="42" cy="58" r="4"/><circle cx="58" cy="58" r="4"/>';
    else if (holes === 2) holesMarkup = '<circle cx="42" cy="50" r="4"/><circle cx="58" cy="50" r="4"/>';
    else holesMarkup = '<circle cx="50" cy="50" r="5"/>';
    return '<svg viewBox="0 0 100 100" class="btn-icon-svg" aria-hidden="true">'
      + '<circle cx="50" cy="50" r="46" fill="' + color + '" stroke="#00000022" stroke-width="1.5"/>'
      + '<circle cx="50" cy="50" r="46" fill="none" stroke="#ffffff33" stroke-width="1"/>'
      + '<g fill="#00000030">' + holesMarkup + '</g></svg>';
  }

  const STAR = '<svg viewBox="0 0 24 24"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z"/></svg>';

  function bindImageFallback(img) {
    if (!img) return;
    const parent = img.parentElement;
    const icon = parent ? parent.querySelector('.btn-icon-svg') : null;
    const note = parent ? parent.querySelector('.photo-note, .photo-slot-lg') : null;
    img.addEventListener('load', function () {
      if (icon) icon.style.display = 'none';
      if (note) note.hidden = true;
    });
    img.addEventListener('error', function () {
      img.style.display = 'none';
      if (note) note.hidden = false;
    });
  }

  function mediaInner(p, large) {
    const icon = buttonIcon(p.colors[0], p.holes);
    const slotClass = large ? 'photo-slot-lg' : 'photo-note';
    const slotText = large ? 'Photo space — add images/' + p.id + '.jpg when ready' : 'Photo to be added';
    return '<img src="' + p.image + '" alt="' + p.name + '" data-fallback>'
      + '<span class="' + slotClass + '" hidden>' + slotText + '</span>'
      + icon;
  }

  function ratingSummary(id) {
    const list = ratings[id] || [];
    if (!list.length) return 'No ratings yet — be the first to rate';
    const avg = (list.reduce(function (a, b) { return a + b; }, 0) / list.length).toFixed(1);
    return avg + '★ · ' + list.length + ' rating' + (list.length > 1 ? 's' : '');
  }

  function starsMarkup(id) {
    const mine = myRatings[id] || 0;
    let html = '<div class="stars" role="group" aria-label="Rate this product">';
    for (let i = 1; i <= 5; i++) {
      html += '<button type="button" class="star-btn' + (i <= mine ? ' filled' : '') + '" data-action="rate" data-id="' + id + '" data-value="' + i + '" aria-label="Rate ' + i + ' star">' + STAR + '</button>';
    }
    html += '</div>';
    return html;
  }

  function cardHTML(p) {
    const inWishlist = wishlist.indexOf(p.id) !== -1;
    const inCart = !!cart[p.id];
    return '<article class="card" data-cat="' + p.category + '">'
      + '<div class="card-media">'
      + '<button class="wish-toggle" data-action="wish" data-id="' + p.id + '" aria-pressed="' + inWishlist + '" aria-label="' + (inWishlist ? 'Remove from wishlist' : 'Add to wishlist') + '">'
      + '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.3C0.4 8 2 4.5 5.6 4c2-.3 3.8.6 6.4 3 2.6-2.4 4.4-3.3 6.4-3 3.6.5 5.2 4 3.6 7.7C19.5 16.4 12 21 12 21z"/></svg>'
      + '</button>'
      + mediaInner(p, false)
      + '</div>'
      + '<div class="card-body">'
      + '<h3><a href="product.html?id=' + p.id + '">' + p.name + '</a></h3>'
      + '<div class="card-meta">Line ' + p.line + '</div>'
      + '<p class="card-blurb">' + p.blurb + '</p>'
      + '<div class="swatch-row">' + p.colors.map(function (c) { return '<span class="swatch-sm" style="background:' + c + '"></span>'; }).join('') + '</div>'
      + '<div class="rating-row">' + starsMarkup(p.id) + '<span class="rating-text" id="rt-' + p.id + '">' + ratingSummary(p.id) + '</span></div>'
      + '<div class="card-footer">'
      + '<a class="btn btn-outline" href="product.html?id=' + p.id + '">View</a>'
      + '<button class="btn btn-outline" data-action="cart" data-id="' + p.id + '">' + (inCart ? 'Add another' : 'Add to cart') + '</button>'
      + '</div>'
      + '</div>'
      + '</article>';
  }

  function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;
    const items = PRODUCTS.filter(function (p) {
      return activeCategory === 'all' || p.category === activeCategory;
    });
    grid.innerHTML = items.map(cardHTML).join('');
    grid.querySelectorAll('img[data-fallback]').forEach(function (img) {
      bindImageFallback(img);
    });
  }

  function renderFilters() {
    const wrap = document.getElementById('catFilter');
    if (!wrap) return;
    wrap.innerHTML = CATEGORIES.map(function (c) {
      return '<button class="cat-pill" data-cat="' + c.id + '" aria-pressed="' + (c.id === activeCategory) + '">' + c.label + '</button>';
    }).join('');
  }

  function updateCounts() {
    const cartCount = Object.values(cart).reduce(function (a, b) { return a + b; }, 0);
    const wishCount = wishlist.length;
    document.querySelectorAll('#cartCount').forEach(function (cb) {
      cb.textContent = cartCount;
      cb.hidden = cartCount === 0;
    });
    document.querySelectorAll('#wishCount').forEach(function (wb) {
      wb.textContent = wishCount;
      wb.hidden = wishCount === 0;
    });
    const totalEl = document.getElementById('cartTotalItems');
    if (totalEl) totalEl.textContent = cartCount;
  }

  function renderCart() {
    const body = document.getElementById('cartBody');
    if (!body) return;
    const ids = Object.keys(cart).filter(function (id) { return cart[id] > 0; });
    if (!ids.length) {
      body.innerHTML = '<p class="drawer-empty">Your cart is empty. <a href="products.html">Browse the catalog</a> to add buttons.</p>';
      return;
    }
    body.innerHTML = ids.map(function (id) {
      const p = productById(id);
      if (!p) return '';
      return '<div class="line-item">'
        + '<div class="li-icon">' + buttonIcon(p.colors[0], p.holes) + '</div>'
        + '<div class="li-info"><h4><a href="product.html?id=' + p.id + '">' + p.name + '</a></h4><div class="meta">Line ' + p.line + '</div>'
        + '<div class="qty-row">'
        + '<button class="qty-btn" data-action="qtyminus" data-id="' + id + '" aria-label="Decrease quantity">−</button>'
        + '<span class="qty-val">' + cart[id] + '</span>'
        + '<button class="qty-btn" data-action="qtyplus" data-id="' + id + '" aria-label="Increase quantity">+</button>'
        + '<button class="li-remove" data-action="remove" data-id="' + id + '">Remove</button>'
        + '</div></div></div>';
    }).join('');
  }

  function renderWishlist() {
    const body = document.getElementById('wishBody');
    if (!body) return;
    if (!wishlist.length) {
      body.innerHTML = '<p class="drawer-empty">Nothing saved yet. Tap the heart on any product to save it here.</p>';
      return;
    }
    body.innerHTML = wishlist.map(function (id) {
      const p = productById(id);
      if (!p) return '';
      return '<div class="wish-item">'
        + '<div class="li-icon">' + buttonIcon(p.colors[0], p.holes) + '</div>'
        + '<div class="li-info"><h4><a href="product.html?id=' + p.id + '">' + p.name + '</a></h4><div class="meta">Line ' + p.line + '</div>'
        + '<div class="wish-actions">'
        + '<button class="btn btn-outline" data-action="movecart" data-id="' + id + '">Add to cart</button>'
        + '<button class="btn btn-outline" data-action="unwish" data-id="' + id + '">Remove</button>'
        + '</div></div></div>';
    }).join('');
  }

  function handleProductAction(btn) {
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (action === 'cart') {
      cart[id] = (cart[id] || 0) + 1;
      saveCart();
      updateCounts();
      renderCart();
      btn.textContent = 'Add another';
    } else if (action === 'wish') {
      const idx = wishlist.indexOf(id);
      if (idx === -1) wishlist.push(id);
      else wishlist.splice(idx, 1);
      saveWishlist();
      updateCounts();
      renderWishlist();
      btn.setAttribute('aria-pressed', idx === -1);
    } else if (action === 'rate') {
      const val = Number(btn.dataset.value);
      myRatings[id] = val;
      saveMyRatings();
      ratings[id] = ratings[id] || [];
      ratings[id].push(val);
      saveRatings();
      const rt = document.getElementById('rt-' + id);
      if (rt) rt.textContent = ratingSummary(id);
      const stars = btn.closest('.stars');
      if (stars) {
        stars.querySelectorAll('.star-btn').forEach(function (s, i) {
          s.classList.toggle('filled', i < val);
        });
      }
    }
  }

  function fillHero() {
    const rows = [
      { el: 'heroRow1', colors: ['#F7F5EF', '#21252A', '#3B6FA0'] },
      { el: 'heroRow2', colors: ['#C0392B', '#D98A29', '#D4B23C', '#4C8C4C'] },
      { el: 'heroRow3', colors: ['#8C6A3D', '#EDE3C8'] },
      { el: 'heroRow4', colors: ['#F7F5EF', '#F3EFE4', '#9C3B3B'] }
    ];
    rows.forEach(function (r) {
      const el = document.getElementById(r.el);
      if (!el) return;
      el.innerHTML = r.colors.map(function (c) {
        return '<span class="swatch" style="background:' + c + '"></span>';
      }).join('');
    });
  }

  function fillContact() {
    const phone = document.getElementById('phoneDisplay');
    const wa = document.getElementById('whatsappDisplay');
    const gst = document.getElementById('gstDisplay');
    const email = document.getElementById('emailDisplay');
    const address = document.getElementById('addressDisplay');
    if (address && BIZ.address) address.textContent = BIZ.address;
    if (phone && BIZ.phone) phone.outerHTML = '<a href="tel:' + BIZ.phone + '">' + BIZ.phone + '</a>';
    if (wa && BIZ.whatsapp) wa.outerHTML = '<a href="https://wa.me/' + BIZ.whatsapp + '">Chat on WhatsApp</a>';
    if (gst && BIZ.gstin) gst.outerHTML = '<span>' + BIZ.gstin + '</span>';
    if (email && BIZ.email) email.outerHTML = '<a href="mailto:' + BIZ.email + '">' + BIZ.email + '</a>';
  }

  function markCurrentNav() {
    const page = document.body.getAttribute('data-page');
    document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
      if (a.getAttribute('data-page') === page) a.classList.add('is-current');
    });
  }

  function renderProductPage() {
    const root = document.getElementById('productDetail');
    if (!root) return;
    const id = new URLSearchParams(window.location.search).get('id');
    const p = productById(id);
    if (!p) {
      root.innerHTML = '<p>This item was not found. <a href="products.html">Back to products</a>.</p>';
      return;
    }
    document.title = p.name + ' — Ayush International';
    const inWishlist = wishlist.indexOf(p.id) !== -1;
    const inCart = !!cart[p.id];
    root.innerHTML =
      '<div class="detail-grid">'
      + '<div class="detail-media">' + mediaInner(p, true) + '</div>'
      + '<div>'
      + '<p class="crumbs"><a href="index.html">Home</a> / <a href="products.html">Products</a> / ' + p.name + '</p>'
      + '<h1>' + p.name + '</h1>'
      + '<div class="card-meta">Line ' + p.line + ' · ' + p.category + '</div>'
      + '<p class="lead" style="margin-top:14px">' + p.blurb + '</p>'
      + '<p>Available in several sizes (lines) and colours — mainly white and rainbow / multi-colour ranges. Ask for the exact line and shade when you order.</p>'
      + '<div class="swatch-row" style="margin:12px 0">' + p.colors.map(function (c) { return '<span class="swatch" style="background:' + c + '"></span>'; }).join('') + '</div>'
      + '<div class="rating-row">' + starsMarkup(p.id) + '<span class="rating-text" id="rt-' + p.id + '">' + ratingSummary(p.id) + '</span></div>'
      + '<div class="detail-actions">'
      + '<button class="btn btn-brass" data-action="cart" data-id="' + p.id + '">' + (inCart ? 'Add another' : 'Add to cart') + '</button>'
      + '<button class="btn btn-outline" data-action="wish" data-id="' + p.id + '" aria-pressed="' + inWishlist + '">' + (inWishlist ? 'Saved to wishlist' : 'Add to wishlist') + '</button>'
      + '</div>'
      + '</div></div>';
    root.querySelectorAll('img[data-fallback]').forEach(function (img) {
      bindImageFallback(img);
    });
    const crumbName = document.getElementById('crumbName');
    if (crumbName) crumbName.textContent = p.name;
  }

  function initDrawers() {
    const overlay = document.getElementById('overlay');
    const cartDrawer = document.getElementById('cartDrawer');
    const wishDrawer = document.getElementById('wishDrawer');
    if (!overlay || !cartDrawer || !wishDrawer) return;

    function openDrawer(d) {
      d.classList.add('open');
      overlay.classList.add('open');
    }
    function closeDrawers() {
      cartDrawer.classList.remove('open');
      wishDrawer.classList.remove('open');
      overlay.classList.remove('open');
    }

    const cartOpen = document.getElementById('cartOpen');
    const wishOpen = document.getElementById('wishlistOpen');
    if (cartOpen) cartOpen.addEventListener('click', function (e) {
      e.preventDefault();
      renderCart();
      openDrawer(cartDrawer);
    });
    if (wishOpen) wishOpen.addEventListener('click', function (e) {
      e.preventDefault();
      renderWishlist();
      openDrawer(wishDrawer);
    });
    const cartClose = document.getElementById('cartClose');
    const wishClose = document.getElementById('wishClose');
    if (cartClose) cartClose.addEventListener('click', closeDrawers);
    if (wishClose) wishClose.addEventListener('click', closeDrawers);
    overlay.addEventListener('click', closeDrawers);

    const cartBody = document.getElementById('cartBody');
    if (cartBody) cartBody.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === 'qtyplus') cart[id]++;
      else if (action === 'qtyminus') {
        cart[id] = Math.max(0, cart[id] - 1);
        if (cart[id] === 0) delete cart[id];
      } else if (action === 'remove') delete cart[id];
      saveCart();
      updateCounts();
      renderCart();
      renderCatalog();
      renderProductPage();
    });

    const wishBody = document.getElementById('wishBody');
    if (wishBody) wishBody.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === 'unwish') wishlist = wishlist.filter(function (x) { return x !== id; });
      else if (action === 'movecart') {
        cart[id] = (cart[id] || 0) + 1;
        wishlist = wishlist.filter(function (x) { return x !== id; });
      }
      saveWishlist();
      saveCart();
      updateCounts();
      renderWishlist();
      renderCart();
      renderCatalog();
      renderProductPage();
    });

    window._ayushCloseDrawers = closeDrawers;
  }

  function initCheckout() {
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderResult = document.getElementById('orderResult');
    const checkoutOpen = document.getElementById('checkoutOpen');
    if (!checkoutOverlay || !checkoutForm || !orderResult) return;

    if (checkoutOpen) checkoutOpen.addEventListener('click', function () {
      if (Object.keys(cart).length === 0) {
        alert('Add at least one button to your cart first.');
        return;
      }
      checkoutForm.hidden = false;
      orderResult.hidden = true;
      checkoutOverlay.classList.add('open');
    });

    const cancel = document.getElementById('checkoutCancel');
    if (cancel) cancel.addEventListener('click', function () {
      checkoutOverlay.classList.remove('open');
    });
    const closeResult = document.getElementById('closeResult');
    if (closeResult) closeResult.addEventListener('click', function () {
      checkoutOverlay.classList.remove('open');
      if (window._ayushCloseDrawers) window._ayushCloseDrawers();
    });
    checkoutOverlay.addEventListener('click', function (e) {
      if (e.target === checkoutOverlay) checkoutOverlay.classList.remove('open');
    });

    checkoutForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const address = document.getElementById('custAddress').value.trim();
      const note = document.getElementById('custNote').value.trim();
      const lines = Object.keys(cart).map(function (id) {
        const p = productById(id);
        return '- ' + p.name + ' (Line ' + p.line + ') x' + cart[id];
      });
      const message = 'New order enquiry — Ayush International\n\n'
        + 'Name: ' + name + '\n'
        + 'Phone: ' + phone + '\n'
        + (address ? 'Address: ' + address + '\n' : '')
        + '\nItems:\n' + lines.join('\n')
        + (note ? '\n\nNote: ' + note : '');

      document.getElementById('orderMessage').value = message;
      checkoutForm.hidden = true;
      orderResult.hidden = false;

      if (BIZ.whatsapp) {
        window.open('https://wa.me/' + BIZ.whatsapp + '?text=' + encodeURIComponent(message), '_blank');
        document.getElementById('orderResultHint').textContent = 'Your order has been opened in WhatsApp — just hit send.';
      } else {
        document.getElementById('orderResultHint').textContent = 'WhatsApp ordering is not set up yet. Copy this message and send it to the shop, or call once the phone number is added.';
      }
    });

    const copyOrder = document.getElementById('copyOrder');
    if (copyOrder) copyOrder.addEventListener('click', function () {
      const ta = document.getElementById('orderMessage');
      ta.select();
      document.execCommand('copy');
    });
  }

  function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (!menuToggle || !navLinks) return;
    menuToggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#catalogGrid [data-action], #productDetail [data-action]');
    if (!btn) return;
    handleProductAction(btn);
    if (btn.dataset.action === 'wish' && btn.closest('#productDetail')) {
      btn.textContent = btn.getAttribute('aria-pressed') === 'true' ? 'Saved to wishlist' : 'Add to wishlist';
    }
  });

  const catFilter = document.getElementById('catFilter');
  if (catFilter) {
    catFilter.addEventListener('click', function (e) {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderCatalog();
    });
  }

  fillHero();
  fillContact();
  markCurrentNav();
  renderFilters();
  renderCatalog();
  renderProductPage();
  updateCounts();
  initDrawers();
  initCheckout();
  initMenu();
})();
