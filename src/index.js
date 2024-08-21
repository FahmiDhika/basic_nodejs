const express = require("express") // memanggil library express
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
const praktikumController = require("./controllers/praktikumController")

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// import routes
const praktikum = require("./routes/praktikumRoute")

// implementasi routes
app.use("./basic_nodejs", praktikum)

app.get("/test", praktikumController.test)
app.get("/profil/:name/:age", praktikumController.profil)
app.post("/bujur_sangkar", praktikumController.bujur_sangkar)


// menjalankan server pada port 4000
app.listen(4000, () => {
    console.log("Server berjalan di port 4000");
})