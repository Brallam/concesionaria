const fs=require("fs")
const pjson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))
const marcas={
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Estas son nuestras marcas disponibles:\n")
        res.write("______________________________________\n")
        let mar =[];
        pjson.forEach(m=>{
            m.autos.forEach(m=>{
                mar.push(m.marca)
            })
        })
         mar = mar.filter((a, index) =>mar.indexOf(a) === index)
        mar.forEach(m=>{
            res.write("-"+m+"\n")
            
        })
        res.write("________________\n")
       res.end()
    },
    marca:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id=req.params.id
        let mar =[];
        pjson.forEach(m=>{
            m.autos.forEach(m=>{
                mar.push(m)
            }) })
    
        res.write("Autos de la marca "+id+"\n")
        mar.forEach(m=>{
            if(m.marca==id){
            res.write("|Modelo|: "+m.modelo+"\n")
            res.write("   |Año|: "+m.anio+"\n")
            res.write("________________________\n ")
             }
            })
      
      res.end()
  }
 }
module.exports=marcas 