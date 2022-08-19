const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT;
const { mongoConnect } = require('./config/mongoConfig');

const app = express();

app.use(bodyParser.json());

const blogRouter = require('./router/blog');

app.use('/api', blogRouter);

mongoConnect(() => {
	app.listen(port);
});
