const Sequelize = require('sequelize');

const dbname = 'teste';
const dbuser = 'root';
const dbpass = 'root';
const dbhost = 'localhost';

const sequelize = new Sequelize(dbname, dbuser, dbpass, {
	host: dbhost,
	dialect: 'mysql',
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Banco de dados conectado');
	})
	.catch((erro) => {
		console.log(erro);
	});

let variavel = 10;

module.exports = {
	Sequelize,
	sequelize,
	variavel,
};
