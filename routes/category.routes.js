const express = require("express");
const {
  addCategoryController,
} = require("../controllers/category/addCategory");
const { getAllCategoriController } = require("../controllers/category/getCategories");

const router = express.Router();

router.post("/addcategory", addCategoryController);
router.get("/categories", getAllCategoriController);

module.exports = router;
