var bombsArray = []
var maxNumber = 100
var safeArray = []


switch (levelDifficult(prompt("scegli la difficolta tra (easy)(medium)(hard)"))) {
    case "easy":
        var maxNumber = 100
        break;
    case "medium":
        var maxNumber = 80
    case "hard":
        var maxNumber = 50
        break;
    default:
        break;
}



// creo array con 16 numeri diversi
bombsArray = createBombs(bombsArray, maxNumber)
console.log(bombsArray);

// stampo il punteggio
var punteggio = game(bombsArray, safeArray, maxNumber)
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

// contare da 1 a 100 - 16
function game(bombsArray, safeArray, maxNumber) {
    while (safeArray.length < maxNumber - 16) {
        var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 100"))
        if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100) {
            if (safeArray.includes(numeroUtente)) {
                console.log("non puoi inserire piu volte lo stesso numero");
            } else if (!bombsArray.includes(numeroUtente)) {
                safeArray.push(numeroUtente)
            } else {
                return safeArray.length
            }
        } else if (numeroUtente > maxNumber) {
            console.log("non puoi inserire numeri maggiori di 100");
        } else if (isNaN(numeroUtente)) {
            console.log("non puoi inserire lettere devi inserire numeri");
        }
    }
    return safeArray.length
}

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

    if (inserisciDifficolta == "easy") {
        return "easy"
    } else if (inserisciDifficolta == "medium") {
        return "medium"
    } else if (inserisciDifficolta == "hard") {
        return "hard"
    } else {
        return "non hai inserito la difficolta"
    }
}