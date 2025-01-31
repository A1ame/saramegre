document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки

        const targetId = this.getAttribute('href').substring(1); // Получаем ID цели
        const targetElement = document.getElementById(targetId); // Находим элемент цели

        if (targetElement) {
            const headerHeight = 170; // Высота фиксированного заголовка
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight; // Вычисляем позицию прокрутки

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".expand-btn").forEach(button => {
        button.addEventListener("click", function () {
            let container = this.closest(".info-container");
            let extraBlocks = container.querySelector(".extra-blocks");
            extraBlocks.style.display = extraBlocks.style.display === "grid" ? "none" : "grid";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".expand-btn1").forEach(button => {
        button.addEventListener("click", function () {
            let container = this.closest(".info-container");
            let extraBlocks = container.querySelector(".extra-blocks");
            extraBlocks.style.display = extraBlocks.style.display === "grid" ? "none" : "grid";
        });
    });
});




// Открытие/закрытие меню на мобильных устройствах
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
        navMenu.classList.remove('active');
    }
});