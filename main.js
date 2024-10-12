let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

function updateCarousel() {
    const offset = currentIndex * -100; // Menghitung posisi untuk bergeser
    carousel.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Kembali ke slide pertama setelah yang terakhir
    }
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;  // Kembali ke slide terakhir dari yang pertama
    }
    updateCarousel();
});

// Inisialisasi posisi slide pertama
updateCarousel();
