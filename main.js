const products = [
 {code:"SE-BS-01",name:"Continuous Band Sealer",desc:"Reliable sealing for every pack.",cat:["Food","Agro"],features:["Continuous and efficient pouch sealing","Strong and uniform sealing","Adjustable sealing and conveyor speed","Easy operation and maintenance","Compact and durable construction","Suitable for small and medium-scale packaging"],suit:"Namkeen, Spices, Pulses, Flour, Dry Fruits"},
 {code:"SE-PM-02",name:"Pneumatic Packing Machine",desc:"Efficient packaging with reliable performance.",cat:["Food","Agro"],features:["Pneumatic-operated packing system","Automatic filling and sealing","Reliable and consistent operation","Hygienic product handling","Easy-to-use control system","Designed for continuous production"],suit:"Pulses, Rice, Spices, Granules, Namkeen"},
 {code:"SE-FPM-03",name:"Full Pneumatic Packing Machine",desc:"Fully automatic packaging for higher productivity.",cat:["Food","Industrial"],features:["Fully pneumatic operating mechanism","Smooth and reliable performance","Consistent filling and sealing","Reduced manual intervention","Robust industrial construction","Easy maintenance","Suitable for continuous production"],suit:"Pulses & Dal, Rice, Sugar, Spices, Seeds"},
 {code:"SE-CTP-04",name:"Collar Type Packing Machine",desc:"Versatile packaging for a wide range of products.",cat:["Food","Agro"],features:["Automatic pouch forming, filling and sealing","Fast and efficient packaging","Consistent pouch formation","Suitable for different pouch sizes","Easy operation and maintenance","Compact and durable design"],suit:"Spices & Masala, Flour, Pulses, Rice, Sugar"},
 {code:"SE-MHW-05",name:"Multihead Weigher Packing Machine",desc:"High accuracy weighing for high-volume production.",cat:["Food","Industrial"],features:["High-accuracy multihead weighing system","Automatic weighing, filling and packing","High-speed packaging operation","Touch-screen control system options","Reduces product giveaway","Ideal for high-volume production"],suit:"Chips, Namkeen, Dry Fruits, Snacks, Candy"},
 {code:"SE-LC-06",name:"Load Cell Based Packing Machine",desc:"Accurate weighing for consistent packaging.",cat:["Food","Agro","Industrial"],features:["Accurate load-cell-based weighing","Automatic filling and packing","Consistent weight control","Suitable for different target weights","Easy operation","Robust industrial construction"],suit:"Rice, Dal & Pulses, Sugar, Flour, Seeds"},
 {code:"SE-AF-07",name:"Automatic Auger Filler Machine",desc:"Precise powder filling for perfect packaging.",cat:["Food","Pharma"],features:["High-accuracy powder filling","Automatic filling and dosing system","Adjustable filling quantity","Consistent product weight","Easy operation and maintenance","Suitable for continuous production"],suit:"Spices & Masala, Turmeric Powder, Chilli Powder, Flour, Milk Powder"},
 {code:"SE-CS-08",name:"Industrial Chhanna / Vibro Sifter Machine",desc:"For pure, uniform and quality products.",cat:["Food","Industrial"],features:["Efficient screening and sieving","Separates unwanted particles and lumps","Uniform particle size","Hygienic and easy-to-clean design","Robust industrial construction","Suitable for food and powder processing"],suit:"Flour, Spices & Masala, Besan, Sugar, Pulses"},
 {code:"SE-RM-09",name:"Industrial Roasting Machine",desc:"Perfect roasting for better taste.",cat:["Food","Agro"],features:["Uniform and consistent roasting","Adjustable temperature control","Efficient heating system","Suitable for batch or continuous production","Easy operation and cleaning","Durable industrial construction","Designed for controlled roasting"],suit:"Peanuts, Chana, Pulses, Seeds, Dry Fruits"},
 {code:"SE-IM-10",name:"Industrial Mixture Machine",desc:"Efficient mixing for consistent quality.",cat:["Food","Agro","Industrial"],features:["Heavy-duty mixing performance","Uniform and consistent mixing","Robust industrial construction","Easy loading and unloading","Low maintenance requirement","Suitable for continuous production"],suit:"Spices & Masala, Namkeen Ingredients, Flour & Dry Ingredients, Pulses & Grains, Animal Feed Ingredients"},
 {code:"SE-UM-11",name:"U-Type Mixture Machine",desc:"Perfect blending for better results.",cat:["Food","Agro"],features:["U-shaped mixing chamber for efficient blending","Uniform mixing of ingredients","Heavy-duty and durable design","Easy operation and cleaning","Suitable for batch production","Customizable capacity"],suit:"Spices & Masala, Flour, Pulses & Grains, Namkeen Ingredients, Feed Ingredients"},
 {code:"SE-PUL-12",name:"Pulverizer Machine",desc:"Fine grinding for multiple applications.",cat:["Food","Industrial"],features:["Efficient grinding and pulverizing","Fine and uniform particle size","Heavy-duty construction","Easy operation and maintenance","Suitable for a wide range of applications","Different screens/capacities can be provided as required"],suit:"Spices & Masala, Turmeric, Chilli, Coriander, Cumin"},
 {code:"SE-SM-13",name:"Studer Machine",desc:"Reliable processing for better output.",cat:["Industrial","Agro"],features:["Robust industrial construction","Smooth and reliable operation","Designed for continuous production","Easy operation and maintenance","Customizable according to application","Suitable for industrial processing requirements"],suit:"Food, Granular, Powder & Agricultural Products"},
 {code:"SE-ST-14",name:"Shrink Tunnel Machine",desc:"Perfect shrink wrapping for better presentation.",cat:["Food","Pharma","Industrial"],features:["Uniform heat distribution","Fast and efficient shrink wrapping","Adjustable temperature control","Adjustable conveyor speed","Continuous operation","Strong and durable construction","Suitable for different package sizes"],suit:"Bottles, Jars, Boxes, Food Packs, Cosmetic Products"},
 {code:"SE-OV-15",name:"Industrial Oven",desc:"Efficient heating for multiple applications.",cat:["Food","Industrial"],features:["Uniform heating","Temperature-controlled operation","Heavy-duty industrial construction","Efficient heating performance","Suitable for continuous and batch operations","Easy loading and unloading","Low-maintenance design","Available in customized sizes and configurations"],suit:"Bakery Products, Snacks & Namkeen, Biscuits, Dry Fruits, Spices"}
];

