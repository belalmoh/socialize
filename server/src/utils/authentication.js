const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { TOKEN_SECRET, AUTH_EXPIRATION_PERIOD, ITERATIONS, KEY_LEN, DIGEST } = require('../../config');

const generateSalt = () => crypto.randomBytes(16).toString('hex');

const Salt = generateSalt();

const generateUserToken = (user) => {
    const token = jwt.sign(user, TOKEN_SECRET, {
        expiresIn: AUTH_EXPIRATION_PERIOD
    });

    return token;
}

const generatePasswordHash = (password) => {
    const hash = crypto.pbkdf2Sync(password, Salt ?? generateSalt, ITERATIONS, KEY_LEN, DIGEST).toString('hex');

    return hash;
}

module.exports = {
    generateUserToken,
    generatePasswordHash
};