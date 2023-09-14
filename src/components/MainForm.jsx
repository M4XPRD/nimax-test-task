import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import useForm from '../hooks/formHook';
import CostCalc from './CostCalc';
import BuyersDetails from './BuyersDetails';
import Confirmation from './Confirmation';
import PaymentSuccess from './PaymentSuccess';

const MainForm = () => {
  const { page, pageTitle } = useForm();

  const validationSchema = yup.object().shape({
    adultsAmount: yup.number().min(1, 'Должен быть минимум 1 взрослый'),
    children5To12: yup.number(),
    childrenBelow5: yup.number().test(
      'acceptedAmount',
      'Допустимо максимум 3 ребёнка на 1 взрослого',
      (children, { parent: { adultsAmount } }) => {
        const acceptedRatio = 0.33;
        const currentRatio = (adultsAmount / children).toFixed(2);
        return currentRatio === Infinity ? true : currentRatio >= acceptedRatio;
      },
    ),
    nightsAmount: yup.number().min(1, 'Нужно остановиться минимум на 1 ночь'),
  });

  const f = useFormik({
    initialValues: {
      adultsAmount: 0,
      children5To12: 0,
      childrenBelow5: 0,
      roomType: 'Эконом',
      nightsAmount: 0,
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
    validateOnChange: true,
    onSubmit: async (e) => {
      e.preventDefault();
    },
  });

  const inputsMapping = {
    0: <CostCalc f={f} />,
    1: <BuyersDetails f={f} />,
    2: <Confirmation />,
    4: <PaymentSuccess />,
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
