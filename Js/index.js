let menu = document.getElementById("menu");
let bar1 = menu.querySelector("li:nth-child(1)");
let bar2 = menu.querySelector("li:nth-child(2)");
let bar3 = menu.querySelector("li:nth-child(3)");

menu.addEventListener("click", function () {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    McBar1.style.top = "50%";
    McBar3.style.top = "50%";
    McBar3.style.transform = "rotateZ(90deg)";
    menu.style.transform = "rotateZ(135deg)";
  } else {
    McBar1.style.top = "0";
    McBar3.style.top = "100%";
    McBar3.style.transform = "rotateZ(0deg)";
    menu.style.transform = "rotateZ(0deg)";
  }
});
