const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();
app.use(express.json());

app.get('/:nomeLivro', (req, res) => {
	const nomeLivro = req.params.nomeLivro;
	console.log(nomeLivro);
	res.send('Aplicaçao funcionando na porta 8080');
});

app.post('/', (req, res) => {
	let corpo = req.body;
	console.log(corpo);
	res.status(200).send('carro recebido');
});

app.listen(PORT, () => console.log('servidor iniciado'));
