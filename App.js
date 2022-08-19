const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT;
const { mongoConnect } = require('./config/mongoConfig');

const app = express();

app.use(bodyParser.json());

mongoConnect(() => {
	app.listen(port);
});
