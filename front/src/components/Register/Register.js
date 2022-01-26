import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

const userRoles = [
  {
    value: 'Authorizer'
  },
  {
    value: 'Employee'
  },
  {
    value: 'Client'
  }
];

export default class Register extends Component {
  constructor(props) {
    super(props);

    //setting up functions
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //setting up state
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  onChangeLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeRole(e) {
    this.setState({ role: e.target.value });
  }

  onSubmit(e) {
    console.log("click detected");
    e.preventDefault();

    const userObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };

    console.log(userObject);
    axios
      .post("http://localhost:4000/users/create-user", userObject)
      .then((res) => console.log(res.data));

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });
  }

  render() {
    return (
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 3, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <h3>Register</h3>
            <TextField
              required
              label="First Name"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
            <TextField
              required
              label="Last Name"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
            <TextField
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <TextField
              required
              label="Email Address"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <TextField
          select
          label="User Role"
          onChange={this.onChangeRole}
          helperText="Select User Role"
        >
          {userRoles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
          </div>
        </Box>
        <Button variant="contained" size="large" onClick={this.onSubmit}>
          Register
        </Button>
      </div>
    );
  }
}
