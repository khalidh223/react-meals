import { Grid } from "@mui/material";
import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meals = (props) => {
  return (
    <>
      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={"-8rem"}
      >
        <Grid item sx={{ width: "50%" }}>
          <MealSummary />
        </Grid>
        <Grid item sx={{ width: "70%" }}>
          <AvailableMeals />
        </Grid>
      </Grid>
    </>
  );
};

export default Meals;
