let abrir = document.querySelector(".abrir-modal");
let fechar = document.querySelector(".btn-close");
let modal = document.querySelector(".modal-background");

let card = document.querySelectorAll(".card");
let cardBtn = document.querySelectorAll(".btn-card");

abrir.addEventListener("click", () => {
    modal.style.visibility = "visible"
})
    
fechar.addEventListener("click", () => {
    modal.style.visibility = "hidden"
})


for (let i in card){
    card[i].addEventListener("mouseover", () => {
        cardBtn[i].style.visibility = "visible"
    })

    card[i].addEventListener("mouseout", () => {
        cardBtn[i].style.visibility = "hidden"
    })
}

