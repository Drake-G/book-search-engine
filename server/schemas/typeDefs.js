const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
}

type Auth {
  token: ID!
  user: User
}

type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
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

input saveBook {
    bookId: ID
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
}

type Book {
    bookId: ID
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
}
`