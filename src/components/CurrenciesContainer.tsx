import CurrencyDisplay from './CurrencyDisplay';

const CurrenciesContainer: React.FC = () => {
  return (
    <>
      <h3>Convert to different currencies</h3>
      <CurrencyDisplay currency="EUR" rate={1.2} />
      <CurrencyDisplay currency="UAH" rate={40} />
    </>
  );
};

export default CurrenciesContainer;
