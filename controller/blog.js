const Blog = require('../models/blog');

const createBlog = async (req, res) => {
	const { title, thumbnail, content, isAnonymous, tag } = req.body;
	const blog = new Blog(title, thumbnail, content, isAnonymous, tag);
	try {
		await blog.create();
		return res.json({ message: 'succesfully create a blog!' }).status(200);
	} catch (error) {
		console.log(error);
	}
};
