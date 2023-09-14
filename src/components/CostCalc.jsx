import React, { useEffect } from 'react';
import useForm from '../hooks/formHook';
import countPrice from '../utils/countPrice';
import shouldDisableButton from '../utils/shouldDisableButton';

const CostCalc = ({ f }) => {
  const { handleNextPage, page, buttonText } = useForm();
  const { values, setFieldValue } = f;
  const {
    adultsAmount, children5To12, roomType, nightsAmount, insurance,
  } = f.values;

  useEffect(() => {
    const countedPrice = countPrice(values);
    setFieldValue('finalSum', countedPrice);
  }, [
    adultsAmount,
    children5To12,
    roomType,
    nightsAmount,
    insurance,
    values,
    setFieldValue,
  ]);

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="adultsAmount">
            Количество взрослых
            <input
              className={f.errors.adultsAmount && f.touched.adultsAmount && 'input-error'}
              type="number"
              id="adultsAmount"
              name="adultsAmount"
              min="0"
              value={f.values.adultsAmount}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.adultsAmount && f.touched.adultsAmount ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.adultsAmount}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="children5To12">
            Количество детей от 5 до 12 лет
            <input
              className={f.errors.children5To12 && f.touched.children5To12 && 'input-error'}
              type="number"
              id="children5To12"
              name="children5To12"
              min="0"
              value={f.values.children5To12}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.children5To12 && f.touched.children5To12 ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.children5To12}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="childrenBelow5">
            Количество детей до 5 лет
            <input
              className={f.errors.childrenBelow5 && f.touched.childrenBelow5 && 'input-error'}
              type="number"
              id="childrenBelow5"
              name="childrenBelow5"
              min="0"
              value={f.values.childrenBelow5}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.childrenBelow5 && f.touched.childrenBelow5 ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.childrenBelow5}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="roomType">
            Тип номера
            <select
              id="roomType"
              name="roomType"
              value={f.values.roomType}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            >
              <option>Эконом</option>
              <option>Стандарт</option>
              <option>Люкс</option>
            </select>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="nightsAmount">
            Количество ночей
            <input
              className={f.errors.nightsAmount && f.touched.nightsAmount && 'input-error'}
              type="number"
              id="nightsAmount"
              name="nightsAmount"
              min="0"
              value={f.values.nightsAmount}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.nightsAmount && f.touched.nightsAmount ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.nightsAmount}
          </span>
        </div>

        <div className="form-insurance">
          <span>Страховка</span>
          <div
            className={`insurance ${
              f.errors.insurance && f.touched.insurance ? 'insurance-checked' : ''
            }`}
          >
            <label htmlFor="insurance">
              <input
                type="checkbox"
                id="insurance"
                checked={f.values.insurance}
                onChange={f.handleChange}
                onBlur={f.handleBlur}
              />
              <div className="insurance-circle" />
            </label>
          </div>
        </div>
      </div>

      <div className="form-results">
        <div className="form-result">
          <span>Итого:</span>
          <span className="result-sum">{`${f.values.finalSum} ₽`}</span>
        </div>
        <div className="form-next-button">
          <button
            type="button"
            className="next-button"
            disabled={shouldDisableButton({ f }, page)}
            onClick={() => handleNextPage()}
          >
            {buttonText.forward[page]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostCalc;
