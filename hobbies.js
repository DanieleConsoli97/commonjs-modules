//TODO 2 - hobbies.js
// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file.

function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
    const hobbiesList = [hobbyOne, hobbyTwo, hobbyThree];
    return hobbiesList;
}

//NOTE -di controllo
// console.log(hobbies("prova","prova","prova"))
//NOTE - esportazione della funzione
module.exports = hobbies