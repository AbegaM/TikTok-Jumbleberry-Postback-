const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("main route");
  res.send({ message: "main route working" });
});


app.post("/tiktok", (req, res) => {
    console.log('POST ROUTE FOR TIKTOK')
    console.log(req.query)
    res.sendStatus(200)
})

app.get("/tiktok", (req, res) => {
    console.log('GET ROUTE FOR TIKTOK')
    console.log(req.query)
    res.sendStatus(200)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
