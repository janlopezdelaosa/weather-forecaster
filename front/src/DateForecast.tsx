import React from "react";

interface DateForecastProps {
  forecast: number[];
}

const DateForecast: React.FC<DateForecastProps> = ({ forecast }) => {
  return (
    <div className="flex flex-col items-center">
      {forecast?.map((d, i) => (
        <div className="flex flex-row items-center" key={i}>
          <p>{i}h:</p>
          <p>{d}º</p>
        </div>
      ))}
    </div>
  );
};

export default DateForecast;
