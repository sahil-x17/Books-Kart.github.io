const items = document.querySelectorAll(".nav_item");

// items.forEach((e) => {
//   e.addEventListener("click", function (a) {
//     console.log(a.target);
//     const dept = a.target.getAttribute("href");
//     console.log(Number(dept[1]));
//   });
// });

// const nav = document.querySelector(".main-nav-list");
// const catalogue = document.querySelector(".catalogue");

// const initialCoords = nav.getBoundingClientRect();
// console.log(initialCoords.bottom);

// nav.classList.add("sticky");

// window.addEventListener("scroll", function () {
//   console.log(this.window.scrollY);
//   if (this.window.scrollY > initialCoords.bottom) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(nav);

// const header = document.querySelector(".header");

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.intersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
//   // nav.classList.add("sticky");
// };

// const naveObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });

// naveObserver.observe(nav);
