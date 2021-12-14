const { AuthenticationError } = require('apollo-server-errors');
const {
    objectType, nonNull, arg, inputObjectType
} = require('nexus');

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
                
                token = context.auth.generateUserToken(email);
                password = context.auth.generatePasswordHash(password);

                return context.prisma.user.create({
                    data: {
                        email, firstName, lastName, token, password
                    }
                });
            }
        }),

        t.field('loginUser', {
            type: 'User',
            args: {
                data: nonNull(arg({type: 'UserInputType'}))
            },
            resolve: async (_, {data: {email, password}}, context) => {
                const userObject = await context.prisma.user.update({
                    where: {
                        email
                    },
                    data: {
                        token: context.auth.generateUserToken(email)
                    }
                });
                if(userObject?.password == context.auth.generatePasswordHash(password)) {
                    return userObject;
                }
                throw new AuthenticationError("Invalid credentials");
            }
        })
    }
});


module.exports = {
    UserType,
    UserMutation,
    UserInputType
};