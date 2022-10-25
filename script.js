let title = document.querySelector('.title');
let list = document.querySelector(".dino-list");


title.addEventListener('click', function () {
    title.classList.add('active');
    list.style.visibility = 'visible';
});

// Берём кнопку вперёд
let btn = document.querySelector(".dino-btn");
// Берём слайды
let slides = document.querySelectorAll(".dino-item");



for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", function () {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle("hidden");
        }
        slides[i].classList.toggle("active");
        slides[i].classList.toggle("hidden");
    })
}