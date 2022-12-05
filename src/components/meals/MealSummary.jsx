import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const MealSummary = () => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: "#383838", borderRadius: '14px', boxShadow:'0 1px 18px 10px rgba(0, 0, 0, 0.25)' }}>
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: 'white', textAlign: 'center', padding: '2rem' }}>
          Delicious Food, Delivered To You
        </Typography>
        <Typography variant="body4" component="p" sx={{textAlign: 'center', color: 'white', paddingBottom: '1rem'}}>
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
        </Typography>
        <Typography variant="body4" component="p" sx={{textAlign: 'center', color: 'white', paddingBottom: '1rem'}}>
          All of our meals are cooked with high quality ingredients, on time and by our experienced chefs!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MealSummary;
