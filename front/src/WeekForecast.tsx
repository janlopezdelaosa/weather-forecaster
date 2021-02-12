import React from "react";
import useForecast from "./utils";

interface WeekForecastProps {
  city: string;
  setForecast: React.Dispatch<React.SetStateAction<number[]>>;
}

type ForecastData = {
  date: string;
  forecast: number[];
  locationSlug: string;
}[];

const WeekForecast: React.FC<WeekForecastProps> = ({ city, setForecast }) => {
  const f = useForecast<ForecastData>(city, "2021-02-10", "2021-02-11");

  return (
    <div className="flex flex-row justify-center">
      {f?.map((d, i) => {
        const min = Math.min(...d.forecast);
        const max = Math.max(...d.forecast);
        return (
          <div
            className="flex flex-col items-center"
            key={i}
            onClick={() => {
              console.log(d.forecast);
              setForecast(d.forecast);
            }}
          >
            <p>{d.date}</p>
            <div className="flex flex-row justify-between">
              <p>min: {min}</p>
              <p>max: {max}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekForecast;
