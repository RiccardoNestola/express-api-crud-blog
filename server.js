/* Esercizio
Per il nostro blog, concentriamoci sul creare 2 rotte:
  -[POST] - rotta store del crud che riceverà dei dati e creerà un nuovo post. Questa dovrà riceve i dati in formato application/x - www - urlencoded e dovrà ritornare un redirect nel caso di richiesta html, altrimenti di default il json dell’elemento appena creato
  -: slug[DELETE] - rotta destroy del crud che dovrà ritornare un 404 nel caso non sia stato trovato un post corrispondente.Ritornare un redirect nel caso di richiesta html, altrimenti di default del testo con scritto “post eliminato”
Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.
Testare le rotte tramite Postman.
  Bonus
Tramite una funzione, salvare l’array dei post nel file.json
nella funzione store permettere di passare i dati nel formato multipart / form - data tramite multer
permettere di eseguire l’upload dell’immagine principale del post. */


const express = require("express");
const dotenv = require("dotenv");
const homeController = require("./controllers/home");
const postsRouter = require("./routers/posts");

dotenv.config();

// istanza di express
const app = express();

// registro il body-parser per "application/json"
app.use(express.json());

// registro il body-parser per "application/x- www-form-urlencoded"
app.use(express.urlencoded({ extended: true }));

// configuro i file statici
app.use(express.static("public"));

// Definiamo le rotte
app.get("/", homeController.index);
app.get("/about", homeController.about);
app.get("/contatti", homeController.contacts);

app.use("/posts", postsRouter)


/* app.post("/", (req, res) => {
  console.log(req.body);
}); */


// Avviamo il server
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
