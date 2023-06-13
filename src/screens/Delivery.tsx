import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const Delivery = () => {
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2,backgroundColor:'#757575',padding:10,borderRadius:10 }}>
      <Typography variant="h5" align="center" mb={3}>
        Billing Address
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="First Name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Address"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="City"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Postal Code"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Country"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Phone Number"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="outlined" color="primary" sx={{width:'100%',borderColor:'green',color:'green'}}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Delivery;
