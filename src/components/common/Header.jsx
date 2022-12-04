import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "darkred" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            ReactMeals
          </Typography>
          <Button
            startIcon={
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            }
            color="inherit"
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <Card sx={{ width: "100%", height: "25rem" }}>
        <CardMedia
          component="img"
          image={mealsImage}
          sx={{ width: "110%", height: "100%" }}
        />
      </Card>
    </Box>
  );
};

export default Header;
