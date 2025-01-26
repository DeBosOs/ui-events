/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...
let bibberknop = document.querySelector('a:nth-of-type(1)')
// Stap 2: addEventListener
// bibberLink.addEventListener...
bibberknop.addEventListener('click', bibberen)
// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function bibberen() {
  bibberknop.classList.toggle('shake')
}
// bibberLink.classList.toggle...


// knop 2
const draaiKnop = document.querySelector('a:nth-of-type(2)');

document.addEventListener('keyup', (event) => {

  if (event.key === " " || event.key === "Spacebar") {

    draaiKnop.classList.toggle('andersom');
  }
});

// knop 3
const krimpKnop = document.querySelector('a:nth-of-type(3)');

krimpKnop.addEventListener('click', groeien);
function groeien(e) {
  e.target.classList.toggle('groeien')
}

// knop 4
const stuiterKnop = document.querySelector('a:nth-of-type(4)');
stuiterKnop.addEventListener('click', stuiteren);
function stuiteren(e) {
  stuiterKnop.classList.toggle('stuiteren')
}

// knop 5
const sarah = document.querySelector('a:nth-of-type(5)');

window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    sarah.classList.add('move'); 
  } else {
    sarah.classList.remove('move');
  }
});

// knop 6
const spinKnop = document.querySelector('a:nth-of-type(6)');

spinKnop.addEventListener('click', rondje);
function rondje(){
  spinKnop.classList.toggle('rondje')
}

// knop 7
const hoverKnop = document.querySelector('a:nth-of-type(7)');

hoverKnop.addEventListener('mouseover', groter);
hoverKnop.addEventListener('mouseout', kleiner);

function groter() {
  hoverKnop.classList.add('groter');
}

function kleiner() {
  hoverKnop.classList.remove('groter');
}
