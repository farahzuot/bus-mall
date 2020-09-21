'use strict';
var products = [
  'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon',
  'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'
];
var extensions = [
  'jpg', 'png', 'gif'
];
const section = document.getElementById('sec2');
const leftImg = document.getElementById('left-img');
const middleImg = document.getElementById('middle-img');
const rightImg = document.getElementById('right-img');
var rounds = 5;
function Product(imgName, extension) {
  this.imgName = imgName;
  this.extension = extension;
  this.path = `img/${imgName}.${extension}`;
  this.vote = 0;
  this.numOfShown = 0;
  Product.data.push(this);
}
Product.data = [];
console.log(Product.data);
for (let i = 0; i < products.length; i++) {
  if (products[i] === 'sweep') {
    new Product(products[i], extensions[1]);
  } else if (products[i] === 'usb') {
    new Product(products[i], extensions[2]);
  } else {
    new Product(products[i], extensions[0]);
  }
}
var leftEl;
var middleEl;
var rightEl;
var leftIn;
var middleIn;
var rightIn;
var arr1 = [];
var arr2 = [];
function render() {
  do {
    do {
      leftEl = getRandomNumber(0, Product.data.length - 1);
      middleEl = getRandomNumber(0, Product.data.length - 1);
      rightEl = getRandomNumber(0, Product.data.length - 1);
      arr1.push(leftEl);
      arr1.push(middleEl);
      arr1.push(rightEl);
      // console.log(arr1);
    }
    while (leftEl === middleEl || leftEl === rightEl || middleEl === rightEl);
    do {
      leftIn = getRandomNumber(0, Product.data.length - 1);
      middleIn = getRandomNumber(0, Product.data.length - 1);
      rightIn = getRandomNumber(0, Product.data.length - 1);
      arr1.push(leftIn);
      arr1.push(middleIn);
      arr1.push(rightIn);
      // console.log(arr2);
    }
    while (leftIn === middleIn || leftIn === rightIn || middleIn === rightIn);
  }
  while (arr1 === arr2);
  // console.log(arr1);
  // console.log(arr2);
  trial1();
  trial2();
}
function trial1() {
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
}
function trial2() {
  leftImg.src = Product.data[leftIn].path;
  middleImg.src = Product.data[middleIn].path;
  rightImg.src = Product.data[rightIn].path;
  leftImg.alt = Product.data[leftIn].imgName;
  middleImg.alt = Product.data[middleIn].imgName;
  rightImg.alt = Product.data[rightIn].imgName;
  leftImg.title = Product.data[leftIn].imgName;
  middleImg.title = Product.data[middleIn].imgName;
  rightImg.title = Product.data[rightIn].imgName;
  Product.data[leftIn].numOfShown++;
  Product.data[middleIn].numOfShown++;
  Product.data[rightIn].numOfShown++;
}
section.addEventListener('click', action);
function action(event) {
  if (event.target.id !== 'sec2') {
    rounds--;
    if (rounds === 0) {
      newChart();
      result();
      section.removeEventListener('click', action);
    }
    for (let i = 0; i < Product.data.length; i++) {
      if (Product.data[i].imgName === event.target.title) {
        Product.data[i].vote++;
      }
    }
    render();
  }
}

function newChart() {
  var ctx = document.getElementById('myChart');
  const productName = [];
  const shown = [];
  const votes = [];
  for (let i = 0; i < Product.data.length; i++) {
    productName.push(Product.data[i].imgName);
    shown.push(Product.data[i].numOfShown);
    votes.push(Product.data[i].vote);
  }

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [
        {
          label: 'number of Votes',
          data: votes,
          backgroundColor: [
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)'
          ],
          borderColor: [
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)'
          ],
          borderWidth: 1,
        },
        {
          label: 'number of shown',
          data: shown,
          backgroundColor: [
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)'
          ],
          borderColor: [
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)'
          ],
          borderWidth: 1
        }
      ],
    },
    options: {
      title: {
        display: true,
        position: 'top',
        text: 'Bar Graph',
        fontSize: 18,
        fontColor: '#111'
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}



render();
function result() {
  for (let i = 0; i < Product.data.length; i++) {
    console.log('shown', Product.data[i].numOfShown);
  }
  console.log(Product.data);
  var result = document.getElementById('sec3');
  var list = document.createElement('ul');
  result.appendChild(list);
  var paragraph = document.createElement('p');
  list.appendChild(paragraph);
  paragraph.textContent = ('RESULTS');
  for (let i = 0; i < products.length; i++) {
    var item = document.createElement('li');
    list.appendChild(item);
    item.textContent = (`${products[i]} had ${Product.data[i].vote} votes and was shown ${Product.data[i].numOfShown}`
    );
  }
}
function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}


