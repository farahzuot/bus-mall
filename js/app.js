'use strict';

var products = [
  'bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon',
  'pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'
];
var extensions = [
  'jpg','png','gif'
];


const section = document.getElementById('sec2');
const leftImg = document.getElementById('left-img');
const middleImg = document.getElementById('middle-img');
const rightImg = document.getElementById('right-img');

var rounds = 5;
function Product(imgName,extension){
  this.imgName= imgName;
  this.extension= extension;
  this.path= `img/${imgName}.${extension}`;
  this.vote= 0;
  this.numOfShown=0;
  Product.data.push(this);
}

Product.data = [];
console.log(Product.data);

for (let i = 0; i < products.length; i++) {
  if (products[i] === 'sweep'){
    new Product(products[i],extensions[1]);
  } else if (products[i] === 'usb') {
    new Product(products[i],extensions[2]);
  } else {
    new Product(products[i],extensions[0]);
  }

}

var leftEl;
var middleEl;
var rightEl;

function render() {

  do {
    leftEl = getRandomNumber(0,Product.data.length - 1);
    middleEl = getRandomNumber(0,Product.data.length - 1);
    rightEl = getRandomNumber(0,Product.data.length - 1);

  }
  while (leftEl === middleEl || leftEl === rightEl || middleEl === rightEl);


  leftImg.src = Product.data[leftEl].path;
  middleImg.src = Product.data[middleEl].path;
  rightImg.src = Product.data[rightEl].path;
  leftImg.alt = Product.data[leftEl].imgName;
  middleImg.alt = Product.data[middleEl].imgName;
  rightImg.alt = Product.data[rightEl].imgName;
  leftImg.title = Product.data[leftEl].imgName;
  middleImg.title = Product.data[middleEl].imgName;
  rightImg.title = Product.data[rightEl].imgName;

  Product.data[leftEl].numOfShown++;
  Product.data[middleEl].numOfShown++;
  Product.data[rightEl].numOfShown++;

  // if (leftEl !== middleEl && leftEl !== rightEl && middleEl !== rightEl) {


}



section.addEventListener('click',action);
function action(event) {

  if(event.target.id !== 'sec2'){
    rounds --;
    if (rounds === 0 ) {
      result();
      section.removeEventListener('click',action);
    }
    for (let i = 0; i < Product.data.length; i++) {
      if(Product.data[i].imgName === event.target.title){
        Product.data[i].vote++;
      }
    }
    render();
  }
}

render();


function result() {
  for (let i = 0; i < Product.data.length; i++) {
    console.log('shown',Product.data[i].numOfShown );
  }
  console.log(Product.data);
  var result = document.getElementById('sec3');
  var list = document.createElement('ul');
  result.appendChild(list);
  var paragraph = document.createElement('p');
  list.appendChild(paragraph);
  paragraph.textContent=('RESULTS');
  for (let i = 0 ; i < products.length ; i++){
    var item = document.createElement('li');
    list.appendChild(item);
    item.textContent=(`${products[i]} had ${Product.data[i].vote} votes and was shown ${Product.data[i].numOfShown}`
    );
  }
}

function getRandomNumber(min,max) {
  return Math.ceil(Math.random() * (max - min )) + min;
}