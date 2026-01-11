import { Router } from "express";
import {shortenUrl,welcome,getlongUrl,updateLongUrl,deleteLongUrl} from "../controllers/shortenUrl.controller.js"

const urlRouter= Router();



urlRouter.route('/shortenUrl').post(shortenUrl)
urlRouter.route('/updateUrl/:code').patch(updateLongUrl)
urlRouter.route('/deleteUrl/:code').delete(deleteLongUrl)
urlRouter.route('/bit.ly/:code').get(getlongUrl)

urlRouter.route('/').get(welcome);






export default urlRouter;