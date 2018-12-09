'use strict';

const app = document.querySelector('.app');
const options = document.querySelector('#options');
const button  = document.querySelector('.btn');
const face= document.querySelector('.face')

//número aleatorio
function getRandomNumber(max) {
  return Math.floor(Math.random()*max);
  // genera un número aleatorio
}

function handleFace(){
// Coge el value del select
// y pinta la cara correcta
  face.innerHTML = options.value;
  console.log('handleFace');

  const r = getRandomNumber(100);
  console.log('número aleatorio', r);

    if (r%2 === 0) {
      // Si es par -> amarillo
      app.classList.remove('app_2');
    } else {
      // Si es impar -> naranja
      app.classList.add('app_2');

    }
}

button.addEventListener('click', handleFace);