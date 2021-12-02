const {
    objectType,
} = require('nexus');

const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id')
        t.string('name')
        t.nonNull.string('email')
        t.nonNull.string('firstName')
        t.nonNull.string('lastName')
    }
});

module.exports = {
    User
};