import { app } from "./app.js";
import Dbconnection from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({path:'./.env'});

Dbconnection()
.then(()=>{
     app.listen(process.env.port || 8000 ,()=>{
        console.log('⚙️ Server is now connected to the port')
     })
})
.catch((err)=>{
    console.log("server is not connecting")
})