"use strict";
/* ============================================================
   SHOPIFY ADMIN — Vanilla JS SPA  |  app.js
   ============================================================ */

// ── DATA ─────────────────────────────────────────────────────
const DATA = {
  store:{name:"Northstar Commerce",plan:"Shopify",currency:"USD",email:"admin@northstar.com",url:"northstar-commerce.myshopify.com"},
  chartPeriods:{
    "1d":{labels:["12am","2am","4am","6am","8am","10am","12pm","2pm","4pm","6pm","8pm","10pm"],sales:[120,85,60,40,220,380,520,610,480,390,290,180],sessions:[45,30,20,15,80,150,210,250,190,160,110,70],orders:[4,3,2,1,8,15,21,25,19,16,11,7]},
    "7d":{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],sales:[2840,3210,2750,4180,5230,6100,4870],sessions:[820,960,780,1240,1580,1820,1450],orders:[28,34,27,42,53,61,49]},
    "30d":{labels:["Apr 6","Apr 9","Apr 12","Apr 15","Apr 18","Apr 21","Apr 24","Apr 27","Apr 30","May 3","May 6"],sales:[3200,3800,4100,4600,5200,5800,5500,6200,5900,7100,6800],sessions:[920,1100,1200,1340,1520,1700,1610,1820,1720,2080,1990],orders:[32,38,41,46,52,58,55,62,59,71,68]},
    "90d":{labels:["Feb","Mar W1","Mar W2","Mar W3","Mar W4","Apr W1","Apr W2","Apr W3","Apr W4","May W1"],sales:[38000,42000,39000,51000,48000,55000,52000,61000,58000,67000],sessions:[11000,12200,11300,14800,13900,15900,15100,17700,16800,19400],orders:[380,420,390,510,480,550,520,610,580,670]},
    "1y":{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],sales:[45000,52000,48000,61000,73000,68000,82000,79000,91000,88000,95000,112000],sessions:[12000,14500,13200,16800,20100,18700,22500,21800,25000,24200,26100,30800],orders:[450,520,480,610,730,680,820,790,910,880,950,1120]}
  },
  kpis:[{label:"Total sales",value:"$48,291",delta:"+12.4%",up:true,sub:"vs. last 30 days"},{label:"Orders",value:"1,084",delta:"+8.1%",up:true,sub:"vs. last 30 days"},{label:"Sessions",value:"18,432",delta:"+5.7%",up:true,sub:"vs. last 30 days"},{label:"Conversion rate",value:"3.28%",delta:"+0.4%",up:true,sub:"vs. last 30 days"}],
  orders:[
    {id:"#10452",date:"May 6, 2026",customer:"Priya Mehta",email:"priya@email.com",channel:"Online Store",items:3,total:"$128.00",payment:"paid",fulfillment:"unfulfilled",tags:["VIP"],risk:"low",timeline:[{e:"Order placed",t:"May 6 · 9:41 AM",done:true},{e:"Payment received",t:"May 6 · 9:41 AM",done:true},{e:"Fulfillment pending",t:"—",done:false}]},
    {id:"#10451",date:"May 6, 2026",customer:"Jordan Lee",email:"jordan@email.com",channel:"Online Store",items:1,total:"$42.00",payment:"paid",fulfillment:"fulfilled",tags:[],risk:"low",timeline:[{e:"Order placed",t:"May 6 · 8:12 AM",done:true},{e:"Payment received",t:"May 6 · 8:12 AM",done:true},{e:"Fulfilled",t:"May 6 · 2:30 PM",done:true}]},
    {id:"#10450",date:"May 5, 2026",customer:"Sofia Rossi",email:"sofia@email.com",channel:"Instagram",items:5,total:"$314.50",payment:"pending",fulfillment:"unfulfilled",tags:["Wholesale"],risk:"medium",timeline:[{e:"Order placed",t:"May 5 · 3:15 PM",done:true},{e:"Payment pending",t:"—",done:false}]},
    {id:"#10449",date:"May 5, 2026",customer:"Marcus Webb",email:"marcus@email.com",channel:"Online Store",items:2,total:"$89.00",payment:"paid",fulfillment:"fulfilled",tags:[],risk:"low",timeline:[{e:"Order placed",t:"May 5 · 11:00 AM",done:true},{e:"Payment received",t:"May 5 · 11:00 AM",done:true},{e:"Fulfilled",t:"May 5 · 4:00 PM",done:true}]},
    {id:"#10448",date:"May 4, 2026",customer:"Aisha Okonkwo",email:"aisha@email.com",channel:"Facebook",items:4,total:"$207.75",payment:"paid",fulfillment:"fulfilled",tags:["Returning"],risk:"low",timeline:[{e:"Order placed",t:"May 4 · 7:30 AM",done:true},{e:"Payment received",t:"May 4 · 7:30 AM",done:true},{e:"Fulfilled",t:"May 4 · 1:00 PM",done:true}]},
    {id:"#10447",date:"May 4, 2026",customer:"Chen Wei",email:"chen@email.com",channel:"Online Store",items:1,total:"$55.00",payment:"pending",fulfillment:"unfulfilled",tags:[],risk:"high",timeline:[{e:"Order placed",t:"May 4 · 6:00 PM",done:true},{e:"Payment pending",t:"—",done:false}]},
    {id:"#10446",date:"May 3, 2026",customer:"Lukas Braun",email:"lukas@email.com",channel:"Online Store",items:2,total:"$98.50",payment:"paid",fulfillment:"fulfilled",tags:[],risk:"low",timeline:[{e:"Order placed",t:"May 3 · 2:10 PM",done:true},{e:"Payment received",t:"May 3 · 2:10 PM",done:true},{e:"Fulfilled",t:"May 3 · 5:45 PM",done:true}]},
    {id:"#10445",date:"May 3, 2026",customer:"Nadia Torres",email:"nadia@email.com",channel:"Wholesale",items:6,total:"$422.00",payment:"paid",fulfillment:"fulfilled",tags:["VIP"],risk:"low",timeline:[{e:"Order placed",t:"May 3 · 9:00 AM",done:true},{e:"Payment received",t:"May 3 · 9:00 AM",done:true},{e:"Fulfilled",t:"May 3 · 12:00 PM",done:true}]}
  ],
  draftOrders:[{id:"D#312",date:"May 6, 2026",customer:"Sam Rivera",total:"$76.00",items:2},{id:"D#311",date:"May 5, 2026",customer:"Ellie Park",total:"$210.00",items:4},{id:"D#310",date:"May 4, 2026",customer:"Omar Hassan",total:"$55.50",items:1}],
  abandonedCheckouts:[
    {id:"AC#88",date:"May 6, 2026",customer:"Alex Kim",email:"alex@email.com",cart:"2 items",stage:"Contact info",total:"$94.00",recovered:false},
    {id:"AC#87",date:"May 6, 2026",customer:"Maria Cruz",email:"maria@email.com",cart:"1 item",stage:"Payment",total:"$48.00",recovered:true},
    {id:"AC#86",date:"May 5, 2026",customer:"Tom Nguyen",email:"tom@email.com",cart:"3 items",stage:"Shipping",total:"$176.00",recovered:false},
    {id:"AC#85",date:"May 5, 2026",customer:"Sara White",email:"sara@email.com",cart:"1 item",stage:"Contact info",total:"$33.00",recovered:false},
    {id:"AC#84",date:"May 4, 2026",customer:"James Brown",email:"james@email.com",cart:"5 items",stage:"Payment",total:"$312.00",recovered:true},
    {id:"AC#83",date:"May 4, 2026",customer:"Lisa Park",email:"lisa@email.com",cart:"2 items",stage:"Shipping",total:"$89.50",recovered:false}
  ],
  returns:[
    {id:"R#22",order:"#10438",date:"May 5, 2026",customer:"Emma Wilson",items:1,reason:"Wrong size",status:"pending",refund:"$65.00"},
    {id:"R#21",order:"#10430",date:"May 4, 2026",customer:"Ryan Davis",items:2,reason:"Defective item",status:"returned",refund:"$128.00"},
    {id:"R#20",order:"#10425",date:"May 3, 2026",customer:"Anna White",items:1,reason:"Changed mind",status:"refunded",refund:"$44.00"},
    {id:"R#19",order:"#10418",date:"May 2, 2026",customer:"Ben Johnson",items:3,reason:"Wrong item sent",status:"refunded",refund:"$186.50"},
    {id:"R#18",order:"#10410",date:"May 1, 2026",customer:"Chloe Martin",items:1,reason:"Not as described",status:"returned",refund:"$92.00"}
  ],
  products:[
    {id:"P1001",name:"Organic Cotton Tee",sku:"OCT-WHT-M",inventory:142,price:"$34.99",status:"active",category:"Apparel",vendor:"EcoWear",variants:4,image:"👕"},
    {id:"P1002",name:"Bamboo Water Bottle",sku:"BWB-BLU",inventory:67,price:"$28.00",status:"active",category:"Accessories",vendor:"GreenLife",variants:3,image:"🍶"},
    {id:"P1003",name:"Hemp Tote Bag",sku:"HTB-NAT",inventory:0,price:"$22.00",status:"active",category:"Bags",vendor:"EcoWear",variants:2,image:"👜"},
    {id:"P1004",name:"Recycled Snapback",sku:"RS-BLK",inventory:38,price:"$45.00",status:"active",category:"Apparel",vendor:"CapCo",variants:1,image:"🧢"},
    {id:"P1005",name:"Natural Soap Bar",sku:"NSB-LAV",inventory:210,price:"$12.00",status:"active",category:"Beauty",vendor:"PureLife",variants:6,image:"🧼"},
    {id:"P1006",name:"Eco Yoga Mat",sku:"EYM-PRP",inventory:23,price:"$79.00",status:"active",category:"Sports",vendor:"FlexFit",variants:2,image:"🧘"},
    {id:"P1007",name:"Beeswax Candle Set",sku:"BCS-VAN",inventory:0,price:"$38.00",status:"draft",category:"Home",vendor:"PureLife",variants:3,image:"🕯️"},
    {id:"P1008",name:"Cork Yoga Block",sku:"CYB-NAT",inventory:55,price:"$18.00",status:"active",category:"Sports",vendor:"FlexFit",variants:1,image:"🟫"}
  ],
  collections:[{id:"C1",name:"Summer Essentials",type:"Smart",products:24,updated:"May 5, 2026",image:"☀️"},{id:"C2",name:"Eco Home",type:"Manual",products:12,updated:"May 2, 2026",image:"🏡"},{id:"C3",name:"Active Lifestyle",type:"Smart",products:18,updated:"Apr 28, 2026",image:"🏃"},{id:"C4",name:"Gift Picks",type:"Manual",products:8,updated:"Apr 20, 2026",image:"🎁"}],
  customers:[
    {id:"CU1",name:"Priya Mehta",email:"priya@email.com",location:"Mumbai, IN",orders:12,spent:"$1,284.00",joined:"Jan 2024",tags:["VIP","Returning"],subscribed:true,status:"enabled"},
    {id:"CU2",name:"Jordan Lee",email:"jordan@email.com",location:"Toronto, CA",orders:3,spent:"$147.00",joined:"Aug 2025",tags:[],subscribed:true,status:"enabled"},
    {id:"CU3",name:"Sofia Rossi",email:"sofia@email.com",location:"Milan, IT",orders:7,spent:"$892.50",joined:"Mar 2025",tags:["Wholesale"],subscribed:false,status:"enabled"},
    {id:"CU4",name:"Marcus Webb",email:"marcus@email.com",location:"Austin, US",orders:5,spent:"$421.00",joined:"Jun 2025",tags:[],subscribed:true,status:"enabled"},
    {id:"CU5",name:"Aisha Okonkwo",email:"aisha@email.com",location:"Lagos, NG",orders:9,spent:"$763.25",joined:"Nov 2024",tags:["Returning"],subscribed:true,status:"enabled"},
    {id:"CU6",name:"Chen Wei",email:"chen@email.com",location:"Shanghai, CN",orders:2,spent:"$88.00",joined:"Apr 2026",tags:[],subscribed:false,status:"enabled"}
  ],
  segments:[{id:"S1",name:"High-value customers",description:"Spent > $500",rules:2,members:142,created:"Mar 2026"},{id:"S2",name:"Email subscribers",description:"Subscribed to marketing",rules:1,members:1840,created:"Jan 2026"},{id:"S3",name:"At-risk customers",description:"No purchase in 90+ days",rules:2,members:88,created:"Apr 2026"},{id:"S4",name:"Wholesale buyers",description:"Tagged as Wholesale",rules:1,members:24,created:"Feb 2026"}],
  discounts:[{code:"SUMMER20",type:"Percentage",value:"20%",usage:"248/500",status:"active",expires:"Jun 30, 2026"},{code:"FREESHIP",type:"Free shipping",value:"Free",usage:"89/∞",status:"active",expires:"Never"},{code:"WELCOME10",type:"Fixed amount",value:"$10",usage:"412/∞",status:"active",expires:"Never"},{code:"FLASH50",type:"Percentage",value:"50%",usage:"150/150",status:"inactive",expires:"May 1, 2026"},{code:"BUYXGETY",type:"Buy X get Y",value:"B2G1",usage:"67/200",status:"active",expires:"Jul 15, 2026"}],
  giftCards:[{code:"GCRD-X4A2-M8N1",balance:"$75.00",value:"$100.00",issuedTo:"Emma Wilson",expires:"May 2027",status:"active"},{code:"GCRD-Y9B3-K5L2",balance:"$0.00",value:"$50.00",issuedTo:"Ryan Davis",expires:"Dec 2026",status:"expired"},{code:"GCRD-Z1C4-P2Q6",balance:"$200.00",value:"$200.00",issuedTo:"Priya Mehta",expires:"May 2027",status:"active"},{code:"GCRD-A7D8-R3S9",balance:"$25.00",value:"$50.00",issuedTo:"General",expires:"Dec 2026",status:"active"}],
  inventory:[{product:"Organic Cotton Tee",sku:"OCT-WHT-M",onHand:142,committed:18,available:124,incoming:50},{product:"Bamboo Water Bottle",sku:"BWB-BLU",onHand:67,committed:5,available:62,incoming:0},{product:"Hemp Tote Bag",sku:"HTB-NAT",onHand:0,committed:0,available:0,incoming:100},{product:"Recycled Snapback",sku:"RS-BLK",onHand:38,committed:3,available:35,incoming:0},{product:"Natural Soap Bar",sku:"NSB-LAV",onHand:210,committed:22,available:188,incoming:0},{product:"Eco Yoga Mat",sku:"EYM-PRP",onHand:23,committed:4,available:19,incoming:30},{product:"Cork Yoga Block",sku:"CYB-NAT",onHand:55,committed:6,available:49,incoming:0}],
  purchaseOrders:[{id:"PO-2026-041",supplier:"EcoWear Supplies",created:"May 1, 2026",arrival:"May 15, 2026",total:"$2,400.00",status:"open"},{id:"PO-2026-040",supplier:"GreenLife Co.",created:"Apr 25, 2026",arrival:"May 8, 2026",total:"$840.00",status:"open"},{id:"PO-2026-039",supplier:"FlexFit Sports",created:"Apr 18, 2026",arrival:"May 2, 2026",total:"$1,560.00",status:"closed"},{id:"PO-2026-038",supplier:"PureLife Wellness",created:"Apr 10, 2026",arrival:"Apr 24, 2026",total:"$620.00",status:"closed"}],
  apps:[{name:"Klaviyo",category:"Marketing",rating:4.8,reviews:2840,installed:true,icon:"📧",desc:"Email and SMS marketing automation platform."},{name:"Yotpo",category:"Reviews",rating:4.6,reviews:1240,installed:true,icon:"⭐",desc:"Customer reviews, ratings, and loyalty programs."},{name:"ShipStation",category:"Shipping",rating:4.5,reviews:3100,installed:false,icon:"📦",desc:"Multi-carrier shipping and order management."},{name:"ReConvert",category:"Upsell",rating:4.9,reviews:920,installed:false,icon:"🔄",desc:"Post-purchase upsell and thank you page builder."},{name:"TaxJar",category:"Taxes",rating:4.4,reviews:680,installed:true,icon:"🧾",desc:"Automated sales tax calculations and filing."},{name:"Tidio",category:"Support",rating:4.7,reviews:1580,installed:false,icon:"💬",desc:"Live chat and AI chatbot for customer support."},{name:"Gorgias",category:"Support",rating:4.6,reviews:890,installed:false,icon:"🎧",desc:"Helpdesk built for e-commerce teams."},{name:"Loox",category:"Reviews",rating:4.8,reviews:2100,installed:false,icon:"🖼️",desc:"Photo and video reviews to build social proof."}],
  staff:[{name:"Azra Admin",email:"azra@northstar.com",role:"Owner",lastLogin:"Just now",status:"active"},{name:"Sarah Ops",email:"sarah@northstar.com",role:"Manager",lastLogin:"1 hour ago",status:"active"},{name:"Mike Fulfill",email:"mike@northstar.com",role:"Fulfillment",lastLogin:"2 days ago",status:"active"},{name:"Zoe Marketing",email:"zoe@northstar.com",role:"Marketing",lastLogin:"3 hours ago",status:"active"},{name:"Tom Helper",email:"tom@northstar.com",role:"Staff",lastLogin:"1 week ago",status:"inactive"}],
  themes:[{name:"Dawn",status:"live",updated:"May 5, 2026",version:"6.2.1"},{name:"Debut",status:"draft",updated:"Apr 12, 2026",version:"5.0.0"}],
  blogPosts:[{title:"5 Ways to Live More Sustainably",author:"Zoe Marketing",date:"May 5, 2026",status:"published"},{title:"The Story Behind Our Bamboo Collection",author:"Sarah Ops",date:"May 1, 2026",status:"published"},{title:"Summer Style Guide 2026",author:"Zoe Marketing",date:"Apr 28, 2026",status:"draft"}],
  pages:[{title:"About Us",visibility:"visible",updated:"Apr 30, 2026"},{title:"Sustainability",visibility:"visible",updated:"Apr 20, 2026"},{title:"FAQ",visibility:"visible",updated:"Apr 15, 2026"},{title:"Size Guide",visibility:"hidden",updated:"Mar 8, 2026"}],
  campaigns:[{name:"Summer Sale Email",channel:"Email",status:"active",sent:4200,opened:"42%",clicked:"8.4%",revenue:"$2,840"},{name:"Welcome Series",channel:"Email",status:"active",sent:180,opened:"61%",clicked:"14.2%",revenue:"$1,120"},{name:"Google Shopping",channel:"Ads",status:"active",spend:"$820",clicks:1240,cpc:"$0.66",revenue:"$4,180"},{name:"Instagram Ads",channel:"Ads",status:"paused",spend:"$410",clicks:580,cpc:"$0.71",revenue:"$1,640"},{name:"SMS Flash Sale",channel:"SMS",status:"scheduled",audience:840,scheduled:"May 8, 2026",revenue:"—"}],
  automations:[{name:"Abandoned cart recovery",trigger:"Cart abandoned 1hr",status:"active",runs:840,revenue:"$5,280"},{name:"Welcome new customer",trigger:"Account created",status:"active",runs:1240,revenue:"$4,100"},{name:"Win-back campaign",trigger:"90 days no purchase",status:"active",runs:88,revenue:"$1,960"},{name:"Post-purchase review",trigger:"Order delivered",status:"active",runs:920,revenue:"—"},{name:"Birthday discount",trigger:"Birthday date",status:"inactive",runs:0,revenue:"—"}],
  notifications:[{text:"New order #10452 received",time:"2 min ago",type:"order"},{text:"Inventory low: Hemp Tote Bag (0 left)",time:"1 hr ago",type:"warning"},{text:"Payment failed for order #10447",time:"3 hr ago",type:"error"},{text:"2 new product reviews awaiting",time:"5 hr ago",type:"review"}],
  activityLog:[{date:"May 6, 2026",user:"Azra Admin",action:"Created order #10452"},{date:"May 6, 2026",user:"Mike Fulfill",action:"Marked order #10451 as fulfilled"},{date:"May 5, 2026",user:"Sarah Ops",action:"Added 50 units to Organic Cotton Tee"},{date:"May 5, 2026",user:"Zoe Marketing",action:"Published Summer Style Guide 2026"},{date:"May 4, 2026",user:"Azra Admin",action:"Created discount code BUYXGETY"}],
  liveView:{visitors:47,addedToCart:12,checkingOut:3,topLocations:["United States","United Kingdom","Canada","Australia","Germany"],topPages:["/products/organic-cotton-tee","/collections/summer","/products/bamboo-bottle","/products/natural-soap-bar"]}
};

