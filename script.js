const ads = [
    { name: "Modern Bedsitter — Near Campus", cat: "Rooms", desc: "Clean vacant bedsitter with water and secure compound.", contact: "07XX XXX XXX", location: "Near Tharaka University" },
    { name: "Gas Refill & Delivery", cat: "Gas", desc: "Gas refills and delivery around campus and nearby hostels.", contact: "07XX XXX XXX", location: "Kathwana / TUN area" },
    { name: "Affordable Beddings", cat: "Beddings", desc: "Bedsheets, duvets, blankets and pillows at student-friendly prices.", contact: "07XX XXX XXX", location: "Tharaka" },
    { name: "Campus Cyber Services", cat: "Cyber", desc: "Printing, photocopying, scanning, online applications and typing.", contact: "07XX XXX XXX", location: "Near TUN" },
    { name: "Fresh Meals & Hotel Service", cat: "Hotel", desc: "Breakfast, lunch, supper and takeaway meals.", contact: "07XX XXX XXX", location: "Around campus" },
    { name: "Sneakers & Clothes", cat: "Fashion", desc: "Trendy shoes and clothes for students.", contact: "07XX XXX XXX", location: "Tharaka" }
{name:"Electronics",desc:"new,second hand"
{name:"Student A",text:"Does the bedsitter still have an opening?"},
{name:"Student B",text:"Can the gas delivery be made to the hostels?"},
{name:"Student C",text:"Looking for affordable kitchen utensils."}
];
function renderAds(list=ads){const grid=document.getElementById('adGrid');grid.innerHTML=list.map(a=>`<article class="ad-card"><span class="tag">${a.cat}</span><h3>${a.name}</h3><p>${a.desc}</p><p><strong>📍 ${a.location}</strong></p><div class="contact">📞 ${a.contact}</div><button class="btn btn-light" style="margin-top:12px" onclick="alert('Inquiry feature placeholder. Connect WhatsApp/chat backend here.')">Make inquiry</button></article>`).join('')||'<p class="muted">No advertisements found.</p>'}
function filterAds(cat){renderAds(ads.filter(a=>a.cat===cat));document.querySelector('#inquiry').scrollIntoView({behavior:'smooth'})}
function searchAds(){const q=document.getElementById('searchInput').value.toLowerCase();renderAds(ads.filter(a=>(a.name+a.cat+a.desc+a.location).toLowerCase().includes(q)))}
function renderComments(){document.getElementById('commentsList').innerHTML=comments.map(c=>`<div class="comment"><strong>${c.name}</strong><span>${c.text}</span></div>`).join('')}
function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
document.getElementById('adForm').addEventListener('submit',e=>{e.preventDefault();openModal('subscriptionModal')});
document.getElementById('commentForm').addEventListener('submit',e=>{e.preventDefault();comments.unshift({name:document.getElementById('commentName').value,text:document.getElementById('commentText').value});renderComments();e.target.reset()});
renderAds();renderComments();
