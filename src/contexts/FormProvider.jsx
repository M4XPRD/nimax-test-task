import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import FormContext from './FormContext';

const formatFinalSum = (num) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regex, ' ');
};

const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
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
  });

  const {
    adultsAmount, children5To12, roomType, nightsAmount, insurance,
  } = formData;

  const prices = useMemo(() => ({
    roomType: {
      Эконом: 1800,
      Стандарт: 2800,
      Люкс: 4000,
    },
    children5To12: 0.5,
    insurance: 0.1,
  }), []);

  const pageTitle = useMemo(() => ({
    0: 'Расчёт стоимости',
    1: 'Данные покупателя',
    2: 'Подтверждение заказа',
    4: 'Заказ успешно оплачен',
  }), []);

  const handleNextPage = useCallback(() => {
    setPage((currentPage) => currentPage + 1);
  }, [setPage]);

  const handlePreviousPage = useCallback(() => {
    setPage((currentPage) => currentPage - 1);
  }, [setPage]);

  const handleFinalPrice = useCallback(() => {
    const priceForAdults = prices.roomType[roomType] * adultsAmount;
    const priceForChildren = prices.roomType[roomType] * children5To12 * prices.children5To12;
    const priceForNights = (priceForAdults + priceForChildren) * nightsAmount;
    const priceWithInsurance = priceForNights * prices.insurance;
    const result = insurance ? priceForNights + priceWithInsurance : priceForNights;
    const newSum = formatFinalSum(result);

    setFormData((prevFormData) => ({
      ...prevFormData,
      finalSum: newSum,
    }));
  }, [adultsAmount, children5To12, roomType, nightsAmount, insurance, prices]);

  const handleFormData = useCallback((e, field) => {
    const { value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        insurance: !prevFormData.insurance,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    }
  }, []);

  useEffect(() => {
    handleFinalPrice();
  }, [adultsAmount, children5To12, roomType, nightsAmount, insurance, handleFinalPrice]);

  const providedData = useMemo(() => ({
    page,
    pageTitle,
    formData,
    handleFormData,
    handleNextPage,
    handlePreviousPage,
  }), [
    page,
    pageTitle,
    formData,
    handleFormData,
    handleNextPage,
    handlePreviousPage,
  ]);

  return (
    <FormContext.Provider value={providedData}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
