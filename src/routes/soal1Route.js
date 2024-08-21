const express = require("express")
const app = express()

app.use(express.json())

const soal1Controller = require("../controllers/soal1Controller")

app.post("/kubus", soal1Controller.kubus)
app.post("/balok", soal1Controller.balok)
app.post("/tabung", soal1Controller.tabung)
app.post("/Bola", soal1Controller.bola)

module.exports = app