import { Add } from "@mui/icons-material";
import { Button, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import AddRemoveMealButton from "./AddRemoveMealButton";

const MealItem = ({ meal }) => {
  return (
    <>
      <ListItem sx={{ paddingBottom: "0" }}>
        <ListItemText
          sx={{ marginBottom: "0" }}
          primary={
            <Typography variant="body6" fontWeight={"bold"}>
              {meal.name}
            </Typography>
          }
          secondary={meal.description}
        />
        <AddRemoveMealButton />
      </ListItem>
      <ListItem sx={{ paddingTop: "0", marginTop: "0" }}>
        <ListItemText>
          <Typography variant="h6" sx={{ color: "red", fontWeight: "900" }}>
            {meal.price}
          </Typography>
        </ListItemText>
        <Button
          variant="contained"
          sx={{ backgroundColor: "darkred" }}
          color="error"
          startIcon={<Add />}
        >
          Add
        </Button>
      </ListItem>
    </>
  );
};

export default MealItem;
