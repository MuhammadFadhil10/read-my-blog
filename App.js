const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;
const { mongoConnect } = require('./config/mongoConfig');

const app = express();

app.use(cors({}));
app.use(bodyParser.json());

const blogRouter = require('./router/blog');
const authRouter = require('./router/auth');
const userRouter = require('./router/user');

app.use('/api', blogRouter);
app.use('/api', userRouter);
app.use('/api/auth', authRouter);

mongoConnect(() => {
	app.listen(port);
});
