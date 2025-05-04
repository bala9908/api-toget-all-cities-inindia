let express=require("express")

let route=express.Router()
let citycontoller=require('../Controller/citiesmodelcontoller')

route.post("/post",citycontoller.citycontroller)
route.get('/get',citycontoller.getall)
module.exports=route