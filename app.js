const express=require("express")
const app=express()
//
const routerHome=require("./routes/home")
const routerMarcas=require("./routes/marcas")
const routerAutos=require("./routes/autos")
const routerSucu=require("./routes/sucursales")
//
app.listen(3030,()=>console.log("Server up"))
//
app.use("/",routerHome)
app.use("/sucursales",routerSucu)
app.use("/autos",routerAutos)
app.use("/marcas",routerMarcas)