
const linkElements = document.querySelectorAll(".kpl, .huye, .vjn");


linkElements.forEach((element) => {
  element.addEventListener("click", () => {

    let redirectLink;
    if (element.classList.contains("kpl")) {
      redirectLink = "https://kplonline.org/";
    } else if (element.classList.contains("huye")) {
      redirectLink = "https://ur.ac.rw/?Library";
    } else if (element.classList.contains("vjn")) {
      redirectLink = "https://www.facebook.com/Visionjeunesse2/";
    }

    window.location.href = redirectLink;
  });
});
