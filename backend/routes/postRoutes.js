import express from "express"
import { createPost, deletePost, likeUnlikePost, replyPost } from "../controllers/postController.js"
import { protectRoute } from "../middlewares/protectRoute.js"

const router = express.Router()

router.post("/create", protectRoute, createPost)
router.delete("/:id", protectRoute, deletePost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/reply/:id", protectRoute, replyPost)
export default router