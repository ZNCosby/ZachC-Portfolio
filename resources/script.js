document.addEventListener("mousemove", mouse => {
  let logo = document.getElementById("logo");
  logo.style.left = mouse.pageX + 15 + "px";
  logo.style.top = mouse.pageY + "px";
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

count = 0;
function imageClick() {
  image = document.getElementById("Zach-1");
  let borderColors = ["#941B0C", "#392061", "#FFFFFF", "#0F1016", "#3A3C52", "#3C6E71"];

  image.style.border = ".5em solid " + borderColors[count];
  count++;
  if (count >= borderColors.length) {
    count = 0;
  }
}