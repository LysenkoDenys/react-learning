import { useMemo } from 'react';

interface CalculationWithMemoProps {
  numbers: number[];
}

const UseMemoCalculation: React.FC<CalculationWithMemoProps> = ({
  numbers,
}) => {
  const sum = useMemo(() => {
    console.log('calculating sum with useMemo');
    return numbers.reduce((total, number) => total + number, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
};

export default UseMemoCalculation;
