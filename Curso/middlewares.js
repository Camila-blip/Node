//middleware pattern (chain of responsability)
const passo1 = (ctx, next) =>{
    ctx.valor1 ='md1'
    next()
}

const passo2 = (ctx,next) =>{
    ctx.valor2 ='md2'
    next()
}

const passo3 = (ctx,next) =>{
    ctx.valor3 ='md3'
}

const exec = (ctx, ...middlewares) => {
    const execpasso = indice => {
        middlewares && indice < middlewares.length &&
          middlewares[indice](ctx, () => execpasso (indice + 1))
    }
  execpasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//npm i --save express@4.16.2 -E
