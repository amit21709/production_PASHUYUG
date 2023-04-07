import express from "express";
import {
  loginCtrl,
  registerCtrl,
  forgotPasswordCtrl,
  updateProfileCtrl,
  getOrdersCtrl,
  getAllOrdersCtrl,
  orderStatusCtrl,
  saveCtrl,
} from "./../controller/authCtrl.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerCtrl);

//LOGIN || POST
router.post("/login", loginCtrl);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordCtrl);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileCtrl);

//orders
router.get("/orders", requireSignIn, getOrdersCtrl);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersCtrl);

// order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusCtrl);

//Save animal
router.post("/save", saveCtrl);

export default router;
