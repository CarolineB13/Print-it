const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let nbDot = slides.length

// ajout des flèches

let flecheGauche = document.createElement ("img")
let flecheDroite = document.createElement ("img")
let banner = document.getElementById ("banner")
banner.appendChild (flecheGauche)
banner.appendChild (flecheDroite)

flecheGauche.src="assets/images/arrow_left.png"
flecheGauche.alt="fleche gauche"
flecheGauche.classList.add ("arrow","arrow_left")

flecheGauche.addEventListener ("click",(event)=>
console.log ("je clique sur la flèche gauche"))

flecheDroite.src ="assets/images/arrow_right.png"
flecheDroite.alt = "fleche droite"
flecheDroite.classList.add ("arrow" , "arrow_right")

flecheDroite.addEventListener ("click" , (event)=>
console.log ("je clique sur la flèche droite"))

// ajout des boutons dot

let btnDotActive = document.createElement ("div")
let barreDeDots = document.querySelector (".dots")
barreDeDots.appendChild (btnDotActive)
btnDotActive.classList.add ("dot_selected", "dot")

for (let i = 1 ; i < slides.length ; i++) {
	let btnDot = document.createElement ("div")
	let barreDeDots = document.querySelector (".dots")
	barreDeDots.appendChild (btnDot)
	btnDot.classList.add ("dot")                               

}

