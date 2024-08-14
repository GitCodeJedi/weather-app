import React from 'react';
import Info from './components/info'; // Импортируем компонент для отображения информации о приложении
import Form from './components/form'; // Импортируем компонент формы для ввода города
import Weather from './components/weather'; // Импортируем компонент для отображения данных о погоде

const API_KEY = 'f735b010dd184541b4472638241807'; // Ключ API для получения данных о погоде

class App extends React.Component {
  // Начальное состояние компонента
  state = {
    temp: undefined, // Температура
    city: undefined, // Город
    country: undefined, // Страна
    pressure: undefined, // Давление
    lastUpdated: undefined, // Время последнего обновления
    error: undefined, // Ошибка
  };

  // Метод для форматирования времени
  formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Преобразуем метку времени в дату
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  // Метод для получения данных о погоде
  gettingWeather = async (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const city = event.target.elements.city.value; // Получаем значение города из формы

    if (city) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        ); // Запрос к API для получения данных о погоде
        const data = await response.json(); // Преобразуем ответ в JSON

        if (response.ok) {
          // Если запрос успешен, обновляем состояние
          this.setState({
            temp: data.current.temp_c.toFixed(2), // Температура
            city: data.location.name, // Город
            country: data.location.country, // Страна
            pressure: data.current.pressure_mb, // Давление
            lastUpdated: this.formatTime(Math.floor(Date.now() / 1000)), // Используем текущее время
            error: undefined, // Ошибка
          });
        } else {
          // Если запрос не успешен, обновляем состояние с ошибкой
          this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            lastUpdated: undefined,
            error: 'Ошибка при получении данных о погоде',
          });
        }
      } catch (error) {
        // Если произошла ошибка при запросе, обновляем состояние с ошибкой
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          lastUpdated: undefined,
          error: 'Ошибка при получении данных о погоде',
        });
      }
    } else {
      // Если город не введен, обновляем состояние с ошибкой
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        lastUpdated: undefined,
        error: 'Введите название города',
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-5 info">
                <Info />{' '}
                {/* Компонент для отображения информации о приложении */}
              </div>
              <div className="col-md-7 form">
                <Form weatherMethod={this.gettingWeather} />{' '}
                {/* Компонент формы для ввода города */}
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  lastUpdated={this.state.lastUpdated}
                  error={this.state.error}
                />{' '}
                {/* Компонент для отображения данных о погоде */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App; // Экспортируем компонент App
