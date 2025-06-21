// IMAGE ANIMATION PART
const images = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif"];
let imageIndex = 0;
const circleBox = document.getElementById("circle");

function changeImage() {
    circleBox.style.opacity = 0;
    setTimeout(() => {
        circleBox.style.backgroundImage = `url('${images[imageIndex]}')`;
        circleBox.style.opacity = 1;
        imageIndex = (imageIndex + 1) % images.length;
    }, 500);
}

changeImage();
setInterval(changeImage, 3000);
