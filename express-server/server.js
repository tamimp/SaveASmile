import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/apiRoutes.js";

const app = express();
app.use(cors());

const { PORT, CORS_ORIGIN } = process.env; // destructuring assignment of PORT from process.env
app.use(express.json()); // parse incoming requests with JSON payloads
app.use(express.static("public")); // serve static files from the 'public' folder

console.log(CORS_ORIGIN);
app.use(cors({ origin: CORS_ORIGIN })); // allow cross-origin requests

app.use(router); // use apiRoutes as a middleware

console.log(PORT);
//TODO: Modify this to use the environment variable
app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
});
