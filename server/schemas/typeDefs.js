const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
}

type Mutation {
    createUser(username: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: addBook): User
    removeBook(bookId: ID): User
}

type User {
    _id: ID
    username: String
    password: String
    email: String
    bookCount: String
    savedBooks: [Book]
}

`