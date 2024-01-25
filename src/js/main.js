const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-on");
  navMenu.classList.toggle("hidden");
});

// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Navbar

// Typed
import Typed from "typed.js";

const typed = new Typed("#description", {
  strings: ["Saya suka Programing", "Saya suka belajar hal-hal baru", "Saya suka dengan teknologi"],
  typeSpeed: 50,
  loop: true,
  backDelay: 2000,
  cursorChar: "_",
});

// Typed

// Confeti
import confetti from "canvas-confetti";
const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;
document.body.append(myCanvas);

const confettiBtn = document.getElementById("hire");

confettiBtn.addEventListener("click", function () {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});
// Confeti
