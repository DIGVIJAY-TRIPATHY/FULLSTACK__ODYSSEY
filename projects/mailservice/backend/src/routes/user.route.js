import { Router } from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    verifyEmail,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/verify-email/:token").get(verifyEmail)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT ,logoutUser)
router.route("/me").post(verifyJWT, getCurrentUser)


export default router