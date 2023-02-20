const express=require("express")
const {userModel}=require("../model/user.model")
const jwt=require("jsonwebtoken")
const userRouter=express.Router()

userRouter.get("/data",(req,res)=>{
    // const token=req.query.token
    const token=req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded)=> {
        if(decoded){
            res.send("data.....")
        }
        else{
            res.send({"msg":"something went wrong","err":err.message})
        }
    });
})

userRouter.get("/cart",(req,res)=>{
    // const token=req.query.token
    const token=req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded)=> {
        if(decoded){
            res.send("cart.....")
        }
        else{
            res.send({"msg":"something went wrong","err":err.message})
        }
    });
    
})

userRouter.get("/about",(req,res)=>{
    const token=req.headers.authorization
    jwt.verify(token, 'masai', (err, decoded)=> {
        if(decoded){
            res.send("about.....")
        }
        else{
            res.send({"msg":"something went wrong","err":err.message})
        }
    });
    
})

module.exports={userRouter}