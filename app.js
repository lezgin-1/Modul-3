//  header codes

const icon = document.querySelector(".ikon");
const navv = document.querySelector(".navv");
const fa = document.querySelector(".fa-solid");
const remo = document.querySelector(".ikon-2");
const delet = document.querySelector(".fa-circle-minus");
const firstBlockButtons = document.querySelectorAll('.buttons');
const secondBlockButtons = document.querySelectorAll('.buton');

icon.addEventListener("click", navbar);
delet.addEventListener("click", remove);

function navbar() {
  navv.style.left = "0";
  fa.style.display = "none";
  remo.style.display = "block";
}
function remove() {
  navv.style.left = "-100%";
  fa.style.display = "block";
  remo.style.display = "none";
}


firstBlockButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const buttons = event.target.parentElement.children;
    for (let i = 0; i < buttons.length; ++i) {
      const button = buttons[i];
      if (button.classList.contains('active')) button.classList.remove('active');
    }
    const button = event.target;
    if (button.classList.contains('button')) button.classList.add('active');
  });
})

secondBlockButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const buttons = event.target.parentElement.children;
    for (let i = 0; i < buttons.length; ++i) {
      const button = buttons[i];
      if (button.classList.contains('active')) button.classList.remove('active');
    }
    const button = event.target;
    if (button.classList.contains('buton')) button.classList.add('active');
  });
})



// section-2 codes
let btn = document.querySelectorAll(".exchange li");
let btn2 = document.querySelectorAll(".exchange-2 li");
let input1 = document.querySelector(".first_input input");
let input2 = document.querySelector(".second_input input");
let footer1 = document.querySelector(".footer-1");
let footer2 = document.querySelector(".footer-2");
let first = "RUB";
let second = "USD";
let b;
btn[0].style.backgroundColor ="crimson";
btn2[1].style.backgroundColor = "crimson"
fetch(`https://api.exchangerate.host/latest?base=${first}`)
  .then((res) => res.json())
  .then((data) => {
    let a = data.rates;
    let arrKeys = Object.keys(a);
    arrKeys.forEach((ee, index) => {
      if (ee == `${second}`) {
        b = Object.values(a)[index];
        footer1.innerText = `1 ${first} = ${b} ${second}`;
        footer2.innerText = `1 ${second} = ${1/b} ${first}`;
      }
    })
  })

btn.forEach((element) => {
  element.addEventListener("click", (e, index) => {
let ch=e.target.parentElement.children
for (let i = 0; i < ch.length; i++) {
  ch[i].style.backgroundColor="white"
}
e.target.style.backgroundColor="crimson";
    first = e.target.id;
    fetch(`https://api.exchangerate.host/latest?base=${first}`)
      .then((res) => res.json())
      .then((data) => {
        let a = data.rates;
        let arrKeys = Object.keys(a);
        arrKeys.forEach((ee, index) => {
          if (ee == `${second}`) {
            b = Object.values(a)[index];
            input2.value = Number(input1.value) * b;
            footer1.innerText = `1 ${first} = ${b} ${second}`
            footer2.innerText = `1 ${second} = ${1/b} ${first}`

          }

        });
      });

  });
});

btn2.forEach((element2) => {
  element2.addEventListener("click", (e) => {
    let ch=e.target.parentElement.children
for (let i = 0; i < ch.length; i++) {
  ch[i].style.backgroundColor="white"
}
e.target.style.backgroundColor="crimson";

    second = e.target.id;
    fetch(`https://api.exchangerate.host/latest?base=${first}`)
      .then((res) => res.json())
      .then((data) => {
        let a = data.rates;
        let arrKeys = Object.keys(a);
        arrKeys.forEach((ee, index) => {
          if (ee == `${second}`) {
            b = Object.values(a)[index];
            input2.value = Number(input1.value) * b;
            footer1.innerText = `1 ${first} = ${b} ${second}`
            footer2.innerText = `1 ${second} = ${1/b} ${first}`

          }
        });
      });
  });
});

input1.addEventListener('keyup', () => {
  fetch(`https://api.exchangerate.host/latest?base=${first}`)
    .then((res) => res.json())
    .then((data) => {
      let a = data.rates;
      let arrKeys = Object.keys(a);
      arrKeys.forEach((ee, index) => {
        if (ee == `${second}`) {
          b = Object.values(a)[index];
          input2.value = Number(input1.value) * b;
        }
      });
    });
})



