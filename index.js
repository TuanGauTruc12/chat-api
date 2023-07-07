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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.json({ message: `hello everyone from chat for me!!` });
});

app.use((req, res, next) => {
  req.setTimeout(120000);
  next();
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
