import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/apiRoutes.js";

const app = express();
app.use(cors());

const { PORT, CORS_ORIGIN } = process.env;
app.use(express.json());
app.use(express.static("public"));

console.log(CORS_ORIGIN);
app.use(cors({ origin: CORS_ORIGIN }));

app.use(router);

console.log(PORT);
app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
});
