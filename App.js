const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;
const { mongoConnect } = require('./config/mongoConfig');

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_ORIGIN,
	})
);
app.use(bodyParser.json());

const blogRouter = require('./router/blog');
const folderRouter = require('./router/folder');
const authRouter = require('./router/auth');
const userRouter = require('./router/user');
const commentRouter = require('./router/comments');
const likeRouter = require('./router/like');

app.use('/api', blogRouter);
app.use('/api', folderRouter);
app.use('/api', commentRouter);
app.use('/api', likeRouter);
app.use('/api', userRouter);
app.use('/api/auth', authRouter);

mongoConnect(() => {
	app.listen(port);
});
