import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Импортируем стили
import App from "./App"; // Импортируем компонент App
import reportWebVitals from "./reportWebVitals"; // Импортируем отчет о производительности
import "bootstrap/dist/css/bootstrap.css"; // Импортируем стили Bootstrap
import "./App.css"; // Импортируем стили для приложения

const root = ReactDOM.createRoot(document.getElementById("root")); // Создаем корневой элемент для рендеринга приложения
root.render(
  <React.StrictMode>
    <App /> {/* Рендеринг компонента App */}
  </React.StrictMode>
);

// Если вы хотите измерить производительность вашего приложения, передайте функцию
// для логирования результатов (например, reportWebVitals(console.log))
// или отправьте на аналитический конечный пункт. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();
