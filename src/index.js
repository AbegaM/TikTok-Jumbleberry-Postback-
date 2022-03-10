const express = require("express");

const client = require("./client");

const app = express();

app.get("/", async (req, res) => {
  // const data = { pixel_code: "C8L1BDCLGSOAGACE91I0", event: "ViewContent" };
  // const response = await client.postData(data);
  // console.log(response);
  res.send({ message: "main route working" });
});

app.post("/tiktok", async (req, res) => {
  console.log("POST ROUTE FOR TIKTOK");
  console.log(req.query);
  res.sendStatus(200);
});

app.get("/testn", async (req, res) => {
  // const data = {
  //   pixel_code: "C88AJ03U4UMEF5JVB7IG",
  //   event: "ViewContent",
  //   // context: { ad: { callback: "C67BFNGQCDCUAMIVI4R0" } },
  //   // page: {
  //   //   url: "https://www.onnit.com/alpha-brain-offer-jmbs?utm_medium=jumbleberry&utm_campaign=affiliate&utm_content=alpha-brain-offer-jmb&utm_source=388083&jmb_cid=hY29mqA2lYvaalb3Tbo1VpoJ-dao7cmKfh1oOdGQj8LHHfP9wnSBomiCL_b-9R5A%2F%2F%2F&ttclid=__CLICKID__",
  //   // },
  // };
  const data = { pixel_code: "C8L1BDCLGSOAGACE91I0", event: "ViewContent" };
  const response = await client.postData(data);
  console.log(response);
  res.send({ message: "main route working" });
});

app.get("/tiktok", async (req, res) => {
  console.log("GET ROUTE FOR TIKTOK");
  console.log(req.query);
  const data = { pixel_code: req.query.ttclid, event: req.query.event };
  const response = await client.postData(data);
  console.log(response);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
