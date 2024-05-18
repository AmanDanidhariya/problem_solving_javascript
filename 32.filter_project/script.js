const tabs = document.querySelector(".tabs");
const images = document.querySelectorAll(".images");
console.log(images);

tabs.addEventListener("click", function (e) {
  if (e.target.dataset.category !== undefined)
    filterSearch(e.target.dataset.category);
});

function filterSearch(target) {
  images.forEach((elem, index) => {
    elem.classList.remove("none");
    if (elem.dataset.category === target || target === "all") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
}
