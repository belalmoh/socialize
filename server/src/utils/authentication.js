const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { PASSWORD_SALT, TOKEN_SECRET, AUTH_EXPIRATION_PERIOD, ITERATIONS, KEY_LEN, DIGEST } = require('../../config');

const generateUserToken = (email) => {
    const token = jwt.sign({email}, TOKEN_SECRET, {
        expiresIn: AUTH_EXPIRATION_PERIOD
    });

    return token;
}

const generatePasswordHash = (password) => {
    const hash = crypto.pbkdf2Sync(password, PASSWORD_SALT, ITERATIONS, KEY_LEN, DIGEST).toString('hex');

    return hash;
}

const isValidPassword = (password) => {
    const hashedPassword = generatePasswordHash(password);

    return hashedPassword === password;
}

const isValidToken = async (token) => {
    try {
        const isValid = await jwt.verify(token, TOKEN_SECRET);
        return isValid;
    } catch (Err) {
        throw Err;
    }
}

module.exports = {
    generateUserToken,
    generatePasswordHash,
    isValidToken,
    isValidPassword
};