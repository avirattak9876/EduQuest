const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Devlopment", "Gate Subjects", "DSA", "Computer Laungages"];
const typingDelay = 60;
const erasingDelay = 30;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 60);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, 500);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, 30);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 200);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 50);
});


//FAQS

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click',() => {
    faq.classList.toggle('open');

  })
});



//gaming slider

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoScroll: {
      speed: 2,
    },
  }).mount( window.splide.Extensions );
});




//login

const overlay=document.querySelector('.overlay');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup= document.querySelector('.get')
const iconClose= document.querySelector('.icon-close')

registerLink.addEventListener('click',()=> {
  wrapper.classList.add('active');
});



loginLink.addEventListener('click',()=> {
  wrapper.classList.remove('active');
});



btnPopup.addEventListener('click',()=> {
  overlay.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
  overlay.classList.remove('active-popup');
});





