import mongoose , {schema} from "mongoose"
// import jwt from 'jsonwebtoken'
import bcrypt from'bcrypt'

const userSchema = new schema(           //  mongoose.Schema is a constructor function provided by the Mongoose library for creating schemas.
        {                                // new Schema(...) creates a new instance of the schema object, defining the structure of t
               
            userName:{
                type:String,
                required:true,
                unique:true,
                lowercase:true,
                trim:true,
                index:true
            },
            email:{
                type:String,
                required:true,
                unique:true,
                trim:true
            },
            password:{
                type:String,
                required:[true,"password is required"]
            },
            role: {
                type: Schema.Types.ObjectId,
                ref: "Role"
            }    
        },
        {
            timestamps:true
        }
)
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
export const User = mongoose.model("User", userSchema)