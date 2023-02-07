// Start splash screen
let splash = document.querySelector(".splash");

window.onload = (_) => {
  splash.style.cssText = "opacity: 0 ;visibility: hidden;";
};


// gallery

let gallery = document.querySelector(".gallery img");
let counter = 1;

setInterval(function () {
  if (counter === 5) {
    gallery.src = `imgs/gallery-${counter}.jpg`;
    counter = 1;
  }
  gallery.src = `imgs/gallery-${counter}.jpg`;
  counter++;
}, 3000);


