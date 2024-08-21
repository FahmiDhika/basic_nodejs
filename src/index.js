const express = require("express") // memanggil library express
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
const praktikumController = require("./controllers/praktikumController")
const soal1Controller = require("./controllers/soal1Controller")

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// import routes
const praktikum = require("./routes/praktikumRoute")
const soal1Route = require("./routes/soal1Route")

// implementasi routes
app.use("./basic_nodejs", praktikum)
app.use("./basic_nodejs", soal1Route)

app.get("/test", praktikumController.test)
app.get("/profil/", praktikumController.profil)
app.post("/bujur_sangkar", praktikumController.bujur_sangkar)

// soal1
app.post("/kubus", soal1Controller.kubus)
app.post("/balok", soal1Controller.balok)
app.post("/tabung", soal1Controller.tabung)
app.post("/bola", soal1Controller.bola)


// menjalankan server pada port 4000
app.listen(4000, () => {
    console.log("Server berjalan di port 4000");
})