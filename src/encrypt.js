const { randomBytes, scryptSync } = require('crypto');

function hashedPassword(password) {
	const salt = randomBytes(16).toString('hex');
	const hashedWithSalt = scryptSync(password, salt, 64).toString('hex');
	const saltColonHash = `${salt}:${hashedWithSalt}`
	return saltColonHash
}

module.exports = {
	hashedPassword
}
