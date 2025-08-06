import React, { useContext } from 'react';
import CurrencyContext from './CurrencyContext';

type CurrencyDisplayProps = {
  currency: string;
  rate: number;
};

const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  currency,
  rate,
}) => {
  const priceInDollars = useContext(CurrencyContext);
  const convertedPrice = priceInDollars * rate;
  return (
    <>
      <h4>
        Price in {currency}:{convertedPrice.toFixed(2)}
      </h4>
    </>
  );
};

export default CurrencyDisplay;
