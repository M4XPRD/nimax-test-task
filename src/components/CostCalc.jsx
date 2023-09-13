/* eslint-disable max-len */
import React from 'react';
import useForm from '../hooks/formHook';

const CostCalc = () => {
  const {
    handleNextPage,
    formData,
    handleFormData,
  } = useForm();

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="adults">
            Количество взрослых
            <input type="number" id="adults" name="adults" min="0" value={formData.adultsAmount} onChange={(e) => handleFormData(e, 'adultsAmount')} />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="children5To12">
            Количество детей от 5 до 12 лет
            <input type="number" id="children5To12" name="children5To12" min="0" value={formData.children5To12} onChange={(e) => handleFormData(e, 'children5To12')} />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="childrenBelow5">
            Количество детей до 5 лет
            <input type="number" id="childrenBelow5" name="childrenBelow5" min="0" value={formData.childrenBelow5} onChange={(e) => handleFormData(e, 'childrenBelow5')} />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="room-type">
            Тип номера
            <select id="room-type" name="room-type" defaultValue="Эконом">
              <option>Эконом</option>
              <option>Стандарт</option>
              <option>Люкс</option>
            </select>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="nightsAmount">
            Количество ночей
            <input type="number" id="nightsAmount" name="nightsAmount" min="0" value={formData.nightsAmount} onChange={(e) => handleFormData(e, 'nightsAmount')} />
          </label>
        </div>

        <div className="form-insurance">
          <span>Страховка</span>
          <label htmlFor="insurance">
            <input type="checkbox" id="insurance" className="insurance" checked={formData.insurance} onChange={(e) => handleFormData(e, 'insurance')} />
            <div className="insurance-circle" />
          </label>
        </div>

        {/* <div className="form-insurance">
          <span>Страховка</span>
          <button type="button" className="insurance" onClick={(e) => handleFormData(e, 'insurance')}>
            <div className="insurance-circle" />
          </button>
        </div> */}
      </div>

      <div className="form-results">
        <div className="form-result">
          <span>Итого:</span>
          <span className="result-sum">1 234 ₽</span>
        </div>
        <div className="form-submit">
          <button type="button" className="submit" onClick={() => handleNextPage()}>Далее</button>
        </div>
      </div>

    </div>
  );
};

export default CostCalc;
