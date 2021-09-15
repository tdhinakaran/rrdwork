var currentSlide = 3;
const slides = document.querySelectorAll(".wheel")

const init = (n) => {
    slides.forEach((slide) => {
        slide.style.display = "block"
            // dots.forEach((dot) => {
            //     dot.classList.remove("active")
            // })
            // console.log(slides[n], n)
    })
    console.log(currentSlide, n)
    slides[n].style.display = "none"
        // dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
    if (currentSlide == slides.length - 1) {
        // alert();
        currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide + 1
            // slides[n++].style.display = "none"
        console.log(currentSlide, slides.length)
        init(currentSlide)
        document.querySelector(".next").classList.add('default');
        document.querySelector(".prev").classList.remove('default');
    }

}

const prev = () => {
    console.log(currentSlide, slides.length, 'prev')
    if (currentSlide !== slides.length - 1) {
        currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide - 1
            // alert();
        console.log(currentSlide, slides.length)
        init(currentSlide)
        document.querySelector(".prev").classList.add('default');
        document.querySelector(".next").classList.remove('default');
    }
}

document.querySelector(".next").addEventListener('click', next)
document.querySelector(".prev").addEventListener('click', prev)