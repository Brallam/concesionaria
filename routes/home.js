const express=require("express")
const router=express.Router();
const homeC=require("../controllers/homec")
//
router.get("/",homeC.home)

module.exports=router