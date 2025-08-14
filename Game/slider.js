//IMAGE SLIDER
const slides=document.querySelectorAll(".slide");
let slideIndex=0;
let IntervalId=null;

document.addEventListener("DOMContentLoaded",IntialiseSlider);

function IntialiseSlider(){
    if(slides.length>0)
    {
        // slides[slideIndex].classList.add("displaySlider");
        slides[slideIndex].classList.add("displaySlider");

        IntervalId=setInterval(nextSlide,5000);
    }
    
    
}
function showSlide(index){
    if(index>=slides.length)
    {
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1;
    }
    slides.forEach(slide=>{
        // slide.classList.remove("displaySlider");
        slide.classList.remove("displaySlider");

    });
    slides[slideIndex].classList.add("displaySlider");
}
function prevSlide(){
    clearInterval(IntervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}