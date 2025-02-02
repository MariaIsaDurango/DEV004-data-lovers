// import data from './data/atletas/atletas.js';
// import data from './data/pokemon/pokemon.js';

// AQUI MANEJAMOS EL DOM

import data from './data/lol/lol.js';
import {
  sortData, filterData, averageData, averageName,
} from './data.js';



const lol = data.data;
const arrObject = Object.values(lol);
// console.log(lol);
// console.log(arrObject);

// MOSTRAR DATA
const container = document.getElementById('container');

const createTemplate = (arr) => { //esta linea ordena de A-z
  arr.forEach((champion) => {
    const newElement = document.createElement('section');
    const img = document.createElement('img');
    const p = document.createElement('p');
    newElement.classList.add('class-section');
    newElement.classList.add('hoverSection');
    img.classList.add('class-img');
    p.classList.add('class-name');
    img.src = `${champion.splash}`;
    p.innerHTML = `${champion.name}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    container.appendChild(newElement);
  });
};
createTemplate(arrObject);




// CREATE UN ELEMENTO P PARA MOSTRAR EL PROMEDIO
const pElement = document.createElement('p');


// document.getElementById("mysection").className = "mystyle";

// ORDER DATA
const orderAz = document.getElementById('orderAz');
orderAz.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  createTemplate(sortData(arrObject, 'name', 'ascending'));
});



// FILTRAR DATA Y CALCULAR PROMEDIO

const showFilter = (arr) => {
  arr.forEach((champion) => {
    const newElement = document.createElement('section');
    const img = document.createElement('img');
    const p = document.createElement('h3');
    const pTags = document.createElement('p');
    const pAvg = document.createElement('p');
    newElement.classList.add('class-section');
    newElement.classList.add('hoverSection');
    p.classList.add('class-name');
    pTags.classList.add('class-avg');
    img.classList.add('class-img');
    pAvg.classList.add('class-avg');
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    pTags.innerHTML = `Role : ${(champion.tags).join(' , ')}`;
    pAvg.innerHTML = `Average Offensive Statistic : ${averageName(arrObject, `${champion.name}`).toFixed(2)}`;
    newElement.appendChild(img);
    newElement.appendChild(p);
    newElement.appendChild(pTags);
    newElement.appendChild(pAvg);
    container.appendChild(newElement);
  });
};
showFilter(arrObject);


// ASESINOS
const assassin = document.getElementById('assassin');
assassin.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Assassin Average Offensive Statistic : ${averageData(arrObject, 'Assassin').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Assassin'));
});


// LUCHADORES

const fighter = document.getElementById('fighter');
fighter.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Fighter Average Offensive Statistic : ${averageData(arrObject, 'Fighter').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Fighter'));
});


// MAGOS

const mage = document.getElementById('mage');
mage.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Mage Average Offensive Statistic : ${averageData(arrObject, 'Mage').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Mage'));
});


// TIRADORES

const marksman = document.getElementById('marksman');
marksman.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Marksman Average Offensive Statistic : ${averageData(arrObject, 'Marksman').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Marksman'));
});


// SOPORTES

const support = document.getElementById('support');
support.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Support Average Offensive Statistic : ${averageData(arrObject, 'Support').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Support'));
});


// TANQUES

const tank = document.getElementById('tank');
tank.addEventListener('click', () => {
  container.innerHTML = '';
  pElement.innerHTML = '';
  pElement.innerHTML = `Tank Average Offensive Statistic : ${averageData(arrObject, 'Tank').toFixed(2)}`;
  const average = document.getElementById('average');
  average.appendChild(pElement);
  showFilter(filterData(arrObject, 'Tank'));
});

// AGREGAR O ELIMINAR CLASE A <LI>,ACTIVAR AL HACER CLICK
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

li.forEach((el) => {
  el.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});

// NO FUNCIONA BOTON DE SCROLL UP
// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.documentElement.scrollTop = 0;
};

// Get the button:
const mybutton = document.getElementById('myBtn');
mybutton.addEventListener('click', () => {
  topFunction();
});

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();
