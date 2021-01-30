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

// export const VIEW_USERS = gql`
//   {
//     user(_id:"5cae47bd772f1517486201a6"){_id,name,editable}
//   }
// `;

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

// export const ADD_USER = gql`
//   mutation{createUser(user:{_id: "1", name:"Pickles",editable:false}){_id,name,editable}}
// `

// export const ADD_USER = gql`
//   mutation($name: String, $editable: Boolean) {
//     createUser (name: $name, editable: $editable)
//   }
// `;


/*
const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;
*/

export const EDIT_USER = gql`
  mutation($id: String!, $name: String!, $editable: Boolean!) {
    updateUser(_id: $id, user: { name: $name, editable: $editable }) { _id, name, editable }
  }
`;

// export const EDIT_USER = gql`
//   mutation($id: String!, $name: String!, $editable: Boolean!) {
//     updateUser(_id: $id, user: { name: $name, editable: $editable })
//   }
// `;


// export const EDIT_USER = gql`
//   mutation($id: Int, $name: String, $editable: Boolean) {
//     updateUserInfo (_id: $id, name: $name, editable: $editable)
//   }
// `;


export const DELETE_USER = gql`
  mutation($id: String!) {
    deleteUser(_id: $id) { _id }
  }
`;

// export const DELETE_USER = gql`
//   mutation($id: Int) {
//     deleteUser(_id: $id)
//   }
// `
