const { getUserPassword, saveUserData } = require('./talk2db')
const { hashedPassword } = require('./encrypt')

const user = {
	username: 'user',
	password: '12345'
}

const addUser = (username, password) => {
	saveUserData(username, hashedPassword(password), './db.json')
}

addUser(user.username, user.password)
