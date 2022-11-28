import express from 'express';
import { STATUS_CODES } from 'http';
const app = express();
const PING_LISTEN_PORT = 3000;


app.get('/ping', (req, res) => {
    res.json(req.headers);
})
app.all('*', (req, res) => {
    res.status(404).end();
})


app.listen(PING_LISTEN_PORT, () => {
  return console.log(`Express écoute sur l'adresse http://localhost:${PING_LISTEN_PORT}`);
});


