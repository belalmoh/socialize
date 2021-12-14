import { gql } from '@apollo/client';
import { initApollo } from "~/context/dbContext";

const client = initApollo();

const createUser = ({firstName, lastName, email, password}) => {

    const CREATE_USER_QUERY = gql`
        mutation($data: UserInputType!) {
            createUser(data: $data) {
                firstName
                lastName
                email
                token
            }
        }
    `;
    
    return client.mutate({
        mutation: CREATE_USER_QUERY,
        variables: {data: {firstName, lastName, email, password}},
    });
}

const loginUser = (email, password) => {

    const LOGIN_USER_QUERY = gql`
        mutation LoginUser($data: UserInputType!) {
            loginUser(data: $data) {
                firstName
                lastName
                email
                token
                password
            }
        }
    `;
    
    return client.mutate({
        mutation: LOGIN_USER_QUERY,
        variables: {data: {email, password}},
    });
}

const validateToken = (token) => {

    const LOGIN_USER_QUERY = gql`
        query Query($token: String!) {
           IsValidToken(token: $token)
        }
    `;
    
    return client.query({
        query: LOGIN_USER_QUERY,
        variables: {token},
    });
}

export {createUser, loginUser, validateToken};