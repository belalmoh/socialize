const {
    queryType, nonNull, stringArg, inputObjectType
} = require('nexus');

const Query = queryType({
    definition(t) {
        t.nonNull.boolean('IsValidToken', {
            args: {
                token: nonNull(stringArg())
            },
            resolve: async (_, { token }, context, info) => {
                try {
                    const isValid = await context.auth.isValidToken(token);
                    return true;
                } catch (error) {
                    return false;
                }
            }
        })
    }
});

module.exports = {
    Query
}