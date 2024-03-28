import * as React from 'react';
import { useState } from 'react';
import { getBackendAPI } from '../api';
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
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  ErrorOutline as ErrorOutlineIcon,
  HighlightOff as HighlightOffIcon,
} from '@mui/icons-material';

const AVAILABLE_CUTOFF = 100;

const PaintSupplyCard = ({ paintData }) => {
  const [quantity, setQuantity] = useState(paintData.quantity);
  const [edited, setEdited] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleSubmit = async (e) => {
    const paint = { title: paintData.title, quantity };
    const response = await fetch(
      getBackendAPI() + `/api/paint/${paintData._id}`,
      {
        method: 'PATCH',
        body: JSON.stringify(paint),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setEdited(false);

    if (response.ok) {
      setSnackbar({
        open: true,
        message: 'Paint quantity updated!',
        severity: 'success',
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Something went wrong',
        severity: 'error',
      });
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuantity(value);
    if (Number(value) !== paintData.quantity) {
      setEdited(true);
    } else {
      setEdited(false);
    }
  };

  const snackBar = (
    <Snackbar
      open={snackbar.open}
      onClose={() => setSnackbar({ ...snackbar, open: false })}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
    </Snackbar>
  );

  let iconComponent;
  if (quantity >= AVAILABLE_CUTOFF) {
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
    // card background border colour kind of hacky, if someone adds a paint colour that's misspelled then there will be no colour
    <Card
      sx={{
        boxShadow: 6,
        border: `6px solid ${paintData.title.toLowerCase()}`,
      }}
    >
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
          // maxinput prop doesn't stop max number when inputting number because max is ignored in HTML <input>
          // maybe find something more mobile friendly / number scroller instead of the whole keyboard
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
        {edited && !!quantity && (
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
