const Category = require("../models/category.model");

exports.addCategoryServices = async (data) => {
  const category = await Category.create(data);
  await category.save({ validateBeforeSave: true });
  return category;
};

exports.getAllCategoriesServices = async () => {
  const categories = await Category.find({});
  return categories;
};
