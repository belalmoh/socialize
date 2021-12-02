const {
    objectType
} = require('nexus');

const Query = objectType({
    name: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('Users', {
            type: 'User',
            resolve: (_parent, _args, context) => {
                return context.prisma.user.findMany();
            },
        });
    }
});

module.exports = {
    Query
}