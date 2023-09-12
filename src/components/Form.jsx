import React from 'react';

const Form = () => (
  <form className="form">
    <header className="form-header">
      <h1>Бронирование номера</h1>
      <p>Расчёт стоимости</p>
    </header>

    <div className="form-container">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="adults">
            Количество взрослых
            <input type="number" id="adults" name="adults" min="0" />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="children-5-12">
            Количество детей от 5 до 12 лет
            <input type="number" id="children-5-12" name="children-5-12" min="0" />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="children-0-5">
            Количество детей до 5 лет
            <input type="number" id="children-0-5" name="children-0-5" min="0" />
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="room-type">
            Тип номера
            <select id="room-type" name="room-type">
              <option selected>Эконом</option>
              <option>Стандарт</option>
              <option>Люкс</option>
            </select>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="nights">
            Количество ночей
            <input type="number" id="nights" name="nights" min="0" />
          </label>
        </div>

        <div className="form-insurance">
          <span>Страховка</span>
          <div className="insurance">
            <div className="insurance-circle" />
          </div>
        </div>
      </div>

      <div className="form-results">
        <div className="form-result">
          <span>Итого:</span>
          <span className="result-sum">1 234 ₽</span>
        </div>
        <div className="form-submit">
          <button type="submit" className="submit">Далее</button>
        </div>
      </div>

    </div>

  </form>

);

export default Form;
