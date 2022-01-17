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
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values ('Filippo')`
    connection.query(sql)
    connection.end()
    
    res.send("<h1>Full Cycle Rocks!</h1>")
})

app.listen(3000, () => {
    console.log("App is running on port 3000")
})