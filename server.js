const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;
const apiRoutes = require("./routes/apiRoutes");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/todos", {useNewUrlParser: true});
const connection = mongoose.connection;

// Let em know MongoDB is connected
connection.once("open", () => {
    console.log("MongoDB database connection established!");
});

// API Routes
apiRoutes(app);

// Send every other file to react app
// Do API calls before this
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// Starts the express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});