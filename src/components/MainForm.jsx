import React from 'react';
import { useFormik } from 'formik';
import useForm from '../hooks/formHook';
import CostCalc from './CostCalc';
import BuyersDetails from './BuyersDetails';
import Confirmation from './Confirmation';
import PaymentSuccess from './PaymentSuccess';
import useNetwork from '../hooks/networkHook';
import validationSchema from '../utils/validation/validationSchema';

const MainForm = () => {
  const {
    page, pageTitle, handleNextPage,
  } = useForm();
  const { setNetworkError, setLoading } = useNetwork();

  const f = useFormik({
    initialValues: {
      adultsAmount: '',
      children5To12: '',
      childrenBelow5: '',
      roomType: 'Эконом',
      nightsAmount: '',
      insurance: false,
      finalSum: 0,
      surname: '',
      name: '',
      middleName: '',
      phoneNumber: '',
      birthDate: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async () => {
      setNetworkError(false);
      try {
        setLoading(true);
        const url = 'http://httpbin.org/post';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(f.values),
        });
        const data = await response.json();
        console.log(data);
        setTimeout(() => {
          handleNextPage();
          f.resetForm();
          setLoading(false);
        }, 3000);
      } catch (e) {
        setNetworkError(true);
        setLoading(false);
      }
    },
  });

  const inputsMapping = {
    0: <CostCalc f={f} />,
    1: <BuyersDetails f={f} />,
    2: <Confirmation f={f} />,
    3: <PaymentSuccess />,
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={f.handleSubmit}>
        <header className="form-header">
          <h1>Бронирование номера</h1>
          <p>{pageTitle[page]}</p>
        </header>
        {inputsMapping[page]}
      </form>
    </div>
  );
};

export default MainForm;
