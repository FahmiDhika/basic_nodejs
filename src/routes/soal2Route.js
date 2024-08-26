const express = require("express")
const app = express()

app.use(express.json())

const soal2Controller = require("../controllers/soal2Controller")

app.get("/convert/celcius/:celcius", soal2Controller.celcius)
app.get("/convert/reamur/:reamur", soal2Controller.reamur)
app.get("/convert/kelvin/:kelvin", soal2Controller.kelvin)
app.get("/convert/fahrenheit/:fahrenheit", soal2Controller.fahrenheit)

module.exports = app