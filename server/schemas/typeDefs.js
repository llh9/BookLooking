const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Book {
        bookId: ID!
        authors: [String]
        title: String!
        description: String
        image: String
        link: String
    }

    input BookInput {
        authors: [String]
        bookId: String! 
        title: String!
        description: String
        image: String
        link: String
        
    }

    type Query {
        thisUser: User
    }

    type Mutation {
        getUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookData: BookInput!): User
        deleteeBook(bookId: ID!): User
    }
`;
  

module.exports = typeDefs;