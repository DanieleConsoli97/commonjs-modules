//TODO 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function names(firstName,lastName){
    let  name={
        firstName:`${firstName}`,

        lastName: `${lastName}`
}
    return name
}
//NOTE -di controllo
//  let prova= names("Daniele","Consoli")
// console.log(prova)

//NOTE - esportazione della funzione
module.exports = names
