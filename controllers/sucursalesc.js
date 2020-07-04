const fs=require("fs")
const e = require("express")
const pjson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))
//
const sucu={
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Estas son nuestras sucursales y sus direcciones: \n\n")
        res.write("__________________________________________________________________________________\n")
        pjson.forEach(m => {
          res.write(""+m.sucursal+"--"+m.direccion+"\n")+
          res.write("---------------------------------------------------------------------------------\n")
        });
        res.end()
    },
    sucursal:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let id=req.params.id
        pjson.forEach(m => {
        if(m.sucursal==id){
        res.write("Sucursal: "+m.sucursal+"\n")
        res.write("__________________________________________________________________________________\n")
        res.write("Dirección: "+m.direccion+"\n")
        res.write("__________________________________________________________________________________\n")
        res.write("Telefono: "+m.telefono+"\n")
        res.write("__________________________________________________________________________________\n")
        res.write("AUTOS DISPONIBLES: \n\n")
        m.autos.forEach(m=>{
            res.write("|Marca|: "+m.marca+"\n")
            res.write("|Modelo|: "+m.modelo+"\n")
            res.write("|Año|: "+m.anio+"\n")
            res.write("|Color|: "+m.color+"\n")
            res.write("_____________________________\n")
        })
        res.write("Cantidad de Veiculos: "+m.autos.length)
        res.end()
        }
        });
        res.end(id+" NO ES UNA  SUCURSAL")
    },
}
module.exports=sucu 