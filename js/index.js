const burger = document.getElementById('navButton');
const menu = document.getElementById('navBarInicio__elementos');

burger.addEventListener('click', ()=> {
    const style = window.getComputedStyle(menu);
    const display = style.getPropertyValue('display')
    if(display == "none"){
        menu.style.display = "flex"
    }
    if(display == "flex"){
        menu.style.display = "none"
    }

});