let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active')
};
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { 
  showSlides(slideIndex += n); 
}

var timer = setInterval(nextSlide, 3000); 

function nextSlide() { 
  plusSlides(1); 
} 

function showSlides(n) { 
  var i; 
  var slides = document.getElementsByClassName("mySlides"); 
  var dots = document.getElementsByClassName("demo"); 
  if (n > slides.length) {slideIndex = 1}    

  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) { 
     slides[i].style.display = "none";  
  } 
  for (i = 0; i < dots.length; i++) { 
     dots[i].className = dots[i].className.replace(" active", ""); 
  } 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; 
} 