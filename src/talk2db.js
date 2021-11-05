const fs = require('fs');

function getUserPassword(username, json_path) {
	try {
		const data = fs.readFileSync(json_path, 'utf8') 
		const db = JSON.parse(data);

		const userFound = db.filter(user => user.username == username)

		if (userFound.length == 0) {
			throw Error('User not found!')
		} else if (userFound.length == 1) {
			return userFound[0].password
		} else {
			throw Error('Something went wrong')
		}
	} catch (err) {
		console.log(err.message)
	}
}

function saveUserData(username, password, json_path) {
	try {
		const data = fs.readFileSync(json_path, 'utf8')
		const db = JSON.parse(data)

		const newUser = { username, password }
		db.push(newUser)
		fs.writeFileSync(json_path, JSON.stringify(db))
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getUserPassword,
	saveUserData
}
