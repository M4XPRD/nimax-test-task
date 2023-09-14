import React from 'react';
import useForm from '../hooks/formHook';
import shouldDisableButton from '../utils/shouldDisableButton';

const BuyersDetails = ({ f }) => {
  const { handleNextPage, handlePreviousPage, page } = useForm();

  return (
    <div className="form-container">
      <div className="form-inputs">

        <div className="form-control">
          <label htmlFor="surname">
            Фамилия
            <input
              className={f.errors.adultsAmount && 'input-error'}
              type="text"
              id="surname"
              name="surname"
              value={f.values.surname}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.surname ? 'visible-error-text' : ''}`}>{f.errors.surname}</span>
        </div>

        <div className="form-control">
          <label htmlFor="name">
            Имя
            <input
              type="text"
              id="name"
              name="name"
              value={f.values.name}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.name ? 'visible-error-text' : ''}`}>{f.errors.name}</span>
        </div>

        <div className="form-control">
          <label htmlFor="middleName">
            Отчество
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={f.values.middleName}
              onChange={f.handleChange}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.middleName ? 'visible-error-text' : ''}`}>{f.errors.middleName}</span>
        </div>

        <div className="form-control">
          <label htmlFor="phoneNumber">
            Номер телефона
            <input
              type="tel"
              pattern="\+7 \d{3} \d{3} \d{2}-\d{2}"
              inputMode="numeric"
              placeholder="+7 999 123 45-67"
              id="phoneNumber"
              name="phoneNumber"
              value={f.values.phoneNumber}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericInputValue = inputValue.replace(/[^0-9+\s-]/g, '');
                f.handleChange({
                  target: {
                    name: 'phoneNumber',
                    value: numericInputValue,
                  },
                });
              }}
            />
          </label>
          <span className={`hidden-error-text ${f.errors.phoneNumber ? 'visible-error-text' : ''}`}>{f.errors.phoneNumber}</span>
        </div>

        <div className="form-control">
          <label htmlFor="birthDate">
            Дата рождения
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={f.values.birthDate}
              onChange={f.handleChange}
              max="9999-12-31"
            />
          </label>
          <span className={`hidden-error-text ${f.errors.birthDate ? 'visible-error-text' : ''}`}>{f.errors.birthDate}</span>
        </div>
      </div>

      <div className="form-results">

        <div className="form-next-button">
          <button
            type="button"
            className="next-button"
            disabled={shouldDisableButton({ f }, page)}
            onClick={() => handleNextPage()}
          >
            Далее
          </button>
        </div>

        <div className="form-return-button">
          <button
            type="button"
            className="return-button"
            onClick={() => handlePreviousPage()}
          >
            Назад к расчёту стоимости
          </button>
        </div>

      </div>

    </div>
  );
};

export default BuyersDetails;
