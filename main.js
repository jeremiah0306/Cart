const imgsec = document.getElementById("imgSec");
const shown = document.getElementById("showImg");

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const prName = document.getElementById("prName");

item1.addEventListener("click", food);

function food() {
  shown.innerHTML = `<div class="shoImg">
  <img src="https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301144213-product-image-1_0.png">
  
  </div>`;

  prName.innerHTML = `<div class="smImg">
  <img src="https://supertails.com/cdn/shop/products/CFODF0009WH_1.jpg?v=1699595000">

  <div class="inHead">
      <p>Whiskas Mackerel Flavour Adult Cat Dry Food</p>
      <h5>Rs.650</h5>
  </div>
  
  
  </div>
  
  `;
}

item2.addEventListener("click", nfood);

function nfood() {
  shown.innerHTML = `<div class="shoImg">
  <img src="https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301006528-product-image-2_0.png">
  
  </div>`;

  prName.innerHTML = `
  <div class="smImg">
  <img src="https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301006528-product-image-2_0.png">
  <div class="inHead">
    <p>Whiskas Dry Adult Dewesa</p>
    <h5>Rs.350</h5>
  </div>
  
  </div>`;
}

item3.addEventListener("click", fifood);

function fifood() {
  shown.innerHTML = `<div class="shoImg">
  <img src="https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301002674-product-image-1_0.png">
 
  </div>`;

  prName.innerHTML = `
  <div class="smImg">
  <img src="https://www.whiskas.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2051/files/2022-09/18853301002674-product-image-1_0.png">
    <div class="inHead">
    <p>Whiskas Ocean Fish Flavour Adult Cat Dry Food</p>
  <h5>Rs.550</h5>
    </div>
  
  </div>
  `;
}
var less = document.getElementById("less");
var add = document.getElementById("add");
var addCount = document.getElementById("addCount");
var ad = 0;

less.addEventListener("click", les);

function les() {
  if (0 < ad) {
    addCount.innerHTML = ad -= 1;
  }
}

add.addEventListener("click", ads);

function ads() {
  addCount.innerHTML = ad += 1;
}
