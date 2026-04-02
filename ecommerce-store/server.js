const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const products = JSON.parse(fs.readFileSync("./data/products.json"));

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.json(product);
});

app.post("/api/order", (req, res) => {
    const order = req.body;
    console.log("New Order:", order);
    res.json({ message: "Order placed successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});