let mongoose=require('mongoose')
let express=require('express')
let dotenv=require('dotenv')
dotenv.config()
let port=process.env.PORT||5014
let app=express()
let citycontroller=require("./Controller/citiesmodelcontoller")
let route=require('./routes/cityroute')
const cors = require('cors');
app.use(cors());
app.use(express.json({ limit: '20mb' })); // or higher like '20mb' if needed
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.listen(port,()=>{
    console.log("server Runing ")
})

app.use('/send',route)


mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("connected")
})
.catch((error)=>{console.log(error)})