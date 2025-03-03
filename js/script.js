// Selecionar a câmera

const listsBtn = document.querySelectorAll(".tab-list");
const listsTab = document.querySelectorAll(".tab-item");

listsBtn.forEach((btn, idx) =>{
    btn.addEventListener("click", () => {
        document.querySelector(".tab-list.active").classList.remove("active");
        btn.classList.add("active")

        document.querySelector(".tab-item.active").classList.remove("active");
        listsTab[idx].classList.add("active")
    });
});

// Menu Hamburguer

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

// Perguntas Frequentes

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Contagem de estrelas das Avaliações - 1°versão

function setStars(rating) {
    const stars = document.getElementById("stars");
    let starHTML = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starHTML += '<span class="filled">★</span>';
        } else {
            starHTML += '<span>★</span>';
        }
    }
    stars.innerHTML = starHTML;
}

setStars(4); // Define a avaliação como 4 estrelas

