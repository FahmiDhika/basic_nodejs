const express = require("express")
const app = express()

app.use(express.json())

const soal3Controller = require("../controllers/soal3Controller")

app.get("/convert/decimal/:angka", soal3Controller.decimal)
app.get("/convert/octal/:angka", soal3Controller.octal)
app.get("/convert/hexadecimal/:angka", soal3Controller.hexaDecimal)
app.get("/convert/binary/:angka", soal3Controller.binary)

module.exports = app