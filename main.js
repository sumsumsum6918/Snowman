console.log("version1");

document.querySelector(".js-break-button").addEventListener("click", () => {
  breakSnowman();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    breakSnowman();
  }
});

document.querySelector(".js-mend-button").addEventListener("click", () => {
  mendSnowman();
});

document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Backspace") {
    mendSnowman();
  }
});
function breakSnowman() {
  document.querySelector(".circle-top").classList.toggle("bounce-out-top");
  document
    .querySelector(".circle-middle")
    .classList.toggle("slide-out-elliptic-top-bck");

  document.querySelector(".circle-bottom").classList.toggle("roll-out-left");

  setTimeout(() => {
    mendSnowman();
  }, 7000);
}
function mendSnowman() {
  document.querySelector(".circle-top").classList.remove("bounce-out-top");
  document
    .querySelector(".circle-middle")
    .classList.remove("slide-out-elliptic-top-bck");

  document.querySelector(".circle-bottom").classList.remove("roll-out-left");
}
