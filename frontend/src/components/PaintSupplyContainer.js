import Grid from '@mui/material/Grid';
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
    <Grid container spacing={2}>
      <Grid item xs={8}>
        {testDummyPaintData &&
          testDummyPaintData.map((paintData) => (
            <PaintSupplyCard key={paintData.id} paintData={paintData} />
          ))}
      </Grid>
    </Grid>
  );
};

export default PaintSupplyContainer;
