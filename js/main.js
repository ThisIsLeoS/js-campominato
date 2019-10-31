/* Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta.
Se il numero e' presente nella lista dei numeri generati, la partita termina, altrimenti continua
chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo
possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che
l’utente ha inserito un numero consentito.
Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.
*/

var randomNumsCollection = [],
    randomNum,
    numEntered,
    numsEnteredCounter = 0,
    numsEnteredCollection = [];
// 16 unique random numbers between 1 and 100 are generated
while (randomNumsCollection.length < 16)
{
    randomNum = getRandomInt(1, 100);
    if (!randomNumsCollection.includes(randomNum)) randomNumsCollection.push(randomNum);
}
/* the next loop will stop when the user enters 1 of the 16 between 1 and 100 random numbers or when
the user has entered all the remaining 100 - 16 between 1 and 100 numbers. */
while (!randomNumsCollection.includes(numEntered) && 100 - 16 - numsEnteredCounter !== 0)
{
    numEntered = parseInt(prompt("Enter an integer number between 1 and 100"));
    // the user can't enter the same number more than once
    if (numsEnteredCollection.includes(numEntered))
    {
        alert("You can't enter a number you've already entered!");
        continue;
    }
    /* collection where inserted numbers are stored (used to check if a number has already been
    entered) */
    numsEnteredCollection.push(numEntered);
    ++numsEnteredCounter;
}
/* the appropriate strings are inserted in the document (the join method is used to add ", " between
each item of the collections) */
document.querySelector(".last-num-msg").textContent =
    "The last number you entered is one of the random numbers generated by the computer!";
document.querySelector(".recap-msg").textContent = "Here's a recap:";
document.querySelector(".random-nums-msg").textContent =
    "- The computer generated these random numbers: " + randomNumsCollection.join(", ");
console.log(numsEnteredCollection);
document.querySelector(".entered-nums-msg").textContent = 
    "- You entered these numbers: " + numsEnteredCollection.join(", ");
document.querySelector(".allowed-nums-msg").textContent = 
    "- You picked the right number " + --numsEnteredCounter + " times!";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min if min isn't an integer) and
 * no greater than max (or the next integer lower than max if max isn't an integer).
 * @param {Number} min - The interval's minimum value.
 * @param {Number} max - The interval's maximum value.
 * @returns {Number} - A random integer between min (inclusive) and max (inclusive).
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
