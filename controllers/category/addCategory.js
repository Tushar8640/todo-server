const { addCategoryServices } = require("../../services/category.services");

exports.addCategoryController =async ( req,res)=>{
    try {
        const data = req?.body;
  
        const category = await addCategoryServices(data);
        console.log("todo---->", req.body);
        if (category) {
          res.status(200).json({
            status: "success",
            message: "category added Successfully",
            category: category,
          });
        } else {
          res.status(200).json({
            status: "failed",
            message: "Unable to add category ",
          });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
          status: "failed",
          message: error.message,
        });
    }
}