import { useState } from 'react';
import {
  CardContent,
  Card,
  CardHeader,
  CardActions,
  Button,
} from '@mui/material';
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
        <CardHeader title={paintData.title} />
        <NumberInput
          aria-label="Demo number input"
          placeholder="Type a number…"
          value={quantity}
          onChange={(event, val) => setQuantity(val)}
          min={0}
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
      {/* TODO: Add badge to visually show low / no supply */}
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
