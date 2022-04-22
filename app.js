const ikon = document.querySelector(".ikon");
const navv = document.querySelector(".navv");
const fa = document.querySelector(".fa-solid");
const remo = document.querySelector(".ikon-2");
const delet = document.querySelector(".fa-circle-minus")

ikon.addEventListener("click", navbar);
delet.addEventListener("click", remove);

function navbar(){
        navv.style.left = "0";
        fa.style.display = "none";
        remo.style.display = "block";
}
function remove(){
        navv.style.left = "-100%";
        fa.style.display = "block";
        remo.style.display = "none";
}

