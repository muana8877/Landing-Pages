const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function page3Animation() {
  let boxC = document.querySelector("#box-container");
  let box = document.querySelectorAll(".box");
  let fixed = document.querySelector(".img-container");
  let isHoveringBox = false; // Track when hovering over the box

  box.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      isHoveringBox = true;
      let boxImage = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${boxImage})`;
      fixed.style.display = "block";
    });

    e.addEventListener("mouseleave", function () {
      isHoveringBox = false;
      setTimeout(() => {
        if (!isHoveringBox) fixed.style.display = "none";
      }, 100);
    });
  });

  // Add event listeners to the fixed image container
  fixed.addEventListener("mouseenter", function () {
    isHoveringBox = true;
    disableScroll();
  });

  fixed.addEventListener("mouseleave", function () {
    isHoveringBox = false;
    fixed.style.display = "none";
    enableScroll();
  });
}

//Swiper
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 100,
    initialSlide: 0,
  });
}
//cursor animation
function cursorAnimation() {
  let cursor = document.querySelector(".cursor");
  let pg = document.querySelector("#page4");
  console.log(pg);
  pg.addEventListener("mousemove", (e) => {
    cursor.style.display = "block";
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      ease: "none",
    });
  });
  pg.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
}

function loaderAnimation() {
  let loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3400);
}

let nav = document.querySelector("nav");
let text = document.querySelector("#frontText");
gsap.set(nav, { y: "-100%" });
gsap.to(nav, {
    y: 0,
    duration: 1,
    delay:3.5,
    ease: "power2.out",
});


AOS.init({
    offset: 150,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out'
  });
cursorAnimation();
page3Animation();
swiperAnimation();
loaderAnimation();
