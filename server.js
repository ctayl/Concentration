const express = require('express');
const path = require('path');
const router = require('./controllers/api-routes');

const PORT = process.env.PORT || 3001;
const app = express();
// Allow cross origin in development
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use("/deck", router);

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/concentration/build")));

app.listen(PORT, () => console.log(`server listening on ${PORT}`));