'use strict';

//DOM
const hamburger = document.querySelector(".top span");
const nav = document.querySelector("nav");
const styleNav = getComputedStyle(nav);

hamburger.addEventListener('click', () => {
    if(styleNav.display == 'none'){     
        nav.style.display = 'block';
        hamburger.innerHTML = 'close';
    }else{
        nav.style.display = 'none';
        hamburger.innerHTML = 'menu';
    }
    
});