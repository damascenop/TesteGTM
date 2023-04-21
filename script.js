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

    const bt1 = document.getElementById("bt1");
    const AnaS = document.getElementById("AnaS");
    const allButtons = document.getElementById("buttons")
    const AnaLuizaDiv = document.getElementById('AnaLuiza');
    const AnaCDiv = document.getElementById('AnaC');
    const ViniciusADiv = document.getElementById('ViniciusA');
    const MarcosVDiv = document.getElementById('MarcosV');
    const GabrielaSDiv = document.getElementById('GabrielaS');
    const CamilaVDiv = document.getElementById('CamilaV');
    const RuthCDiv = document.getElementById('RuthC');
    const MariaCDiv = document.getElementById('MariaC');
    const SidcleaFDiv = document.getElementById('SidcleaF');
    const BiancaADiv = document.getElementById('BiancaA');
    const EvelinRDiv = document.getElementById('EvelinR');
    const GustavoADiv = document.getElementById('GustavoA');
    const LuisFDiv = document.getElementById('LuisF');
    
    

  bt1.addEventListener("click", () => {
    allButtons.style.display = "none";
    AnaS.style.display = "block";
  });

  bt2.addEventListener("click", () => {
    allButtons.style.display = "none";
    AnaLuiza.style.display = "block";
  });
  
  bt3.addEventListener("click", () => {
    allButtons.style.display = "none";
    AnaC.style.display = "block";
  });
  
  bt4.addEventListener("click", () => {
    allButtons.style.display = "none";
    ViniciusA.style.display = "block";
  });
  
  bt5.addEventListener("click", () => {
    allButtons.style.display = "none";
    MarcosV.style.display = "block";
  });
  
  bt6.addEventListener("click", () => {
    allButtons.style.display = "none";
    GabrielaS.style.display = "block";
  });
  
  bt7.addEventListener("click", () => {
    allButtons.style.display = "none";
    CamilaV.style.display = "block";
  });
  
  bt8.addEventListener("click", () => {
    allButtons.style.display = "none";
    RuthC.style.display = "block";
  });
  
  bt9.addEventListener("click", () => {
    allButtons.style.display = "none";
    MariaC.style.display = "block";
  });
  
  bt10.addEventListener("click", () => {
    allButtons.style.display = "none";
    SidcleaF.style.display = "block";
  });
  
  bt11.addEventListener("click", () => {
    allButtons.style.display = "none";
    BiancaA.style.display = "block";
  });
  
  bt12.addEventListener("click", () => {
    allButtons.style.display = "none";
    EvelinR.style.display = "block";
  });
  
  bt13.addEventListener("click", () => {
    allButtons.style.display = "none";
    GustavoA.style.display = "block";
  });
  
  bt14.addEventListener("click", () => {
    allButtons.style.display = "none";
    LuisF.style.display = "block";
  });
