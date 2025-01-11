import { Router } from "express";
import express from "express";
import { Login, Logout, Signup } from "../controller/authController.js";
import verifyUser from "../verify/verifyUser.js";

const router = express.Router();


router.post("/login", Login);
// router.post("/logout", verifyUser, Logout);
router.post("/logout", Logout);

router.post("/signup", Signup);

// router.get("/", verifyUser, (req, res) => {
//     return res.json({ status: true, message: "Authorized user" });
//   });



export default router;