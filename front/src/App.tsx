import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeekForecast from "./WeekForecast";
import DateForecast from "./DateForecast";

const App: React.FC = () => {
  const [city, setCity] = useState("-");
  const [forecast, setForecast] = useState<number[]>([]);

  return (
    <div className="App">
      <div>
        <p>Select city:</p>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setForecast([]);
          }}
          placeholder="City"
        >
          <option value="-">-</option>
          <option value="zgz">Zaragoza</option>
          <option value="mad">Madrid</option>
          <option value="bcn">Barcelona</option>
          <option value="brl">Berlín</option>
        </select>
      </div>
      <div>
        {city === "-" ? (
          <p>Selecciona una ciudad para continuar</p>
        ) : (
          <p>Has seleccionado {city}</p>
        )}
      </div>
      {city !== "-" && <WeekForecast city={city} setForecast={setForecast} />}
      {forecast.length !== 0 && <DateForecast forecast={forecast} />}
    </div>
  );
};

export default App;
