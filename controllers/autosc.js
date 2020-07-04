const fs=require("fs")
const pjson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))

//
const tutus={
    autos:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})

        let auto=[]
        res.write("Nuestros Autos: \n")
        res.write("_______________\n\n")

        pjson.forEach(m=>{
            m.autos.forEach(m=>{
                auto.push(m)
            })
        })
        auto.forEach(m=>{
        res.write("| Marca  |: "+m.marca+"\n")
        res.write("| Modelo |: "+m.modelo+"\n")
        res.write("| Año    |: "+m.anio+"\n")
        res.write("| Color  |: "+m.color+"\n")
        res.write("______________________\n\n")
        })
    },
    autosd:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        id=req.params.id
        let auto=[]
        pjson.forEach(m=>{
            m.autos.forEach(m=>{
                auto.push(m)
            })
        })

        res.write("Estos son los autos filtrados por sus preferencias \n")
        res.write("__________________________________________________\n")
        auto.forEach(m=>{
            if(id==m.color){
                res.write("| Marca  |: "+m.marca+"\n")
                res.write("| Modelo |: "+m.modelo+"\n")
                res.write("| Año    |: "+m.anio+"\n")
                res.write("| Color  |: "+m.color+"\n")
                res.write("______________________\n\n")
            }
            if(id==m.anio){
                res.write("| Marca  |: "+m.marca+"\n")
                res.write("| Modelo |: "+m.modelo+"\n")
                res.write("| Año    |: "+m.anio+"\n")
                res.write("| Color  |: "+m.color+"\n")
                res.write("______________________\n\n")
            }
        
            
        })
        res.end()
    }
}



module.exports=tutus