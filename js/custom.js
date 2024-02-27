// VARIABLES
var header = document.querySelector(".header")
var nav = document.querySelector(".header-nav");
var toggle = document.querySelector(".navtoggle")
var drop1 = document.querySelector(".nav-dropdown1")
var drop2 = document.querySelector(".nav-dropdown2")
var multi1 = document.getElementsByClassName("multi-drop")[0]
var multi2 = document.getElementsByClassName("multi-drop")[1]
// HEADER
multiDrop1= ()=> {
    multi1.classList.toggle("multidropshow");
}
multiDrop2= ()=> {
    multi2.classList.toggle("multidropshow");
}
toggleNav = ()=> {
    nav.classList.toggle("nav-menu");
    toggle.classList.toggle("navtoggleclose");
    drop1.classList.remove("nav-dropdownshow");
    drop2.classList.remove("nav-dropdownshow");
}
dropdown1= ()=> {
    drop1.classList.toggle("nav-dropdownshow");
    drop2.classList.remove("nav-dropdownshow");
} 
dropdown2= ()=> {
    drop2.classList.toggle("nav-dropdownshow");
    drop1.classList.remove("nav-dropdownshow");
}
// HEADER BG
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add("headerbg");
    }
    else {
        header.classList.remove("headerbg");
    }
})
// BANNER SLIDER
$(document).ready(function () {
    $('.banner-reviews').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
// MEMBER SLIDER
$(document).ready(function () {
    $('.member-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "member-dots"
    });
});
// RESULTS SLIDER
$(document).ready(function () {
    $('.results-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "results-dots",
        prevArrow: `<img src="./images/resultsleft.png" class="results-arrows">`,
        nextArrow: `<img src="./images/resultsright.png" class="results-arrows">`,
        responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    });
});
// ABOUT SLIDER
$(document).ready(function () {
    $('.about-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "about-dots"
    });
});