//img-slider
var slideIndex = 0;
var slides = document.getElementsByClassName("img-slider-slide");
var dots = document.getElementsByClassName("img-slider-dot");
showSlides();

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000);
}

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1; }
    else if (slideIndex < 1) { slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function currentSlide(index) {
    if (index > slides.length) { index = 1; }
    else if (index < 1) { index = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}
//end img-slider

//always update current year
document.getElementById("year").innerHTML = new Date().getFullYear();