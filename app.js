const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const PORT = 8000;

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
	const nomeLivro = req.params.nomeLivro;
	let sisdate = await db.sequelize.query('select SYSDATE()');
	res.send(sisdate);
});

app.post('/', (req, res) => {
	let corpo = req.body;
	console.log(corpo);
	res.status(200).send('carro recebido');
});

app.listen(PORT, () => console.log(`servidor iniciado na porta: ${PORT}`));
