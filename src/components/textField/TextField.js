import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "../box/Box";

const TextFieldOutlined = () => {
  return (
    <Box marginLeft={2.5} display="flex" flexDirection="column">
      <p>Text Fields</p>
      <TextField
        id="outlined-secondary"
        label="Full Name"
        variant="outlined"
        autoComplete="off"
        color="secondary"
        placeholder="Placeholder"
      />
      <TextField
        id="outlined-textarea"
        label="Email Address"
        variant="outlined"
        placeholder="Placeholder"
        autoComplete="off"
      />
      <TextField
        error
        id="standard-error-helper-text"
        label="Password (8 characters)"
        helperText="Please input your password! The password must be at least 8 characters!"
        variant="outlined"
        placeholder="Placeholder"
      />
    </Box>
  );
};

export default TextFieldOutlined;
