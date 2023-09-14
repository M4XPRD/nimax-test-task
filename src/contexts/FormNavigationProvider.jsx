import React, {
  useCallback, useMemo, useState,
} from 'react';
import FormContext from './FormNavigationContext';

const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  const pageTitle = useMemo(() => ({
    0: 'Расчёт стоимости',
    1: 'Данные покупателя',
    2: 'Подтверждение заказа',
    4: 'Заказ успешно оплачен',
  }), []);

  const buttonText = useMemo(() => ({
    forward: {
      0: 'Далее',
      1: 'Далее',
      2: 'Оплатить',
      3: 'Забронировать ещё',
    },
    back: {
      1: 'Назад к расчёту стоимости',
      2: 'Назад к данным покупателя',
    },
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
    buttonText,
    handleNextPage,
    handlePreviousPage,
    handleRestartForm,
  }), [
    page,
    pageTitle,
    buttonText,
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
