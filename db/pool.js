const mysql = require('mysql')

module.exports = {
    getConnection: () => {

        return mysql.createPool({
            user: 'root',
            password: 'caelum',
            host: 'localhost',
            port: 3306,
            database: 'cdc',
            connectionLimit: 10
        })
    }
}