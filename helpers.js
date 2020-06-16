const fs = require("fs");
const axios = require("axios");

function cat(path) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

function webCat(url) {
  return axios.get(url)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = {
  cat,
  webCat
}