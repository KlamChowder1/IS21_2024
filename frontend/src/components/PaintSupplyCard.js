import { useState } from 'react';
import {
  Stack,
  CardContent,
  Card,
  CardHeader,
  CardActions,
  Button,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

console.log('test ');

const PaintSupplyCard = ({ paintData }) => {
  const [quantity, setQuantity] = useState(paintData.quantity);

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
    const json = await response.json();

    if (response.ok) {
      console.log('Paint quantity updated!', json);
    } else {
      console.log('Paint quantity could not be updated');
    }
  };

  return (
    <Card style={{ border: `6px solid ${paintData.title.toLowerCase()}` }}>
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <CardHeader title={paintData.title} />
          {quantity >= 100 && (
            <CheckCircleOutlineIcon color="success"></CheckCircleOutlineIcon>
          )}
          {quantity < 100 && quantity > 0 && (
            <ErrorOutlineIcon color="warning"></ErrorOutlineIcon>
          )}
          {quantity === 0 && <HighlightOffIcon color="error" />}
        </Stack>

        <NumberInput
          aria-label="Demo number input"
          placeholder="Type a number…"
          value={quantity}
          onChange={(event, val) => setQuantity(val)}
          min={0}
          max={9999}
          slotProps={{
            incrementButton: {
              children: '▴',
            },
            decrementButton: {
              children: '▾',
            },
          }}
          endAdornment="litres"
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        {paintData.quantity !== quantity && (
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PaintSupplyCard;
