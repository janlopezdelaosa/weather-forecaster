import React, { useState } from "react";
import WeekForecast from "./WeekForecast";
import DateForecast from "./DateForecast";
import InputBox from "./InputBox";

const App: React.FC = () => {
  const [city, setCity] = useState("-");
  const [forecast, setForecast] = useState<number[]>([]);

  return (
    <div className="flex flex-col w-full items-center">
      <InputBox setCity={setCity} setForecast={setForecast} />
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
