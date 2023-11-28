// Importing the Express framework
const express = require("express");
// Creating an instance of the Express Router
const router = express.Router();
// Handling GET requests for the "/services" endpoint
router.get("/services", (req, res) => {
    // Rendering the "OurServices" view and sending it as a response
    res.render("OurServices");
});
// Handling GET requests for the "/contact" endpoint
router.get("/contact", (req, res) => {
    // Rendering the "ContactUs" view and sending it as a response
    res.render("ContactUs");
});
// Exporting the router to be used in other parts of the application
module.exports = router;
