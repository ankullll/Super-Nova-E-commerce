const express = require("express");
const multer = require("multer");
const router = express.Router();
const { createProduct } = require("../controllers/product.controller");
const createAuthMiddleware = require("../middlewares/auth.middleware");
const {createProductValidators} = require("../validators/product.validators")


const upload = multer({ storage: multer.memoryStorage() });
// POST /api/products/
router.post(
  "/",
  createAuthMiddleware(["admin", "seller"]),
  upload.array("images", 5),
  createProductValidators,
  createProduct
);

module.exports = router;
