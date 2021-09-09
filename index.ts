import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;
import "dotenv/config";

console.log(process.env.NODE_ENV);
console.log(process.env.DB_HOST);

app.get("/env", (req, res) => {
  res.json({
    enviorment: process.env.NODE_ENV,
  });
});

app.get("/hola", (req, res) => {
  res.json({
    message: "hola soy alex",
  });
});

app.listen(port, () => {
  console.log("hola soy express y estoy corriendo en el puero " + port);
});
