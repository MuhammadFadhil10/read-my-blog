const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
