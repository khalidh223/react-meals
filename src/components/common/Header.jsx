import React from "react";
import { AppBar, Badge, Box, Button, Card, CardMedia, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import mealsImage from '../../assets/meals.jpeg'

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ReactMeals
          </Typography>
          <Button startIcon={<Badge badgeContent={4} color="error"><ShoppingCartIcon /></Badge>} color="inherit">
            Cart
          </Button>
        </Toolbar>
      </AppBar>
        <Card sx={{ height: '25rem' }}>
            <CardMedia
                component="img"
                image={mealsImage}
            />
        </Card>
    </Box>
  );
};

export default Header;
