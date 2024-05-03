let imageIndex = 0;
const images = ["assets/uc1.gif", "assets/uc2.gif"];
const imageElement = document.getElementById('imageGIF');

function switchImage() {
    imageIndex = (imageIndex + 1) % images.length;
    imageElement.src = images[imageIndex];
}

setInterval(switchImage, 3000); // Change l'image toutes les 3 secondes
