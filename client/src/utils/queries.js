import {gql} from '@apollo/client';

export const THIS_USER = gql`
{
    thisUser {
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