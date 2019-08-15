const api = require("./api");
const getUserInfo = require("./data/getUsetInfo");

let config = [
  {
    method:"get",
    url:api.getUserInfo,
    data:getUserInfo
  }
];

module.exports = config;