const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/ecoreward")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// Schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  notes: String,
}, { timestamps: true });

// Model
const Order = mongoose.model("Order", orderSchema);

// Route
app.post("/order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(200).json({ message: "Order saved!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});