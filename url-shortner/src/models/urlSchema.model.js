import mongoose, {Schema} from "mongoose";




const UrlSchema = new Schema({
    code:{
        type:Number,
        required:true
    },
    longurl:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        default:0
    }
})

export const UrlModel=  mongoose.model("url",UrlSchema)