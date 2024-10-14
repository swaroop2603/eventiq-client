// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography,Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BASE_URL from "../config";
import { useSnackbar } from "notistack";
const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Use for navigation to signup page

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);

    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/auth/login`, // Adjust the URL as needed
        data: credentials
      });
      enqueueSnackbar("Login successful!", { variant: "success" });
      console.log("Login successful:", response.data);
      // Handle successful login, e.g., store token, redirect, etc.
    } catch (error) {
      console.error("Error logging in:", error);
      enqueueSnackbar("Login failed: " + (error.response?.data?.message || "Please try again."), { variant: "error" });
      // Handle error
    }
  };

  const handleRedirectToSignUp = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f2f5' // Light gray background
    }}>
      <Paper elevation={5} style={{ padding: '30px', borderRadius: '10px', width: '400px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                required
                variant="outlined" // Use outlined variant for a cleaner look
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                required
                variant="outlined" // Use outlined variant for a cleaner look
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Button onClick={handleRedirectToSignUp} color="primary">
                  Sign Up
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Login;