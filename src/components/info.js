import React from 'react';
import './Info.css'; // Импортируем стили для компонента Info

// Компонент для отображения информации о приложении
class Info extends React.Component {
  render() {
    return (
      <div className="info-container">
        <h2>Погодное приложение</h2> {/* Заголовок */}
        <p>Узнайте погоду в вашем городе!</p> {/* Описание */}
      </div>
    );
  }
}

export default Info; // Экспортируем компонент Info
