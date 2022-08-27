const { mongo } = require('../config/mongoConfig');

class Auth {
	constructor(email, userName, password) {
		this.email = email;
		this.userName = userName;
		this.password = password;
	}
}
