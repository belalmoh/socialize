import { gql } from '@apollo/client';
import { initApollo } from "~/context/dbContext";

const createUser = ({firstName, lastName, email, password}) => {

    const client = initApollo();

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

export {createUser};