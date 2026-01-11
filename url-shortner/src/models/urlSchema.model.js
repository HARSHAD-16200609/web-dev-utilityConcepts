import mongoose, {Schema} from "mongoose";




const UrlSchema = new Schema({
    code:{
        type:String,
        required:true
    },
    longurl:{
        type:String,
        required:true
    },
    accessCount:{
        type:Number,
        default:0
    }
})

export const UrlModel=  mongoose.model("url",UrlSchema)