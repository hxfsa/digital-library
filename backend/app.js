require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("cc voici la page d'accueil");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Yups, an error occured: ${err}`);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
