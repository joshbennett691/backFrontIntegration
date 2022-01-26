import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Link } from "react-router-dom";

export default function Appbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Read Books Online
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/new-book" style={{ textDecoration: "none" }}>
              <Button color="inherit">Add Book</Button>
            </Link>
            <Link to="/books" style={{ textDecoration: "none" }}>
              <Button color="inherit">View Books</Button>
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <Button color="inherit">View Users</Button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button color="inherit">Register</Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
