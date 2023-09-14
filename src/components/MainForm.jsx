import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import useForm from '../hooks/formHook';
import CostCalc from './CostCalc';
import BuyersDetails from './BuyersDetails';
import Confirmation from './Confirmation';
import PaymentSuccess from './PaymentSuccess';
import useNetwork from '../hooks/networkHook';

const MainForm = () => {
  const {
    page, pageTitle, handleNextPage,
  } = useForm();
  const { setNetworkError, setLoading } = useNetwork();

  const validationSchema = yup.object().shape({
    adultsAmount: yup
      .number()
      .min(1, 'Должен быть минимум 1 взрослый')
      .required('Это поле обязательно'),
    children5To12: yup
      .number(),
    childrenBelow5: yup
      .number()
      .test(
        'acceptedAmount',
        'Допустимо максимум 3 ребёнка на 1 взрослого',
        (children, { parent: { adultsAmount } }) => {
          if (adultsAmount > 0 && children > 0) {
            const acceptedRatio = 0.33;
            const currentRatio = (adultsAmount / children).toFixed(2);
            return currentRatio === Infinity
              ? true
              : currentRatio >= acceptedRatio;
          }
          return true;
        },
      ),
    nightsAmount: yup
      .number()
      .min(1, 'Нужно остановиться минимум на 1 ночь')
      .required('Это поле обязательно'),
    surname: yup
      .string()
      .matches(/^[^\d]*$/, 'Поле не должно содержать цифры')
      .required('Это поле обязательно'),
    name: yup
      .string()
      .matches(/^[^\d]*$/, 'Поле не должно содержать цифры')
      .required('Это поле обязательно'),
    middleName: yup
      .string()
      .matches(/^[^\d]*$/, 'Поле не должно содержать цифры'),
    phoneNumber: yup
      .string()
      .min(8, 'Проверьте количество символов в номере')
      .required('Это поле обязательно'),
    birthDate: yup
      .string()
      .required('Это поле обязательно'),
  });

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
      setLoading(false);
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
