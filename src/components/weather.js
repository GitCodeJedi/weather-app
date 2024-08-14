import React from 'react';

const Weather = (props) => {
  return (
    <div>
      {props.city && (
        <>
          <p className="weather-info">
            Местоположение:{' '}
            <span>
              {props.city}, {props.country}
            </span>
          </p>
          <p className="weather-info">
            Температура: <span>{props.temp}°C</span>
          </p>
          <p className="weather-info">
            Давление: <span>{props.pressure} гПа</span>
          </p>
          <p className="weather-info">
            Время последнего обновления: <span>{props.lastUpdated}</span>
          </p>
        </>
      )}
      {props.error && <p className="weather-info error">{props.error}</p>}
    </div>
  );
};

export default Weather;
