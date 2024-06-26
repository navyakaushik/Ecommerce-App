import express from 'express';
import { connectDB } from './utils/fefeatures.js';
import NodeCache from 'node-cache';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error.js';
import { config } from "dotenv";
import Stripe from 'stripe';
import cors from "cors";
//importing routes
import userRoute from './routes/user.js';
import productRoute from "./routes/products.js";
import orderRoute from './routes/order.js';
import paymentRoute from './routes/payment.js';
import dashboardRoute from './routes/stats.js';
config({
    path: "./.env",
});
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";
connectDB(mongoURI);
export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.get("/api/v1/user", (req, res) => {
    res.send("API Working with /api/v1");
});
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
//using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});
