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

// Get all products
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

// Search Products by Query
app.get("/products/search", async (req, res) => {
  const { q } = req.query;
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { brand: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { type: { $regex: q, $options: "i" } },
      ],
    });
    res.json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Failed to search products" });
  }
});

// Get product by ID
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    console.log("product:", product);
    if (!product) {
      return res.status(404).json({ error: "Product not Found!" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product details" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
