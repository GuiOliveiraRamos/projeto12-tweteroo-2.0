import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.get("/tweets", (req, res) => {
  if (tweets.length === 0) {
    res.send([]);
  }
  const limitarTweets = tweets.slice(0, 10);
  const showTweets = limitarTweets.map((t) => ({
    username: t.username,
    tweet: t.tweet,
    avatar: users.find((u) => u.username === t.username).avatar,
  }));

  res.send(showTweets);
});

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  users.push({ username, avatar });
  res.status(201).send("Usuário cadastrado!");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const verificarUsuario = users.find((u) => u.username === username);
  if (!verificarUsuario) {
    return res.status(401).send("UNAUTHORIZED");
  }
  if (!username || !tweet) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }
  tweets.push({ username, tweet });
  res.status(201).send("OK");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
