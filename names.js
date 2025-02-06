// todo 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function nomeCompleto(firstName,lastName){
let  name={
fullName: `${firstName} ${lastName}`
}
return name
}



let prova= nomeCompleto("Daniele","Consoli")
console.log(prova)