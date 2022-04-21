const ikon = document.querySelector(".ikon");
const navv = document.querySelector(".navv");
const fa = document.querySelector(".fa-solid")

ikon.addEventListener("click", navbar);

function navbar(){
        navv.style.left = "0";
        fa.style.color = "#fff"
}
