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
        {/* TODO: Add functionality to save button */}
        {paintData.quantity !== quantity && (
          <Button variant="contained">Save</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PaintSupplyCard;
