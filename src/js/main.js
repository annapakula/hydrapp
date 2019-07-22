"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const addGlass = document.querySelector('.add-glass');
const removeGlass = document.querySelector('.remove-glass');
const reset = document.querySelector('.reset');
const glassCounter = document.querySelector('.glass__counter');


addGlass.addEventListener('click', (e) => {
  for (let i = glassCounter.textContent; i < 10; i) {
    glassCounter.innerHTML = ++i;
    break;
  }
});

removeGlass.addEventListener('click', (e) => {
  for (let i = glassCounter.textContent; i > 0; i) {
    glassCounter.innerHTML = --i;
    break;
  }
});

reset.addEventListener('click', (e) => {
  glassCounter.innerHTML = 0;
})