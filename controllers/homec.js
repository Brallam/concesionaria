const fs=require("fs")
const pjson=JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))
const home={
    home:(req,res)=>{
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write("Bienvenido a |CONCESIONARIA DH|\n")
    res.write("__________________________________________________________________________________\n")
    res.write("Nuestras sucursales: \n\n")
    pjson.forEach(m=>{
        res.write(m.sucursal+"\n")
        res.write("---------------------------------------------------------------------------------------\n")
    })
    res.end()
     }

}
module.exports=home
