import { Router } from "express";
import {shortenUrl,welcome,getlongUrl} from "../controllers/shortenUrl.controller.js"

const urlRouter= Router();



urlRouter.route('/shortenUrl').post(shortenUrl)
urlRouter.route('/bit.ly/:code').get(getlongUrl)

urlRouter.route('/').get(welcome);






export default urlRouter;