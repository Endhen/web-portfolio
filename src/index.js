
import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import { App } from './app-js/app.js';

ReactDOM.render(<App/>, document.getElementById('root'));



// Responsive menu

let menuLinks = undefined
const btnOpen = document.getElementsByClassName('btn-open')[0]
const btnClose = document.getElementsByClassName('btn-close')[0]
const open = () => {
    gsap.to('.minified', {opacity: 1, duration: 0.5, width: '100%', display: 'flex'})
}
const close = () => {
    gsap.to('.minified', {opacity: 0, duration: 0.5, width: 0, display: 'none'})
}
const gotoNewPage = () => {
    gsap.to('.minified', {opacity: 0, duration: 0.5, width: 0, display: 'none'})
    gsap.to(window, {duration: 1, scrollTo: "#root", delay: 0.5});
}


const setMenuSize = () => { 
    let menu = document.getElementsByClassName('menu')[0]
    
    if (window.matchMedia(`(max-width: 1000px)`).matches) {
        menu.classList.add("minified")
        menuLinks = document.querySelectorAll('.minified a')
        
        menuLinks.forEach(link => {
            link.addEventListener("click", gotoNewPage)
        })
        btnOpen.addEventListener("click", open)
        btnClose.addEventListener("click", close)
        
        
    } else if (menu.classList.contains("minified")) {
        menuLinks.forEach(link => {
            link.removeEventListener("click", gotoNewPage)
        })
        btnOpen.removeEventListener("click", open)
        btnClose.removeEventListener("click", close)

        menu.removeAttribute('style')
        menu.classList.remove("minified")
    }
}

setMenuSize()
window.onresize = setMenuSize




