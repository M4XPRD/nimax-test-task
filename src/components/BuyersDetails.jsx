import React from 'react';
import useForm from '../hooks/formHook';
import shouldDisableButton from '../utils/shouldDisableButton';

const BuyersDetails = ({ f }) => {
  const {
    handleNextPage, handlePreviousPage, page, buttonText,
  } = useForm();

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="surname">
            Фамилия
            <input
              className={f.errors.surname && f.touched.surname && 'input-error'}
              type="text"
              id="surname"
              name="surname"
              value={f.values.surname}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.surname && f.touched.surname ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.surname}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="name">
            Имя
            <input
              className={f.errors.name && f.touched.name && 'input-error'}
              type="text"
              id="name"
              name="name"
              value={f.values.name}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.name && f.touched.name ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.name}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="middleName">
            Отчество
            <input
              className={f.errors.middleName && f.touched.middleName && 'input-error'}
              type="text"
              id="middleName"
              name="middleName"
              value={f.values.middleName}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.middleName && f.touched.middleName ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.middleName}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="phoneNumber">
            Номер телефона
            <input
              className={f.errors.phoneNumber && f.touched.phoneNumber && 'input-error'}
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
              onBlur={f.handleBlur}
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.phoneNumber && f.touched.phoneNumber ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.phoneNumber}
          </span>
        </div>

        <div className="form-control">
          <label htmlFor="birthDate">
            Дата рождения
            <input
              className={f.errors.birthDate && f.touched.birthDate && 'input-error'}
              type="date"
              id="birthDate"
              name="birthDate"
              value={f.values.birthDate}
              onChange={f.handleChange}
              onBlur={f.handleBlur}
              max="9999-12-31"
            />
          </label>
          <span
            className={`hidden-error-text ${
              f.errors.birthDate && f.touched.birthDate ? 'visible-error-text' : ''
            }`}
          >
            {f.errors.birthDate}
          </span>
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
            {buttonText.forward[page]}
          </button>
        </div>

        <div className="form-return-button">
          <button
            type="button"
            className="return-button"
            onClick={() => handlePreviousPage()}
          >
            {buttonText.back[page]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyersDetails;
