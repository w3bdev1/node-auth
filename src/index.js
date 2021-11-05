const { getUserPassword, saveUserData } = require('./talk2db')

const data = getUserPassword('admin', './db.json')
if (data) console.log(data)
