import { useState } from 'react';
import { CardContent, Typography, Card } from '@mui/material';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

console.log('test ');

const PaintSupplyCard = ({ paintData }) => {
  const [quantity, setQuantity] = useState(paintData.quantity);

  return (
    <Card>
      <CardContent>
        <Typography>{paintData.colour}</Typography>
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
    </Card>
  );
};

export default PaintSupplyCard;
