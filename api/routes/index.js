const auth = require('./auth/auth');
const users = require('./users/users');
const post = require('./post/post');

module.exports = {
    routes: [
        {prefix: "/api/auth", route: auth}, 
        {prefix: "/api/users", route: users},
        {prefix: "/api/post", route: post}
    ]
}