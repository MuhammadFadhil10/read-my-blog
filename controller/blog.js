const { ObjectId } = require('mongodb');
const Blog = require('../models/blog');
const User = require('../models/user');

const createBlog = async (req, res) => {
	const { title, thumbnail, content, isAnonymous, tag, userId } = req.body;
	const userObjId = new ObjectId(userId.trim());
	const authorData = await User.findUser('id', userObjId);
	const author = {
		_id: authorData._id,
		email: authorData.email,
		userName: authorData.userName,
		name: authorData.name,
		profilePicture: authorData.profilePicture,
		bio: authorData.bio,
		web: authorData.web,
		likedTopics: authorData.likedTopics,
	};
	const blog = new Blog(
		title,
		thumbnail,
		content,
		isAnonymous,
		tag,
		new Date().toISOString(),
		author
	);
	try {
		await blog.create();
		return res.json({ message: 'succesfully create a blog!' }).status(200);
	} catch (error) {
		console.log(error);
	}
};

const findById = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId.trim());
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
		const blogs = await Blog.search(value).toArray();
		if (blogs.length === 0) {
			return res
				.json({
					status: 'error',
					message: 'Blog not found!',
				})
				.status(404);
		}
		return res
			.json({
				status: 'success',
				blogs: blogs,
			})
			.status(200);
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

const myBlogs = async (req, res) => {
	const userId = new ObjectId(req.params.userId.trim());
	try {
		const blogs = await Blog.myBlog(userId).toArray();
		if (blogs.length === 0) {
			return res.json({
				status: 'error',
				message: 'You have no blog yet!',
			});
		}
		return res.json({
			status: 'success',
			blogs: blogs,
		});
	} catch (error) {
		console.log(error);
	}
};

const updateBlog = async (req, res) => {
	const blogId = new ObjectId(req.params.blogId.trim());
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
	const blogId = new ObjectId(req.params.blogId.trim());
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
exports.myBlogs = myBlogs;
exports.allBlogs = allBlogs;
exports.deleteBlog = deleteBlog;
