import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "../box/Box";

const TypesTypography = () => {
  return (
    <Box marginLeft={7}>
      <p>Typography</p>
      <Typography variant="h1" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h2" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h3" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h4" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h5" gutterBottom>
        Typography
      </Typography>
      <Typography variant="h6" gutterBottom>
        Typography
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Typography
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Typography
      </Typography>
    </Box>
  );
};

export default TypesTypography;
