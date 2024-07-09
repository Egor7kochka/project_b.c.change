const button = document.querySelector("#btn")

const color = document.querySelector(".color")

const Red = ["IndianRed",
  "LightCoral",
  "Salmon",
  "DarkSalmon",
  "LightSalmon",
  "Crimson",
 "Red",
 "FireBrick",
 "DarkRed"];
const Pink = ["Pink",
  "LightPink",
  "HotPink",
  "DeepPink",	
  "MediumVioletRed",
  "PaleVioletRed"];
const Orange = ["LightSalmon",
  "Coral",
  "Tomato",
  "OrangeRed",	
  "DarkOrange",	
  "Orange"];
const Yellow = ["Gold",
	"Yellow",
	"LightYellow",
	"LemonChiffon",
	"LightGoldenrodYellow",
	"PapayaWhip",
	"Moccasin",
	"PeachPuff",
	"PaleGoldenrod",
	"Khaki",
	"DarkKhaki"];
const Purple = ["Lavender",
	"Thistle",
	"Plum",
	"Violet",
	"Orchid",
	"Fuchsia",
	"Magenta",
	"MediumOrchid",
	"MediumPurple",
	"RebeccaPurple",
	"BlueViolet",
	"DarkViolet",
	"DarkOrchid",
	"DarkMagenta",
	"Purple",
	"Indigo",
	"SlateBlue",
	"DarkSlateBlue",
	"MediumSlateBlue"];
const Green = ["GreenYellow",
	"Chartreuse",
	"LawnGreen",
	"Lime",
	"LimeGreen",
	"PaleGreen",
	"LightGreen",
	"MediumSpringGreen",
	"SpringGreen",
	"MediumSeaGreen",
	"SeaGreen",
	"ForestGreen",
	"Green",
	"DarkGreen",
	"YellowGreen",
	"OliveDrab",
	"Olive",
	"DarkOliveGreen",
	"MediumAquamarine",
	"DarkSeaGreen",
	"LightSeaGreen",
	"DarkCyan",
	"Teal"];
const Blue = ["Aqua",	
	"Cyan",
	"LightCyan",
	"PaleTurquoise",
	"Aquamarine",
	"Turquoise",
	"MediumTurquoise",
	"DarkTurquoise",
	"CadetBlue",
	"SteelBlue",
	"LightSteelBlue",
	"PowderBlue",
	"LightBlue",
	"SkyBlue",
	"LightSkyBlue",
	"DeepSkyBlue",
	"DodgerBlue",
	"CornflowerBlue",
	"MediumSlateBlue",
	"RoyalBlue",
	"Blue",
	"MediumBlue",
	"DarkBlue",
	"Navy",
	"MidnightBlue"];
const Brown = ["Cornsilk",
	"BlanchedAlmond",
	"Bisque",
	"NavajoWhite",
	"Wheat",
	"BurlyWood",
	"Tan",
	"RosyBrown",
	"SandyBrown",
	"Goldenrod",
	"DarkGoldenrod",
	"Peru",
	"Chocolate",
	"SaddleBrown",
	"Sienna",
	"Brown",
	"Maroon"];
const White = ["White"	,
	"Snow",
	"HoneyDew",
	"MintCream",
	"Azure",
	"AliceBlue",
	"GhostWhite",
	"WhiteSmoke",
	"SeaShell",
	"Beige",
	"OldLace",
	"FloralWhite",
	"Ivory",
	"AntiqueWhite",
	"Linen",
	"LavenderBlush",
	"MistyRose"];
const Gray = ["Gainsboro",
	"LightGray",
	"Silver",
	"DarkGray",
	"Gray",
	"DimGray",
	"LightSlateGray",
	"SlateGray",
	"DarkSlateGray",
	"Black"];
	const allColors = [...Red, ...Pink, ...Orange, ...Yellow, ...Purple, ...Green, ...Blue, ...Brown, ...White, ...Gray];;
	button.addEventListener("click", () => {
	let hexColor = allColors[getRandomNumber()]
	document.body.style.backgroundColor = hexColor
	color.textContent = hexColor
	})
	function getRandomNumber() {
		return Math.floor(Math.random() * allColors.length);
	  }
	  const btnsTip = document.querySelectorAll(".btn1");
	  let activeBtn = null;
	  btnsTip.forEach((btnTip) => {
		btnTip.addEventListener("click", (e) => {
		  e.currentTarget.classList.add("active");
		  if ((activeBtn === null && activeBtn !== e.currentTarget)) {
			activeBtn.classList.remove("active");
		  }
		  activeBtn = e.currentTarget;
		});
	  });
	
	  
    const redBtn = document.querySelector('RedBtn');
	redBtn.addEventListener("click" , () => {
		let hexColor = backgroundColor[getRandomNumber() * length.Red]
		document.body.style.backgroundColor = hexColor
	    color.textContent = hexColor
	})


	

