const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    title: String!
    authors: String!
    description: String
    image: String
    link: String
}

input BookData {
    bookId: ID!
    title: String!
    authors: String!
    description: String
    image: String
    link: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookData!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;