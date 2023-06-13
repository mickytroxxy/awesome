import React, { useState } from "react";

import {Container,Grid,Typography,Card,CardContent,CardActions,Button,IconButton,Badge,CardMedia} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Shop } from "../types/type";
import '../App.css'
import useShop from "../hooks/useShop";
import SmartDrawer from "./SmartDrawer";
interface SmartCardsProps {
  items: Shop[];
}

const SmartCards: React.FC<SmartCardsProps> = ({ items }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const {handleCartAction,cartItems,categoryObjects} = useShop();
  const selectedCategory = categoryObjects.filter(item => item.selected === true)[0]
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        <div className="fontBold1">MickyStore General</div>
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => {
          const {image,description,price,id,category} = item;
          const existingItem = cartItems?.find((item) => item.id === id);
          if((selectedCategory?.category === category) || (selectedCategory?.category === "ALL")){
            return(
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345,height:345 }}>
                  <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{textAlign:'left'}}> <div className="fontBold">ZAR {price.toFixed(2)}</div></Typography>
                    <Typography variant="body2" color="text.secondary" sx={{overflow: "hidden",textAlign:'left',display: "-webkit-box",WebkitLineClamp: 4,WebkitBoxOrient: "vertical"}}><div className="fontBold">{description}</div></Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleCartAction(item,'add')}><div className="fontBold1">ADD TO CART</div></Button>
                    {existingItem && <Button size="small" onClick={() => handleCartAction(item,'remove')}><div className="fontBold1">REMOVE</div></Button>}
                  </CardActions>
                </Card>
              </Grid>
            )
          }
        })}
      </Grid>
      <IconButton color="inherit" aria-label="Open Cart" onClick={() => setCartOpen(true)} sx={{ position: "fixed", bottom: "2rem", right: "2rem" }}>
        <Badge badgeContent={cartItems.length} color="error"><ShoppingCartIcon /></Badge>
      </IconButton>

      <SmartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </Container>
  );
}
export default SmartCards;