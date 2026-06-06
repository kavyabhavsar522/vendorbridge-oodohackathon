const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const vendors = {};

app.post("/add-vendor", (req, res) => {
    const { name, phone, category, location } = req.body;

    if (!name || !phone || !category || !location) {
        return res.json({
            success: false,
            message: "All fields are required"
        });
    }

    const id = uuidv4();

    vendors[id] = {
        id,
        name,
        phone,
        category,
        location,
        createdAt: new Date().toISOString()
    };

    return res.json({
        success: true,
        message: "Vendor added successfully",
        vendor: vendors[id]
    });
});

app.get("/vendors", (req, res) => {
    return res.json({
        success: true,
        data: Object.values(vendors)
    });
});

app.get("/vendor/:id", (req, res) => {
    const vendor = vendors[req.params.id];

    if (!vendor) {
        return res.json({
            success: false,
            message: "Vendor not found"
        });
    }

    return res.json({
        success: true,
        data: vendor
    });
});

app.put("/vendor/:id", (req, res) => {
    const vendor = vendors[req.params.id];

    if (!vendor) {
        return res.json({
            success: false,
            message: "Vendor not found"
        });
    }

    const { name, phone, category, location } = req.body;

    vendors[req.params.id] = {
        ...vendor,
        name: name || vendor.name,
        phone: phone || vendor.phone,
        category: category || vendor.category,
        location: location || vendor.location
    };

    return res.json({
        success: true,
        message: "Vendor updated successfully",
        data: vendors[req.params.id]
    });
});

app.delete("/vendor/:id", (req, res) => {
    if (!vendors[req.params.id]) {
        return res.json({
            success: false,
            message: "Vendor not found"
        });
    }

    delete vendors[req.params.id];

    return res.json({
        success: true,
        message: "Vendor deleted successfully"
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});