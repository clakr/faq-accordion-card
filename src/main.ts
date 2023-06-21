import "./style.scss";

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

(function () {
  const title = document.querySelector("title");
  changeTextContent(title);

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);

  const details = document.querySelectorAll("details");
  details.forEach((detail) => {
    detail.addEventListener("click", function (event) {
      event.preventDefault();

      const openedDetail = document.querySelector("details[open]");
      openedDetail?.removeAttribute("open");

      if (this !== openedDetail) {
        this.setAttribute("open", "");
      } else {
        details[1].setAttribute("open", "");
      }
    });
  });
})();
