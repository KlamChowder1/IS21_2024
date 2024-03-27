import { useEffect, useState } from 'react';
import { getBackendAPI } from '../api';
import { Box, Grid, CircularProgress } from '@mui/material';
import PaintSupplyCard from './PaintSupplyCard';

const PaintSupplyContainer = () => {
  const [paints, setPaints] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(getBackendAPI() + '/api/paint');
      const json = await response.json();

      setPaints(json);
    };
    fetchWorkouts();
  }, []);

  return (
    <Box sx={{ m: '2rem' }}>
      {paints.length === 0 ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {paints &&
            paints.map((paintData) => (
              <Grid key={paintData._id} item xs={12} md={6} lg={4}>
                <PaintSupplyCard paintData={paintData} />
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
};

export default PaintSupplyContainer;
