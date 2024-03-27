import { useEffect, useState } from 'react';

import { Box, Grid } from '@mui/material';
import PaintSupplyCard from './PaintSupplyCard';

const PaintSupplyContainer = () => {
  const [paints, setPaints] = useState([]);

  useEffect(() => {
    const backendAPI =
      process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_DEVELOPMENT_URL
        : process.env.REACT_APP_PRODUCTION_URL;

    console.log(process.env.NODE_ENV);

    console.log(backendAPI);

    const fetchWorkouts = async () => {
      const response = await fetch(backendAPI + '/api/paint');
      const json = await response.json();
      setPaints(json);
    };
    fetchWorkouts();
  }, []);

  console.log(paints);

  return (
    <Box sx={{ m: '2rem' }}>
      <Grid container spacing={2}>
        {paints &&
          paints.map((paintData) => (
            <Grid key={paintData._id} item xs={12} md={6} lg={4}>
              <PaintSupplyCard paintData={paintData} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PaintSupplyContainer;
