import { useEffect, useState } from 'react';

import { Box, Grid } from '@mui/material';
import PaintSupplyCard from './PaintSupplyCard';

const PaintSupplyContainer = () => {
  const [paints, setPaints] = useState([]);

  useEffect(() => {
    const backendAPI =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000'
        : 'https://is21-2024-backend.onrender.com';

    const fetchWorkouts = async () => {
      const response = await fetch(backendAPI + '/api/paint');
      const json = await response.json();
      setPaints(json);
    };
    fetchWorkouts();
  }, []);

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
