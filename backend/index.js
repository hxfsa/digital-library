require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routers/router.js");

app.use(cors());
app.use(express.json());
app.use(router);

// app.configure(function(){
  app.use('/uploads', express.static(path.join(__dirname, './public/uploads')));
  app.use(express.static(path.join(__dirname, "./public")));
  app.use('/uploads', express.static(path.join(__dirname, "./public/uploads")));
  // });

// app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
// app.get("/", (req, res) => {
//   res.send("cc voici la page d'accueil");
// });
console.log(path.join(__dirname, "./public/uploads"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Yups, an error occured: ${err}`);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
