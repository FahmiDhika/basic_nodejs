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

// end point "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end point "/profil/nama/umur" dengan method GET
app.get("/profile/:name/:age", (req,res) => {
    // :name dan :age -> diberikan titik dua didepan, menunjukkan "name" dan "age"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request

    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age

    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }

    // memberikan response dengan format JSON yang berisi objek diatas
    res.json(response)
})

// end point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body

    let luas = panjang * lebar // rumus luas
    let keliling = 2 * (panjang + lebar) // rumus keliling

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)
})

// menjalankan server pada port 4000
app.listen(4000, () => {
    console.log("Server berjalan di port 4000");
})