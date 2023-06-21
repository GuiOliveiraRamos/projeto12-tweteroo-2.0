import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

let users = [];
let tweets = [];

app.get("/tweets", (req, res) => {
  if (tweets.lenght === 0) {
    res.send([]);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
