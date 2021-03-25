const contadorA = require('./instanciaunica')
const contadorC = require('./instanciaunica')
const contadorB = require('./instanciaNova')
const contadorD = require('./instanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)