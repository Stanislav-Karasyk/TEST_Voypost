import React from "react";
import ContainedButtons from "../button/Button";
import TypesTypography from "../typography/Typography";
import TextFieldOutlined from "../textField/TextField";
import Box from "../box/Box";

const StoryBook = () => {
  return (
    <Box display="flex" flexWrap="wrap" >
      <ContainedButtons />
      <TypesTypography />
      <TextFieldOutlined />
    </Box>
  );
};

export default StoryBook;
