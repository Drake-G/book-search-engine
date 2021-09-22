import { gql } from '@apollo/client';

export const ADD_USER =gql `
  mutation createUser($username: String!, $email: String!, $password: String!) {
      createUser(username: $username, email: $email, password: $password) {
          token
          user {
              _id
              username
              email
              password
              savedBooks {
                  authors
                  description
                  bookId
                  image
                  link
                  title

              }
          }
          token
      }
  }
`;

export const LOGIN_USER = gql `
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
export const SAVE_BOOK = gql`
  mutation saveBook($Book: AddBook!) {
    saveBook(Book: $Book) {
      username
      email
      savedBooks {
      bookId
      authors
      description
      title
      image
      link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
      bookId
      }
    }
  }
`;