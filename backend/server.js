const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const asyncHandler = require("express-async-handler");
const Product = require("./models/productModel.js");

const productsRoutes = require("./routes/productsRoutes.js");
const userRoutes = require("./routes/userRoutes");
const promotionsRoutes = require("./routes/promotionRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/promotions", promotionsRoutes);

app.use(notFound);
app.use(errorHandler);
let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`);
});
