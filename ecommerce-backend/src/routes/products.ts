import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getlatestProducts, getSingleProduct, newProduct, updateProduct} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

//To Create New Product  - /api/v1/product/new
app.post("/newProduct", adminOnly, singleUpload, newProduct);

//to get all products with filters - /api/v1/product/all
app.get("/all", getAllProducts);

//To get latest 10 products = api/v1/prodcut/latest
app.get("/latest", getlatestProducts);

//To get all unique categories - /api/v1/product/admin-products
app.get("/categories", getAllCategories);

//To get all prodcuts = api/v1/product/admin-products
app.get("/admin-products",adminOnly, getAdminProducts);

app
.route("/:id")
.get(getSingleProduct)
.put(adminOnly, singleUpload, updateProduct)
.delete(adminOnly, deleteProduct);

export default app;