import React, { useEffect, useRef } from 'react';
import useForm from '../hooks/formHook';
import countPrice from '../utils/countPrice';

const CostCalc = ({ f }) => {
  const { handleNextPage } = useForm();
  const inputFocus = useRef();

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  });

  const shouldDisableButton = () => {
    const conditionOne = JSON.stringify(f.errors) !== '{}';
    const conditionTwo = !f.values.adultsAmount;
    const conditionThree = !f.values.nightsAmount;
    return conditionOne || conditionTwo || conditionThree;
  };

  return (
    <div className="form-container">
      <div className="form-inputs">

        <div className="form-control">
          <label htmlFor="adultsAmount">
            Количество взрослых
            <input
              className={f.errors.adultsAmount && 'input-error'}
              ref={inputFocus}
              type="number"
              id="adultsAmount"
              name="adultsAmount"
              min="0"
              value={f.values.adultsAmount}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.adultsAmount ? 'visible-error-text' : ''}`}>{f.errors.adultsAmount}</span>
        </div>

        <div className="form-control">
          <label htmlFor="children5To12">
            Количество детей от 5 до 12 лет
            <input
              type="number"
              id="children5To12"
              name="children5To12"
              min="0"
              value={f.values.children5To12}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.children5To12 ? 'visible-error-text' : ''}`}>{f.errors.children5To12}</span>
        </div>

        <div className="form-control">
          <label htmlFor="childrenBelow5">
            Количество детей до 5 лет
            <input
              type="number"
              id="childrenBelow5"
              name="childrenBelow5"
              min="0"
              value={f.values.childrenBelow5}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.childrenBelow5 ? 'visible-error-text' : ''}`}>{f.errors.childrenBelow5}</span>
        </div>

        <div className="form-control">
          <label htmlFor="roomType">
            Тип номера
            <select
              id="roomType"
              name="roomType"
              value={f.values.roomType}
              onChange={f.handleChange}
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
              type="number"
              id="nightsAmount"
              name="nightsAmount"
              min="0"
              value={f.values.nightsAmount}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.nightsAmount ? 'visible-error-text' : ''}`}>{f.errors.nightsAmount}</span>
        </div>

        <div className="form-insurance">
          <span>Страховка</span>
          <div className={`insurance ${f.values.insurance ? 'insurance-checked' : ''}`}>
            <label htmlFor="insurance">
              <input
                type="checkbox"
                id="insurance"
                checked={f.values.insurance}
                onChange={f.handleChange}
              />
              <div className="insurance-circle" />
            </label>
          </div>
        </div>
      </div>

      <div className="form-results">
        <div className="form-result">
          <span>Итого:</span>
          <span className="result-sum">{`${countPrice(f)} ₽`}</span>
        </div>
        <div className="form-next-button">
          <button
            type="button"
            className="next-button"
            disabled={shouldDisableButton()}
            onClick={() => handleNextPage()}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostCalc;
