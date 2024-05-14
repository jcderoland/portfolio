document.addEventListener("DOMContentLoaded", function () {
  // Sélection des éléments à animer
  const elements = document.querySelectorAll("p, img, button");

  // Ajout de la classe 'fadein' à chaque élément trouvé
  elements.forEach((element) => {
    element.classList.add("fadein");
  });

  // Gestion de l'effet de visibilité au scroll
  window.addEventListener("scroll", function () {
    var pageTop = window.scrollY;
    var pageBottom = pageTop + window.innerHeight;

    elements.forEach((element) => {
      if (
        element.offsetTop + element.offsetHeight > pageTop &&
        element.offsetTop < pageBottom
      ) {
        element.classList.add("visible");
      }
    });
  });
});

/* toggle button mobile menu
 * ---------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".s-header__menu-toggle");
  const siteBody = document.querySelector("body");
  const mainNav = document.querySelector(".s-header__nav");

  if (toggleButton && mainNav) {
    toggleButton.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche le navigateur de suivre le lien
      this.classList.toggle("is-clicked"); // Toggle la classe sur le bouton
      siteBody.classList.toggle("menu-is-open"); // Toggle la classe sur le body
      mainNav.classList.toggle("is-visible"); // Ajoutez cette classe à votre CSS si nécessaire
    });
  }
});
// end toggle button mobile menu
