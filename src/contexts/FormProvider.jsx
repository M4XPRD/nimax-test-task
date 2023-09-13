import React, {
  useCallback, useMemo, useState,
} from 'react';
import FormContext from './FormContext';

const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    adultsAmount: 0,
    children5To12: 0,
    childrenBelow5: 0,
    roomType: '',
    nightsAmount: 0,
    insurance: false,
    surname: '',
    name: '',
    middleName: '',
    phoneNumber: '',
    birthDate: '',
  });

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

  const handleFormData = useCallback((e, field) => {
    const { value } = e.target;
    setFormData({ ...formData, [field]: value });
  }, [formData]);

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
