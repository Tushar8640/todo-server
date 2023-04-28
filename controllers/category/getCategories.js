const { getAllCategoriesServices } = require("../../services/category.services");

exports.getAllCategoriController = async (req, res) => {
  try {
    const categories = await getAllCategoriesServices();
    if (categories) {
      res.status(200).json({
        status: "success",
        categories: categories,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to get categories ",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
