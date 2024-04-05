/* -----------------
* Github button *
-------------------*/
const DiceRollerGithub = document.querySelector("#dice-roller-github");
const karlClickerGithub = document.querySelector("#karl-clicker-github");
const gosipGithub = document.querySelector("#gosip-github");

/* -----------------
* Live page button *
-------------------*/

const DiceRollerLive = document.querySelector("#dice-roller-live");
const karlClickerLive = document.querySelector("#karl-clicker-live");
const gosipLive = document.querySelector("#gposip-live");

/* ------------------
* Linking to Github *
--------------------*/

DiceRollerGithub.addEventListener("click", function () {
  window.open("https://github.com/AndreK-B06/Dice-Roller", "_blank");
});

karlClickerGithub.addEventListener("click", function () {
  window.open(
    "https://github.com/AndreK-B06/cookie-clicker-Karl-clicer-",
    "_blank"
  );
});

gosipGithub.addEventListener("click", function () {
  window.open("https://github.com/AndreK-B06/modul-d-oppgave-uke-1", "_blank");
});
/* --------------------
* Linking to Live page *
-----------------------*/

DiceRollerLive.addEventListener("click", function () {
  window.open("https://andrek-b06.github.io/Dice-Roller/", "_blank");
});

karlClickerLive.addEventListener("click", function () {
  window.open(
    "https://andrek-b06.github.io/cookie-clicker-Karl-clicer-/",
    "_blank"
  );
});

gosipLive.addEventListener("click", function () {
  window.open("https://inquisitive-kataifi-606b53.netlify.app/", "_blank");
});
