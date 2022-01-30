// cd.. sai da pasta atual
//npm i node-schedule@1.3.0 -E da  a possibilidade de agendar tarefas

const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 2', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa')
}, 20000);

// numero e referente ao dia da semana
