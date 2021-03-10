var bombsArray = []
var safeArray = []

var maxNumber = levelDifficult(prompt("inserisci difficolta scegli tra (easy) (medium) (hard)"))

var containerDOM = document.querySelector(".container")
var div;


// creo array con 16 numeri diversi
bombsArray = createBombs(bombsArray, maxNumber)
console.log(bombsArray);

var punteggio = 0
for (let i = 1; i <= maxNumber; i++) {
    div = document.createElement("DIV")
    div.addEventListener("click", function(ev) {
        if (bombsArray.includes(i)) {
            alert(`HAI PERSO il tuo punteggio è:  ${punteggio}`)
            location.href = location.href
        } else {
            ev.target.innerHTML = i
            punteggio++
        }
    })
    containerDOM.appendChild(div)
}

// stampo il punteggio
// var punteggio = game(bombsArray, safeArray, maxNumber)
console.log("GAME OVER");
console.log("il tuo punteggio è " + punteggio);

// FUNCTION

// contare da 1 a 16
// generare un numero tra 1 e 100
// controllo che non ci siano doppi 
function createBombs(array, max) {
    while (array.length < 16) {
        var numero = randomNumberInRange(1, max)
        if (!array.includes(numero)) {
            array.push(numero)
        }
    }
    return array
}


// ALTERNATIVA AL CLICK SULLE CASELLE
// contare da 1 a maxNumber - 16
// function game(bombsArray, safeArray, maxNumber) {
//     while (safeArray.length < maxNumber - 16) {
//         // var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"))
//         if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= maxNumber) {
//             if (safeArray.includes(numeroUtente)) {
//                 console.log("non puoi inserire piu volte lo stesso numero");
//             } else if (!bombsArray.includes(numeroUtente)) {
//                 safeArray.push(numeroUtente)
//             } else {
//                 return safeArray.length
//             }
//         } else if (numeroUtente > maxNumber) {
//             console.log("non puoi inserire numeri maggiori di 100");
//         } else if (isNaN(numeroUtente)) {
//             console.log("non puoi inserire lettere devi inserire numeri");
//         }
//     }
//     return safeArray.length
// }

function randomNumberInRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
        console.log("non hai inserito un numero");
    } else {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// controllo livello difficolta
function levelDifficult(inserisciDifficolta) {

    switch (inserisciDifficolta) {
        case "easy":
            alert("hai scelto la modalita EASY dovrai scegliere i numeri da 1 a 100 dei quali 16 saranno bombe, BUON GAME")
            alert("CLICCA SULLE CASELLE E SPERA DI NON BECCARE LE BOMBE... BUON GAME")
            return 100;
        case "medium":
            alert("hai scelto la modalita MEDIUM dovrai scegliere i numeri da 1 a 80 dei quali 16 saranno bombe, BUON GAME")
            alert("CLICCA SULLE CASELLE E SPERA DI NON BECCARE LE BOMBE... BUON GAME")
            return 80
        case "hard":
            alert("hai scelto la modalita HARD dovrai scegliere i numeri da 1 a 50 dei quali 16 saranno bombe, BUON GAME")
            alert("CLICCA SULLE CASELLE E SPERA DI NON BECCARE LE BOMBE... BUON GAME")
            return 50
        default:
            return levelDifficult(prompt("inserisci difficolta scegli tra (easy) (medium) (hard)"))
    }

}