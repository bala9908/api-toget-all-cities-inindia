let mongoose=require("mongoose")

let citiesModel=new mongoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    state:{type:String,required:true}
})
module.exports=new mongoose.model("cities",citiesModel)