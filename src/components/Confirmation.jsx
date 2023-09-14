import React from 'react';
import useForm from '../hooks/formHook';
import { pluralizeNights, pluralizeVisitors } from '../utils/pluralizeData';
import LoadingAnimation from './LoadingAnimation';
import useNetwork from '../hooks/networkHook';

const Confirmation = ({ f }) => {
  const {
    handlePreviousPage, page, buttonText,
  } = useForm();
  const { isLoading, isNetworkError } = useNetwork();

  return (
    <>
      {isLoading && (<LoadingAnimation />)}
      <div className="form-container">
        <div className="form-inputs">
          {!isLoading && (
            <div className="form-control">
              <p>{`${f.values.surname} ${f.values.name} ${f.values.middleName}`}</p>
              <p>{f.values.phoneNumber}</p>
              <p>{pluralizeNights(f)}</p>
              <p>{pluralizeVisitors(f)}</p>
              <p>{`К оплате ${f.values.finalSum} ₽`}</p>
              <span
                className={`hidden-error-text ${
                  isNetworkError ? 'visible-error-text' : ''
                }`}
              >
                Произошла ошибка, попробуйте оплатить ещё раз
              </span>
            </div>
          )}

          <div className="form-results">
            <div className="form-next-button">
              <button type="submit" className="next-button" disabled={isLoading}>
                {buttonText.forward[page]}
              </button>
            </div>

            <div className="form-return-button">
              <button
                type="button"
                className="return-button"
                disabled={isLoading}
                onClick={() => handlePreviousPage()}
              >
                {buttonText.back[page]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
