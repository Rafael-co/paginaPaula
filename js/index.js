const burger = document.getElementById('navButton');
const menu = document.getElementById('navBarInicio__elementos');
const icone = document.getElementById('icone__burger');
const accordions = document.querySelectorAll('.accordion');
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

})


accordions.forEach((accordion) => {
  const button = accordion.querySelector('.buttom__accordion');
  const collapse = accordion.querySelector('.collapse');

  button.addEventListener('click', () => {
    // Fecha todos os accordions abertos
    accordions.forEach((item) => {
      const currentCollapse = item.querySelector('.collapse');
      console.log(item)
      if (currentCollapse !== collapse && currentCollapse !=null) {
        currentCollapse.classList.remove('show');
      }
    });

    // Abre ou fecha o accordion clicado
    
  });
});