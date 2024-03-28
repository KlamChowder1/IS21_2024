import { Typography, Box, Divider } from '@mui/material';
import PaintSupplyContainer from '../components/PaintSupplyContainer';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h3" my={4} mx={2}>
        A Paint Company
      </Typography>
      <Divider sx={{ borderBottomWidth: 4 }} />
      <PaintSupplyContainer />
    </Box>
  );
};

export default Dashboard;
