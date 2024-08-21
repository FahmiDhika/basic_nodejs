const express = require("express")
const app = express()

app.use(express.json())

const soal4Controller = require("../controllers/soal4Controller")

app.post("/bmi", soal4Controller.bmi)

module.exports = app