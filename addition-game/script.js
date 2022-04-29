let firstNumber = document.querySelector(".num1");
let secondNumber = document.querySelector(".num2");
let input = document.querySelector("#input");
let button = document.querySelector(".button");

let num1 = Math.floor(Math.random() * 100);
num1 < 10 ? firstNumber.textContent = `0${num1}` : firstNumber.textContent = num1;

let num2 = Math.floor(Math.random() * 100);
num2 < 10 ? secondNumber.textContent = `0${num2}` : secondNumber.textContent = num2;

let result = num1 + num2;

input.focus();

button.addEventListener("click", () => {
	input.value == result ? alert("correct") : alert("incorrect");
});