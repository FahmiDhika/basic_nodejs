exports.bmi = (req,res) => {
    let tb = Number(req.body.tb)
    let bb = Number(req.body.bb)

    let tbAfter = tb / 100
    let bmi = bb / (tbAfter*tbAfter)

    let ket = () => {
        if(bmi <= 18.5){
            console.log("Stunting")
        }
        else if(bmi<= 24.9){
            console.log("Normal")
        }
        else if(bmi<=29.9){
            console.log("Kelebihan")
        }
        else{
            console.log("Obesitas")
        }
    }

    let response = {
        tinggi: tb,
        berat: bb,
        bmi: bmi,
        keterangan: ket
    }
    return res.json(response)
}