import React from "react";

import {Container,Typography, Box, Button} from "@mui/material";
import '../App.css'
import useShop from "../hooks/useShop";

const SideBar: React.FC = () => {
    const {handleCategory, total,categoryObjects} = useShop();
    
    return (
        <Container maxWidth="md" sx={{ marginTop: "5rem" }}>
        <Box sx={{textAlign:'center'}} >
            <Typography variant="h4" align="inherit" gutterBottom><div className="fontBold1">ZAR {total.toFixed(2)}</div></Typography>
        </Box>
        <Box sx={{marginTop:5}}>
            {categoryObjects.map((item,i) => 
                <div key={i} style={{marginTop:3}}><Button variant="outlined" style={{width:'100%',padding:60,backgroundColor:item.selected ? '#3F7698' : '#000',color:item.selected ? 'white' : '#3F7698'}} onClick={() => handleCategory(item)}><span className="fontBold">{item.category}</span></Button></div>
            )}
        </Box>
        </Container>
    );
}
export default SideBar;