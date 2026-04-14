//Variables
const slider = document.querySelector("#image-slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let slideWidth = slider.clientWidth;
let currentIndex = 0;

function showSlide(index) {
    console.log(index);
    const newTransformValue = -index * slideWidth + 'px';
    console.log(newTransformValue);
    slider.style.transform = `translateX(${newTransformValue})`;
}

function prevSlide() {
    currentIndex--;
    //if the count is less than 0, go to last slide
    if(currentIndex < 0) {
        currentIndex = slider.children.length-1;
    }
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    //if count is greate than or equal to the number of slides restart
    if(currentIndex >= slider.children.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex);
}


updateSlideWidth();

//Event Listeners
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

window.addEventListener("resize", updateSlideWidth);