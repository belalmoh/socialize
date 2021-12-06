const {
    objectType, nonNull, arg, inputObjectType
} = require('nexus');

const { generateUserToken, generatePasswordHash } = require('../utils/authentication');

const UserInputType = inputObjectType({
    name: 'UserInputType',
    definition(t) {
        t.string('email')
        t.string('firstName')
        t.string('lastName')
        t.string('password')
    },
})

const UserType = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('email')
        t.nonNull.string('firstName')
        t.nonNull.string('lastName')
        t.nonNull.string('password')
        t.string('token')
    }
});

const UserMutation = objectType({
    name: 'Mutation',
    definition(t) {
        t.field('createUser', {
            type: 'User',
            args: {
                data: nonNull(arg({type: 'UserInputType'}))
            },
            resolve: (_, {data: {email, firstName, lastName, password}}, context) => {
                
                token = generateUserToken({email, firstName, lastName});
                password = generatePasswordHash(password);

                return context.prisma.user.create({
                    data: {
                        email, firstName, lastName, token, password
                    }
                });
            }
        })
    }
});


module.exports = {
    UserType,
    UserMutation,
    UserInputType
};