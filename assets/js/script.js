const toggleButton = document.querySelector('.navbar__toogle__button');
const navbarMenu = document.querySelector('.navbar__menu');

toggleButton.addEventListener('click', () =>{
     navbarMenu.classList.toggle('navbar__menu--show');
     console.log(window.innerWidth)
});
// Añade un listener para detectar cambios en el tamaño de la pantalla
/*window.addEventListener('resize', () => {
     // Si la pantalla tiene un ancho mayor o igual a 710px y la clase "navbar__menu--show" está presente, entonces la eliminamos
     if (window.matchMedia('(min-width: 710px)').matches && navbarMenu.classList.contains('navbar__menu--show')) {
          navbarMenu.classList.remove('navbar__menu--show');
     }
});*/
// Typing efect
let typed = new Typed('.banner__title__change',{
     strings: ['bloggers','aventureros','viajeros','ruteros'],
     typedpeed: 100,
     backspeed: 100,
     backDelay: 2000,
     loop: true,
})