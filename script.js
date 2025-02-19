//dark mood
function myfuncion() {
    var element = document.body;
    element.classList.toggle("dark-mood");
}
//search box
function searchText() {
    let query = document.getElementById("searchBox").value.trim();
    let contentDiv = document.getElementById("content");
    let paragraphs = contentDiv.getElementsByTagName("p");
    let found = false;

    for (let p of paragraphs) {
        p.innerHTML = p.innerHTML.replace(/<span class="highlight">|<\/span>/g, "");
    }

    if (query !== "") {
        for (let p of paragraphs) {
            if (p.textContent.includes(query)) {
                p.innerHTML = p.textContent.replace(
                    new RegExp(query, "gi"),
                    match => `<span class="highlight">${match}</span>`
                );
                found = true;
            }
        }
    }

    document.getElementById("notFoundMessage").style.display = found ? "none" : "block";
}
//scrolling
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
//sandwich bar
function toggleNav() {
    const nav = document.getElementById("navbar");
    const menuIcon = document.querySelector(".menu-icon");

    if (nav.style.width === "35%") {
        nav.style.width = "0";
        menuIcon.classList.remove("change");
    } else {
        nav.style.width = "35%";
        menuIcon.classList.add("change");
    }
}
//slide bar
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
const slideWidth = images[0].clientWidth;
let slideInterval;

function goToSlide(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 2000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

startAutoSlide();
//scrolling image
function revealOnScroll() {
    const images = document.querySelectorAll("img");
    const windowHeight = window.innerHeight;

    images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < windowHeight - 100) {
            image.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);