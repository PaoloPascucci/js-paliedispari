
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let UserWord = prompt('Inserisci una parola');
console.log(UserWord);
//Chiedere all’utente di inserire una parola
function reverseString() {
    return Invert = UserWord.split("").reverse().join("");
}
if (UserWord == reverseString(UserWord)) {
    document.getElementById('stamp').innerHTML = "La parola inserita " + reverseString(UserWord) + " è palindroma"
}
else {
    document.getElementById('stamp').innerHTML = "La parola inserita non è palindroma"
}
