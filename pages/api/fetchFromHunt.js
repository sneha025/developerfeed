const axios = require("axios");

export default function handler(req, res) {
  var config = {
    method: "get",
    url: "https://api.producthunt.com/v1/posts?sort_by=votes_count&order=desc&search[featured]=true&per_page=10",
    headers: {
      Authorization: "Bearer -6KkhP0X-uf7McG0BPMDiy6rpQHnrVQA5Tx2vGkce5w",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.posts.length));
      let result = response.data.posts.slice(0, 10);
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}
