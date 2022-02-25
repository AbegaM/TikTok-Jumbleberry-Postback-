const express = require("express");

const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
  //const data = { pixel_code: "C67BFNGQCDCUAMIVI4R0", event: "ViewContent" };
  // const response = await client.postData(data);
  // console.log(response);
  res.send({ message: "main route working" });
});

app.post("/tiktok", async (req, res) => {
  console.log("POST ROUTE FOR TIKTOK");
  console.log(req.query);
  res.sendStatus(200);
});

app.get("/tiktok", async (req, res) => {
  console.log("GET ROUTE FOR TIKTOK");
  console.log(req.query);
  const { pixel_code, event } = req.query;
  const response = await client.postData({ pixel_code, event });
  console.log(response);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
