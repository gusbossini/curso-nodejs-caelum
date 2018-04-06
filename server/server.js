//const queryString = require('query-string')
require('dotenv').config()
const express = require('express')
const expressValidator = require('express-validator')

const server = express()

server.set('view engine', 'ejs')
server.use(express.static('./public'))
server.use(express.urlencoded())
server.use(express.json())
server.use(expressValidator())

// configurar o CORS
server.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.set('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin')
    next()
})

require('./routes/produtos')(server)

server.use((req, res, next) => {
    const erro = 'Página não encontrada!'

    res.format({
        default: () => {
            res.send({erro: erro})
        }
        ,html: () => {
            res.render('erros/500', {erro: erro})
        }
        ,json: () => {
            res.send({erro: erro})
        }
    })
})

server.use((err, req, res, next) => {
    res.format({
        default: () => {
            res.send({erro: err})
        }
        ,html: () => {
            res.render('erros/500', {erro: err})
        }
        ,json: () => {
            res.send({erro: err})
        }
    })
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