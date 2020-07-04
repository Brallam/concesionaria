const express=require("express")
const router=express.Router();
const marcasC=require("../controllers/marcasc")
//
router.get("/",marcasC.index)
router.get("/:id",marcasC.marca)

module.exports=router