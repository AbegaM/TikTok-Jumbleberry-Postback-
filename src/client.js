const axios = require("axios").default;

const BASE_URL = "https://business-api.tiktok.com/open_api/v1.2/pixel/track/";
const ACCESS_TOKEN = "1a1e10a7f3df1c2ef98c4f5a2051ef9cbaeb7ccb";
const CONFIG = {};

const postData = async (body) => {
  const URL = `${BASE_URL}`;
  const response = await axios.post(URL, body, {
    headers: {
      "Access-Token": ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

module.exports = { postData };
