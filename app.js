
//hamburger navbar 
const hamburger = document.querySelector(".hamburger");
const navbars = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbars.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove("active");
    navbars.classList.remove("active");
}))

// main header animation

const texts = ['Welcome', 'I am learning to build websites', 'Not just front-end', 'I am learning back-end as well!']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

if(count === texts.length){
    count = 0
}
currentText = texts[count];
letter = currentText.slice(0, ++index)

document.querySelector('.main-description').textContent = letter;
if(letter.length === currentText.length){
    count++;
    index = 0;
    console.log(currentText)
}
setTimeout(type, 250)
}());

// slide-show
const slider = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const slides = document.querySelectorAll('.slide')
const slideIcons = document.querySelectorAll(".slide-icon")

let numberOfSlides  = slides.length;
let slideNumber = 0

//next-btn
nextBtn.addEventListener('click', () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })
    slideNumber++;

    if(slideNumber > (numberOfSlides -1)){
        slideNumber = 0
    }

    slides[slideNumber].classList.add("active")
    slideIcons[slideNumber].classList.add("active")
})
//prev-btn
prevBtn.addEventListener('click', () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1
    }

    slides[slideNumber].classList.add("active")
    slideIcons[slideNumber].classList.add("active")
})
//repeat when inacitve;
var playSlider;
var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        })
        slideNumber++;
    
        if(slideNumber > (numberOfSlides -1)){
            slideNumber = 0
        }
    
        slides[slideNumber].classList.add("active")
        slideIcons[slideNumber].classList.add("active")
    }, 5000)
}
repeater();

//when hovering stop
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider)
})
//when unhovered continue 
slider.addEventListener("mouseout", () => {
    repeater()
})