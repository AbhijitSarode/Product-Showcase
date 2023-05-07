const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ["./assets/image-product-1.jpg", "./assets/image-product-2.jpg", "./assets/image-product-3.jpg", "./assets/image-product-4.jpg"];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    console.log(position, pictures.length, "right");
    if (position < pictures.length - 1) {
        position++;
        img.src = pictures[position];
    } else {
        position = 0;
        img.src = pictures[position];
    }
}

const moveLeft = () => {
    console.log(position, pictures.length, "left");
    if (position > 0) {
        position--;
        img.src = pictures[position];
    } else {
        position = pictures.length - 1;
        img.src = pictures[position];
    }
}
