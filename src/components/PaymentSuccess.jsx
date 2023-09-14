import React from 'react';
import useForm from '../hooks/formHook';
import success from '../assets/page-3-success.svg';

const PaymentSuccess = () => {
  const { handleRestartForm } = useForm();
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
              Далее
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccess;
