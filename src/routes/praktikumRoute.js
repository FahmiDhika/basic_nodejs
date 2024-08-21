const express = require("express")
const app = express()

app.use(express.json())

const praktikumController = require("../controllers/praktikumController")


app.get("/test", praktikumController.test)
app.get("/profil/", praktikumController.profil)
app.post("/bujur_sangkar", praktikumController.bujur_sangkar)

module.exports = app