var icons = document.querySelector(".icons");
var allLi = document.querySelectorAll("li");
var joy = document.querySelector(".joy");
var buttons = document.querySelector(".buttons");
var form = document.querySelector(".form");
var formComplete = document.querySelector(".formComplete");
var home = document.querySelector(".home");
var h1 = document.querySelector(".h1");
var guilhermeBtn = document.querySelector(".GuilhermeGalvao");

guilhermeBtn.addEventListener("click",function(){
  guilhermeBtn.classList.toggle('clicked');
})

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

const botoes = document.querySelectorAll("#buttons button");
const totalBtn = document.querySelector(".buttons");
botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    totalBtn.style.display = "none";
    console.log(botao.innerText);
    let subBtnAtualString;
    switch (botao.innerText) {
      case "Henrique Gabriel":
        subBtnAtualString = ".sub1";
        break;
      case "João Guilherme":
        subBtnAtualString = ".sub2";
        break;
      case "Kayuan Rennan":
        subBtnAtualString = ".sub3";
        break;
      case "Maria Clara":
        subBtnAtualString = ".sub4";
        break;
      case "Vitor Mackert":
        subBtnAtualString = ".sub5";
        break;
      case "Augusto Bosco":
        subBtnAtualString = ".sub6";
        break;
      case "Colyana Magalhaes":
        subBtnAtualString = ".sub7";
        break;
      case "Giovana Soares":
        subBtnAtualString = ".sub8";
        break;
      case "Izael De Araujo":
        subBtnAtualString = ".sub9";
        break;
      case "Jose Renato":
        subBtnAtualString = ".sub10";
        break;
      case "Cinthia Rocha":
        subBtnAtualString = ".sub11";
        break;
      case "João Vitor":
        subBtnAtualString = ".sub12";
        break;
      case "Layla Michelline":
        subBtnAtualString = ".sub13";
        break;
      case "Lorena Saldanha":
        subBtnAtualString = ".sub14";
        break;
      case "Nelson Jose":
         subBtnAtualString = ".sub15";
        break;
      case "Kayane Martins":
        subBtnAtualString = ".sub16";
        break;
      case "Vitor Feijo":
        subBtnAtualString = ".sub17";
        break;
      case "Wanderson Nogueira":
        subBtnAtualString = ".sub18";
        break;
      case "Beatriz Gonçalves":
        subBtnAtualString = ".sub19";
        break;
      case "Millena Monteiro":
        subBtnAtualString = ".sub20";
        break;
      case "Nathalia De Souza":
        subBtnAtualString = ".sub21";
        break;
      case "Lucas Vieira":
        subBtnAtualString = ".sub22";
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
    "meow4.mp3",
    "meow5.mp3",
  ];
  let randomAudio = audios[Math.floor(Math.random() * 5)];

  let audio = new Audio("./audio/" + randomAudio);
  audio.play();
}
const catIcon = document.querySelectorAll(".icon-cat");
catIcon.forEach((item) => {
  item.addEventListener("click", playMeow);
});
