const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json()) //bodyParser.json vai pegar tudo que vai chegar na requisição

const port =  3000;

app.get('/teste', (req, res) => 
    res
    .status(200)
    .send({mensagem:'hello'})
);

app.listen(port,()=> console.log(`listening on port ${port}`));

module.exports = app