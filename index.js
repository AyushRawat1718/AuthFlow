//Importing the .env file, so that we could use that
import dotenv from "dotenv";

//Setting the path so that there is no problem in finding the env file
dotenv.config({
  path: "./.env",
});

let myUserName = process.env.MY_USERNAME;

console.log(`Starting backend with ${myUserName}`);
