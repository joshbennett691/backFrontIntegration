import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <div>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 3, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
    <h3>Login</h3>
        <TextField
        required
        id="outlined-required"
        label="Email Address"
      />
            <TextField
            required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      </Box>
        <Button variant="contained" size="large">
          Login
        </Button>
      </div>
  );
}
