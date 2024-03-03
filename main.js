/*==================== Mostrar Menu ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validar que la variable existe
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Agregamos la clase show-menu (mostrar menu) a la etiqueta div con la clase nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== Remover el menu movil ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos clic en cada enlace de navegación, eliminamos la clase mostrar-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DESPLAZAR SECCIONES ENLACE ACTIVO ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*Scroll Top*/
document.documentElement.scrollTop = 0;

/* Reduce the size and print on an A4 sheet*/
function scaleCv() {
    document.body.classList.add('scale-cv')
}
/*Remove the size when the cv is downloaded*/
function removeScale() {
    document.body.classList.remove('scale-cv')
}
/*pdf geberated area*/
let areaCv = document.getElementById('area-cv');
let resumeButton = document.getElementById('resume-button');

 /*html2 options */
let opt = {
    margin:       0,
    filename:     'Elemircv.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 6 },
    jsPDF:        {format: 'a4', orientation: 'portrait' }
}

/*Function to call areaCv and Html2pdf options*/
function generateResume(){
    html2pdf(areaCv, opt)
}
//when the button is clicked it executes three functionns//
resumeButton.addEventListener('click', () =>{
    /*1-The class .scale-cv is added tot he body*/
    scaleCv()
    /*2-The pdf is generated*/
    generateResume()
    /*3- The .scale cv is removed from the body after 5seconds to return to*/
    setTimeout(removeScale, 5000)
})