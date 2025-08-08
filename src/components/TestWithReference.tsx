import ShippingForm from './ShippingForm';
import { useCallback, useRef } from 'react';

type TestWithReferenceProps = {
  theme: string;
  productId: string;
  referrer: string;
};
const post = (url: string, data: unknown) => {
  // imagine this sends a request
  // console.log('POST/'+url);
  // console.log(data);
};

const TestWithReference = ({
  theme,
  productId,
  referrer,
}: TestWithReferenceProps) => {
  const handleSimpleSubmit = (orderDetails: unknown) => {
    console.log('handleSimpleSubmit called');

    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  };

  const handleUseCallbackSubmit = useCallback(
    (orderDetails: unknown) => {
      console.log('handleUseCallbackSubmit called');

      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  // Refs to store previous functions references:
  const prevHandleSimpleSubmitRef = useRef<typeof handleSimpleSubmit | null>(
    null
  );
  const prevHandleUseCallbackSubmitRef = useRef<
    typeof handleUseCallbackSubmit | null
  >(null);

  if (prevHandleSimpleSubmitRef.current !== handleSimpleSubmit) {
    console.log('handleSimpleSubmit reference have changed'); //
  } else {
    console.log('handleSimpleSubmit reference didn`t change');
  }
  if (prevHandleUseCallbackSubmitRef.current !== handleUseCallbackSubmit) {
    console.log('handleUseCallbackSubmit reference have changed'); //
  } else {
    console.log('handleUseCallbackSubmit reference didn`t change');
  }

  // Update the refs with the current functions references:
  prevHandleSimpleSubmitRef.current = handleSimpleSubmit;
  prevHandleUseCallbackSubmitRef.current = handleUseCallbackSubmit;

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSimpleSubmit} />
    </div>
  );
};

export default TestWithReference;
