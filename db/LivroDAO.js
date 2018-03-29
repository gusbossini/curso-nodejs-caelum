const pool = require('./pool')

class LivroDAO {
    
    constructor() {
        this._conexao = pool.getConnection()
    }

    listarLivros(callback) {
        this._conexao.query('SELECT * FROM livros;', callback)
    }
    
    inserirLivro(livro, callback) {
        this._conexao.query('INSERT INTO livros SET ?;', livro, callback)
    }
}

module.exports = LivroDAO