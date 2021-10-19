
/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
const User = prompt("Scegli pari o dispari");
const UserNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

function getRandom() {
    return Math.ceil(Math.random() * 5);
}

    const Sum = UserNumber + getRandom()
console.log(Sum);

function Finalnumber(number) {
    if (number % 2 == 0) {
        return "pari";
    }
    else {
        return "dispari";
    }

}

if (User == Finalnumber(Sum)) {
    document.getElementById('stamp').innerHTML = "Il giocatore ha vinto"
}
else {
    document.getElementById('stamp').innerHTML = "Il giocatore ha perso"
}