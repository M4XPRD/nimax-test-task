import React from 'react';
import useForm from '../hooks/formHook';
import countPrice from '../utils/countPrice';
import { pluralizeNights, pluralizeVisitors } from '../utils/pluralizeData';

const Confirmation = ({ f }) => {
  const { handlePreviousPage } = useForm();

  return (
    <div className="form-container">
      <div className="form-inputs">

        <div className="form-control">
          <p>{`${f.values.surname} ${f.values.name} ${f.values.middleName}`}</p>
          <p>{f.values.phoneNumber}</p>
          <p>{pluralizeNights(f)}</p>
          <p>{pluralizeVisitors(f)}</p>
          <p>{`К оплате ${countPrice(f)} ₽`}</p>
        </div>

        <div className="form-results">

          <div className="form-next-button">
            <button
              type="submit"
              className="next-button"
            >
              Оплатить
            </button>
          </div>

          <div className="form-return-button">
            <button
              type="button"
              className="return-button"
              onClick={() => handlePreviousPage()}
            >
              Назад к данным покупателя
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Confirmation;
