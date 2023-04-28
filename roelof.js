const slideRight = document.querySelector('.right-slide'); 
const slideLeft = document.querySelector('.left-slide'); 
const downButton = document.querySelector('.previous'); 
const upButton = document.querySelector('.next'); 
const slidesLength = 3; 

let activeSlideIndex = 0 

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = 650; 
  
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
         activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
    }
  }

  slideLeft.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  slideRight.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
