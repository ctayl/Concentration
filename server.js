const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const router = require('./controllers/api-routes');

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  // Allow cross-origins in development
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });
}
// Deck API Routes
app.use("/deck", router);
// Send every request to the React app
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));

app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));