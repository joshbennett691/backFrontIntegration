import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        this.setState({
          users: res.data,
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Access Level</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.length > 0 ? (
            this.state.users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.accessLevel}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="10">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
