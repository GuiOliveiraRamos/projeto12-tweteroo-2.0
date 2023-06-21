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
  const limitarTweets = tweets.slice(0, 10);
  const showTweets = limitarTweets.map((t) => ({
    username: t.username,
    tweet: t.tweet,
  }));

  res.send(showTweets);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
