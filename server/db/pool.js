const mysql = require('mysql')

module.exports = {
    getConnection: () => {

        return mysql.createPool({
            user: 'root',
            password: '',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: 'cdc',
            connectionLimit: 10
        })
    }
}