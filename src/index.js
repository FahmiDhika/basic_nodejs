const express = require("express") // memanggil library express
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// import routes
const praktikum = require("./routes/praktikumRoute")
const soal1Route = require("./routes/soal1Route")
const soal2Route = require("./routes/soal2Route")
const soal3Route = require("./routes/soal3Route")
const soal4Route = require("./routes/soal4Route")

// implementasi routes
app.use("/praktikum", praktikum)
app.use("/soal1", soal1Route)
app.use("/soal2", soal2Route)
app.use("/soal3", soal3Route)
app.use("/soal4", soal4Route)

// menjalankan server pada port 4000
app.listen(4000, () => {
    console.log("Server berjalan di port 4000");
})