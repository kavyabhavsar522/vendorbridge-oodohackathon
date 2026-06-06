const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = {};

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({
            success: false,
            message: "All fields are required"
        });
    }

    if (users[email]) {
        return res.json({
            success: false,
            message: "User already exists"
        });
    }

    users[email] = {
        id: uuidv4(),
        name,
        email,
        password
    };

    return res.json({
        success: true,
        message: "Registered successfully"
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users[email];

    if (!user) {
        return res.json({
            success: false,
            message: "User not found"
        });
    }

    if (user.password !== password) {
        return res.json({
            success: false,
            message: "Wrong password"
        });
    }

    return res.json({
        success: true,
        message: "Login successful",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});