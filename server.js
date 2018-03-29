//const queryString = require('query-string')
const express = require('express')

const server = express()

server.set('view engine', 'ejs')
server.use(express.static('./public'))
server.use(express.urlencoded())
server.use(express.json())

require('./routes/produtos')(server)

server.use((req, res, next) => {
    res.render('erros/500', {erro: 'Página não encontrada!'})
})

server.use((err, req, res, next) => {
    res.render('erros/500', {erro: err})
})

module.exports = server

/*server.use((req, res, next) => {
    let dadosString = ''
        
    req.on('data', (chunk) => {
        dadosString += chunk.toString()
    }).on('end', () => {
        req.body = queryString.parse(dadosString)
        next()
    })
})*/