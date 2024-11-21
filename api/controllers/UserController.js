const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register Controller
const registerController = async (req, res) => {
  //  console.log("I am called");
    try {
        const { email, username, password } = req.body;

        // Check for missing fields
        if (!email || !username || !password) {
            return res.status(400).send({
                message: "Required fields are missing",
            });
        }

        // Hash the password before storing it
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user with hashed password
        const newUser = await User.create({ email, username, password: hashedPassword });

        // Send success response
        return res.status(201).send({
            message: "User created successfully",
            user: newUser, // Optionally return the created user (be cautious with sensitive data)
        });
    } catch (err) {
        console.error("Error creating user:", err);

        // Handle specific database errors or validation issues
        return res.status(500).send({
            message: "Internal Server Error",
            error: err.message, // Include error details (optional, for debugging)
        });
    }
};

// Login Controller
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(401).send({
                message: "All fields are required",
                email,
                password,
            });
        }

        // Find the user by email (findOne is better for unique fields like email)
        const user = await User.findOne({ email });

        // If no user is found
        if (!user) {
            return res.status(401).send({
                message: "User does not exist",
            });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send({ message: "Invalid password" });
        }

        console.log(user);  // Logging the user object (for debugging purposes)

        return res.status(200).send({
            message: "Login successful",
            user: user, // Optionally return the user data
        });
    } catch (e) {
        // Catch any errors and send an error message
        return res.status(500).send({
            message: "Error occurred",
            error: e.message,
        });
    }
};

module.exports = {
    registerController,
    loginController
};
