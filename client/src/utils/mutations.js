import {gql} from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
    token
  }
}
`
export const FIND_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
}
`

export const SAVE_BOOK = gql`
mutation saveBook($bookData: bookData) {
    addBook(bookData: $bookData) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            image
            link
            title
        }
    }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            image
            link
            title
        }
    }
}
`;