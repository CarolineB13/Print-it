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
const img = document.querySelector(".banner-img")
const txt = document.querySelector("p")

// boutons dots
let containerDots = document.querySelector (".dots")


//index de l'image de départ sur le site
let imageActive = 0

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
  flecheGauche.addEventListener("click", () => {
	console.log ("j'ai cliqué sur la flèche gauche")
	i--;
	if (i === -1) {
	  i = slides.length - 1;
	}
	img.src = "assets/images/slideshow/"+slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i);
  });
  
  flecheDroite.addEventListener("click", () => {
	console.log ("j'ai cliqué sur la flèche droite")
	i++;
	if (i === slides.length) {
	  i = 0;
	}
	img.src = "assets/images/slideshow/"+slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i);
  });
  
  // Fonction pour mettre à jour les bullets dynamiquement
  function dynamicBullets(count) {
	btnDot.forEach((dot, index) => {
	  if (index === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	})}
  