let activeFilter = "All";
const machineIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="8" width="16" height="12" rx="1"/><path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M8 12h8M8 16h5"/></svg>`;

function setFilter(f){
  activeFilter = f;
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active', c.dataset.f===f));
  renderProducts();
}

function renderProducts(){
  const q = document.getElementById('search-box').value.toLowerCase();
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.filter(p=>{
    const matchCat = activeFilter==="All" || p.cat.includes(activeFilter);
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.suit.toLowerCase().includes(q);
    return matchCat && matchQ;
  }).map((p,i)=>`
    <div class="p-card">
      <div class="p-visual">${machineIcon}</div>
      <div class="p-body">
        <div class="p-code">${p.code}</div>
        <h4>${p.name}</h4>
        <div class="p-desc">"${p.desc}"</div>
        <ul>${p.features.slice(0,4).map(f=>`<li>${f}</li>`).join('')}</ul>
        <div class="p-suit"><strong>Suitable for:</strong> ${p.suit}</div>
      </div>
      <div class="p-actions">
        <button class="view" onclick="openModal('${p.code}')">View Details</button>
        <button class="quote" onclick="goToQuote('${p.name}')">Request a Quote</button>
      </div>
    </div>
  `).join('') || `<p style="color:var(--muted);">No machines match your search.</p>`;
}

function openModal(code){
  const p = products.find(x=>x.code===code);
  document.getElementById('modal-content').innerHTML = `
    <button class="modal-close" onclick="closeModal()">&times;</button>
    <div class="p-code">${p.code}</div>
    <h3 style="margin:6px 0 4px;">${p.name}</h3>
    <div class="p-desc">"${p.desc}"</div>
    <h4 style="font-size:.9rem; margin:16px 0 8px;">Key Features</h4>
    <ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
    <h4 style="font-size:.9rem; margin:16px 0 6px;">Suitable Products</h4>
    <p style="color:var(--muted); font-size:.9rem;">${p.suit}</p>
    <button class="btn btn-primary" style="margin-top:20px; width:100%;" onclick="goToQuote('${p.name}')">Request a Quote</button>
  `;
  document.getElementById('modal-bg').classList.add('open');
}
function closeModal(){ document.getElementById('modal-bg').classList.remove('open'); }
function goToQuote(name){
  closeModal();
  document.getElementById('quote-product').value = name;
  document.getElementById('quote').scrollIntoView({behavior:'smooth'});
}
function submitQuote(e){
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.textContent = "Thanks — your enquiry has been noted. Our team will reach out shortly.";
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 3500);
  e.target.reset();
  return false;
}
function renderGallery(){
  const items = ["Packaging Machine","Filling Machine","Sealing Machine","Processing Machine","Fabrication Unit","Packaging Application"];
  document.getElementById('gallery-grid').innerHTML = items.map(t=>`<div class="g-item" title="${t}">${machineIcon}</div>`).join('');
}
renderProducts();
renderGallery();
