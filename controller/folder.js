const { ObjectId } = require('mongodb');
const Folder = require('../models/folder');

const createFolder = async (req, res) => {
	const userId = new ObjectId(req.params.userId.trim());
	let { folderName } = req.body;

	try {
		// check if folder already exist
		const hasFolder = await Folder.findByUser(userId).toArray();
		if (hasFolder.length > 0) {
			// check if folder name already exist but just one
			const folderNameExist = hasFolder.filter(
				(folder) => folder.folderName === folderName
			);
			// check if folder name already duplicate
			const folderNameDuplicate = hasFolder.filter((folder) =>
				folder.folderName.includes(`${folderName} (`)
			);
			// if folder name already exist but just one, then add (1) to folder name as first duplicate
			if (folderNameExist.length === 1 && folderNameDuplicate.length === 0) {
				folderName += ` (1)`;
			}
			// if the folder name already more than 1 (have 1 duplicate), then add more duplicate
			if (folderNameDuplicate.length > 0) {
				// add more duplicate number to folder name
				folderName += ` (${folderNameDuplicate.length + 1})`;
			}
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

const myFolders = async (req, res) => {
	const userId = new ObjectId(req.params.userId.trim());
	try {
		const folders = await Folder.findByUser(userId).toArray();
		return res
			.json({
				status: 'success',
				totalResults: folders.length,
				folders: folders,
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

const updateFolder = async (req, res) => {
	const folderId = new ObjectId(req.params.folderId.trim());
	const userId = new ObjectId(req.params.userId.trim());
	let { newFolderName } = req.body;

	try {
		// check if folder already exist
		const hasFolder = await Folder.findByUser(userId).toArray();
		if (hasFolder.length > 0) {
			// check if folder name already exist but just one
			const folderNameExist = hasFolder.filter(
				(folder) => folder.folderName === newFolderName
			);
			// check if folder name already duplicate
			const folderNameDuplicate = hasFolder.filter((folder) =>
				folder.folderName.includes(`${newFolderName} (`)
			);
			// if folder name already exist but just one, then add (1) to folder name as first duplicate
			if (folderNameExist.length === 1 && folderNameDuplicate.length === 0) {
				newFolderName += ` (1)`;
				await Folder.update(folderId, newFolderName);
			}
			// if the folder name already more than 1 (have 1 duplicate), then add more duplicate
			if (folderNameDuplicate.length > 0) {
				// add more duplicate number to folder name
				newFolderName += ` (${folderNameDuplicate.length + 1})`;
				await Folder.update(folderId, newFolderName);
			}
		}
	} catch (error) {
		console.log(error);
	}

	return res
		.json({
			status: 'success',
			message: 'Folder updated!',
		})
		.status(200);
};

const deleteFolder = async (req, res) => {
	const folderId = new ObjectId(req.params.folderId.trim());
	try {
		await Folder.delete(folderId);
		return res
			.json({
				status: 'success',
				message: 'Folder deleted!',
			})
			.status(200);
	} catch (error) {
		console.log(error);
	}
};

exports.createFolder = createFolder;
exports.myFolders = myFolders;
exports.updateFolder = updateFolder;
exports.deleteFolder = deleteFolder;
