// Event

// function DiceRoll(){
//     const random = Math.floor(Math.random() * 6 ) + 1;
//     let randomImage = document.getElementById("img")
//     randomImage.src = `images/image${random}.png`
//     console.log(randomImage); 
// }


// let image = document.getElementById('image');

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     image.src = `images/${randomNumber}.png`;
    
// }


// let image = document.getElementById('image');
// let plus = 0;
// function forward(){
//     plus++;
//     image.src = `images/${plus}.png`;
// }

// function reverse(){
//     plus--;
//     image.src = `images/${plus}.png`;
// }

// let image = document.getElementById('image');
// let plus = 0;
// const maxImages = 6;
// const minImages =1

// function forward() {
//     if (plus < maxImages) {
//         plus++;
//         image.src = `images/${plus}.png`;
//     }
// }

// function reverse() {
//     if (plus > minImages) {
//         plus--;
//         image.src = `images/${plus}.png`;
//     }
// }


// let backImg = document.getElementById("back");
// let plus = 0;
// function backWard(){
// plus++
// backImg.src = `images/image${plus}.png`
// }
// function forWard(){
//     plus--;
//     backImg.src = `images/image${plus}.png`

//     }

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImage = 1;
const MAX_IMAGES = 6;
const MIN_IMAGES = 1;

// Array of image URLs - replace these with your actual image paths
const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6'
];

// Initialize first image
sliderImage.src = images[0];

// Add click event listeners to buttons
nextBtn.addEventListener('click', () => {
    if (currentImage < MAX_IMAGES) {
        currentImage++;
        updateImage();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentImage > MIN_IMAGES) {
        currentImage--;
        updateImage();
    }
});

// Function to update the image source
function updateImage() {
    sliderImage.style.opacity = '0';
    setTimeout(() => {
        sliderImage.src = images[currentImage - 1];
        sliderImage.style.opacity = '1';
    }, 200);
}

// Add fade effect to image transitions
// sliderImage.style.transition = 'opacity 0.2s ease-in-out';