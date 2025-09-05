//Importing the files, so that we could use that
import dotenv from "dotenv";
import express from "express";

//Setting the path so that there is no problem in finding the env file
dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

//Setting the home page route
app.get("/", (req, res) => {
  res.send("Hello World !");
});

//Setting the custom route [testing]
app.get("/testing", (req, res) => {
  res.send("This is a testing page !!");
});

//Listening the server on a specific port
app.listen(port, () => {
  console.log(`Successfully listening on port http://localhost:${port}`);
});
