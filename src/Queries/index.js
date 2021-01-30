import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    users {
      _id,
      name,
      editable,
    }
  }
`;

export const VIEW_USERS = gql`
  query ($id: ID!){
    user(_id: $id) {
      _id,
      name,
      editable,
    }
  }
`;

export const ADD_USER = gql`
  mutation($id: String!, $name: String!, $editable: Boolean!) {
    createUser(user:{_id: $id, name: $name, editable: $editable}){_id,name,editable}
  }
`

export const EDIT_USER = gql`
  mutation($id: String!, $name: String!, $editable: Boolean!) {
    updateUser(_id: $id, user: { name: $name, editable: $editable }) { _id, name, editable }
  }
`;

export const DELETE_USER = gql`
  mutation($id: String!) {
    deleteUser(_id: $id) { _id }
  }
`;
