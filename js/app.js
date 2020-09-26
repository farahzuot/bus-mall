'use strict';
var list = document.getElementById('list');
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
var rounds = 25;

function Product(imgName, extension) {
  this.imgName = imgName;
  this.extension = extension;
  this.path = `img/${imgName}.${extension}`;
  this.vote = 0;
  this.numOfShown = 0;
  Product.data.push(this);
}
Product.data = [];


function updateProducts() {
  var ProductString = JSON.stringify(Product.data);
  localStorage.setItem('products', ProductString);
}


function getProducts() {
  var ProductString = localStorage.getItem('products');
  console.log('products', ProductString);
  var productsArray = JSON.parse(ProductString);
  console.log('arr', productsArray);
  if (productsArray) {
    // for (var i = 0; i < productsArray.length; i++) {
    //   new Product(
    //     productsArray[i].imgName,
    //     productsArray[i].extension,
    //     productsArray[i].path,
    //     productsArray[i].vote,
    //     productsArray[i].numOfShown
    //   );
    // }
  }
  render();
}




for (let i = 0; i < products.length; i++) {
  if (products[i] === 'sweep') {
    new Product(products[i], extensions[1]);
  } else if (products[i] === 'usb') {
    new Product(products[i], extensions[2]);
  } else {
    new Product(products[i], extensions[0]);
  }
}


function setImage(image) {
  const index = uniqueIndex();
  image.src = Product.data[index].path;
  image.alt = Product.data[index].imgName;
  image.title = Product.data[index].imgName;
  Product.data[index].numOfShown++;

}

let imagesShown = [];

function uniqueIndex() {
  let image;
  do {
    image = getRandomNumber(0, Product.data.length - 1);
  }
  while (imagesShown.includes(image));
  imagesShown.push(image);

  if (imagesShown.length > 6) {
    imagesShown.splice(0, 3);
  }
  return image;
}

function render() {
  setImage(leftImg);
  setImage(middleImg);
  setImage(rightImg);
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
    updateProducts();
    render();
  }
}

getProducts();

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
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
            'rgba(10,20,30,0.3)',
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
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
            'rgba(10,20,30,1)',
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
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
            'rgba(50,150,200,0.3)',
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
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
            'rgba(50,150,200,1)',
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

  console.log(Product.data);
  var result = document.getElementById('sec3');
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
