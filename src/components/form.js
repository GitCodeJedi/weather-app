import React from 'react';

// Компонент формы для ввода города и отправки запроса на получение данных о погоде
const Form = (props) => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Город" />{' '}
    {/* Поле ввода для города */}
    <button>Узнать погоду</button> {/* Кнопка для отправки формы */}
  </form>
);

export default Form; // Экспортируем компонент Form
