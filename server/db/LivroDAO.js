const pool = require('./pool')

class LivroDAO {
    
    constructor() {
        this._conexao = pool.getConnection()
    }

    listarLivros(callback) {
        this._conexao.query('SELECT * FROM livros;', callback)
    }
    
    inserirLivro(livro) {
        return new Promise((resolve, reject) => {
            this._conexao.query('INSERT INTO livros SET ?;', livro, (erro) => {
                if (erro) {
                    reject([erro])
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = LivroDAO