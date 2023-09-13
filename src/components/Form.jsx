import React from 'react';
import useForm from '../hooks/formHook';
import CostCalc from './CostCalc';
import BuyersDetails from './BuyersDetails';
import Confirmation from './Confirmation';
import PaymentSuccess from './PaymentSuccess';

const Form = () => {
  const { page, pageTitle } = useForm();

  const inputsMapping = {
    0: <CostCalc />,
    1: <BuyersDetails />,
    2: <Confirmation />,
    4: <PaymentSuccess />,
  };

  return (
    <div className="wrapper">
      <form className="form">
        <header className="form-header">
          <h1>Бронирование номера</h1>
          <p>{pageTitle[page]}</p>
        </header>
        {inputsMapping[page]}
      </form>
    </div>

  );
};

export default Form;
