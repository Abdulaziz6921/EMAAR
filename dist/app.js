let section_counter = document.querySelector("#payment_plans"),
  counters = document.querySelectorAll(".counter-item .counter"),
  btns = document.querySelectorAll(".close-btn"),
  popUp1 = document.querySelector("#Modal1"),
  popUp2 = document.querySelector("#Modal2"),
  popUp3 = document.querySelector("#Modal3");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("-translate-x-full");

    if (btn.parentElement.parentElement.classList.contains("modal")) {
      document.body.classList.toggle("overflow-y-hidden");
    }
  });
});

let showPopup = () => {
  popUp1.classList.toggle("-translate-x-full");
};

setTimeout(() => {
  popUp2.classList.toggle("-translate-x-full");
  // popUp2.parentElement.style = "overflow:hidden";
}, 1000);

let openProject = () => {
  window.scrollTo(0, 0);
  popUp3.classList.toggle("-translate-x-full");
  document.body.classList.toggle("overflow-y-hidden");
  popUp3.style = "overflow:auto";
};

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 70;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        } else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

AOS.init();

Fancybox.bind("[data-fancybox]", {});
