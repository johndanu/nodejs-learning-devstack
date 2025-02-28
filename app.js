const express = require("express");
const homeRoutes = require("./routes/home.routes");

const app = express();
const PORT = 8080;

app.use(express.json());
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/ejs", (req, res) => {
  let users = ["John", "Raj", "Fayaal"];
  res.render("index", { users });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}/`);
});
