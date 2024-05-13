document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("h1, h2, p, img, div");
  if (!elements.length) {
    console.error("No elements found for fade-in effect");
    return;
  }

  elements.forEach((element) => {
    element.classList.add("fade-in-section");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const fadeInElements = document.querySelectorAll(".fade-in-section");
  if (!fadeInElements.length) {
    console.error("No fade-in-section elements found");
    return;
  }

  fadeInElements.forEach((section) => {
    observer.observe(section);
  });
});
