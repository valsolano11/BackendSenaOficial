import { Router } from "express";

const EstadoRouter = Router()

EstadoRouter.get('/Estado', prueba)
EstadoRouter.get("/Estado/:id", prueba);

export default EstadoRouter; 