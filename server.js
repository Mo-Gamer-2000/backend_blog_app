import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import { errorResponserHandler } from "./middleware/errorHandler";
import { invalidPathHandler } from "./middleware/errorHandler";

// Routes
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);

// Static Assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
