window.onload = function () {
  const descriptions = document.querySelectorAll(".plan__description");

  descriptions.forEach((desc) => {
    const showMoreBtn = desc.querySelector(".plan__show-more");
    const hiddenPart = desc.querySelector(".plan__d-part2");

    if (showMoreBtn && hiddenPart) {
      showMoreBtn.addEventListener("click", () => {
        hiddenPart.classList.toggle("plan__d-part2--hidden");
        showMoreBtn.textContent = hiddenPart.classList.contains(
          "plan__d-part2--hidden"
        )
          ? "Show more"
          : "Show less";
      });
    }
  });
};
