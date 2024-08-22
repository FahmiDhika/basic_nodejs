exports.bmi = (req,res) => {
    let tb = Number(req.body.tb)
    let bb = Number(req.body.bb)

    let tbAfter = tb / 100
    let bmi = bb / (tbAfter * tbAfter)

    let ket = "Normal"
    
    if(bmi <= 18.5){
        ket = "Stunting"
    }
    else if(bmi<= 24.9){
        ket = "Normal"
    }
    else if(bmi<=29.9){
        ket = "Kelebihan berat Badan"
    }
    else{
        ket = "Obesitas"
    }
    

    let response = {
        tinggi: tb,
        berat: bb,
        bmi: bmi,
        status: ket
    }
    return res.json(response)
}