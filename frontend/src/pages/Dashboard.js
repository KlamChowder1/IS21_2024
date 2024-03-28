import { Typography, Box, Container } from '@mui/material';
import PaintSupplyContainer from '../components/PaintSupplyContainer';

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h3" my={4} mx={2}>
        A Paint Company
      </Typography>
      <Container
        sx={{
          borderTop: 'solid',
          minWidth: '100%',
          height: '100vh',
          // maybe create a theme for background, primary, secondary colours, etc instead of magic number colours
          background: '#F2F6FC',
        }}
      >
        <Box>
          <PaintSupplyContainer />
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
