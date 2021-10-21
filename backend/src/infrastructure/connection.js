const mysql = require('mysql')

const connection = mysql.createConnection({
    // host : 'localhost',
    host : '172.17.0.1',
    port : 3306,
    user : 'root',
    password : 'RootPassword',
    database : 'Sales'
})
//trocar por variaveis de .env
module.exports = connection