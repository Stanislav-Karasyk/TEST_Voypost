import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from "../box/Box";

const SignUp = () => (
  <Box marginLeft={2.5} display="flex" flexDirection="column">
    <Formik>
      <Form>
        <Typography variant="h2" gutterBottom>
          Sign up to set your brand up for success
        </Typography>
        <Box>
          <Button startIcon={<ExitToAppIcon />} variant="contained" color="secondary" size="large">
          Sign up with Google
          </Button>
          <Button startIcon={<ExitToAppIcon />} variant="contained" size="large">
          Sign up with Microsoft
          </Button>
        </Box>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          placeholder="Placeholder"
          autoComplete="off"
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          placeholder="Placeholder"
          autoComplete="off"
        />
        <TextField
          id="outlined-basic"
          label="Password (8 characters)"
          variant="outlined"
          placeholder="Placeholder"
        />
        <Box display="block">
          <Button variant="contained" color="primary" size="large">
            Sign Up
          </Button>
        </Box>
      </Form>
    </Formik>
  </Box>
);

export default SignUp;
