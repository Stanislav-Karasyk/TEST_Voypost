import React from "react";
import Button from "@material-ui/core/Button";
import Box from "../box/Box";

const ContainedButtons = () => {
  return (
    <Box>
      <p>Buttons</p>
      <Box>
        <Button variant="contained" color="primary" size="large">
          Sign Up
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Sign Up
        </Button>
        <Button variant="contained" color="primary" size="small">
          Sign Up
        </Button>
      </Box>

      <Box>
        <Button variant="contained" color="secondary" size="large">
          Sign Up
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Sign Up
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Sign Up
        </Button>
      </Box>

      <Box>
        <Button variant="contained" size="large">
          Sign Up
        </Button>
        <Button variant="contained"  size="medium">
          Sign Up
        </Button>
        <Button variant="contained" size="small">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default ContainedButtons;
