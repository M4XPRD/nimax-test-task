import React from 'react';
import useForm from '../hooks/formHook';
import success from '../assets/paymentSuccess.svg';

const PaymentSuccess = () => {
  const { handleRestartForm, page, buttonText } = useForm();

  return (
    <div className="form-container">
      <div className="form-inputs">
        <div className="form-control">
          <img src={success} alt="Заказ оплачен" />
          <p>Заказ успешно оплачен.</p>
        </div>

        <div className="form-results">
          <div className="form-next-button">
            <button
              type="button"
              className="next-button"
              onClick={() => handleRestartForm()}
            >
              {buttonText.forward[page]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
