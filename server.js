// Import the express module
const express = require("express");
// Create an Express application
const app = express();
// Set the view engine to EJS (Embedded JavaScript)
app.set("view engine", "ejs");
// Use the requestTime middleware for all routes
app.use(requestTime);
// Define a route for the home page that renders an EJS template
app.get("/", (req, res) => {
    res.render("HomePage");
});
// Import the userRouter from the specified route file
const userRouter = require("./routes/route");
// Use the userRouter for the root path ("/")
app.use("/", userRouter);
// Create a new Date object to get the current date and time
var currentdate = new Date();
// Middleware function to check if the request time is within the allowed range
function requestTime(req, res, next) {
    // Get the current date and time
    const currentdate = new Date();
    // Log the original URL and the current day
    console.log(req.originalUrl, currentdate.getDay());
    // Check if the current time is between 9 AM and 5 PM on weekdays (Monday to Friday)
    if (
        currentdate.getHours() >= 9 &&
        currentdate.getHours() < 17 &&
        currentdate.getDay() > 0 && // Exclude Sunday
        currentdate.getDay() < 6
    ) {
        // If the conditions are met, call the next middleware
        next();
    } else {
        // If the conditions are not met, send a response with an error message
        const errorMessage = '<div style="font-family: Arial, sans-serif; color: #ff0000; padding: 30px; background-color: #ffe6e6;">Access allowed only between 9 AM and 5 PM on weekdays.</div>';
        res.status(403).send(errorMessage);
    }
}
// Start the Express application and listen on port 5000
app.listen(5000);
