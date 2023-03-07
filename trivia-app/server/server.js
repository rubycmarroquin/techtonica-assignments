const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.get("/", (req, response) => {
  response.send("I am working!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
