// Aqui se haran las actualizaciones de los datos (Funcional)

function tipUpdate(billAmount, tipPercentage){
    return (tipPercentage/100)*billAmount   
}

function totalUpdate(billAmount, tipPercentage){
    return (parseFloat(billAmount) + parseFloat((tipPercentage/100)*billAmount))
}

// Para que app.js pueda leer la funciones de update.js, es necesario exportarlas:

module.exports = {
    tipUpdate,
    totalUpdate,
}