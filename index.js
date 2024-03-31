const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.listen(5000,()=>{
console.log("app running on port 500000")
})
app.get('/',(req,res)=>{
    res.json({message:"successyyyutyytttv"})
})