const { ObjectId } = require('mongodb');
const Blog = require('../models/blog');

const createBlog = async (req, res) => {
	const { title, thumbnail, content, isAnonymous, tag, userId } = req.body;
	const blog = new Blog(title, thumbnail, content, isAnonymous, tag, userId);
	try {
		await blog.create();
		return res.json({ message: 'succesfully create a blog!' }).status(200);
	} catch (error) {
		console.log(error);
	}
};

const findById = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId);
	try {
		const blog = await Blog.findById(blogId);
		return res
			.json({
				data: blog,
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

const blogSearch = async (req, res) => {
	const value = req.query.v;
	try {
		const data = await Blog.search(value).toArray();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

const allBlogs = async (req, res) => {
	try {
		const blogs = await Blog.fetchAll().toArray();
		return res
			.json({
				blogs: blogs.length === 0 ? 'no blog found' : blogs,
			})
			.status(blogs.length === 0 ? 404 : 200);
	} catch (error) {
		console.log(error);
	}
};

const updateBlog = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId);
	const updatedTitle = req.body.title;
	const updatedThumbnail = req.body.thumbnail;
	const updatedContent = req.body.content;
	const isAnonymous = req.body.isAnonymous;
	const updatedTag = req.body.tag;

	try {
		await Blog.update(
			blogId,
			updatedTitle,
			updatedThumbnail,
			updatedContent,
			isAnonymous,
			updatedTag
		);
		return res
			.json({
				message: 'blog edited!',
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

const deleteBlog = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId);
	try {
		await Blog.delete(blogId);

		return res.json({
			message: 'blog deleted!',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.createBlog = createBlog;
exports.updateBlog = updateBlog;
exports.findById = findById;
exports.blogSearch = blogSearch;
exports.allBlogs = allBlogs;
exports.deleteBlog = deleteBlog;
