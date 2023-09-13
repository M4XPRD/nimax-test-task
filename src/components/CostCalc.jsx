/* eslint-disable max-len */
import React from 'react';
import useForm from '../hooks/formHook';

const CostCalc = () => {
  const {
    handleNextPage,
    formData,
    handleFormData,
  } = useForm();

  const {
    adultsAmount, children5To12, childrenBelow5, roomType, nightsAmount, insurance, finalSum,
  } = formData;

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="adults">
            Количество взрослых
            <input type="number" id="adults" name="adults" min="0" value={adultsAmount} onChange={(e) => handleFormData(e, 'adultsAmount')} />
          </label>
          <span className="error">Допущена ошибка</span>
        </div>

        <div className="form-control">
          <label htmlFor="children5To12">
            Количество детей от 5 до 12 лет
            <input type="number" id="children5To12" name="children5To12" min="0" value={children5To12} onChange={(e) => handleFormData(e, 'children5To12')} />
          </label>
          <span className="error">Допущена ошибка</span>
        </div>

        <div className="form-control">
          <label htmlFor="childrenBelow5">
            Количество детей до 5 лет
            <input type="number" id="childrenBelow5" name="childrenBelow5" min="0" value={childrenBelow5} onChange={(e) => handleFormData(e, 'childrenBelow5')} />
          </label>
          <span className="error">Допущена ошибка</span>
        </div>

        <div className="form-control">
          <label htmlFor="room-type">
            Тип номера
            <select id="room-type" name="room-type" defaultValue={roomType} onChange={(e) => handleFormData(e, 'roomType')}>
              <option>Эконом</option>
              <option>Стандарт</option>
              <option>Люкс</option>
            </select>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="nightsAmount">
            Количество ночей
            <input type="number" id="nightsAmount" name="nightsAmount" min="0" value={nightsAmount} onChange={(e) => handleFormData(e, 'nightsAmount')} />
          </label>
          <span className="error">Допущена ошибка</span>
        </div>

        <div className="form-insurance">
          <span>Страховка</span>
          <div className={`insurance ${insurance ? 'insurance-checked' : ''}`}>
            <label htmlFor="insurance">
              <input type="checkbox" id="insurance" checked={insurance} onChange={(e) => handleFormData(e, 'insurance')} />
              <div className="insurance-circle" />
            </label>
          </div>
        </div>
      </div>

      <div className="form-results">
        <div className="form-result">
          <span>Итого:</span>
          <span className="result-sum">{`${finalSum} ₽`}</span>
        </div>
        <div className="form-submit">
          <button type="button" className="submit" onClick={() => handleNextPage()}>Далее</button>
        </div>
      </div>

    </div>
  );
};

export default CostCalc;
