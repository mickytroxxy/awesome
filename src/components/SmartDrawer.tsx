import React, { memo } from "react";

import {Container,Grid,Typography,Drawer,List,ListItem,ListItemText,Divider, ListItemButton, Box, Button} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import '../App.css'
import useShop from "../hooks/useShop";
import { useNavigate } from 'react-router-dom';
interface SmartDrawerProps {
    cartOpen: boolean;
    setCartOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const SmartDrawer: React.FC<SmartDrawerProps> = memo(({ cartOpen, setCartOpen }) => {
    const {handleCartAction,cartItems} = useShop();
    const navigate = useNavigate();
    return (
      <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <List style={{padding:5}}>
            <ListItem>
              <Typography variant="h6" component="div">
                Shopping Cart
              </Typography>
            </ListItem>
            <Divider />
            {cartItems.length === 0 ? (
              <ListItem>
                <ListItemText primary="Your cart is empty." />
              </ListItem>
            ) : (
              cartItems.map((item) => (
                <ListItem key={item.id} style={{padding:5,marginTop:5,borderRadius:5,backgroundColor:'#F2F2F0'}}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <ListItemText className="fontBold" primary={item.title} secondary={
                        <Box display="flex">
                          <ListItemText><div className="fontBold1">{(item.quantity || 1)}</div></ListItemText>
                          <ListItemText><div className="fontBold1">ZAR ${item.price * (item.quantity || 1)}</div></ListItemText>
                        </Box>
                      }/>
                      <Box sx={{backgroundColor:'#fff',borderRadius:2}} display="flex" alignItems="center">
                        <ListItemButton onClick={() => handleCartAction(item, "remove")}><RemoveIcon sx={{color:'tomato'}} /></ListItemButton>
                        <ListItemButton onClick={() => handleCartAction(item, "add")}><AddCircle sx={{color:'green'}} /></ListItemButton>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
              ))
            )}
            <Divider/>
            <Button variant="outlined" onClick={() => navigate('/Delivery')} style={{width:'100%',marginTop:50}}><span className="fontBold">DELIVERY ADDRESS</span></Button>
          </List>
  
        </Drawer>
      </Container>
    );
})
export default SmartDrawer;