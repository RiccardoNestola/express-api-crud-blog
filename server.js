
const express = require("express");
const dotenv = require("dotenv");
const homeController = require("./controllers/home");
const postsRouter = require("./routers/posts");

dotenv.config();

// istanza di express
const app = express();

// configuro i file statici
app.use(express.static("public"));

// Definiamo le rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contatti", homeController.contacts);

app.use("/posts", postsRouter)

// Avviamo il server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
