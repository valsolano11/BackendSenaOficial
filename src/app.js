import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import UsuarioRouter from "./routes/Usuario.routes.js";
import excelRouter from "./routes/excel.routes.js";
import LoginRouter from "./routes/login.routes.js";
import recuperacionRouter from "./routes/olvidarContrasena.routes.js";
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  UsuarioRouter,
  excelRouter,
  LoginRouter,
  recuperacionRouter
)


export default app;
