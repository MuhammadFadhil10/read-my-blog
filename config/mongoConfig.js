const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

let db = null;
const mongoConnect = async (cb) => {
	try {
		await client.connect((err) => {
			if (!err) {
				db = client.db;
				console.log('mongodb connected');
				cb();
			}
		});
	} catch (error) {
		console.log(error);
	}
};

const mongo = () => {
	if (db) return db;
	throw new Error('no database found');
};

exports.mongoConnect = mongoConnect;
exports.mongo = mongo;
