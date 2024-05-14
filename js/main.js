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
