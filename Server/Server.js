import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();

const allowedOrigins = ["http://localhost:5173"];

// middleware configuration;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

let PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Server  API</h1>");
});

app.listen(PORT, () => {
  console.log(`server running at PORT: ${PORT}`);
});
