// // Display elements on scroll

// document.addEventListener("DOMContentLoaded", function () {
//   // Sélection des éléments à animer
//   const elements = document.querySelectorAll("p, img, button");

//   // Ajout de la classe 'fadein' à chaque élément trouvé
//   elements.forEach((element) => {
//     element.classList.add("fadein");
//   });

//   // Gestion de l'effet de visibilité au scroll
//   window.addEventListener("scroll", function () {
//     var pageTop = window.scrollY;
//     var pageBottom = pageTop + window.innerHeight;

//     elements.forEach((element) => {
//       if (
//         element.offsetTop + element.offsetHeight > pageTop &&
//         element.offsetTop < pageBottom
//       ) {
//         element.classList.add("visible");
//       }
//     });
//   });
// });

/* toggle button mobile menu
 * ---------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".s-header__menu-toggle");
  const siteBody = document.querySelector("body");
  const mainNav = document.querySelector(".s-header__nav");

  if (toggleButton && mainNav) {
    toggleButton.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("is-clicked");
      siteBody.classList.toggle("menu-is-open");
      mainNav.classList.toggle("is-visible");
    });
  }
});
// end toggle button mobile menu

// Light blue theme
document.addEventListener("DOMContentLoaded", function () {
  const themeToggler = document.getElementById("theme-toggler");
  const themeIcon = themeToggler.querySelector("i");

  themeToggler.addEventListener("click", function (e) {
    e.preventDefault();
    document.documentElement.classList.toggle("light-theme");
    if (document.documentElement.classList.contains("light-theme")) {
      themeIcon.className = "fa-solid fa-moon";
    } else {
      themeIcon.className = "fa-solid fa-sun";
    }
  });
});

// Language switch
function loadLanguage(lang) {
  fetch(`translations/lang_${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        if (typeof data[key] === "object") {
          el.textContent = data[key].text;
          el.setAttribute("href", data[key].url);
        } else {
          el.textContent = data[key];
        }
      });
    });
}
