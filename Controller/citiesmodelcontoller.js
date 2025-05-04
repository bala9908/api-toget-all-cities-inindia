
let citymodel=require("../Model/Citymodel")

// let citycontroller=async (req,res)=>{
//     let {id,name,state}=req.body
//     try {
//         let data=new citymodel({id,name,state})
//         await data.save()
//         res.status(200).json(data)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json("Server error")
//     }
// }



const citycontroller = async (req, res) => {
    const cities = req.body;

    if (!Array.isArray(cities) || cities.length === 0) {
        return res.status(400).json({ message: "Request body must be a non-empty array" });
    }

    try {
        const result = await citymodel.insertMany(cities);
        res.status(201).json({ message: "Cities added", data: result });
    } catch (error) {
        console.error("Error inserting cities:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { citycontroller };


let getall=async (req,res) => {
    try {
        let data=await citymodel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json("Server error")
    }
}

module.exports={citycontroller,getall}
