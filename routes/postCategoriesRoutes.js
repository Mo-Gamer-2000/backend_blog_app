import express from "express";
const router = express.Router();
import { createPostCategory } from "../controllers/postCategoriesController";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

router.route("/").post(authGuard, adminGuard, createPostCategory);

export default router;
