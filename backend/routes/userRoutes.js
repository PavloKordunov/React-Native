import express from "express"
import {signupUser, loginUser, logoutUser, getUser, followUnfollow} from "../controllers/userController.js"
import { protectRoute } from "../middlewares/protectRoute.js"

const router = express.Router()

router.post("/login", loginUser)
router.post("/signup", signupUser)
router.post("/logout", logoutUser)
router.get("/profile/:query", getUser)
router.post("/follow/:id", protectRoute, followUnfollow)

export default router