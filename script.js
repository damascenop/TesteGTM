var icons = document.querySelector(".icons");
var allLi = document.querySelectorAll("li");
var joy = document.querySelector(".joy");
var buttons = document.querySelector(".buttons");
var form = document.querySelector(".form");
var formComplete = document.querySelector(".formComplete");
var home = document.querySelector(".home");
var h1 = document.querySelector(".h1");

allLi.forEach((li, index) => {
  li.addEventListener("mouseover", (e) => {
    icons.querySelector(".activeList").classList.remove("activeList");
    li.classList.add("activeList");

    var indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 90}px))`;
  });
});

joy.addEventListener("click", (e) => {
  buttons.style.display = "flex";
  formComplete.style.display = "none";
  h1.style.display = "none";
});

form.addEventListener("click", (e) => {
  formComplete.style.display = "flex";
  buttons.style.display = "none";
  h1.style.display = "none";
});

home.addEventListener("click", (e) => {
  location.reload();
});

const botoes = document.querySelectorAll(".btn");
const totalBtn = document.querySelector(".buttons");
const anaS = document.querySelector("#AnaS");

botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    totalBtn.style.display = "none";

    switch (botao.innerText) {
      case "Ana Sarah":
        anaS.style.display = "block";
        break;
    }
  });
});
