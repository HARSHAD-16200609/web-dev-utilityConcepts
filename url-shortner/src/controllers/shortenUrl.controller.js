import mongoose from "mongoose";
import { UrlModel } from "../models/urlSchema.model.js";
import {nanoid} from "nanoid"

async function shortenUrl(req,res){
    const {longUrl} = req.body;
    console.log(longUrl);
    
  const code = nanoid(6)
  const shortUrl=  await UrlModel.create({
        code,
        longurl:longUrl
    })

    if(!shortUrl) res.status(500).json({sucess:false, message:"internal server error"})


res.status(200).json({
    message:"url created sucessfully",
    longUrl,
    shortUrl:`http://bit.ly/${code}`
       })

}

async function getlongUrl(req,res){
    const {code} = req.params;
    console.log(code);
    
    const url = await UrlModel.findOne({code});


    if(!url) res.status(500).json({sucess:false, message:"internal server error"})
        url.acessCount++;
    url.save();
 
        res.redirect(url.longurl)
}

async function updateLongUrl(req,res){
    const {longUrl} =req.body;
    const {code} = req.params;
console.log(code);


    const updatedUrl = await UrlModel.findOneAndUpdate({code},{longurl:longUrl})

    if(!updateLongUrl) res.status(500).json({sucess:false,message:"Failed to Update Url"})

        res.status(201).json({sucess:true,updatedUrl})

}
async function deleteLongUrl(req,res){
 
    const {code} = req.params;
console.log(code);


    const deletedUrl = await UrlModel.findOneAndDelete({code})

    if(!deletedUrl) res.status(500).json({sucess:false,message:"Failed to delete Url"})

        res.status(201).json({sucess:true})

}



function welcome(req,res){
 
    res.send("<h1> URL SHORTNER</h1>")
     
}


export {shortenUrl,welcome,getlongUrl,updateLongUrl,deleteLongUrl}

