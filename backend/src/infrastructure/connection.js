const mysql = require('mysql')

require('dotenv').config()
const mysql_ip    = process.env.MYSQL_IP
const mysql_port  = process.env.MYSQL_PORT

console.log(mysql_ip)
console.log(mysql_port)

const connection = mysql.createConnection({
    host : mysql_ip,
    port : mysql_port,
    user : 'root',
    password : 'RootPassword',
    database : 'Sales'
})
//trocar por variaveis de .env
module.exports = connection