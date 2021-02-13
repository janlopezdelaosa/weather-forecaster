import React, { useState } from "react";

interface DateHourlyForecastProps {
  hourly: number[];
}

const DateHourlyForecast: React.FC<DateHourlyForecastProps> = ({ hourly }) => {
  const [selected, setSelected] = useState(-1);

  return (
    // <div className="flex flex-col items-center">
    <div className="pt-8 grid grid-cols-2 grid-rows-12 grid-flow-col gap-y-2 gap-x-12">
      {hourly?.map((d, i) => (
        <div
          className="flex flex-row items-center"
          key={i}
          onClick={() => setSelected(i)}
        >
          <span className={`${selected === i ? "font-normal" : "font-light"}`}>
            {i}h:
          </span>{" "}
          <span
            className={`${
              selected === i ? "font-bold" : "font-normal"
            } ml-1 text-lg`}
          >
            {d}º
          </span>
        </div>
      ))}
    </div>
  );
};

export default DateHourlyForecast;
