const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        helloWorld: String!
    }
`;

module.exports = {typeDefs};