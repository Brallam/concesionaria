const express=require("express")
const router=express.Router();
const SucuC=require("../controllers/sucursalesc");
//
router.get("/",SucuC.index)
router.get("/:id",SucuC.sucursal)

module.exports=router 