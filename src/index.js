const express = require("express");
const crypto = require("crypto");

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

const hashData = (str) => {
  const secret = "secreatTohash";
  const sha256Hasher = crypto.createHmac("sha256", secret);
  const hash = sha256Hasher.update(str).digest("hex");
  console.log(hash);
  return hash;
};

app.get("/testn", async (req, res) => {
  const data = {
    pixel_code: "C8L1BDCLGSOAGACE91I0",
    event: "ViewContent",
    timestamp: new Date(),
    context: {
      ad: {
        callback: "1726933390035986",
      },
      page: {
        url: "https://www.onnit.com/alpha-brain-offer-jmbb/?utm_medium=jumbleberry&utm_campaign=affiliate&utm_source=388083&jmb_cid=hY29mqA2lYvaalb3Tbo1VpoJ-dao7cmKfh1oOdGQj8LypaU4b1ZnMO2DgkN8nmnk%2F%2F%2F&ttclid=__CLICKID__",
        //referrer: "http://demo.mywebsite.com",
      },
      user: {
        external_id:
          "f0e388f53921a51f0bb0fc8a2944109ec188b59172935d8f23020b1614cc44bc",
        phone_number:
          "2f9d2b4df907e5c9a7b3434351b55700167b998a83dc479b825096486ffcf4ea",
        email:
          "dd6ff77f54e2106661089bae4d40cdb600979bf7edc9eb65c0942ba55c7c2d7f",
      },
    },
  };
  //const data = { pixel_code: "C8L1BDCLGSOAGACE91I0", event: "ViewContent" };
  const response = await client.postData(data);
  console.log(response);
  res.send({ message: "main route working" });
});

app.get("/tiktok", async (req, res) => {
  console.log("GET ROUTE FOR TIKTOK");
  console.log(req.query);
  // const data = { pixel_code: req.query.ttclid, event: req.query.event };
  // const response = await client.postData(data);
  // console.log(response);
  const data = {
    pixel_code: req.query.ttclid,
    event: req.query.event,
    timestamp: new Date(),
    context: {  
      ad: {
        callback: req.query.ttclid,
      },
      page: {
        url: "https://www.onnit.com/alpha-brain-offer-jmbb/?utm_medium=jumbleberry&utm_campaign=affiliate&utm_source=388083&jmb_cid=hY29mqA2lYvaalb3Tbo1VpoJ-dao7cmKfh1oOdGQj8LypaU4b1ZnMO2DgkN8nmnk%2F%2F%2F&ttclid=__CLICKID__",
        //referrer: "http://demo.mywebsite.com",
      },
      user: {
        external_id:
          "f0e388f53921a51f0bb0fc8a2944109ec188b59172935d8f23020b1614cc44bc",
        phone_number:
          "2f9d2b4df907e5c9a7b3434351b55700167b998a83dc479b825096486ffcf4ea",
        email:
          "dd6ff77f54e2106661089bae4d40cdb600979bf7edc9eb65c0942ba55c7c2d7f",
      },
    },
  };
  const response = await client.postData(data);
  console.log(response);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
