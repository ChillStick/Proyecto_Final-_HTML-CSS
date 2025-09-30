let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    }

function enviarFormulario(event) {
    event.preventDefault();
    alert("¡Gracias por tu mensaje! Lo tendremos en cuenta.");
    }

$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="img/Arrow_left.svg">',
    nextArrow: '<img src="img/Arrow_right.svg">',
    slidesToShow: 3,
    responsive: [
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
    }
    ]
});