// ── CHART HELPERS ────────────────────────────────────────────
const _charts={};
function destroyCharts(){Object.values(_charts).forEach(c=>{try{c.destroy();}catch(e){}});Object.keys(_charts).forEach(k=>delete _charts[k]);}
function _line(id,labels,data,prefix='$'){
  const ctx=document.getElementById(id);if(!ctx)return;
  _charts[id]=new Chart(ctx,{type:'line',data:{labels,datasets:[{data,borderColor:'#008060',backgroundColor:'rgba(0,128,96,.1)',borderWidth:2.5,fill:true,tension:.4,pointRadius:0,pointHoverRadius:5,pointHoverBackgroundColor:'#008060'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false,backgroundColor:'#1a1a1a',titleColor:'#e3e3e3',bodyColor:'#aaa',padding:10,callbacks:{label:c=>` ${prefix}${Number(c.parsed.y).toLocaleString()}`}}},scales:{x:{grid:{display:false},ticks:{color:'#8c9196',font:{size:11}}},y:{grid:{color:'#f0f0f0'},ticks:{color:'#8c9196',font:{size:11},callback:v=>prefix+(v>=1000?(v/1000).toFixed(0)+'k':v)}}},interaction:{mode:'nearest',axis:'x',intersect:false}}});
}
function _donut(id,labels,data,colors){
  const ctx=document.getElementById(id);if(!ctx)return;
  _charts[id]=new Chart(ctx,{type:'doughnut',data:{labels,datasets:[{data,backgroundColor:colors,borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'right',labels:{font:{size:12},color:'#6d7175',padding:12}},tooltip:{backgroundColor:'#1a1a1a',titleColor:'#e3e3e3',bodyColor:'#aaa',padding:10}}}});
}
function _bar(id,labels,data,color='#008060',horiz=false){
  const ctx=document.getElementById(id);if(!ctx)return;
  _charts[id]=new Chart(ctx,{type:'bar',data:{labels,datasets:[{data,backgroundColor:color+'cc',borderRadius:4,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:horiz?'y':'x',plugins:{legend:{display:false},tooltip:{backgroundColor:'#1a1a1a',titleColor:'#e3e3e3',bodyColor:'#aaa',padding:10}},scales:{x:{grid:{display:horiz},ticks:{color:'#8c9196',font:{size:11}}},y:{grid:{display:!horiz},ticks:{color:'#8c9196',font:{size:11}}}}}});
}

// ── ROUTER ───────────────────────────────────────────────────
const _routes={};let currentRoute='';
function register(id,fn){_routes[id]=fn;}
function navigate(id,push=true){
  if(!_routes[id])return;
  currentRoute=id;destroyCharts();hideBulkBar();closeSearch();
  const el=document.getElementById('content');
  el.innerHTML=_routes[id]();
  bindPage(id);updateSidebarActive(id);
  if(push)history.pushState({id},'','#'+id);
  el.focus();
}
window.addEventListener('popstate',e=>{if(e.state?.id)navigate(e.state.id,false);});

// ── ICONS ────────────────────────────────────────────────────
const IC={
  home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  orders:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  products:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  customers:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  content:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  analytics:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  marketing:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  discounts:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  store:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  apps:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  pos:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  settings:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  chevron:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  search:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  bell:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  help:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  menu:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  plus:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  star:`<svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  mail:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  trendUp:`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  trendDn:`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
  truck:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
};

// ── UI HELPERS ───────────────────────────────────────────────
function badge(s){const m={paid:'success',active:'success',published:'success',fulfilled:'success',installed:'success',live:'success',enabled:'success',visible:'success',recovered:'success',pending:'warning',draft:'warning',scheduled:'warning',paused:'warning',open:'warning',unfulfilled:'danger',inactive:'danger',expired:'danger',hidden:'neutral',returned:'info',refunded:'info',closed:'neutral',medium:'warning',high:'danger',low:'success'};return `<span class="badge badge-${m[s]||'neutral'}">${s}</span>`;}
function initials(n){return(n||'').split(' ').map(w=>w[0]||'').join('').slice(0,2).toUpperCase();}
function stars(n){return Array.from({length:5},(_,i)=>i<Math.round(n)?IC.star:`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('');}
function ptabs(active='30d'){return['1d','7d','30d','90d','1y'].map(p=>`<button class="ptab ${p===active?'active':''}" data-period="${p}">${{'1d':'Today','7d':'Last 7 days','30d':'Last 30 days','90d':'Last 90 days','1y':'Last year'}[p]}</button>`).join('');}
function setTab(btn){btn.closest('.filter-tabs')?.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');}

// ── TOAST ────────────────────────────────────────────────────
function toast(msg,type='success',dur=3500){const s=document.getElementById('toast-stack');const el=document.createElement('div');el.className=`toast ${type}`;el.innerHTML=`<span style="font-size:15px">${{success:'✓',error:'✕',info:'ℹ',neutral:'·'}[type]||'·'}</span><span>${msg}</span>`;s.appendChild(el);setTimeout(()=>{el.style.opacity='0';el.style.transition='opacity .3s';setTimeout(()=>el.remove(),300);},dur);}

// ── MODAL / DRAWER ───────────────────────────────────────────
function openModal(h){const ml=document.getElementById('modal-layer');ml.innerHTML=h;ml.classList.add('active');ml.setAttribute('aria-hidden','false');}
function closeModal(){const ml=document.getElementById('modal-layer');ml.classList.remove('active');ml.setAttribute('aria-hidden','true');}
function openDrawer(h){const d=document.getElementById('drawer');d.innerHTML=h;d.classList.add('active');d.setAttribute('aria-hidden','false');const ov=document.getElementById('overlay');ov.removeAttribute('hidden');ov.onclick=closeDrawer;}
function closeDrawer(){document.getElementById('drawer').classList.remove('active');document.getElementById('overlay').setAttribute('hidden','');}

// ── BULK BAR ─────────────────────────────────────────────────
const _sel=new Set();
function toggleRow(id,checked){checked?_sel.add(id):_sel.delete(id);updateBulkBar();}
function toggleAllRows(checked,ids){ids.forEach(id=>checked?_sel.add(id):_sel.delete(id));document.querySelectorAll('.row-cb').forEach(c=>c.checked=checked);updateBulkBar();}
function updateBulkBar(){const bar=document.getElementById('bulk-bar');if(!_sel.size){bar.setAttribute('hidden','');return;}bar.removeAttribute('hidden');bar.innerHTML=`<span class="bulk-count">${_sel.size} selected</span><div class="bulk-divider"></div><div class="bulk-actions"><button class="bulk-btn" onclick="toast('Archived','neutral')">Archive</button><button class="bulk-btn" onclick="toast('Labels printed','neutral')">Print labels</button><button class="bulk-btn" style="color:#fedad5" onclick="toast('Deleted','error');_sel.clear();updateBulkBar()">Delete</button></div><button class="bulk-close" onclick="_sel.clear();document.querySelectorAll('.row-cb').forEach(c=>c.checked=false);updateBulkBar()">${IC.x}</button>`;}
function hideBulkBar(){_sel.clear();document.getElementById('bulk-bar').setAttribute('hidden','');}

// ── SEARCH ───────────────────────────────────────────────────
function openSearch(){const el=document.getElementById('search-overlay');el.removeAttribute('hidden');el.innerHTML=`<div class="search-box"><div class="search-input-wrap">${IC.search}<input id="srch-in" placeholder="Search orders, products, customers…" oninput="liveSearch(this.value)" /><kbd style="font-size:12px;color:#8c9196;cursor:pointer" onclick="closeSearch()">Esc</kbd></div><div class="search-results" id="srch-res"><div class="search-empty">Type to search your store</div></div></div>`;el.onclick=e=>{if(e.target===el)closeSearch();};setTimeout(()=>document.getElementById('srch-in')?.focus(),30);}
function closeSearch(){document.getElementById('search-overlay').setAttribute('hidden','');}
function liveSearch(q){const el=document.getElementById('srch-res');if(!q.trim()){el.innerHTML='<div class="search-empty">Type to search your store</div>';return;}const ql=q.toLowerCase();const o=DATA.orders.filter(x=>x.id.toLowerCase().includes(ql)||x.customer.toLowerCase().includes(ql)).slice(0,3);const p=DATA.products.filter(x=>x.name.toLowerCase().includes(ql)||x.sku.toLowerCase().includes(ql)).slice(0,3);const c=DATA.customers.filter(x=>x.name.toLowerCase().includes(ql)||x.email.toLowerCase().includes(ql)).slice(0,3);let h='';if(o.length)h+=`<div class="search-group"><div class="search-group-label">Orders</div>${o.map(x=>`<div class="search-item" onclick="closeSearch();navigate('orders')">${IC.orders}<div><div class="search-item-label">${x.id} — ${x.customer}</div><div class="search-item-sub">${x.date} · ${x.total}</div></div></div>`).join('')}</div>`;if(p.length)h+=`<div class="search-group"><div class="search-group-label">Products</div>${p.map(x=>`<div class="search-item" onclick="closeSearch();navigate('products')">${IC.products}<div><div class="search-item-label">${x.image} ${x.name}</div><div class="search-item-sub">${x.sku} · ${x.price}</div></div></div>`).join('')}</div>`;if(c.length)h+=`<div class="search-group"><div class="search-group-label">Customers</div>${c.map(x=>`<div class="search-item" onclick="closeSearch();navigate('customers')">${IC.customers}<div><div class="search-item-label">${x.name}</div><div class="search-item-sub">${x.email}</div></div></div>`).join('')}</div>`;el.innerHTML=h||'<div class="search-empty">No results found</div>';}

// ── SIDEBAR ──────────────────────────────────────────────────
const NAV=[
  {id:'dashboard',icon:'home',label:'Home'},
  {id:'orders',icon:'orders',label:'Orders',children:[{id:'orders',label:'All orders'},{id:'draft-orders',label:'Drafts'},{id:'abandoned-checkouts',label:'Abandoned checkouts'},{id:'returns',label:'Returns'}]},
  {id:'products',icon:'products',label:'Products',children:[{id:'products',label:'All products'},{id:'inventory',label:'Inventory'},{id:'purchase-orders',label:'Purchase orders'},{id:'collections',label:'Collections'},{id:'gift-cards',label:'Gift cards'}]},
  {id:'customers',icon:'customers',label:'Customers',children:[{id:'customers',label:'All customers'},{id:'customer-segments',label:'Segments'}]},
  {id:'content',icon:'content',label:'Content'},
  {id:'analytics',icon:'analytics',label:'Analytics',children:[{id:'analytics',label:'Overview'},{id:'reports',label:'Reports'},{id:'live-view',label:'Live view'}]},
  {id:'marketing',icon:'marketing',label:'Marketing',children:[{id:'marketing',label:'Campaigns'},{id:'automations',label:'Automations'}]},
  {id:'discounts',icon:'discounts',label:'Discounts'},
  {divider:true},
  {id:'online-store',icon:'store',label:'Online Store',children:[{id:'online-store',label:'Themes'},{id:'blog',label:'Blog posts'},{id:'pages',label:'Pages'},{id:'navigation',label:'Navigation'},{id:'preferences',label:'Preferences'}]},
  {id:'apps',icon:'apps',label:'Apps'},
  {id:'pos',icon:'pos',label:'Point of Sale'},
  {divider:true},
  {id:'staff',icon:'customers',label:'Staff'},
  {id:'settings',icon:'settings',label:'Settings'}
];
function renderSidebar(){
  const sb=document.getElementById('sidebar');
  const nh=NAV.map(item=>{
    if(item.divider)return`<div class="nav-section-divider"></div>`;
    const isActive=item.id===currentRoute||(item.children&&item.children.some(c=>c.id===currentRoute));
    if(item.children)return`<div class="nav-section ${isActive?'open':''}" id="nsg-${item.id}"><button class="nav-parent" onclick="toggleNavGroup('${item.id}')"><span class="nav-parent-icon">${IC[item.icon]||''}</span>${item.label}<span class="nav-chevron">${IC.chevron}</span></button><div class="nav-children">${item.children.map(c=>`<button class="nav-child ${c.id===currentRoute?'active':''}" onclick="navigate('${c.id}')">${c.label}</button>`).join('')}</div></div>`;
    return`<div class="nav-section"><button class="nav-parent ${item.id===currentRoute?'active':''}" onclick="navigate('${item.id}')"><span class="nav-parent-icon">${IC[item.icon]||''}</span>${item.label}</button></div>`;
  }).join('');
  sb.innerHTML=`<div class="sidebar-header"><div class="sidebar-logo"><svg width="16" height="16" viewBox="0 0 32 32" fill="white"><path d="M21.5 3.5c-.4-.4-1-.6-1.6-.4l-2 .5c-.4-1-1.3-1.8-2.4-1.8s-2 .7-2.4 1.7l-1-.3c-.7-.2-1.4.1-1.7.7L7 15.5s4.3 1.3 6.5 1.3c2.2 0 6.8-1.3 6.8-1.3l-3-9.1.4-.1c.8-.3 1.3-1.1 1.1-2.3z"/><path d="M11 13c0 2.8 2.2 5 5 5s5-2.2 5-5"/><path d="M7 17l1.3 13h15.4L25 17"/></svg></div><div><div class="sidebar-store-name">${DATA.store.name}</div><div class="sidebar-store-plan">${DATA.store.plan}</div></div></div><button class="sidebar-search-btn" onclick="openSearch()">${IC.search} Search<span class="sidebar-search-shortcut">⌘K</span></button><nav class="sidebar-nav">${nh}</nav>`;
}
function toggleNavGroup(id){const el=document.getElementById('nsg-'+id);if(el)el.classList.toggle('open');}
function updateSidebarActive(id){document.querySelectorAll('.nav-parent,.nav-child').forEach(el=>el.classList.remove('active'));const child=document.querySelector(`.nav-child[onclick="navigate('${id}')"]`);if(child){child.classList.add('active');child.closest('.nav-section')?.classList.add('open');}else{const p=document.querySelector(`.nav-parent[onclick="navigate('${id}')"]`);if(p)p.classList.add('active');}}

// ── TOPBAR ───────────────────────────────────────────────────
function renderTopbar(){document.getElementById('topbar').innerHTML=`<button class="topbar-mobile-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')">${IC.menu}</button><div class="topbar-search"><button class="topbar-search-btn" onclick="openSearch()"><span class="topbar-search-icon">${IC.search}</span>Search Shopify<span class="topbar-search-shortcut">⌘K</span></button></div><div class="topbar-right"><button class="topbar-icon-btn" onclick="toggleNotif(this)">${IC.bell}<span class="topbar-badge"></span></button><button class="topbar-icon-btn" onclick="showShortcuts()">${IC.help}</button><button class="topbar-avatar">A</button></div>`;}
function toggleNotif(btn){document.querySelector('.notif-panel')?.remove();const p=document.createElement('div');p.className='notif-panel';p.style.cssText='position:fixed;top:60px;right:16px;width:340px;background:#fff;border:1px solid #e1e3e5;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);z-index:200;';p.innerHTML=`<div style="padding:14px 16px;border-bottom:1px solid #e1e3e5;font-weight:600;display:flex;justify-content:space-between;align-items:center">Notifications<button onclick="this.closest('.notif-panel').remove()" style="background:none;border:none;cursor:pointer;color:#6d7175">${IC.x}</button></div>${DATA.notifications.map(n=>`<div style="padding:12px 16px;border-bottom:1px solid #f0f0f0;display:flex;gap:10px"><span style="font-size:18px">${{order:'📦',warning:'⚠️',error:'❌',review:'⭐'}[n.type]||'•'}</span><div><div style="font-size:13.5px">${n.text}</div><div style="font-size:12px;color:#8c9196;margin-top:2px">${n.time}</div></div></div>`).join('')}`;document.body.appendChild(p);setTimeout(()=>document.addEventListener('click',function _(e){if(!p.contains(e.target)&&e.target!==btn){p.remove();document.removeEventListener('click',_);}},100));}
function showShortcuts(){openModal(`<div class="modal"><div class="modal-header"><span class="modal-title">Keyboard shortcuts</span><button class="modal-close" onclick="closeModal()">${IC.x}</button></div><div class="modal-body"><div style="display:grid;gap:6px">${[['H','Home'],['O','Orders'],['P','Products'],['C','Customers'],['A','Analytics'],['D','Discounts'],['S','Settings'],['?','Shortcuts'],['⌘K','Search'],['Esc','Close']].map(([k,v])=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:13.5px"><span style="color:#6d7175">${v}</span><kbd style="background:#f6f6f7;border:1px solid #e1e3e5;border-radius:4px;padding:2px 8px;font-size:12px">${k}</kbd></div>`).join('')}</div></div></div>`);}

// ════════════════════════════════════════════════════════════
// PAGES — Part 1 placeholder, append parts 2-4 below
// ════════════════════════════════════════════════════════════
// ── PAGE: DASHBOARD ─────────────────────────────────────────
register('dashboard',()=>{
  const k=DATA.kpis;
  return`<div class="page-hd"><div class="page-hd-left"><h1>${DATA.store.name}</h1><p>Here's what's happening in your store today.</p></div><div class="page-hd-actions"><div class="period-tabs" id="dash-periods">${ptabs('30d')}</div><button class="btn btn-secondary" onclick="navigate('analytics')">View report</button></div></div>
<div class="kpi-grid">${k.map(x=>`<div class="kpi-card"><div class="kpi-label">${x.label}</div><div class="kpi-value">${x.value}</div><span class="kpi-delta ${x.up?'up':'down'}">${x.up?IC.trendUp:IC.trendDn} ${x.delta}</span><div class="kpi-sub">${x.sub}</div></div>`).join('')}</div>
<div class="grid-2-wide" style="margin-bottom:20px">
  <div class="card"><div class="card-header"><h2>Total sales</h2><button class="btn btn-plain btn-sm" onclick="navigate('analytics')">View report</button></div><div class="chart-wrap" style="height:260px"><canvas id="dashSalesChart"></canvas></div></div>
  <div class="card"><div class="card-header"><h2>Sessions by device</h2></div><div class="chart-wrap" style="height:260px"><canvas id="dashDeviceChart"></canvas></div></div>
</div>
<div class="grid-2">
  <div class="card"><div class="card-header"><h2>Top products by units sold</h2><button class="btn btn-plain btn-sm" onclick="navigate('products')">View all</button></div><div class="card-body" style="padding:0">
    <table><thead><tr><th>Product</th><th>Units sold</th><th>Revenue</th></tr></thead><tbody>
      ${[{n:'Organic Cotton Tee',img:'👕',units:284,rev:'$9,940'},{n:'Natural Soap Bar',img:'🧼',units:212,rev:'$2,544'},{n:'Bamboo Water Bottle',img:'🍶',units:148,rev:'$4,144'},{n:'Eco Yoga Mat',img:'🧘',units:97,rev:'$7,663'},{n:'Recycled Snapback',img:'🧢',units:76,rev:'$3,420'}].map(p=>`<tr><td><div class="cell-product"><div class="cell-thumb">${p.img}</div><span>${p.n}</span></div></td><td>${p.units}</td><td>${p.rev}</td></tr>`).join('')}
    </tbody></table>
  </div></div>
  <div class="card"><div class="card-header"><h2>Recent activity</h2></div><div class="card-body">
    <div class="item-list">${DATA.activityLog.map(a=>`<div class="item-row"><div class="avatar" style="width:32px;height:32px;font-size:11px">${initials(a.user)}</div><div class="item-info"><div class="item-name">${a.action}</div><div class="item-sub">${a.user} · ${a.date}</div></div></div>`).join('')}</div>
  </div></div>
</div>`;
});

// ── PAGE: ORDERS ─────────────────────────────────────────────
register('orders',()=>{
  const ids=DATA.orders.map(o=>o.id);
  return`<div class="page-hd"><div class="page-hd-left"><h1>Orders</h1></div><div class="page-hd-actions"><button class="btn btn-secondary" onclick="toast('Export started','neutral')">${IC.mail} Export</button><button class="btn btn-primary" onclick="openCreateOrderModal()">${IC.plus} Create order</button></div></div>
<div class="table-card">
  <div class="filter-tabs"><button class="ftab active" onclick="setTab(this)">All <span class="ftab-count">8</span></button><button class="ftab" onclick="setTab(this)">Open <span class="ftab-count">3</span></button><button class="ftab" onclick="setTab(this)">Unfulfilled <span class="ftab-count">3</span></button><button class="ftab" onclick="setTab(this)">Unpaid <span class="ftab-count">2</span></button><button class="ftab" onclick="setTab(this)">Closed</button></div>
  <div class="toolbar"><div class="toolbar-search"><span class="toolbar-search-icon">${IC.search}</span><input placeholder="Search orders" oninput="filterOrders(this.value)" /></div><select onchange="filterOrders()" id="ord-status"><option>All</option><option>Paid</option><option>Pending</option></select><select onchange="filterOrders()" id="ord-fulfill"><option>All</option><option>Fulfilled</option><option>Unfulfilled</option></select></div>
  <div class="table-wrap"><table><thead><tr><th><input type="checkbox" class="cb" onchange="toggleAllRows(this.checked,${JSON.stringify(ids)})" /></th><th>Order</th><th>Date</th><th>Customer</th><th>Channel</th><th>Total</th><th>Payment</th><th>Fulfillment</th><th>Items</th></tr></thead>
  <tbody id="orders-tbody">${DATA.orders.map(o=>`<tr onclick="openOrderDrawer('${o.id}')"><td onclick="event.stopPropagation()"><input type="checkbox" class="cb row-cb" onchange="toggleRow('${o.id}',this.checked)" /></td><td><span class="td-link">${o.id}</span>${o.risk==='high'?` <span class="badge badge-danger" style="font-size:10px">Risk</span>`:''}</td><td class="td-muted">${o.date}</td><td>${o.customer}</td><td class="td-muted">${o.channel}</td><td>${o.total}</td><td>${badge(o.payment)}</td><td>${badge(o.fulfillment)}</td><td class="td-muted">${o.items}</td></tr>`).join('')}</tbody></table></div>
  <div class="pagination"><span class="td-muted">Showing 8 orders</span><div class="pagination-btns"><button class="page-btn" disabled>Previous</button><button class="page-btn active">1</button><button class="page-btn">Next</button></div></div>
</div>`;
});
function filterOrders(q=''){const rows=document.querySelectorAll('#orders-tbody tr');rows.forEach(r=>{const txt=r.textContent.toLowerCase();r.style.display=txt.includes(q.toLowerCase())?'':'none';});}
function openCreateOrderModal(){openModal(`<div class="modal"><div class="modal-header"><span class="modal-title">Create order</span><button class="modal-close" onclick="closeModal()">${IC.x}</button></div><div class="modal-body"><div class="banner banner-info"><div class="banner-content"><div class="banner-title">Draft order</div>Add products and a customer to create a new order.</div></div><div class="form-group"><label class="form-label">Customer</label><input class="form-control" placeholder="Search customers…" /></div><div class="form-group"><label class="form-label">Products</label><input class="form-control" placeholder="Search products…" /></div><div class="form-group"><label class="form-label">Discount code</label><input class="form-control" placeholder="Enter discount code" /></div></div><div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();toast('Draft order created')">Create order</button></div></div>`);}
function openOrderDrawer(id){
  const o=DATA.orders.find(x=>x.id===id);if(!o)return;
  openDrawer(`<div class="drawer-header"><span class="drawer-title">${o.id}</span><button class="modal-close" onclick="closeDrawer()">${IC.x}</button></div>
  <div class="drawer-body">
    <div class="drawer-section"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">${badge(o.payment)} ${badge(o.fulfillment)}</div><div class="td-muted" style="font-size:13px">${o.date} · ${o.channel}</div></div>
    <div class="drawer-section"><h3>Customer</h3><div style="display:flex;align-items:center;gap:10px"><div class="avatar">${initials(o.customer)}</div><div><div style="font-weight:500">${o.customer}</div><div class="td-muted" style="font-size:12px">${o.email}</div></div></div></div>
    <div class="drawer-section"><h3>Items</h3><div class="kv-list"><div class="kv-row"><span class="kv-key">${o.items} item${o.items>1?'s':''}</span><span class="kv-val">${o.total}</span></div><div class="kv-row"><span class="kv-key">Shipping</span><span class="kv-val">$5.00</span></div><div class="kv-row"><span class="kv-key">Tax</span><span class="kv-val">$8.20</span></div><div class="kv-row"><span class="kv-key" style="font-weight:600">Total</span><span class="kv-val" style="font-weight:600">${o.total}</span></div></div></div>
    <div class="drawer-section"><h3>Timeline</h3><div class="timeline">${o.timeline.map(t=>`<div class="timeline-item"><div class="timeline-dot ${t.done?'filled':''}"></div><div class="timeline-text" style="color:${t.done?'var(--text)':'var(--text-3)'}">${t.e}</div><div class="timeline-time">${t.t}</div></div>`).join('')}</div></div>
    ${o.risk==='high'?`<div class="drawer-section"><h3>Risk assessment</h3><div class="banner banner-danger"><div class="banner-content"><div class="banner-title">High risk order</div>This order has been flagged for review. Verify the customer before fulfilling.</div></div></div>`:''}
  </div>
  <div class="drawer-footer"><button class="btn btn-secondary" onclick="toast('Refund initiated','info')">Refund</button><button class="btn btn-primary" onclick="closeDrawer();toast('Order marked as fulfilled')">${IC.truck} Mark as fulfilled</button></div>`);
}

// ── PAGE: DRAFT ORDERS ───────────────────────────────────────
register('draft-orders',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Drafts</h1><p>Draft orders are saved orders that have not been placed yet.</p></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="openCreateOrderModal()">${IC.plus} Create draft order</button></div></div>
<div class="table-card"><div class="table-wrap"><table><thead><tr><th>#</th><th>Customer</th><th>Date</th><th>Items</th><th>Total</th><th>Actions</th></tr></thead><tbody>${DATA.draftOrders.map(d=>`<tr><td><span class="td-link">${d.id}</span></td><td>${d.customer}</td><td class="td-muted">${d.date}</td><td class="td-muted">${d.items}</td><td>${d.total}</td><td class="td-actions"><button class="btn btn-secondary btn-sm" onclick="toast('Order completed')">Complete</button><button class="btn btn-plain btn-sm" onclick="toast('Draft deleted','error')">${IC.trash}</button></td></tr>`).join('')}</tbody></table></div></div>`);

// ── PAGE: ABANDONED CHECKOUTS ────────────────────────────────
register('abandoned-checkouts',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Abandoned checkouts</h1><p>Customers who added items to their cart but didn't complete checkout.</p></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('Recovery emails sent')">Send recovery emails</button></div></div>
<div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px"><div class="kpi-card"><div class="kpi-label">Recovery rate</div><div class="kpi-value">33.3%</div><div class="kpi-sub">2 of 6 recovered</div></div><div class="kpi-card"><div class="kpi-label">Recovered revenue</div><div class="kpi-value">$360.00</div><div class="kpi-sub">This period</div></div><div class="kpi-card"><div class="kpi-label">Avg cart value</div><div class="kpi-value">$125.50</div><div class="kpi-sub">Across all carts</div></div></div>
<div class="table-card"><div class="table-wrap"><table><thead><tr><th>Date</th><th>Customer</th><th>Email</th><th>Cart</th><th>Stage reached</th><th>Total</th><th>Status</th><th>Action</th></tr></thead><tbody>${DATA.abandonedCheckouts.map(a=>`<tr><td class="td-muted">${a.date}</td><td>${a.customer}</td><td class="td-muted">${a.email}</td><td class="td-muted">${a.cart}</td><td class="td-muted">${a.stage}</td><td>${a.total}</td><td>${badge(a.recovered?'recovered':'pending')}</td><td><button class="btn btn-secondary btn-xs" onclick="toast('Recovery email sent')">${IC.mail} Email</button></td></tr>`).join('')}</tbody></table></div></div>`);

// ── PAGE: RETURNS ─────────────────────────────────────────────
register('returns',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Returns</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('New return modal coming soon','neutral')">${IC.plus} New return</button></div></div>
<div class="table-card">
  <div class="filter-tabs"><button class="ftab active" onclick="setTab(this)">All</button><button class="ftab" onclick="setTab(this)">Pending <span class="ftab-count">1</span></button><button class="ftab" onclick="setTab(this)">Returned <span class="ftab-count">2</span></button><button class="ftab" onclick="setTab(this)">Refunded <span class="ftab-count">2</span></button></div>
  <div class="table-wrap"><table><thead><tr><th>Return</th><th>Order</th><th>Date</th><th>Customer</th><th>Items</th><th>Reason</th><th>Refund</th><th>Status</th></tr></thead><tbody>${DATA.returns.map(r=>`<tr><td><span class="td-link">${r.id}</span></td><td><span class="td-link" onclick="openOrderDrawer('${r.order}')">${r.order}</span></td><td class="td-muted">${r.date}</td><td>${r.customer}</td><td class="td-muted">${r.items}</td><td class="td-muted">${r.reason}</td><td>${r.refund}</td><td>${badge(r.status)}</td></tr>`).join('')}</tbody></table></div>
</div>`);

// ── PAGE: PRODUCTS ────────────────────────────────────────────
register('products',()=>{
  const ids=DATA.products.map(p=>p.id);
  return`<div class="page-hd"><div class="page-hd-left"><h1>Products</h1></div><div class="page-hd-actions"><button class="btn btn-secondary" onclick="toast('Import started','neutral')">${IC.plus} Import</button><button class="btn btn-secondary" onclick="toast('Export started','neutral')">Export</button><button class="btn btn-primary" onclick="openProductModal(null)">${IC.plus} Add product</button></div></div>
<div class="table-card">
  <div class="filter-tabs"><button class="ftab active" onclick="setTab(this)">All <span class="ftab-count">${DATA.products.length}</span></button><button class="ftab" onclick="setTab(this)">Active <span class="ftab-count">7</span></button><button class="ftab" onclick="setTab(this)">Draft <span class="ftab-count">1</span></button><button class="ftab" onclick="setTab(this)">Archived</button></div>
  <div class="toolbar"><div class="toolbar-search"><span class="toolbar-search-icon">${IC.search}</span><input placeholder="Search products" oninput="filterProds(this.value)" /></div><select><option>All vendors</option><option>EcoWear</option><option>GreenLife</option><option>FlexFit</option></select><select><option>All types</option><option>Apparel</option><option>Accessories</option><option>Beauty</option></select></div>
  <div class="table-wrap"><table><thead><tr><th><input type="checkbox" class="cb" onchange="toggleAllRows(this.checked,${JSON.stringify(ids)})" /></th><th>Product</th><th>Status</th><th>Inventory</th><th>Category</th><th>Vendor</th><th>Price</th></tr></thead>
  <tbody id="prods-tbody">${DATA.products.map(p=>`<tr onclick="openProductModal('${p.id}')"><td onclick="event.stopPropagation()"><input type="checkbox" class="cb row-cb" onchange="toggleRow('${p.id}',this.checked)" /></td><td><div class="cell-product"><div class="cell-thumb">${p.image}</div><div><div class="cell-product-name">${p.name}</div><div class="cell-product-sub">${p.variants} variant${p.variants>1?'s':''} · ${p.sku}</div></div></div></td><td>${badge(p.status)}</td><td>${p.inventory===0?`<span class="badge badge-danger">Out of stock</span>`:p.inventory<25?`<span class="badge badge-warning">${p.inventory} in stock</span>`:`${p.inventory} in stock`}</td><td class="td-muted">${p.category}</td><td class="td-muted">${p.vendor}</td><td>${p.price}</td></tr>`).join('')}</tbody></table></div>
  <div class="pagination"><span class="td-muted">Showing ${DATA.products.length} products</span><div class="pagination-btns"><button class="page-btn" disabled>Previous</button><button class="page-btn active">1</button><button class="page-btn">Next</button></div></div>
</div>`;
});
function filterProds(q){document.querySelectorAll('#prods-tbody tr').forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(q.toLowerCase())?'':'none';});}
function openProductModal(id){
  const p=id?DATA.products.find(x=>x.id===id):null;
  openModal(`<div class="modal" style="max-width:700px"><div class="modal-header"><span class="modal-title">${p?'Edit product':'Add product'}</span><button class="modal-close" onclick="closeModal()">${IC.x}</button></div><div class="modal-body"><div class="field-row"><div class="form-group" style="grid-column:1/-1"><label class="form-label">Title</label><input class="form-control" value="${p?p.name:''}" placeholder="Short sleeve t-shirt" /></div></div><div class="form-group"><label class="form-label">Description</label><textarea class="form-control" style="min-height:120px" placeholder="Describe the product…">${p?`High-quality ${p.name} made from sustainable materials.`:''}</textarea></div><div class="field-row"><div class="form-group"><label class="form-label">Price</label><input class="form-control" value="${p?p.price:''}" placeholder="$0.00" /></div><div class="form-group"><label class="form-label">SKU</label><input class="form-control" value="${p?p.sku:''}" /></div></div><div class="field-row"><div class="form-group"><label class="form-label">Category</label><select class="form-control form-select"><option>${p?p.category:'Select category'}</option><option>Apparel</option><option>Accessories</option><option>Beauty</option><option>Sports</option></select></div><div class="form-group"><label class="form-label">Vendor</label><input class="form-control" value="${p?p.vendor:''}" /></div></div></div><div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button>${p?`<button class="btn btn-danger" onclick="closeModal();toast('Product deleted','error')">Delete</button>`:''}<button class="btn btn-primary" onclick="closeModal();toast('${p?'Product saved':'Product created'}')">${p?'Save changes':'Add product'}</button></div></div>`);
}

// ── PAGE: INVENTORY ───────────────────────────────────────────
register('inventory',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Inventory</h1><p>Main Warehouse</p></div><div class="page-hd-actions"><button class="btn btn-secondary" onclick="toast('Export started','neutral')">Export</button></div></div>
<div class="banner banner-warning"><div>${IC.plus}</div><div class="banner-content"><div class="banner-title">2 products are out of stock</div>Restock Hemp Tote Bag and Beeswax Candle Set to continue selling.</div><button class="btn btn-secondary btn-sm" onclick="toast('Reorder sent')">Reorder</button></div>
<div class="table-card"><div class="toolbar"><div class="toolbar-search"><span class="toolbar-search-icon">${IC.search}</span><input placeholder="Search inventory" /></div></div>
<div class="table-wrap"><table><thead><tr><th>Product</th><th>SKU</th><th>On hand</th><th>Committed</th><th>Available</th><th>Incoming</th></tr></thead><tbody>${DATA.inventory.map(i=>`<tr><td>${i.product}</td><td class="td-muted">${i.sku}</td><td style="color:${i.onHand===0?'var(--danger)':i.onHand<25?'var(--warning-text)':'inherit'}">${i.onHand}</td><td class="td-muted">${i.committed}</td><td style="font-weight:500">${i.available}</td><td class="td-muted">${i.incoming>0?`+${i.incoming}`:'—'}</td></tr>`).join('')}</tbody></table></div></div>`);

// ── PAGE: PURCHASE ORDERS ─────────────────────────────────────
register('purchase-orders',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Purchase orders</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('PO created','neutral')">${IC.plus} Create purchase order</button></div></div>
<div class="table-card">
  <div class="filter-tabs"><button class="ftab active" onclick="setTab(this)">All</button><button class="ftab" onclick="setTab(this)">Open <span class="ftab-count">2</span></button><button class="ftab" onclick="setTab(this)">Closed <span class="ftab-count">2</span></button></div>
  <div class="table-wrap"><table><thead><tr><th>PO number</th><th>Supplier</th><th>Created</th><th>Est. arrival</th><th>Total</th><th>Status</th><th></th></tr></thead><tbody>${DATA.purchaseOrders.map(po=>`<tr><td><span class="td-link">${po.id}</span></td><td>${po.supplier}</td><td class="td-muted">${po.created}</td><td class="td-muted">${po.arrival}</td><td>${po.total}</td><td>${badge(po.status)}</td><td><button class="btn btn-secondary btn-xs" onclick="toast('Inventory received')">Receive</button></td></tr>`).join('')}</tbody></table></div>
</div>`);

// ── PAGE: COLLECTIONS ─────────────────────────────────────────
register('collections',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Collections</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('Collection editor coming soon','neutral')">${IC.plus} Create collection</button></div></div>
<div class="table-card"><div class="table-wrap"><table><thead><tr><th>Title</th><th>Products</th><th>Type</th><th>Updated</th><th></th></tr></thead><tbody>${DATA.collections.map(c=>`<tr><td><div class="cell-product"><div class="cell-thumb">${c.image}</div><span style="font-weight:500">${c.name}</span></div></td><td class="td-muted">${c.products} products</td><td>${badge(c.type==='Smart'?'active':'draft')}</td><td class="td-muted">${c.updated}</td><td><button class="btn btn-plain btn-sm" onclick="toast('Edit mode')">${IC.edit}</button></td></tr>`).join('')}</tbody></table></div></div>`);

// ── PAGE: GIFT CARDS ──────────────────────────────────────────
register('gift-cards',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Gift cards</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('Issue gift card modal','neutral')">${IC.plus} Issue gift card</button></div></div>
<div class="table-card">
  <div class="filter-tabs"><button class="ftab active" onclick="setTab(this)">All</button><button class="ftab" onclick="setTab(this)">Active <span class="ftab-count">3</span></button><button class="ftab" onclick="setTab(this)">Expired <span class="ftab-count">1</span></button></div>
  <div class="table-wrap"><table><thead><tr><th>Code</th><th>Initial value</th><th>Balance</th><th>Issued to</th><th>Expires</th><th>Status</th></tr></thead><tbody>${DATA.giftCards.map(g=>`<tr><td><span class="td-link" style="font-family:monospace">${g.code}</span></td><td>${g.value}</td><td style="font-weight:500">${g.balance}</td><td class="td-muted">${g.issuedTo}</td><td class="td-muted">${g.expires}</td><td>${badge(g.status)}</td></tr>`).join('')}</tbody></table></div>
</div>`);

// ── PAGE: CUSTOMERS ───────────────────────────────────────────
register('customers',()=>{
  const ids=DATA.customers.map(c=>c.id);
  return`<div class="page-hd"><div class="page-hd-left"><h1>Customers</h1></div><div class="page-hd-actions"><button class="btn btn-secondary" onclick="navigate('customer-segments')">Segments</button><button class="btn btn-secondary" onclick="toast('Export started','neutral')">Export</button><button class="btn btn-primary" onclick="toast('Add customer modal','neutral')">${IC.plus} Add customer</button></div></div>
<div class="table-card">
  <div class="toolbar"><div class="toolbar-search"><span class="toolbar-search-icon">${IC.search}</span><input placeholder="Search customers" oninput="filterCusts(this.value)" /></div></div>
  <div class="table-wrap"><table><thead><tr><th><input type="checkbox" class="cb" onchange="toggleAllRows(this.checked,${JSON.stringify(ids)})" /></th><th>Customer</th><th>Location</th><th>Orders</th><th>Amount spent</th><th>Email</th><th>Status</th></tr></thead>
  <tbody id="custs-tbody">${DATA.customers.map(c=>`<tr onclick="openCustomerDrawer('${c.id}')"><td onclick="event.stopPropagation()"><input type="checkbox" class="cb row-cb" onchange="toggleRow('${c.id}',this.checked)" /></td><td><div class="cell-product"><div class="avatar" style="width:32px;height:32px;font-size:11px">${initials(c.name)}</div><div><div class="cell-product-name">${c.name}</div><div class="cell-product-sub">${c.email}</div></div></div></td><td class="td-muted">${c.location}</td><td>${c.orders}</td><td style="font-weight:500">${c.spent}</td><td>${c.subscribed?`<span class="badge badge-success">Subscribed</span>`:`<span class="badge badge-neutral">Not subscribed</span>`}</td><td>${badge(c.status)}</td></tr>`).join('')}</tbody></table></div>
  <div class="pagination"><span class="td-muted">Showing ${DATA.customers.length} customers</span><div class="pagination-btns"><button class="page-btn" disabled>Previous</button><button class="page-btn active">1</button><button class="page-btn">Next</button></div></div>
</div>`;
});
function filterCusts(q){document.querySelectorAll('#custs-tbody tr').forEach(r=>{r.style.display=r.textContent.toLowerCase().includes(q.toLowerCase())?'':'none';});}
function openCustomerDrawer(id){
  const c=DATA.customers.find(x=>x.id===id);if(!c)return;
  openDrawer(`<div class="drawer-header"><span class="drawer-title">${c.name}</span><button class="modal-close" onclick="closeDrawer()">${IC.x}</button></div>
  <div class="drawer-body">
    <div class="drawer-section" style="text-align:center;padding-top:24px"><div class="avatar avatar-lg" style="margin:0 auto 12px">${initials(c.name)}</div><div style="font-weight:600;font-size:16px">${c.name}</div><div class="td-muted" style="font-size:13px">${c.email}</div><div style="margin-top:8px;display:flex;gap:6px;justify-content:center;flex-wrap:wrap">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>
    <div class="drawer-section"><div class="kv-list"><div class="kv-row"><span class="kv-key">Location</span><span class="kv-val">${c.location}</span></div><div class="kv-row"><span class="kv-key">Customer since</span><span class="kv-val">${c.joined}</span></div><div class="kv-row"><span class="kv-key">Orders</span><span class="kv-val">${c.orders}</span></div><div class="kv-row"><span class="kv-key">Total spent</span><span class="kv-val" style="font-weight:600">${c.spent}</span></div><div class="kv-row"><span class="kv-key">Email marketing</span><span class="kv-val">${c.subscribed?badge('active'):badge('inactive')}</span></div></div></div>
    <div class="drawer-section"><h3>Recent orders</h3>${DATA.orders.filter(o=>o.customer===c.name).map(o=>`<div class="item-row"><div class="item-info"><div class="item-name td-link">${o.id}</div><div class="item-sub">${o.date}</div></div><div><div class="item-value">${o.total}</div><div class="item-value-sub">${badge(o.fulfillment)}</div></div></div>`).join('')||'<div class="td-muted" style="font-size:13px">No recent orders</div>'}</div>
  </div>
  <div class="drawer-footer"><button class="btn btn-secondary" onclick="toast('Email sent')">${IC.mail} Send email</button><button class="btn btn-danger" onclick="closeDrawer();toast('Customer deleted','error')">${IC.trash}</button></div>`);
}

// ── PAGE: CUSTOMER SEGMENTS ───────────────────────────────────
register('customer-segments',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Segments</h1><p>Group customers based on shared characteristics.</p></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="openSegmentBuilder()">${IC.plus} Create segment</button></div></div>
<div style="display:flex;flex-direction:column;gap:12px">${DATA.segments.map(s=>`<div class="card card-body" style="display:flex;align-items:center;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:0"><div style="font-weight:600;font-size:15px">${s.name}</div><div class="td-muted" style="font-size:13px;margin-top:2px">${s.description} · ${s.rules} rule${s.rules>1?'s':''} · Created ${s.created}</div></div><div style="font-size:20px;font-weight:700;color:var(--text)">${s.members.toLocaleString()}</div><div class="td-muted" style="font-size:12px">customers</div><div style="display:flex;gap:8px"><button class="btn btn-secondary btn-sm" onclick="toast('Email campaign started for ${s.members} customers')">${IC.mail} Email customers</button><button class="btn btn-plain btn-sm" onclick="toast('Segment editor opening','neutral')">${IC.edit}</button></div></div>`).join('')}</div>`);
function openSegmentBuilder(){openModal(`<div class="modal"><div class="modal-header"><span class="modal-title">Create segment</span><button class="modal-close" onclick="closeModal()">${IC.x}</button></div><div class="modal-body"><div class="form-group"><label class="form-label">Segment name</label><input class="form-control" placeholder="e.g. High-value customers" /></div><div class="form-group"><label class="form-label">Filter rules</label><div id="seg-rules"><div class="segment-rule"><select><option>Amount spent</option><option>Number of orders</option><option>Location</option><option>Tag</option></select><select><option>is greater than</option><option>is less than</option><option>equals</option></select><input style="width:80px;padding:5px 8px;border:1px solid #c9cccf;border-radius:4px" value="500" /></div></div><button class="btn btn-plain btn-sm" style="margin-top:8px" onclick="toast('Rule added','neutral')">${IC.plus} Add filter</button></div><div class="banner banner-info" style="margin-top:12px"><div class="banner-content"><div class="banner-title">Preview</div>Estimated ~142 customers match this criteria.</div></div></div><div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();toast('Segment created')">Create segment</button></div></div>`);}

// ── PAGE: ANALYTICS ───────────────────────────────────────────
register('analytics',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Analytics</h1></div><div class="page-hd-actions"><div class="period-tabs" id="an-periods">${ptabs('30d')}</div><button class="btn btn-secondary" onclick="navigate('reports')">All reports</button></div></div>
<div class="kpi-grid" style="margin-bottom:20px">${DATA.kpis.map(x=>`<div class="kpi-card"><div class="kpi-label">${x.label}</div><div class="kpi-value">${x.value}</div><span class="kpi-delta ${x.up?'up':'down'}">${x.up?IC.trendUp:IC.trendDn} ${x.delta}</span><div class="kpi-sub">${x.sub}</div></div>`).join('')}</div>
<div class="card" style="margin-bottom:20px"><div class="card-header"><h2>Total sales over time</h2></div><div class="chart-wrap" style="height:280px"><canvas id="anSalesChart"></canvas></div></div>
<div class="grid-2" style="margin-bottom:20px">
  <div class="card"><div class="card-header"><h2>Sessions by source</h2></div><div class="chart-wrap" style="height:240px"><canvas id="anSourceChart"></canvas></div></div>
  <div class="card"><div class="card-header"><h2>Orders by status</h2></div><div class="chart-wrap" style="height:240px"><canvas id="anStatusChart"></canvas></div></div>
</div>
<div class="grid-2">
  <div class="card"><div class="card-header"><h2>Top products by revenue</h2></div><div class="chart-wrap" style="height:240px"><canvas id="anProdChart"></canvas></div></div>
  <div class="card"><div class="card-header"><h2>Sessions by device</h2></div><div class="chart-wrap" style="height:240px"><canvas id="anDeviceChart"></canvas></div></div>
</div>`);

// ── PAGE: REPORTS ─────────────────────────────────────────────
register('reports',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Reports</h1><p>Pre-built reports for your store's performance.</p></div></div>
${[{cat:'Sales reports',icon:'💰',reports:['Total sales','Sales by product','Sales by channel','Sales by traffic referrer','Sales by billing location']},{cat:'Acquisition reports',icon:'📈',reports:['Sessions over time','Sessions by referrer','Sessions by location','Sessions by device type','Conversion rate']},{cat:'Behavior reports',icon:'🔍',reports:['Top online store searches','Product recommendations','Cart analysis','Returning customer rate']},{cat:'Customer reports',icon:'👥',reports:['Customers over time','Customers by location','Repeat customer rate','Customers by first purchase channel']},{cat:'Inventory reports',icon:'📦',reports:['Month-end inventory snapshot','Average inventory sold per day','Percent of inventory sold','ABC analysis by product']}].map(g=>`<div class="card" style="margin-bottom:16px"><div class="card-header"><h2>${g.icon} ${g.cat}</h2></div><div class="card-body" style="padding:0">${g.reports.map(r=>`<div style="padding:12px 20px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center"><span style="font-size:13.5px">${r}</span><button class="btn btn-plain btn-sm" onclick="toast('Opening: ${r}','neutral')">View</button></div>`).join('')}</div></div>`).join('')}`);

// ── PAGE: LIVE VIEW ───────────────────────────────────────────
register('live-view',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Live view</h1></div></div>
<div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px">
  <div class="kpi-card"><div class="kpi-label" style="display:flex;align-items:center;gap:8px"><span class="pulse"></span>Visitors right now</div><div class="kpi-value">${DATA.liveView.visitors}</div></div>
  <div class="kpi-card"><div class="kpi-label">Added to cart</div><div class="kpi-value">${DATA.liveView.addedToCart}</div></div>
  <div class="kpi-card"><div class="kpi-label">Reaching checkout</div><div class="kpi-value">${DATA.liveView.checkingOut}</div></div>
</div>
<div class="grid-2">
  <div class="card"><div class="card-header"><h2>Top locations</h2></div><div class="card-body"><div class="item-list">${DATA.liveView.topLocations.map((l,i)=>`<div class="item-row"><div style="width:20px;color:var(--text-3);font-size:12px">${i+1}</div><div class="item-info"><div class="item-name">${l}</div></div><div style="font-size:13px;font-weight:500">${Math.floor(Math.random()*15)+2}</div></div>`).join('')}</div></div></div>
  <div class="card"><div class="card-header"><h2>Top active pages</h2></div><div class="card-body"><div class="item-list">${DATA.liveView.topPages.map((p,i)=>`<div class="item-row"><div style="width:20px;color:var(--text-3);font-size:12px">${i+1}</div><div class="item-info"><div class="item-name" style="font-family:monospace;font-size:12px">${p}</div></div><div style="font-size:13px;font-weight:500">${Math.floor(Math.random()*12)+1}</div></div>`).join('')}</div></div></div>
</div>`);

// ── PAGE: MARKETING ───────────────────────────────────────────
register('marketing',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Marketing</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('Campaign builder coming soon','neutral')">${IC.plus} Create campaign</button></div></div>
<div class="filter-tabs" style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius) var(--radius) 0 0;padding:0 4px"><button class="ftab active" onclick="setTab(this)">Campaigns</button><button class="ftab" onclick="navigate('automations')">Automations</button></div>
<div class="table-card" style="border-radius:0 0 var(--radius) var(--radius)"><div class="table-wrap"><table><thead><tr><th>Campaign</th><th>Channel</th><th>Status</th><th>Performance</th><th>Revenue</th><th></th></tr></thead><tbody>${DATA.campaigns.map(c=>`<tr><td style="font-weight:500">${c.name}</td><td class="td-muted">${c.channel}</td><td>${badge(c.status)}</td><td class="td-muted" style="font-size:12px">${c.sent?`Sent: ${c.sent} · Open: ${c.opened} · Click: ${c.clicked}`:c.spend?`Spend: ${c.spend} · Clicks: ${c.clicks} · CPC: ${c.cpc}`:c.audience?`Audience: ${c.audience} · Scheduled: ${c.scheduled}`:''}</td><td style="font-weight:500">${c.revenue}</td><td class="td-actions"><button class="btn btn-secondary btn-xs" onclick="toast('Editing campaign','neutral')">${IC.edit}</button></td></tr>`).join('')}</tbody></table></div></div>`);

// ── PAGE: AUTOMATIONS ─────────────────────────────────────────
register('automations',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Automations</h1><p>Automated messages and workflows for your customers.</p></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('Automation builder coming soon','neutral')">${IC.plus} Create automation</button></div></div>
<div style="display:flex;flex-direction:column;gap:12px">${DATA.automations.map(a=>`<div class="card card-body" style="display:flex;align-items:center;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:0"><div style="font-weight:600">${a.name}</div><div class="td-muted" style="font-size:12px;margin-top:2px">Trigger: ${a.trigger}</div></div><div style="font-size:13px">Runs: <strong>${a.runs}</strong></div><div style="font-size:13px">Revenue: <strong>${a.revenue}</strong></div>${badge(a.status)}<label class="toggle"><input type="checkbox" ${a.status==='active'?'checked':''} onchange="toast(this.checked?'Automation activated':'Automation paused','neutral')" /><span class="toggle-track"></span></label></div>`).join('')}</div>`);

// ── PAGE: DISCOUNTS ───────────────────────────────────────────
register('discounts',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Discounts</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="openDiscountModal(null)">${IC.plus} Create discount</button></div></div>
<div class="table-card">
  <div class="filter-tabs"><button class="ftab active" onclick="setTab(this)">All</button><button class="ftab" onclick="setTab(this)">Percentage</button><button class="ftab" onclick="setTab(this)">Fixed amount</button><button class="ftab" onclick="setTab(this)">Free shipping</button><button class="ftab" onclick="setTab(this)">Buy X get Y</button></div>
  <div class="table-wrap"><table><thead><tr><th>Discount code</th><th>Status</th><th>Type</th><th>Value</th><th>Usage</th><th>Expires</th><th></th></tr></thead><tbody>${DATA.discounts.map(d=>`<tr onclick="openDiscountModal('${d.code}')"><td><span class="td-link" style="font-family:monospace">${d.code}</span></td><td>${badge(d.status)}</td><td class="td-muted">${d.type}</td><td style="font-weight:500">${d.value}</td><td class="td-muted">${d.usage}</td><td class="td-muted">${d.expires}</td><td class="td-actions" onclick="event.stopPropagation()"><button class="btn btn-plain btn-sm" onclick="toast('Code copied','neutral')">${IC.edit}</button></td></tr>`).join('')}</tbody></table></div>
</div>`);
function openDiscountModal(code){
  const d=code?DATA.discounts.find(x=>x.code===code):null;
  openModal(`<div class="modal"><div class="modal-header"><span class="modal-title">${d?'Edit discount':'Create discount'}</span><button class="modal-close" onclick="closeModal()">${IC.x}</button></div><div class="modal-body"><div class="form-group"><label class="form-label">Discount code</label><input class="form-control" value="${d?d.code:''}" placeholder="e.g. SUMMER20" style="font-family:monospace" /></div><div class="field-row"><div class="form-group"><label class="form-label">Type</label><select class="form-control form-select"><option ${d?.type==='Percentage'?'selected':''}>Percentage</option><option ${d?.type==='Fixed amount'?'selected':''}>Fixed amount</option><option ${d?.type==='Free shipping'?'selected':''}>Free shipping</option><option ${d?.type==='Buy X get Y'?'selected':''}>Buy X get Y</option></select></div><div class="form-group"><label class="form-label">Value</label><input class="form-control" value="${d?d.value:''}" placeholder="20%" /></div></div><div class="field-row"><div class="form-group"><label class="form-label">Usage limit</label><input class="form-control" placeholder="No limit" /></div><div class="form-group"><label class="form-label">Expiry date</label><input class="form-control" type="date" /></div></div></div><div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button>${d?`<button class="btn btn-danger" onclick="closeModal();toast('Discount deleted','error')">Delete</button>`:''}<button class="btn btn-primary" onclick="closeModal();toast('${d?'Discount saved':'Discount created'}')">${d?'Save':'Create discount'}</button></div></div>`);
}

// ── PAGE: APPS ────────────────────────────────────────────────
register('apps',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Apps</h1></div><div class="page-hd-actions"><button class="btn btn-secondary" onclick="toast('Opening Shopify App Store','neutral')">Browse App Store</button></div></div>
<div class="chip-filter">${['All','Marketing','Reviews','Shipping','Upsell','Taxes','Support'].map((c,i)=>`<button class="chip ${i===0?'active':''}" onclick="filterApps(this,'${c}')">${c}</button>`).join('')}</div>
<div class="apps-grid" id="apps-grid">${DATA.apps.map(a=>`<div class="app-card" data-cat="${a.category}"><div class="app-card-header"><div class="app-icon">${a.icon}</div><div><div class="app-card-name">${a.name}</div><div class="app-card-cat">${a.category}</div></div></div><div style="display:flex;align-items:center;gap:4px;font-size:12px;color:var(--text-2)">${stars(a.rating)} ${a.rating} (${a.reviews.toLocaleString()})</div><div class="app-card-desc">${a.desc}</div><div class="app-card-footer">${a.installed?`<button class="btn btn-secondary btn-sm" onclick="toast('Opening ${a.name} settings','neutral')">Settings</button><span class="badge badge-success">Installed</span>`:`<button class="btn btn-primary btn-sm" onclick="toast('${a.name} installed')">Install</button>`}</div></div>`).join('')}</div>`);
function filterApps(btn,cat){document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('#apps-grid .app-card').forEach(c=>{c.style.display=cat==='All'||c.dataset.cat===cat?'flex':'none';});}

// ── PAGE: ONLINE STORE ────────────────────────────────────────
register('online-store',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Online Store</h1></div></div>
<div class="section-hd">Themes</div>
<div class="grid-2" style="margin-bottom:24px">${DATA.themes.map(t=>`<div class="theme-card"><div class="theme-preview">🌐</div><div class="theme-info"><div style="display:flex;justify-content:space-between;align-items:center"><div class="theme-name">${t.name} <span style="color:var(--text-3);font-size:12px">v${t.version}</span></div>${badge(t.status)}</div><div class="td-muted" style="font-size:12px;margin-top:4px">Updated ${t.updated}</div><div class="theme-actions">${t.status==='live'?`<button class="btn btn-secondary btn-sm" onclick="toast('Customizing theme','neutral')">Customize</button>`:`<button class="btn btn-secondary btn-sm" onclick="toast('Theme published')">Publish</button><button class="btn btn-plain btn-sm">Preview</button>`}</div></div></div>`).join('')}</div>
<div class="section-hd">Blog posts</div>
<div class="table-card" style="margin-bottom:24px"><div class="table-wrap"><table><thead><tr><th>Title</th><th>Author</th><th>Date</th><th>Status</th><th></th></tr></thead><tbody>${DATA.blogPosts.map(p=>`<tr><td style="font-weight:500">${p.title}</td><td class="td-muted">${p.author}</td><td class="td-muted">${p.date}</td><td>${badge(p.status)}</td><td><button class="btn btn-plain btn-sm" onclick="toast('Editing post','neutral')">${IC.edit}</button></td></tr>`).join('')}</tbody></table></div></div>
<div class="section-hd">Pages</div>
<div class="table-card"><div class="table-wrap"><table><thead><tr><th>Title</th><th>Visibility</th><th>Updated</th><th></th></tr></thead><tbody>${DATA.pages.map(p=>`<tr><td style="font-weight:500">${p.title}</td><td>${badge(p.visibility)}</td><td class="td-muted">${p.updated}</td><td><button class="btn btn-plain btn-sm" onclick="toast('Editing page','neutral')">${IC.edit}</button></td></tr>`).join('')}</tbody></table></div></div>`);

// aliases for sub-nav links
register('blog',      ()=>_routes['online-store']());
register('pages',     ()=>_routes['online-store']());
register('navigation',()=>_routes['online-store']());
register('preferences',()=>_routes['online-store']());
register('content',   ()=>_routes['online-store']());

// ── PAGE: POINT OF SALE ───────────────────────────────────────
register('pos',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Point of Sale</h1><p>Sell in person with Shopify POS.</p></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="toast('Opening POS register','neutral')">Open register</button></div></div>
<div class="kpi-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px"><div class="kpi-card"><div class="kpi-label">Today's sales</div><div class="kpi-value">$1,240</div><div class="kpi-sub">Main Street Store</div></div><div class="kpi-card"><div class="kpi-label">Transactions</div><div class="kpi-value">28</div><div class="kpi-sub">Today</div></div><div class="kpi-card"><div class="kpi-label">Avg order value</div><div class="kpi-value">$44.29</div><div class="kpi-sub">Today</div></div></div>
<div class="card card-body"><div class="section-hd">Locations</div><div class="item-list"><div class="item-row"><div class="item-icon">🏪</div><div class="item-info"><div class="item-name">Main Street Store</div><div class="item-sub">123 Main St · Active</div></div>${badge('active')}</div><div class="item-row"><div class="item-icon">🏬</div><div class="item-info"><div class="item-name">Downtown Pop-Up</div><div class="item-sub">45 Market Ave · Inactive</div></div>${badge('inactive')}</div></div></div>`);

// ── PAGE: STAFF ───────────────────────────────────────────────
register('staff',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Staff</h1></div><div class="page-hd-actions"><button class="btn btn-primary" onclick="openAddStaffModal()">${IC.plus} Add staff account</button></div></div>
<div class="table-card" style="margin-bottom:20px"><div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Last login</th><th>Status</th><th></th></tr></thead><tbody>${DATA.staff.map(s=>`<tr><td><div class="cell-product"><div class="avatar" style="width:32px;height:32px;font-size:11px">${initials(s.name)}</div><span style="font-weight:500">${s.name}</span></div></td><td class="td-muted">${s.email}</td><td>${s.role}</td><td class="td-muted">${s.lastLogin}</td><td>${badge(s.status)}</td><td><button class="btn btn-plain btn-sm" onclick="toast('Editing ${s.name}','neutral')">${IC.edit}</button></td></tr>`).join('')}</tbody></table></div></div>
<div class="card"><div class="card-header"><h2>Permissions</h2></div><div class="table-wrap"><table><thead><tr><th>Permission</th><th>Owner</th><th>Manager</th><th>Fulfillment</th><th>Marketing</th></tr></thead><tbody>${[['View orders','✓','✓','✓','✗'],['Create orders','✓','✓','✗','✗'],['Manage products','✓','✓','✗','✗'],['View customers','✓','✓','✗','✓'],['View analytics','✓','✓','✗','✓'],['Manage discounts','✓','✓','✗','✓'],['Manage staff','✓','✗','✗','✗'],['Manage settings','✓','✗','✗','✗']].map(([p,...roles])=>`<tr><td>${p}</td>${roles.map(r=>`<td style="color:${r==='✓'?'var(--accent)':'var(--text-3)'};font-weight:${r==='✓'?'600':'400'}">${r}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`);
function openAddStaffModal(){openModal(`<div class="modal"><div class="modal-header"><span class="modal-title">Add staff account</span><button class="modal-close" onclick="closeModal()">${IC.x}</button></div><div class="modal-body"><div class="form-group"><label class="form-label">Email address</label><input class="form-control" placeholder="staff@example.com" /></div><div class="form-group"><label class="form-label">Role</label><select class="form-control form-select"><option>Staff</option><option>Manager</option><option>Fulfillment</option><option>Marketing</option></select></div></div><div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();toast('Invitation sent')">Send invite</button></div></div>`);}

// ── PAGE: SETTINGS ────────────────────────────────────────────
register('settings',()=>`<div class="page-hd"><div class="page-hd-left"><h1>Settings</h1></div></div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">${[
  {icon:'🏪',title:'Store details',desc:'Edit your store name, address, and contact information.'},
  {icon:'💳',title:'Payments',desc:'Manage payment providers and transaction fees.'},
  {icon:'🚚',title:'Shipping and delivery',desc:'Configure shipping zones, rates, and carriers.'},
  {icon:'🛒',title:'Checkout',desc:'Customize your checkout experience and settings.'},
  {icon:'🧾',title:'Taxes and duties',desc:'Set up tax rates for your store.'},
  {icon:'🔔',title:'Notifications',desc:'Configure email and SMS notification templates.'},
  {icon:'🌐',title:'Domains',desc:'Manage your custom domains and SSL certificates.'},
  {icon:'👥',title:'Users and permissions',desc:'Manage staff accounts and permission levels.'},
  {icon:'💰',title:'Plan and billing',desc:'Manage your Shopify subscription and invoices.'},
  {icon:'🔌',title:'Sales channels',desc:'Add and manage sales channels for your products.'},
  {icon:'📦',title:'Metafields',desc:'Add custom data to products, orders, and customers.'},
  {icon:'🔑',title:'API credentials',desc:'Manage API keys and webhook configurations.'}
].map(s=>`<div class="card card-body" style="cursor:pointer;display:flex;gap:14px;align-items:flex-start" onclick="toast('Opening ${s.title}','neutral')"><span style="font-size:24px">${s.icon}</span><div><div style="font-weight:600;margin-bottom:4px">${s.title}</div><div class="td-muted" style="font-size:13px">${s.desc}</div></div></div>`).join('')}</div>`);

// ── BIND PAGE (chart init + event bindings) ───────────────────
function bindPage(id){
  // Period tab listeners
  document.querySelectorAll('[data-period]').forEach(btn=>{
    btn.addEventListener('click',function(){
      this.closest('.period-tabs')?.querySelectorAll('.ptab').forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      const p=this.dataset.period;
      if(id==='dashboard') updateDashboardCharts(p);
      if(id==='analytics') updateAnalyticsCharts(p);
    });
  });
  if(id==='dashboard') initDashboardCharts();
  if(id==='analytics') initAnalyticsCharts();
}

function initDashboardCharts(){
  const p=DATA.chartPeriods['30d'];
  _line('dashSalesChart', p.labels, p.sales);
  _donut('dashDeviceChart',['Mobile','Desktop','Tablet'],[58,34,8],['#008060','#458fff','#fbbf24']);
}
function updateDashboardCharts(period){
  const p=DATA.chartPeriods[period];
  if(_charts['dashSalesChart']){_charts['dashSalesChart'].data.labels=p.labels;_charts['dashSalesChart'].data.datasets[0].data=p.sales;_charts['dashSalesChart'].update();}
}
function initAnalyticsCharts(){
  const p=DATA.chartPeriods['30d'];
  _line('anSalesChart', p.labels, p.sales);
  _donut('anSourceChart',['Direct','Google','Social','Email','Other'],[35,28,20,12,5],['#008060','#458fff','#f59e0b','#8b5cf6','#6b7280']);
  _bar('anStatusChart',['Fulfilled','Unfulfilled','Paid','Pending'],[680,320,840,220],'#008060');
  _bar('anProdChart',['Tee','Soap','Bottle','Mat','Cap'],['9940','2544','4144','7663','3420'],'#458fff',true);
  _donut('anDeviceChart',['Mobile','Desktop','Tablet'],[58,34,8],['#008060','#458fff','#fbbf24']);
}
function updateAnalyticsCharts(period){
  const p=DATA.chartPeriods[period];
  if(_charts['anSalesChart']){_charts['anSalesChart'].data.labels=p.labels;_charts['anSalesChart'].data.datasets[0].data=p.sales;_charts['anSalesChart'].update();}
}

// ── KEYBOARD SHORTCUTS ────────────────────────────────────────
document.addEventListener('keydown',e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  const map={h:'dashboard',o:'orders',p:'products',c:'customers',a:'analytics',d:'discounts',s:'settings'};
  if(map[e.key]) navigate(map[e.key]);
  if(e.key==='?') showShortcuts();
  if(e.key==='Escape'){closeModal();closeDrawer();}
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openSearch();}
});

// ── INIT ──────────────────────────────────────────────────────
(function init(){
  renderSidebar();
  renderTopbar();
  const hash=location.hash.replace('#','')||'dashboard';
  const startRoute=_routes[hash]?hash:'dashboard';
  navigate(startRoute,false);
  history.replaceState({id:startRoute},'','#'+startRoute);
})();

