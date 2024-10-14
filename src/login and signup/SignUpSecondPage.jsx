import React from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const SignUpSecondPage = ({ prevStep, formData, handleChange, handleSubmit }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Additional Details
      </Typography>
      <Grid container spacing={3}>
        {/* Country Field */}
        <Grid item xs={12}>
          <FormControl fullWidth required variant="outlined">
            <InputLabel>Country</InputLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              label="Country"
            >
              <MenuItem value={"India"}>India</MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
              <MenuItem value={"UK"}>UK</MenuItem>
              {/* Add more countries as needed */}
            </Select>
          </FormControl>
        </Grid>
        {/* Date of Birth Field */}
        <Grid item xs={12}>
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </Grid>

        {/* Gender Selection */}
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Gender
          </Typography>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="MALE" control={<Radio />} label="Male" />
            <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
            <FormControlLabel value="TRANSGENDER" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>

        {/* Back and Submit Buttons */}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="outlined"
              onClick={prevStep}
              sx={{ width: "150px" }}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "150px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpSecondPage;
