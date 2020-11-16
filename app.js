// Will Jantscher, Ada Lazuli, Brianna Tanusi
// database name:  sdi_databases_checkpoint

// npm install
// npm i express pg


// CREATE TABLE emails (id serial PRIMARY KEY, sender VARCHAR(320), recipient VARCHAR(320), subject TEXT, message TEXT, date TEXT); 



const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001
const db = require('./queries')


app.use(bodyParser.json())

// const emails = JSON.parse(fs.readFileSync("emails.JSON"))

// get all emails in local db in JSON format
app.get('/emails', db.getEmails)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))