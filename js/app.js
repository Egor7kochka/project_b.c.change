import {Red, Pink, Orange, Yellow, Purple, Green, Blue, Brown, White, Gray} from "./colors.js"
import {allColors} from "./colors.js"
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
    const redBtn = document.querySelector('btn1');
	redBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Red*[Math.floor(Math.random() * Red.length)]
	})
	const pinkBtn = document.querySelector('btn2');
	pinkBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Pink*[Math.floor(Math.random() * Pink.length)]
	})
	const orangeBtn = document.querySelector('btn3');
	orangeBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Orange*[Math.floor(Math.random() * Orange.length)]
	})
	const yellowtnBtn = document.querySelector('btn4');
	yellowtnBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Yellow*[Math.floor(Math.random() * Yellow.length)]
	})
	const purpleBtn = document.querySelector('btn5');
	purpleBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Purple*[Math.floor(Math.random() * Purple.length)]
	})
	const greenBtn = document.querySelector('btn6');
	greenBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Green*[Math.floor(Math.random() * Green.length)]
	})
	const blueBtn = document.querySelector('btn7');
	blueBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Blue*[Math.floor(Math.random() * Blue.length)]
	})
	const brownBtn = document.querySelector('btn8');
	brownBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Brown*[Math.floor(Math.random() * Brown.length)]
	})
	const whiteBtn = document.querySelector('btn9');
	whiteBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = White*[Math.floor(Math.random() * White.length)]
	})
	const grayBtn = document.querySelector('btn10');
	grayBtn.addEventListener("click" , () => {
		document.body.style.backgroundColor = Gray*[Math.floor(Math.random() * Gray.length)]
	})




