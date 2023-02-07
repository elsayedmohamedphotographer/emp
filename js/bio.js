// gallery

let gallery = document.querySelector(".bio-gallery img");
let counter = 1;

setInterval(function () {
  if (counter === 19) {
    gallery.src = `imgs/bio/bio${counter}.jpg`;

    counter = 1;
  }
  gallery.src = `imgs/bio/bio${counter}.jpg`;
  counter++;
}, 200);
