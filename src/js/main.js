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
const key = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  glassCounter.innerHTML = '0';
}
else {
  glassCounter.innerHTML = localStorage.getItem(key);
}

// ROZWIĄZANIE Z KURSU:
addGlass.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));
  if (currentValue <= 12) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) +1);
    glassCounter.innerHTML = parseInt(localStorage.getItem(key));
  }
});
removeGlass.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));
  if (currentValue > 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) -1);
    glassCounter.innerHTML = localStorage.getItem(key);
  };
});




// MOJE ROZWIĄZANIE Z PĘTLĄ FOR:
// addGlass.addEventListener('click', (e) => {
//   for (let i = glassCounter.textContent; i < 10; i) {
//     glassCounter.innerHTML = ++i;
//     localStorage.setItem(key, parseInt(glassCounter.textContent));
//     break;
//   }
// });

// removeGlass.addEventListener('click', (e) => {
//   for (let i = glassCounter.textContent; i > 0; i) {
//     glassCounter.innerHTML = --i;
//     localStorage.setItem(key, parseInt(glassCounter.textContent));
//     break;
//   }
// });

reset.addEventListener('click', (e) => {
  glassCounter.innerHTML = 0;
  localStorage.setItem(key, 0);
})


