import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_USER, GET_USERS, VIEW_USERS, EDIT_USER, DELETE_USER } from "./Queries";

import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

function App() {
  const getAllUsers = useQuery(GET_USERS);
  const userInfo = useQuery(VIEW_USERS, { variables: { id: "5cae47f2772f1517486201a7" }});
  // const addUser = useMutation(ADD_USER, { variables: { name: 'Rachel', editable: false }});
  // const [createUser, { data }] = useMutation(ADD_USER);
  const [createUser] = useMutation(ADD_USER);
  const [updateUser] = useMutation(EDIT_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  if (getAllUsers.loading || userInfo.loading) return <Spinner color="dark" />;
  if (getAllUsers.error || userInfo.error) return <React.Fragment>Error :(</React.Fragment>;

  function addUser() {
    createUser({ variables: { id: '', name: 'New User', editable: false }});
  }

  function editUser() {
    updateUser({ variables: { id: '5cae47f2772f1517486201a7', name: 'Billiam2', editable: false }});
  }

  function removeUser() {
    deleteUser({ variables: { id: '5cae47f2772f1517486201a7' }});
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>Query - Displaying all data</CardHeader>
        <CardBody>
          <pre>
            {JSON.stringify(getAllUsers.data, null, 2)}
          </pre>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Query - Displaying data with args</CardHeader>
        <CardBody>
          <CardSubtitle>Viewing a user by id</CardSubtitle>
          <pre>
            {JSON.stringify(userInfo.data, null, 2)}
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Create User</CardHeader>
        <CardBody>
          <CardSubtitle>Create a new user</CardSubtitle>
          <pre>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={addUser}
            >
              Add User
            </button>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Update User</CardHeader>
        <CardBody>
          <CardSubtitle>Update a user</CardSubtitle>
          <pre>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={editUser}
            >
              Edit User
            </button>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Delete User</CardHeader>
        <CardBody>
          <CardSubtitle>Delete a user</CardSubtitle>
          <pre>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={removeUser}
            >
              Remove User
            </button>
          </pre>
        </CardBody>
      </Card>
    </div>
  )
}

export default App;
