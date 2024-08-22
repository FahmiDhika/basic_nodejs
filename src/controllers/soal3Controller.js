exports.decimal = (req,res) => {
    let angka = Number(req.params.angka)

    let octal = angka.toString(8)
    let hexaDecimal = angka.toString(16)
    let binary = angka.toString(2)

    let response = {
        decimal: angka,
        result: {
            octal: octal,
            hexaDecimal: hexaDecimal,
            binary: binary
        }
    }
    return res.json(response)
}

exports.octal = (req,res) => {
    let angka = Number(req.params.angka)

    let decimal = parseInt(angka, 8)
    let hexaDecimal = decimal.toString(16)
    let binary = decimal.toString(2)

    let response = {
        octal: angka,
        result: {
            decimal: decimal,
            hexaDecimal: hexaDecimal,
            binary: binary
        }
    }
    return res.json(response)
}

exports.hexaDecimal = (req,res) => {
    let angka = Number(req.params.angka)

    let decimal = parseInt(angka, 16)
    let octal = decimal.toString(8)
    let binary = decimal.toString(2)

    let response = {
        hexaDecimal: angka,
        result: {
            decimal: decimal,
            octal: octal,
            binary: binary
        }
    }
    return res.json(response)
}

exports.binary = (req,res) => {
    let angka = Number(req.params.angka)

    let decimal = parseInt(angka,2)
    let octal = decimal.toString(8)
    let hexaDecimal = decimal.toString(16)

    let response = {
        binary: angka,
        result: {
            decimal: decimal,
            octal: octal,
            hexaDecimal: hexaDecimal
        }
    }
    return res.json(response)
}