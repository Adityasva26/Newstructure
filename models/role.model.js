import mongoose , {schema} from "mongoose"

const roleSchema = new schema (
    {
        role:{
            type:String,
            unique:true,
            required:true
        },
        permissions: [{
            resource: {
                type: String,
                required: true
            },
            actions: [{
                type: String,
                required: true
            }]
        }]
    }
)
export const role = mongoose.model("Role", roleSchema)