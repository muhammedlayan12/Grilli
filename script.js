// $(document).ready(function() {
//     let heroContent = $("#hero-content");
//     heroContent.animate({
//         top: "40%", 
//         opacity: 1  
//     }, 800);
// });




let humburger = document.getElementById("humburger");
humburger.addEventListener("click",()=>{
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("show");
});





let cut = document.querySelector(".cut");
cut.addEventListener("click",()=>{
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.remove("show");
})
;



const images = [
    './images/hero-slider-1.jpg',
    './images/hero-slider-2.jpg',
    './images/hero-slider-3.jpg'
];
let currentImageIndex = 0;
const heroImage = document.getElementById('hero-image');

function changeImage() {
    heroImage.classList.add('fade-out');

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroImage.src = images[currentImageIndex];
        heroImage.classList.remove('fade-out');
        heroImage.classList.add('fade-in'); 
    }, 1500); 
}

setInterval(changeImage, 2000);  



window.addEventListener("load",()=>{
    let preloader = document.getElementById("preloader");
    preloader.style.display="none";
});






let menuSec = $("#ourMenu");
let menu = $("#menu");

menu.click(() => {
    window.scrollTo({
        top: menuSec.offset().top, 
        behavior: "smooth"
    });
});





let offerSec = $("#deals");
let offer = $("#offer");

offer.click(() => {
    window.scrollTo({
        top: offerSec.offset().top, 
        behavior: "smooth"
    });
});






let aboutSec = $("#aboutSec");
let about = $("#about");

about.click(() => {
    window.scrollTo({
        top: aboutSec.offset().top, 
        behavior: "smooth"
    });
});






let button = $("#viewMenu");
button.click(()=>{
    window.scrollTo({
        top:1000,
        behavior:"smooth"
    });
}) ;