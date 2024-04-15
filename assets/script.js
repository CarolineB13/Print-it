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

//***** variables *****//
let i = 0
let index = 0
const imgageCarousel = document.querySelector(".banner-img")
const txtCarousel = document.querySelector("p")

// boutons dots
let containerDots = document.querySelector (".dots")


//flèches droite et gauche
let flecheGauche = document.createElement ("img")
let flecheDroite = document.createElement ("img")

// ajout des flèches dans le HTML et de leurs attributs
flecheDroite.src ="assets/images/arrow_right.png"
flecheDroite.alt = "fleche droite"
flecheDroite.classList.add ("arrow" , "arrow_right")

flecheGauche.src="assets/images/arrow_left.png"
flecheGauche.alt="fleche gauche"
flecheGauche.classList.add ("arrow","arrow_left")

let banner = document.getElementById ("banner")
banner.appendChild (flecheGauche)
banner.appendChild (flecheDroite)

// ajout des boutons dot (bullets)
for (let i = 0 ; i < slides.length ; i++) {
	let boutonsDot = document.createElement ("div")
	containerDots.appendChild (boutonsDot)
	boutonsDot.classList.add ("dot")                               	
}
// Ajout de la classe dot_selected au bullet actif
let btnDot = containerDots.querySelectorAll(".dot")

btnDot[0].classList.add ("dot_selected")


   // Écouteurs d'événements pour les boutons gauche et droite

    ////////*****FLECHE GAUCHE ***********/////
   flecheGauche.addEventListener("click", () => {
	console.log ("j'ai cliqué sur la flèche gauche")
	// on recule de -1 i
	i--;
	//si i = -1 on revient à 3 (4-1)
	if (i === -1) {
		i = slides.length - 1;
	  }
 //on change la source de l'image et le texte grâce à i
	imgageCarousel.src = "assets/images/slideshow/"+slides[i].image;
	txtCarousel.innerHTML = slides[i].tagLine;

//on enlève la class dot selected
	btnDot[index].classList.remove ("dot_selected")

// on recule de -1 index
	index--	
// si index= -1 on revient à 3
	if (index === -1) {
		index = slides.length - 1;
	  }
// on ajoute la class dot_selected
	btnDot[index].classList.add ("dot_selected")
	
  });
  
  ////////*****FLECHE DROITE ***********/////
  flecheDroite.addEventListener("click", () => {
	console.log ("j'ai cliqué sur la flèche droite")
// on avance de +1 i
	i++;
//si i = 4 on revient à 0
	if (i === slides.length) {
	  i = 0;
	}
//on change la source de l'image et le texte grâce à i
	imgageCarousel.src = "assets/images/slideshow/"+slides[i].image;
	txtCarousel.innerHTML = slides[i].tagLine;

//on enlève la class dot selected
	btnDot[index].classList.remove ("dot_selected")

// on avance de +1 index
	index++
//si index = 4 on revient à 0
	if (index === slides.length) {
		index = 0;
	  }
// on ajoute la class dot_selected
	btnDot[index].classList.add ("dot_selected")

  });
 




