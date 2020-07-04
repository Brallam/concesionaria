const express=require("express")
const router=express.Router();
const autosC=require("../controllers/autosc")
//
router.get("/",autosC.autos)
router.get("/:id",autosC.autosd)

module.exports=router