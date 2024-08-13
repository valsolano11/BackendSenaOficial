import { Router } from "express";
import upload from "../middlewares/upload.js"
import {uploadUsers} from "../controllers/Usuario/Usuario.controllers.js"

const excelRouter = Router();


excelRouter.post("/upload", upload.single("file"), uploadUsers);


export default excelRouter;