import { gql } from '@apollo/client';

export const CREATE_USER =gql `
  mutation createUser($username: String!, $email: String!, $password: String!) {
      createUser(username: $username, email: $email, password: $password) {
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
        user {
            _id
        }
       token
    }
}
`;