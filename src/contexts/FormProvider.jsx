import React, {
  useCallback, useMemo, useState,
} from 'react';
import FormContext from './FormContext';

const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);

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

  const handleRestartForm = useCallback(() => {
    setPage(0);
  }, [setPage]);

  const providedData = useMemo(() => ({
    page,
    pageTitle,
    handleNextPage,
    handlePreviousPage,
    handleRestartForm,
  }), [
    page,
    pageTitle,
    handleNextPage,
    handlePreviousPage,
    handleRestartForm,
  ]);

  return (
    <FormContext.Provider value={providedData}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
