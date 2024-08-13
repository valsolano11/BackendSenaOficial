import { Router } from "express";
import {crearRol} from "../controllers/Usuario/Rol.controllers.js"

const RolRouter = Router()

RolRouter.get('/Rol', prueba)
RolRouter.get("/Rol/:id", );
RolRouter.post("/Rol", crearRol );
RolRouter.put("/Rol/:id", prueba);

export default RolRouter