import * as React from 'react';
import { useState } from 'react';
import {
  Stack,
  CardContent,
  Card,
  CardHeader,
  CardActions,
  Button,
  Tooltip,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const PaintSupplyCard = ({ paintData }) => {
  const [quantity, setQuantity] = useState(paintData.quantity);
  const [edited, setEdited] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const backendAPI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'https://is21-2024-backend.onrender.com';

  const handleSubmit = async (e) => {
    const paint = { title: paintData.title, quantity };
    const response = await fetch(backendAPI + `/api/paint/${paintData._id}`, {
      method: 'PATCH',
      body: JSON.stringify(paint),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setEdited(false);

    if (response.ok) {
      setSnackbarMessage('Paint quantity updated!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage('Something went wrong');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuantity(value);
    if (value !== paintData.quantity) {
      setEdited(true);
    } else {
      setEdited(false);
    }
  };

  const snackBar = (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={3000}
      onClose={() => setSnackbarOpen(false)}
    >
      <Alert
        severity={snackbarSeverity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );

  let iconComponent;
  if (quantity >= 100) {
    iconComponent = (
      <Tooltip title="Available">
        <CheckCircleOutlineIcon color="success" />
      </Tooltip>
    );
  } else if (quantity > 0) {
    iconComponent = (
      <Tooltip title="Running Low">
        <ErrorOutlineIcon color="warning" />
      </Tooltip>
    );
  } else {
    iconComponent = (
      <Tooltip title="Out of Stock">
        <HighlightOffIcon color="error" />
      </Tooltip>
    );
  }

  return (
    <Card style={{ border: `6px solid ${paintData.title.toLowerCase()}` }}>
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <CardHeader title={paintData.title.toUpperCase()} />
          {iconComponent}
        </Stack>
        <TextField
          sx={{ width: '50%' }}
          type="number"
          value={quantity}
          onChange={handleInputChange}
          // known issue with type="number" https://mui.com/material-ui/react-text-field/#type-quot-number-quot
          onKeyDown={(e) => {
            if (
              e.key === 'e' ||
              e.key === 'E' ||
              e.key === '-' ||
              e.key === '+'
            ) {
              e.preventDefault();
            }
          }}
          inputProps={{
            min: '0',
            max: '999',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">litres</InputAdornment>
            ),
          }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {edited && (
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        )}
      </CardActions>
      {snackBar}
    </Card>
  );
};

export default PaintSupplyCard;
