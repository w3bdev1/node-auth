const { getUserPassword, saveUserData } = require('./talk2db')

try {
	const data = getUserPassword('admin', './db.json')
	console.log(data)
} catch (err) {
	console.log(err.message)
}
