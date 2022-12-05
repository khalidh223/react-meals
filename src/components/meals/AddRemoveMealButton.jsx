import React from "react";
import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const disabledButtonTheme = createTheme({
  palette: {
    action: {
      disabledBackground: "darkred",
      disabled: "darkred",
    },
  },
});

const AddRemoveMealButton = (props) => {
  return (
    <ButtonGroup variant="contained">
      <Button
        sx={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "darkred",
        }}
        color="error"
      >
        <Add />
      </Button>
      <ThemeProvider theme={disabledButtonTheme}>
        <Button sx={{ width: "2rem", height: "2rem" }} disabled>
          <Typography sx={{ color: "white" }}>1</Typography>
        </Button>
      </ThemeProvider>
      <Button
        sx={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "darkred",
        }}
        color="error"
      >
        <Remove />
      </Button>
    </ButtonGroup>
  );
};

export default AddRemoveMealButton;
