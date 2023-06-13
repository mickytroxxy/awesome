import useShop from '../hooks/useShop';
import SmartCards from '../components/SmartCards';
import { Grid } from '@mui/material';
import SideBar from '../components/SideBar';

function Home() {
  const { items } = useShop();

  return (
    <div>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12} sm={3}>
          <div>{items?.length > 0 && <SideBar/>}</div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div>{items?.length > 0 && <SmartCards items={items} />}</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
