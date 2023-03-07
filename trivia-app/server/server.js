const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.get("/", (req, response) => {
  response.send("I am working!");
});

//connects to the trivia api 
app.get("/game", (req, res) => {
  const amount = req.query.amount;
  const category = req.query.category;
  const difficulty = req.query.difficulty;
  const params = new URLSearchParams({
    amount: amount,
    category: category,
    difficulty: difficulty
  });
  const url = `https://opentdb.com/api.php?${params}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.send({ data });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
