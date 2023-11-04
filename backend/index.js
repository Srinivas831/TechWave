const express=require("express");
const app=express();
const cors=require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/users.routes");
const { productRouter } = require("./routes/course.routes");

//internal middlewares..................
app.use(cors());
app.use(express.json());
app.use("/users",userRouter);
app.use("/courses",productRouter);

// app.get("/",(req,res)=>{
//     res.send("server is working");
// })

app.listen(8080,async()=>{
    try{
        await connection;
        console.log("server is running at port 8080");
    }
    catch(err){
        console.log("server error");
    }
})
