const axios = require("axios");

export default function handle(req, res) {
  const hashnode_url = "https://api.hashnode.com";

  const query = `query{
  storiesFeed(type:FEATURED, page:0){
    slug
    title
    totalReactions
    coverImage
    brief
  }
}`;

  axios({
    url: hashnode_url,
    method: "post",
    data: {
      query,
    },
  }).then((data) => {
    console.log(data.data);
    res.send(JSON.stringify(data.data.data.storiesFeed));
  });
}
