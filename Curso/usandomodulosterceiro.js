//const _ =  require('lodash')
//setInterval(() => console.log(_.random(1,1000)), 2000)

const http = require('http')
http.createServer((req,resp) =>{
    resp.write('bom dia')
    resp.end()
}).listen(8080)
