const searchBody = document.querySelector(".search");
document.addEventListener("click", search);
function search(event) {
  if (event.target.closest(".button__search")) {
    searchBody.classList.toggle("_active");
  }
  if (!event.target.closest(".search")) {
    searchBody.classList.remove("_active");
  }
}
document.addEventListener("keyup", function (event) {
  console.log(event.code);
  if (event.code === "Escape") {
    searchBody.classList.remove("_active");
  }
});

const item = document.querySelector(".input__search");
const itemLimit = item.getAttribute("maxlength");
const counter = document.querySelector(".input__counter span");
counter.innerHTML = itemLimit;

item.addEventListener("keyup", txtSetCounter);

item.addEventListener("keydown", function (event) {
  if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
  const txtCounterResult = itemLimit - item.value.length;
  counter.innerHTML = txtCounterResult;
}
