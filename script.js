const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// ODM SLIDES
const odmslides = document.querySelectorAll(".odm-slider .odm-slide");
let dots = document.querySelectorAll(".dots li");
let slideIndex1 = 0;
let intervalId1 = null;

document.addEventListener("DOMContentLoaded", initializeSlider1);

function initializeSlider1() {
  if (odmslides.length > 0) {
    odmslides[slideIndex1].classList.add("displaySlide");
    intervalId1 = setInterval(nextSlide1, 5000);
  }
}

function showSlide1(index) {
  if (index >= odmslides.length) {
    slideIndex1 = 0;
  } else if (index < 0) {
    slideIndex1 = odmslides.length - 1;
  }

  odmslides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  odmslides[slideIndex1].classList.add("displaySlide");
}

function nextSlide1() {
  removeActiveDot();
  slideIndex1++;
  showSlide1(slideIndex1);
  dots[slideIndex1].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    odmslides.forEach((slide) => {
      slide.classList.remove("displaySlide");
    });

    removeActiveDot();
    dot.classList.add("active");
    console.log(index);
    odmslides[index].classList.add("displaySlide");
    slideIndex1 = index;
  });
});

function removeActiveDot() {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}

// Active navbar
let navbar = document.getElementById("menu_icon");
let menu = document.querySelector(".menu");
const body = document.body;
navbar.addEventListener("click", () => {
  navbar.classList.toggle("bx-x");
  menu.classList.toggle("active");
  // Make this to hide the over 100vh height contents
  if (menu.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

// SubMenu dropdown

const subMenu = document.querySelectorAll(".shortcut-submenu");
const shortcutField = document.querySelectorAll(".shortcut-field");
let subIndex = null; // Change to null to indicate no submenu is initially selected

shortcutField.forEach((field, index) => {
  field.addEventListener("click", () => {
    removeActiveHeight();

    // If the same index is clicked again, remove the max-height class
    if (subIndex === index) {
      subMenu[subIndex].classList.remove("max-height");
      subIndex = null; // Reset subIndex since no submenu is selected
    } else {
      subMenu[index].classList.toggle("max-height");
      subIndex = index;
    }
  });
});

function removeActiveHeight() {
  subMenu.forEach((item) => {
    item.classList.remove("max-height");
  });
}
