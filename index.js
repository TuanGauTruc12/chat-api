import express from "express";
import cors from "cors";
import "dotenv/config";
import Connection from "./database/db.js";
import routes from "./routes/index.js";
import bodyParser from "body-parser";

Connection();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.json({ message: `hello everyone from chat for me!!` });
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
