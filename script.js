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