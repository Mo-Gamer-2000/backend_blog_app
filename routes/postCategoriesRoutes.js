import express from "express";
const router = express.Router();
import {
  createPostCategory,
  getAllPostCategories,
} from "../controllers/postCategoriesController";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

router
  .route("/")
  .post(authGuard, adminGuard, createPostCategory)
  .get(getAllPostCategories);

export default router;
