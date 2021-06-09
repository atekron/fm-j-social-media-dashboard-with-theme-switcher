document.querySelector(".theme__toggle-bg").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
  let label = document.querySelector(".theme__label");
  if (label.innerText === "Light Mode") {
    label.innerText = "Dark Mode";
  } else {
    label.innerText = "Light Mode";
  }
});
