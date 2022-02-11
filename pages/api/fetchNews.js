const axios = require("axios");

export default function handler(req, res) {
  let q1 = "bitcoin";
  let q2 = "ethereum";
  let q3 = "blockchain";
  const apiKey = "60f3f6c6d8cd413ebdf78d5270db6d20";
  let today = new Date();
  today =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  console.log(today);
  let timeStamp = new Date().getTime();
  let yesterdaysTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
  let yesterday = new Date(yesterdaysTimeStamp);
  yesterday =
    yesterday.getFullYear() +
    "-" +
    String(yesterday.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(yesterday.getDate()).padStart(2, "0");
  console.log(yesterday);
  axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        q: q1 + "+" + q2 + "+" + q3,
        from: yesterday,
        to: today,
        sortBy: "popularity",
        apiKey: apiKey,
      },
    })
    .then((data) => {
      console.log(data);
      res.send(data.data.articles);
    });
}
