//todo 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

//NOTE - Impotazione delle funzione names
const myFunctionName = require('./names.js');
//NOTE - Impotazione delle funzione Hobbies
const myFunctionHobbies = require('./hobbies.js');
//NOTE - destructuring
const {firstName,lastName}=myFunctionName("Daniele","Consoli")

function oggettoNomeHobbies(){
    
    const user={
        "fullName":`${firstName} ${lastName}`,
        "hobbies":myFunctionHobbies("Pesca","Calcio","Palestra")
    }
    return user
}

console.log(oggettoNomeHobbies())
//NOTE - prove
// let prova = oggettoNomeHobbies()


// for (const key in prova) {
//     console.log(prova[key])
//     }

// for (const key in oggettoNomeHobbies()) {
//     console.log(oggettoNomeHobbies()[key])
// }