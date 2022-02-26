/** @format */

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let body = document.querySelector("body");

count = 0;

function Increase() {
  count++;
  p.innerText = count;

  if (count > 0) {
    body.style.backgroundColor = "red";
  }
}

Increase();

btn3.addEventListener("click", Increase);

function Decrease() {
  count--;
  p.innerText = count;

  if (count < 0) {
    body.style.backgroundColor = "blue";
  }
}

Decrease();

btn1.addEventListener("click", Decrease);

function Reset() {
  p.innerText = 0;

  if (p.innerText == 0) {
    body.style.backgroundColor = "yellow";
  }
}

Reset();

btn2.addEventListener("click", Reset);

// JAVASCRIPT

// let bee = document.querySelector('h1')
// let dec = document.querySelector('.dc')
// let res = document.querySelector('.res')
// let inc = document.querySelector('.inc')
// let bgrc = document.body

// // Decrease function
// function wkd() {
//   bee.textContent--
//   if (bee.textContent < 0) {
//     bgrc.style.backgroundColor = 'yellow'
//   }
// }

// dec.addEventListener('click', wkd)

// // Reset function

// function wks() {
//   bee.textContent = 0
//   if (bee.textContent == 0) {
//     bgrc.style.backgroundColor = 'red'
//   }
// }

// res.addEventListener('click', wks)

// // Increase function

// function wkss() {
//   bee.textContent++
//    if (bee.textContent > 0    ) {
//      bgrc.style.backgroundColor = 'green'
//    }
// }

// inc.addEventListener('click', wkss)
