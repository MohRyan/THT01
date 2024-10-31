import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./src/routers/indexRouter";
import swaggerUi from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"

dotenv.config();

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(indexRouter);

app.get("/", (req, res) => {
    res.send("INI ADALAH DEFAULT EXPRESS UNTUK BE");
});

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "THT EndPoint",
            version: "1.0.0",
            description: "API",
        },
    },
    apis: ["./src/routers/indexRouter.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, async () => {
    console.log("🚀 ~ app.listen ~ PORT:", PORT);
});
