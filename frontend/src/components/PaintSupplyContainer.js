import { Box, Grid } from '@mui/material';
import PaintSupplyCard from './PaintSupplyCard';

const PaintSupplyContainer = () => {
  //TODO: fill this with the data from the backend
  const testDummyPaintData = [
    { id: 0, colour: 'blue', quantity: 100 },
    { id: 1, colour: 'grey', quantity: 110 },
    { id: 2, colour: 'black', quantity: 5 },
    { id: 3, colour: 'white', quantity: 40 },
    { id: 4, colour: 'purple', quantity: 70 },
  ];
  return (
    <Box sx={{ m: '2rem' }}>
      <Grid container spacing={2}>
        {testDummyPaintData &&
          testDummyPaintData.map((paintData) => (
            <Grid key={paintData.id} item xs={12} md={6} lg={4}>
              <PaintSupplyCard paintData={paintData} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PaintSupplyContainer;
