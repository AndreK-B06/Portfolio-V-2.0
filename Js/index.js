document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let bar1 = menu.querySelector("span:nth-child(1)");
  let bar2 = menu.querySelector("span:nth-child(2)");
  let bar3 = menu.querySelector("span:nth-child(3)");

  menu.addEventListener("click", function () {
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      bar1.style.top = "50%";
      bar3.style.top = "50%";
      bar3.style.transform = "rotateZ(90deg)";
      menu.style.transform = "rotateZ(135deg)";
    } else {
      bar1.style.top = "0";
      bar3.style.top = "100%";
      bar3.style.transform = "rotateZ(0deg)";
      menu.style.transform = "rotateZ(0deg)";
    }
  });
});
