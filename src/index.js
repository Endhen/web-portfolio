
import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import { App } from './app-js/app.js';

ReactDOM.render(<App/>, document.getElementById('root'));


/*--- Responsive menu ---*/

const btnOpen = document.getElementsByClassName('btn-open')[0]
const btnClose = document.getElementsByClassName('btn-close')[0]

const open = () => {
    gsap.to('.minified', {opacity: 1, duration: 0.5, width: '100%', display: 'flex'})
}
const close = () => {
    gsap.to('.minified', {opacity: 0, duration: 0.5, width: 0, display: 'none'})
}

// Close menu and scroll to the page 
const gotoNewPage = () => {
    gsap.to('.minified', {opacity: 0, duration: 0.5, width: 0, display: 'none'})
    gsap.to(window, {duration: 1, scrollTo: ".content", delay: 0.5});
}

// Make menu indicator move to the current focus
const updateMenuIndicator = e => {
    const indicatorElt = document.getElementsByClassName('indicator')[0]
    let targetName = document.getElementsByClassName('is-active')[0]

    // target name defined depending on event or setFocus 
    if (e != undefined) {
        targetName = e.target.getAttribute('data-name')
        indicatorElt.removeAttribute("style")
    } else if (targetName != undefined) {
        targetName = targetName.getAttribute('data-name')
        indicatorElt.removeAttribute("style")
        indicatorElt.setAttribute("class", `indicator start-${targetName}`)
    } else {
        indicatorElt.setAttribute("style", "display: none;")
    }
}

// .is-active element get its color reversed 
// when an other link is focused
const isActiveColorChange = () =>  {
    const menuLinks = document.querySelectorAll('.menu a:not(.is-active)')
    const isActive = document.getElementsByClassName('is-active')[0]

    if (isActive != undefined) {
        isActive.removeEventListener("mouseleave", resetStyleAttribut)
        isActive.removeEventListener("mouseenter", changeColorText)
        const changeColorText = () => {
            isActive.setAttribute("style", "color: rgb(95, 95, 95)")
        }
        const resetStyleAttribut = () => {
            isActive.removeAttribute("style")
        }
        
        menuLinks.forEach(link => {
            link.removeAttribute("style")
            link.addEventListener("mouseenter", changeColorText)
        })
        
        menuLinks.forEach(link => {
            link.addEventListener("mouseleave", resetStyleAttribut)
        })
    }
}


function setFocus() {
    let menuLinks = document.querySelectorAll('.menu a')
    
    menuLinks.forEach(link => {
        if (link.getAttribute('href') == window.location.pathname) {
            link.setAttribute("class", "is-active")
        } else {
            link.removeAttribute('class')
        }
    })
    updateMenuIndicator()
    isActiveColorChange()
}


const setMenuSize = () => { 
    let menu = document.getElementsByClassName('menu')[0]
    let menuLinks = document.querySelectorAll('.menu a')

    menuLinks.forEach(link => {
        link.addEventListener("click", e => { updateMenuIndicator(e) })
    })
    
    // The menu minified verion and its events are defined 
    // depending on screen size
    if (window.matchMedia(`(max-width: 1020px)`).matches) {
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

const setMenuStyle = () => {
    const indicator = document.getElementsByClassName('indicator')[0]
    const menu = document.querySelector('.menu')

    if (indicator.attributes['style'] != undefined) {
        menu.classList.add('no-indicator')
    } else {
        menu.classList.remove('no-indicator')
    }
}


setFocus()
setMenuSize()
window.onresize = setMenuSize
document.getElementsByClassName('content')[0]
.addEventListener('DOMNodeInserted', (event) => {
    setFocus()
});

setMenuStyle()
const links = document.getElementsByTagName('a')
for (let a of links) {
    a.addEventListener("click", setMenuStyle)
}