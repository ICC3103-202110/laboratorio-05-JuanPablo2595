// Lo primero que hice fue instalar las librerias recomendadas
// en el enunciado. Para esto ejecute:
// npm init 
// npm install console-table-printer inquirer figlet chalk prompt-sync
// en el terminal (en la carpeta correspondiente)

// En app.js estara todo lo que es no funcional (estado de la aplicacion,
// while, inputs, etc) (No Funcional)

// Aqui defino los comandos de las librerias
const {printTable} = require('console-table-printer')
const input = require('prompt-sync')();

// Aca "me traigo" los archivos a app.js para poder usarlos
const {update} = require('./update')
const {view} = require('./view')

// Para poder usar las funciones de view.js, es necesario recibirlas
const {showTable} = require('./view')
const {showTitle} = require('./view')

// Para poder usar las funciones de update.js, es necesario recibirlas
const {tipUpdate} = require('./update')
const {totalUpdate} = require('./update')

function app(billAmount, tipPercentage, tip, total){
    while (true){
        // Para la vista:
        console.clear()
        console.log(showTitle())
        printTable(showTable(billAmount, tipPercentage, tip, total))
        // Para la interaccion con el usuario:
        var billAmount = input("Bill amount? (q for quit)")
        // Para salir de la app (si se quiere)
        if (billAmount === 'q'){
            console.clear() 
            break    
        }
        var tipPercentage = input("Tip(%)? ")
        // Actualizacion de la vista:
        var tip = tipUpdate(billAmount, tipPercentage)
        var total = totalUpdate(billAmount, tipPercentage)
        
    }
}

app(0,0,0,0)