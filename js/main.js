const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("open");
  document.body.classList.toggle("mobile-overflow");
});

document.addEventListener("DOMContentLoaded", function () {
  const optionSelectors = document.querySelectorAll(".option-selector");

  optionSelectors.forEach((optionSelector) => {
    const input = optionSelector.querySelector(".session-option input");

    optionSelector.addEventListener("click", function (event) {
      if (event.target.tagName !== "INPUT") {
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change"));
      }
    });

    input.addEventListener("change", function () {
      if (input.type === "radio" && input.checked) {
        // Remove the active class only from radio button containers
        optionSelectors.forEach((selector) => {
          const selectorInput = selector.querySelector(".session-option input");
          if (selectorInput.type === "radio") {
            selector.classList.remove("active");
          }
        });
      }

      // Toggle the active class based on the checked state
      if (input.checked) {
        optionSelector.classList.add("active");
      } else {
        optionSelector.classList.remove("active");
      }
    });
  });
});
