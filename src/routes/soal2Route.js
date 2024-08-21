const express = require("express")
const app = express()

app.use(express.json())

const soal2Controller = require("../controllers/soal2Controller")

app.get("/convert/celcius/:celcius")
app.get("/convert/reamur/:reamur")
app.get("/convert/kelvin/:kelvin")
app.get("/convert/fahrenheit/:fahrenheit")

module.exports = app