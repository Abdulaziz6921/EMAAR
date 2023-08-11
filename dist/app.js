let section_counter = document.querySelector("#payment_plans"),
  counters = document.querySelectorAll(".counter-item .counter"),
  btns = document.querySelectorAll(".close-btn"),
  popUp1 = document.querySelector("#Modal1"),
  popUp2 = document.querySelector("#Modal2"),
  popUp3 = document.querySelector("#Modal3");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("-translate-x-full");
    btn.parentElement.parentElement.parentElement.classList.toggle(
      "overflow-y-scroll"
    );
    console.log(btn.parentElement.parentElement.parentElement);
  });
});

let showPopup = () => {
  popUp1.classList.toggle("-translate-x-full");
  popUp1.parentElement.style = "overflow:hidden";
};

let openProject = () => {
  popUp3.classList.toggle("-translate-x-full");
  popUp3.parentElement.style = " overflow: hidden;";
  popUp3.style = "overflow:auto";
};

setTimeout(() => {
  window.scrollTo(0, 0);
  popUp2.classList.toggle("-translate-y-full");
  popUp2.parentElement.classList.add("overflow-hidden");
}, 2000);

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
