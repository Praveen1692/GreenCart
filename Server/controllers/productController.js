import Product from "../models/Product.js";
import { upload } from "../config/multer.js";
import { v2 as cloudinary } from "cloudinary";

//Add->: /api/product/add
export const addProduct = async (req, res) => {
  try {
    let productData = JSON.parse(req.body.productData);
    let images = req.files;
    let imagesURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    await Product.create({ ...productData, image: imagesURL });
    res.json({ success: true, message: "Product Add" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Product List->: /api/product/list
export const productList = async (req, res) => {
  try {
    const allProduct = await Product.find({});
    res.json({
      success: true,
      message: "Get All Product",
      products: allProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Product By Id->: /api/product/:id;
export const productById = async (req, res) => {
  try {
    const { id } = req.body;
    const getProductById = await Product.findById(id);
    res.json({ success: true, message: "Get Product", getProductById });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Change Stock->: /api/product/stock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body;
    await Product.findByIdAndUpdate(id, { inStock });
    res.json({ success: true, message: "Stock Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
