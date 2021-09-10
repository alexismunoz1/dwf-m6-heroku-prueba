import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
import "dotenv/config";

// handler
app.get("/env", (req, res) => {
  res.json({
    enviorment: process.env.NODE_ENV,
  });
});

app.get("/db-env", (req, res) => {
  res.json({
    "db-host": process.env.DB_HOST,
  });
});

app.get("/hola", (req, res) => {
  res.json({
    message: "hola soy alex",
  });
});

app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, () => {
  console.log("hola soy express y estoy corriendo en el puero " + port);
});
