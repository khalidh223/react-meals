import { Card, CardContent, Divider, List } from "@mui/material";
import React from "react";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: "$22.99",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: "$16.50",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "$12.99",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "$18.99",
  },
];

const AvailableMeals = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        color: "black",
        backgroundColor: "white",
        borderRadius: "14px",
        boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardContent>
        <List sx={{ paddingBottom: "0" }}>
          {DUMMY_MEALS.map((meal, index) => (
            <>
              <MealItem key={index} meal={meal} />
              {index !== DUMMY_MEALS.length - 1 ? <Divider /> : null}
            </>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AvailableMeals;
