const express = require('express')
const app = express()
const mysql = require('mysql')


const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}


app.get('/', (req,res) => {
    var nome = 'Filippo'

    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(nome) values ('${nome}')`
    connection.query(sql)
    connection.end()
    
    res.send(`<h1>Full Cycle Rocks!</h1><p>Nome Cadastrado:</p><p>${nome}</p>`)
})

app.listen(3000, () => {
    console.log("App is running on port 3000")
})