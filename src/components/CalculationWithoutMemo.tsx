interface CalculationWithoutMemoProps {
  numbers: number[];
}

const CalculationWithoutMemo: React.FC<CalculationWithoutMemoProps> = ({
  numbers,
}) => {
  const sum = () => {
    console.log('calculating sum without useMemo');
    return numbers.reduce((total, number) => total + number, 0);
  };
  return <div>Sum: {sum()}</div>;
};

export default CalculationWithoutMemo;
