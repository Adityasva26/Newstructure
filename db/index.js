import { DB_NAME } from "../constant.js";
import mongoose from "mongoose"

const Dbconnection = async () =>{
    try {
        const connectionInstance = mongoose.connect(process.env.Backend_URL+DB_NAME)
        console.log("Db is connected to server")
    } catch (error) {
        console.log("Db is not connected to server")
    }
}

export default Dbconnection