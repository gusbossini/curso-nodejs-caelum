const LivroDAO = require('../db/LivroDAO')

module.exports = (server) => {
    
    server.get('/', (req, res, next) => {
        new LivroDAO().listarLivros((err, result) => {
            listar(err, result, res, next)
        })
    })

    server.get('/produtos', (req, res, next) => {
        new LivroDAO().listarLivros((err, result) => {
            listar(err, result, res, next)
        })
    })

    function listar(err, result, res, next) {
        if (err) {
            next(err)
        } else {
            res.format({
                html: () => {
                    res.render('produtos/lista', {
                        msgErro: '',
                        livros: result
                    })
                }
                ,json: () => {
                    res.send(result)
                }
            })
        }
    }

    server.get('/produtos/form', (req, res) => {
        res.render('produtos/form', {
            validationErrors: [],
            livro: {}
        })
    })

    server.post('/produtos', (req, res, next) => {
        const livro = req.body

        req.assert('titulo', 'Titulo vazio.').notEmpty()
        req.assert('preco', 'Preco vazio.').notEmpty()
        req.assert('preco', 'Preco deve ser um número.').isNumeric()

        req.asyncValidationErrors()
            .then(() => {
                return new LivroDAO().inserirLivro(livro)
            })
            .then(() => {
                res.redirect('/')
            })
            .catch((listaErros) => {
                res.render('produtos/form', {
                    validationErrors: listaErros,
                    livro: livro
                })
            })
            .catch(next)
    })
  
}