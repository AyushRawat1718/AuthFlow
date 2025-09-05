//Importing the files, so that we could use that
import dotenv from "dotenv";
import app from "./app.js";

//Setting the path so that there is no problem in finding the env file
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

//Listening the server on a specific port
app.listen(port, () => {
  console.log(`Successfully listening on port http://localhost:${port}`);
});
