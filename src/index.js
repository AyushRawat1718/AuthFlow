//Importing the files, so that we could use that
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

//Setting the path so that there is no problem in finding the env file
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

/*
//Listening the server on a specific port
app.listen(port, () => {
  console.log(`Successfully listening on port http://localhost:${port}`);
});
*/

// Listening the server, once the db connection is success
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Successfully Listening on the port http://localhost:${port}`,
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection Error", err);
    process.exit(1);
  });
