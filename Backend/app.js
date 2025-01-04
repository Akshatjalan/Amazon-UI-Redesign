const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error: ", err));

// Define Product Schema
const productSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
  image: String,
  description: String,
  type: String,
});

const Product = mongoose.model("Product", productSchema);

// Routes
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Products:", products); // Debugging output
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
