import { Router } from "express";
import { crearUsuario, getAllusuario, getUsuario, Putusuario } from "../controllers/Usuario/Usuario.controllers.js";
import validarSchemas from "../middlewares/ValidarSchemas.js";
import { usuarioSchemas } from "../schemas/usuarios.schemas.js";

const UsuarioRouter = Router()

UsuarioRouter.get('/usuarios', getAllusuario )
UsuarioRouter.get("/usuarios/:id", getUsuario ); 
UsuarioRouter.post("/usuarios", validarSchemas(usuarioSchemas), crearUsuario);
UsuarioRouter.put("/usuarios/:id", Putusuario );

export default UsuarioRouter