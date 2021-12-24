import {gql} from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`

export const FIND_USER = gql`
mutation getUser($email: String, $password: String) {
    getUser(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`

export const SAVE_BOOK = gql`
mutation addBook($bookData: bookInput) {
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
mutation deleteBook($bookId: Id) {
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
`