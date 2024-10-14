import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import axios from "axios";
import BASE_URL from "../config";
import SignUpSecondPage from "./SignUpSecondPage";
import { useSnackbar } from "notistack";
const steps = ['Personal Information', 'Additional Details'];

const SignUp = () => {
    const { enqueueSnackbar } = useSnackbar();
  const [step, setStep] = useState(0);  // 0 for step 1, 1 for step 2
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    dateOfBirth: "",
    password: "",
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (API calls, etc.)
    try{
        const response=await axios({
            method:'post',
            url:`${BASE_URL}/auth/signup`,
            data:formData
        });
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            country: "",
            dateOfBirth: "",
            gender: ""
          });
    
          enqueueSnackbar("Sign up successful!", { variant: "success" });
    }catch(error){
        console.error("There was an error during the registration:", error);
      // Show error message
      enqueueSnackbar("Sign up failed: " + (error.response?.data?.message || "Please try again."), { variant: "error" });
    };
  };
  
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: "600px", margin: "auto", mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create an Account
      </Typography>

      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit}>
        {step === 0 ? (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              {/* Phone Number */}
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              {/* Password */}
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  value={formData.password}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>

              {/* Next Button */}
              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={nextStep}
                    sx={{ mt: 2, px: 4 }}
                  >
                    Next
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <SignUpSecondPage
            prevStep={prevStep}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </form>
     
    </Paper>
  );
};

export default SignUp;
