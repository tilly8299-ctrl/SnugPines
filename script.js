const PRODUCTS = [
{id:1,name:"Snug Pines Orange Autumn",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_orange_autumn_hoodie.JPG"},
{id:2,name:"Snug Pines Acorn Edition",price:15,sizes:["XS","S","M","L","XL"],img:"Snug _pines_acorn edition_hoodie.JPG"},
{id:3,name:"Snug Pines Birch",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_birch_hoodie.JPG"},
{id:4,name:"Snug Pines Original Grey",price:15,sizes:["XS","S","M","L","XL"],img:"Snig_pines_original_grey_hoodie.JPG"},
{id:5,name:"Snug Pines Green Fall",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_green_hoodie.JPG"},
{id:6,name:"Snug Pines Fall Hoodie",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_fall_hoodie.JPG"},
{id:7,name:"Snug Pines Pine Forest",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_pine_hoodie.JPG"},
{id:8,name:"Snug Pines Original",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_original_hoodie.JPG"}
];

function qs(sel){return document.querySelector(sel)}
const productsEl = qs('#products');
const cartBtn = qs('#cart-btn');
const cartPanel = qs('#cart-panel');
const cartCount = qs('#cart-count');
const cartItemsEl = qs('#cart-items');
const cartTotalEl = qs('#cart-total');
const checkoutBtn = qs('#checkout-btn');
const checkoutForm = qs('#checkout-form');
const placeOrderBtn = qs('#place-order');
let cart = JSON.parse(localStorage.getItem('demo_cart')||'[]');

function renderProducts(){
  if(!productsEl) return;
  productsEl.innerHTML='';
  PRODUCTS.forEach(p=>{
    const card=document.createElement('article');
    card.className='card';
    card.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>£${p.price.toFixed(2)}</p>
      <label>Size<select>${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select></label>
      <button data-id="${p.id}">Add to cart</button>
    `;
    productsEl.appendChild(card);
  });
}

function updateCartUI(){
  if(!cartCount) return;
  cartCount.textContent=cart.reduce((s,i)=>s+i.qty,0);
  if(!cartItemsEl) return;
  cartItemsEl.innerHTML='';
  let total=0;
  cart.forEach(item=>{
    const prod=PRODUCTS.find(p=>p.id===item.id);
    total+=prod.price*item.qty;
    const li=document.createElement('li');
    li.innerHTML=`<span>${prod.name} × ${item.qty}</span><span>£${(prod.price*item.qty).toFixed(2)}</span>`;
    cartItemsEl.appendChild(li);
  });
  if(cartTotalEl) cartTotalEl.textContent=total.toFixed(2);
  localStorage.setItem('demo_cart',JSON.stringify(cart));
}

productsEl?.addEventListener('click',e=>{
  const btn=e.target.closest('button');
  if(!btn) return;
  const id=Number(btn.dataset.id);
  const found=cart.find(i=>i.id===id);
  if(found) found.qty++;
  else cart.push({id,qty:1});
  updateCartUI();
  openCart();
});

cartBtn?.addEventListener('click',()=>{cartPanel?.classList.add('open');cartPanel?.setAttribute('aria-hidden','false');});
qs('#close-cart')?.addEventListener('click',()=>{cartPanel?.classList.remove('open');cartPanel?.setAttribute('aria-hidden','true');});

checkoutBtn?.addEventListener('click',()=>{checkoutForm?.classList.toggle('hidden');});

placeOrderBtn?.addEventListener('click',()=>{
  const name=qs('#cust-name').value.trim();
  const email=qs('#cust-email').value.trim();
  if(!name||!email){alert('Please enter name and email');return;}
  alert(`Thanks for shopping, ${name}! Your order has been sent (demo).`);
  cart=[];
  updateCartUI();
  cartPanel?.classList.remove('open');
});

function openCart(){cartPanel?.classList.add('open');cartPanel?.setAttribute('aria-hidden','false');}

renderProducts();
updateCartUI();const PRODUCTS = [
{id:1,name:"Snug Pines Orange Autumn",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_orange_autumn_hoodie.JPG"},
{id:2,name:"Snug Pines Acorn Edition",price:15,sizes:["XS","S","M","L","XL"],img:"Snug _pines_acorn edition_hoodie.JPG"},
{id:3,name:"Snug Pines Birch",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_birch_hoodie.JPG"},
{id:4,name:"Snug Pines Original Grey",price:15,sizes:["XS","S","M","L","XL"],img:"Snig_pines_original_grey_hoodie.JPG"},
{id:5,name:"Snug Pines Green Fall",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_green_hoodie.JPG"},
{id:6,name:"Snug Pines Fall Hoodie",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_fall_hoodie.JPG"},
{id:7,name:"Snug Pines Pine Forest",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_pine_hoodie.JPG"},
{id:8,name:"Snug Pines Original",price:15,sizes:["XS","S","M","L","XL"],img:"Snug_pines_original_hoodie.JPG"}
];

function qs(sel){return document.querySelector(sel)}
const productsEl = qs('#products');
const cartBtn = qs('#cart-btn');
const cartPanel = qs('#cart-panel');
const cartCount = qs('#cart-count');
const cartItemsEl = qs('#cart-items');
const cartTotalEl = qs('#cart-total');
const checkoutBtn = qs('#checkout-btn');
const checkoutForm = qs('#checkout-form');
const placeOrderBtn = qs('#place-order');
let cart = JSON.parse(localStorage.getItem('demo_cart')||'[]');

function renderProducts(){
  if(!productsEl) return;
  productsEl.innerHTML='';
  PRODUCTS.forEach(p=>{
    const card=document.createElement('article');
    card.className='card';
    card.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>£${p.price.toFixed(2)}</p>
      <label>Size<select>${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select></label>
      <button data-id="${p.id}">Add to cart</button>
    `;
    productsEl.appendChild(card);
  });
}

function updateCartUI(){
  if(!cartCount) return;
  cartCount.textContent=cart.reduce((s,i)=>s+i.qty,0);
  if(!cartItemsEl) return;
  cartItemsEl.innerHTML='';
  let total=0;
  cart.forEach(item=>{
    const prod=PRODUCTS.find(p=>p.id===item.id);
    total+=prod.price*item.qty;
    const li=document.createElement('li');
    li.innerHTML=`<span>${prod.name} × ${item.qty}</span><span>£${(prod.price*item.qty).toFixed(2)}</span>`;
    cartItemsEl.appendChild(li);
  });
  if(cartTotalEl) cartTotalEl.textContent=total.toFixed(2);
  localStorage.setItem('demo_cart',JSON.stringify(cart));
}

productsEl?.addEventListener('click',e=>{
  const btn=e.target.closest('button');
  if(!btn) return;
  const id=Number(btn.dataset.id);
  const found=cart.find(i=>i.id===id);
  if(found) found.qty++;
  else cart.push({id,qty:1});
  updateCartUI();
  openCart();
});

cartBtn?.addEventListener('click',()=>{cartPanel?.classList.add('open');cartPanel?.setAttribute('aria-hidden','false');});
qs('#close-cart')?.addEventListener('click',()=>{cartPanel?.classList.remove('open');cartPanel?.setAttribute('aria-hidden','true');});

checkoutBtn?.addEventListener('click',()=>{checkoutForm?.classList.toggle('hidden');});

placeOrderBtn?.addEventListener('click',()=>{
  const name=qs('#cust-name').value.trim();
  const email=qs('#cust-email').value.trim();
  if(!name||!email){alert('Please enter name and email');return;}
  alert(`Thanks for shopping, ${name}! Your order has been sent (demo).`);
  cart=[];
  updateCartUI();
  cartPanel?.classList.remove('open');
});

function openCart(){cartPanel?.classList.add('open');cartPanel?.setAttribute('aria-hidden','false');}

renderProducts();
updateCartUI();