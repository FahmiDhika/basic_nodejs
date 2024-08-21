const express = require("express")
const app = express()

app.use(express.json())

const soal3Controller = require("../controllers/soal3Controller")



module.exports = app