
import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import App from './app-js/app.js';

ReactDOM.render(<App/>, document.getElementById('root'));


// Responsive menu

const screenSize = 1000
const btnOpen = document.getElementsByClassName('btn-open')[0]
const btnClose = document.getElementsByClassName('btn-close')[0]
const menuLinks = document.querySelectorAll('nav a')[0]

btnOpen.addEventListener("click", () => {
    gsap.to('.minified', {opacity: 1, duration: 0.5, width: '100%'})
})

btnClose.addEventListener("click", () => {
    gsap.to('.minified', {opacity: 0, duration: 0.5, width: 0})
})

menuLinks.addEventListener("click", () => {
    gsap.to('.minified', {opacity: 0, duration: 0.5, width: 0})
    gsap.to(window, {duration: 1, scrollTo: "#root", delay: 0.5});
})

function setMenuSize() { 
    let menu = document.getElementsByClassName('menu')[0]
    
    if (window.matchMedia(`(max-width: ${screenSize}px)`).matches) {
        menu.classList.add("minified")
        
    } else if (menu.classList.contains("minified")) {
        menu.removeAttribute('style')
        menu.classList.remove("minified")
    }
}

setMenuSize()
window.onresize = setMenuSize


