const dotenv = require('dotenv');
const config = dotenv.config({
    path: './config/.env'
});

let {parsed} = config;
parsed = {
    ...parsed,
    ITERATIONS: parseInt(parsed.ITERATIONS, 10), 
    KEY_LEN: parseInt(parsed.KEY_LEN, 10)
}

module.exports = {
    ...parsed
};