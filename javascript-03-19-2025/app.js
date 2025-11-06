// let bird = document.getElementById('bird');
// let index = 1;
// let maxImage = 4;
// let minImage = 1;

// function next(){
//     if(index< maxImage){
//         index++;
//     }else{
//         index = minImage;
//     }
//     bird.src = `images/bird${index}.jpg`;
// }

// function prev(){
//     if(index > minImage){
//         index--;
//     }else{
//         index = maxImage;
//     }
//     bird.src = `images/bird${index}.jpg`;
// }

// function autoslide(){
//     next();
//     setTimeout(autoslide, 2000);
// }

// setTimeout(autoslide, 2000);


let counter = document.getElementById('counter');
let plus = 0;
function start(){
    setInterval(() => {
        
    plus++;
    counter.innerHTML = plus;
    if(plus == 10){
        plus = 0;
    }
    }, 1000);
    // setInterval(start, 1000);
}



document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function autoSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }
    let slideInterval = setInterval(autoSlide, 3000);

      prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
      slideInterval = setInterval(autoSlide, 3000);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    });
  });