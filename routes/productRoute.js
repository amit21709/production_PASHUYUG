import express from "express";
import {
  createProductCtrl,
  deleteProductCtrl,
  getProductCtrl,
  getSingleProductCtrl,
  productPhotoCtrl,
  updateProductCtrl,
  productFiltersCtrl,
  productCountCtrl,
  productListCtrl,
  searchProductCtrl,
  relatedProductCtrl,
  productCategoryCtrl,
  braintreeTokenCtrl,
  brainTreePaymentCtrl,
} from "../controller/productCtrl.js";
import { isAdmin, requireSignIn } from "./../middleware/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//route

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductCtrl
);
//Get All Product
router.get("/get-product", getProductCtrl);

//single product
router.get("/get-product/:slug", getSingleProductCtrl);

//get photo
router.get("/product-photo/:pid", productPhotoCtrl);

//delete product
router.delete("/product/:pid", deleteProductCtrl);

//Update product

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductCtrl
);

//filter product
router.post("/product-filters", productFiltersCtrl);

//product-count
router.get("/product-count", productCountCtrl);

//product per page
router.get("/product-list/:page", productListCtrl);

//search product
router.get("/search/:keyword", searchProductCtrl);

//similar Product
router.get("/related-product/:pid/:cid", relatedProductCtrl);

//category wise product
router.get("/product-category/:slug", productCategoryCtrl);

//payments routes
//token
router.get("/braintree/token", braintreeTokenCtrl);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentCtrl);
export default router;
