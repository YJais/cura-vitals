// import 'dotenv/config'
// // import dotenv from "dotenv";
// import express from "express";
// import rateLimit from "express-rate-limit";
// import cors from "cors";
// import morgan from "morgan";

// import authRoutes from "./routes/auth.js";
// import recordRoutes from "./routes/record.js";
// import uploadRoutes from "./routes/upload.js";
// import searchRoutes from "./routes/search.js";

// // dotenv.config();
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: "1mb" }));
// app.use(morgan("dev"));
// app.use(rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100,
//   message: "Too many requests. Try again later"
// }));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/records", recordRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/search", searchRoutes);

// // Health check
// app.get("/", (req, res) => {
//   res.json({ message: "CuraVitals Backend Running 🚀" });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import 'dotenv/config';
import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.js";
import recordRoutes from "./routes/record.js";
import uploadRoutes from "./routes/upload.js";
import searchRoutes from "./routes/search.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests. Try again later"
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/search", searchRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "CuraVitals Backend Running 🚀" });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
