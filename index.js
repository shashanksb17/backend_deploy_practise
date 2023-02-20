const express=require("express")
const {connection}=require("./config/db")
const {userModel}=require("./model/user.model")
const{userRouter}=require("./routes/user.route")

const app=express()

app.use(express.json())
require("dotenv").config()

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.post("/register",async(req,res)=>{
    const userDetail=req.body
    try{
        bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        });
        const user=new userModel(userDetail)
        await user.save()
        res.send({"msg":"user registered"})
    }
    catch(err){
        res.send({"msg":"user not registered","err":err.message})
    }
   
})

app.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    const token = jwt.sign({ course: 'backend' }, 'masai',{ expiresIn: '1h' });
    try{
        const user=await userModel.find({email,pass})
        // console.log(user,token)
        if(user.length>0){
            res.send({"msg":"login successful","token":token})
        }
        else{
            res.send({"msg":"wrong credentials"})
        }
        
    }
    catch(err){
        res.send({"msg":"user not found","err":err.message})
    }
    
})

app.use("/users",userRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("conected to db")
    }
    catch(err){
        console.log("not connected to db")
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)
})