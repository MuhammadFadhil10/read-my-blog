const { ObjectId } = require('mongodb');
const Folder = require('../models/folder');

const createFolder = async (req, res) => {
	const userId = new ObjectId(req.params.userId.trim());
	let { folderName } = req.body;

	try {
		// check if foldername already exist
		const hasFolder = await Folder.findByUser(userId).toArray();
		if (hasFolder.length > 0) {
			const folderNameExist = hasFolder.filter(
				(folder) => folder.folderName === folderName
			);
			folderNameExist.length > 0
				? folderName + `(${folderNameExist.length + 1})`
				: folderName;
		}
		const newFolder = new Folder(folderName, userId);
		await newFolder.create();
		return res.json({
			status: 'success',
			message: 'folder created!',
		});
	} catch (error) {
		console.log(error);
	}
};

exports.createFolder = createFolder;
