import {Red, Pink, Orange, Yellow, Purple, Green, Blue, Brown, White, Gray, allColors} from "./colors.js"
console.log(allColors);
const button = document.querySelector("#btn")

const color = document.querySelector(".color")

    button.addEventListener("click", () => {
	let hexColor = allColors[getRandomNumber()]
	document.body.style.backgroundColor = hexColor
	color.textContent = hexColor
	})
	function getRandomNumber() {
		return Math.floor(Math.random() * allColors.length);
	  }
    const redBtn = document.querySelector('#btn1');
	const allButtons = document.querySelectorAll(".btn1")
	redBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Red[Math.floor(Math.random() * Red.length)]
		allButtons.forEach((el) => {
			el.classList.remove("active")
		})
		redBtn.classList.add("active")
	})
	const pinkBtn = document.querySelector('#btn2');
	pinkBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Pink[Math.floor(Math.random() * Pink.length)]
		allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	pinkBtn.classList.add("active")
	})
	const orangeBtn = document.querySelector('#btn3');
	orangeBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Orange[Math.floor(Math.random() * Orange.length)]
		allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	orangeBtn.classList.add("active")
	})
	const yellowBtn = document.querySelector('#btn4');
	yellowBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Yellow[Math.floor(Math.random() * Yellow.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	yellowBtn.classList.add("active")
	})
	const purpleBtn = document.querySelector('#btn5');
	purpleBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Purple[Math.floor(Math.random() * Purple.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	purpleBtn.classList.add("active")
	})
	const greenBtn = document.querySelector('#btn6');
	greenBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Green[Math.floor(Math.random() * Green.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	greenBtn.classList.add("active")
	})
	const blueBtn = document.querySelector('#btn7');
	blueBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Blue[Math.floor(Math.random() * Blue.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	blueBtn.classList.add("active")
	})
	const brownBtn = document.querySelector('#btn8');
	brownBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Brown[Math.floor(Math.random() * Brown.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	brownBtn.classList.add("active")
	})
	const whiteBtn = document.querySelector('#btn9');
	whiteBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = White[Math.floor(Math.random() * White.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	whiteBtn.classList.add("active")
	})
	const grayBtn = document.querySelector('#btn10');
	grayBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Gray[Math.floor(Math.random() * Gray.length)]
    allButtons.forEach((el) => {
			el.classList.remove("active")
		})
	grayBtn.classList.add("active")
	})





