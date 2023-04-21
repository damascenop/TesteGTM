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
  removerSubBtn();
});

form.addEventListener("click", (e) => {
  formComplete.style.display = "flex";
  buttons.style.display = "none";
  h1.style.display = "none";
  removerSubBtn();
});

home.addEventListener("click", (e) => {
  location.reload();
});

function removerSubBtn() {
  const subBotoes = document.querySelectorAll(".subButton");
  subBotoes.forEach((subBotao) => {
    subBotao.classList.remove("ativo");
  });
}

const botoes = document.querySelectorAll(".btn");
const totalBtn = document.querySelector(".buttons");
botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    totalBtn.style.display = "none";
    console.log(botao.innerText);
    let subBtnAtualString;
    switch (botao.innerText) {
      case "Ana Sarah":
        subBtnAtualString = ".sub1";
        break;
      case "Ana Luiza":
        subBtnAtualString = ".sub2";
        break;
      case "Ana Carolina":
        subBtnAtualString = ".sub3";
        break;
      case "Vinicius Aranda":
        subBtnAtualString = ".sub4";
        break;
      case "Marcos Vinicius":
        subBtnAtualString = ".sub5";
        break;
      case "Gabriela Sardoux":
        subBtnAtualString = ".sub6";
        break;
      case "Camila Vitória":
        subBtnAtualString = ".sub7";
        break;
      case "Ruth Catão":
        subBtnAtualString = ".sub8";
        break;
      case "Maria Clara":
        subBtnAtualString = ".sub9";
        break;
      case "Sidclea Florencio":
        subBtnAtualString = ".sub10";
        break;
      case "Bianca Andrade":
        subBtnAtualString = ".sub11";
        break;
      case "Evelin Rodrigues":
        subBtnAtualString = ".sub12";
        break;
      case "Gustavo Aparecido":
        subBtnAtualString = ".sub13";
        break;
      case "Luís Felipe":
        subBtnAtualString = ".sub14";
        break;
    }
    const subBtn = document.querySelector(subBtnAtualString);
    subBtn.classList.add("ativo");
  });
});

function playMeow() {
  let audios = [
    "meow1.wav",
    "meow2.wav",
    "meow3.wav",
    "meow4.wav",
    "meow5.wav",
  ];
  let randomAudio = audios[Math.floor(Math.random() * 5)];
  
  let audio = new Audio("./audio/" + randomAudio);
  audio.play();
}
const catIcon = document.querySelectorAll(".icon-cat");
catIcon.forEach((item) => {
  item.addEventListener("click", playMeow);
});
