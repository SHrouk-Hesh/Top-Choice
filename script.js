// JavaScript for the slider
// JavaScript for the slider
const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const sliderNav = document.querySelector('.slider-nav');

slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    sliderNav.appendChild(dot);
});

let currentSlide = 0;

function goToSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === slideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    currentSlide = slideIndex;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}, 3000);


////////////////////////////////////////////////
    var MenuItems= document.getElementById("MenuItems");
    MenuItems.style.maxHeight= "0px";
    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px") {
            MenuItems.style.maxHeight= "200px";
        } else {
            MenuItems.style.maxHeight= "0px";
        }
    }
/////////////////////////////////////////////////
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToMiddle() {
    window.scrollTo({ top: window.innerHeight / 2, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}