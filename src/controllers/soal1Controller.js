exports.kubus = (req,res) => {
    let sisi = Number(req.body.sisi)
    
    let volume = sisi * sisi * sisi
    let luasPermukaan = 6 * (sisi * sisi)

    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}

exports.balok = (req, res) => {
    let p = Number(req.body.p)
    let l = Number(req.body.l)
    let t = Number(req.body.t)

    let volume = p * l * t
    let luasPermukaan = 2 * ((p * l) + (p * t) + (l * t))

    let response = {
        Panjang: p,
        Lebar: l,
        Tinggi: t,
        Volume: volume,
        LuasPermukaan: luasPermukaan
    }
    return res.json(response)
}

exports.tabung = (req,res) => {
    let r = Number(req.body.r)
    let tinggi = Number(req.body.tinggi)

    let volume = Math.PI * r * r * tinggi
    let luasPermukaan = 2 * Math.PI * r * (r + tinggi)

    let response = {
        jariJari: r,
        Tinggi: tinggi,
        Volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}

exports.bola = (req,res) => {
    let jari = Number(req.body.jari)

    let volume = Math.PI * jari * jari * jari * (3/4)
    let luasPermukaan = 4 * Math.PI * jari * jari

    let response = {
        jariJari: jari,
        Volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}