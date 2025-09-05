import express from "express";

const app = express();

//Setting the home page route
app.get("/", (req, res) => {
  res.send("Welcome to the AuthFlow !!");
});

//Setting the custom route [testing]
app.get("/testing", (req, res) => {
  res.send("This is a testing page of AuthFlow !!");
});

export default app;
