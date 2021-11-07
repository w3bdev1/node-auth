const { getUserPassword, saveUserData } = require('./talk2db')
const { hashedPassword } = require('./encrypt')

const user = {
	username: 'user',
	password: '12345'
}

console.log(hashedPassword(user.password))
