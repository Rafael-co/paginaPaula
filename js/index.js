const burger = document.getElementById('navButton');
const menu = document.getElementById('navBarInicio__elementos');
const icone = document.getElementById('icone__burger');

burger.addEventListener('click', ()=> {
    const style = window.getComputedStyle(menu);
    const display = style.getPropertyValue('display')
    if(display == "none"){
        menu.style.display = "flex"
        icone.innerHTML = "close"
    }
    if(display == "flex"){
        menu.style.display = "none"
        icone.innerHTML = "menu"
    }

});