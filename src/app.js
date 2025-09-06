import express from "express";
import cors from "cors";

const app = express();

// Setting some basic configurations

// Parse incoming JSON requests and limit payload size to 16kb
app.use(express.json({ limit: "16kb" }));

// Parse URL-encoded form data and allow nested objects, limit 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files (images, CSS, JS, etc.) from the "public" folder
app.use(express.static("public"));

// CORS Configuration =>By enabling CORS we allow frontend apps on different domains/ports to access backend APIs securely, if we don't do this, our backend would not able to communicate with frontend and vice-versa

/*
// Enable CORS for all origins (default, allows any frontend)
app.use(cors());
*/

app.use(
  cors({
    // Allow multiple origins from env (comma-separated) or fallback to localhost
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",

    // Allow only specific HTTP methods for controlled access
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],

    // Allow only specific headers like auth tokens and content type
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// Importing the health check routes

import healthcheckRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1/healthcheck", healthcheckRouter);

//Setting the home page route
app.get("/", (req, res) => {
  res.send("Welcome to the AuthFlow !!");
});

//Setting the custom route [testing]
app.get("/testing", (req, res) => {
  res.send("This is a testing page of AuthFlow !!");
});

export default app;
