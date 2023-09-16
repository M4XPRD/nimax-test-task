import React from 'react';

const RoomType = (props) => {
  const {
    mode, value, handleChange, handleBlur,
  } = props;
  return (
    <div className="form-control">
      {mode === 'mobile' ? (
        <label htmlFor="roomType">
          Тип номера
          <select
            id="roomType"
            name="roomType"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Эконом</option>
            <option>Стандарт</option>
            <option>Люкс</option>
          </select>
        </label>
      ) : (
        <div>
          Тип номера
          <label htmlFor="roomType">
            <input
              name="roomType"
              id="roomType"
              type="radio"
              value="Эконом"
              checked={value === 'Эконом'}
              onChange={handleChange}
            />
            Эконом
          </label>
          <label htmlFor="roomType">
            <input
              name="roomType"
              id="roomType"
              type="radio"
              value="Стандарт"
              checked={value === 'Стандарт'}
              onChange={handleChange}
            />
            Стандарт
          </label>
          <label htmlFor="roomType">
            <input
              name="roomType"
              id="roomType"
              type="radio"
              value="Люкс"
              checked={value === 'Люкс'}
              onChange={handleChange}
            />
            Люкс
          </label>
        </div>
      )}
    </div>
  );
};

export default RoomType;
