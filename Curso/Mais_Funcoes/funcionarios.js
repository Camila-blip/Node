const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response =>{

    const funcionarios = response.data
    let quantidade = funcionarios.length

     for (let i = 0; i < quantidade; i++) {
        let pais = response.data[i].pais;
        let genero = response.data[i].genero;
        let salario = response.data[i].salario;

        if(pais == 'China' && genero == 'F'){
        let valor_final = response.data[i]
          // console.log(valor_final)
         }
     }   
})

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
})
