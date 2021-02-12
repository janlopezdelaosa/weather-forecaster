import { useEffect, useState } from "react";

function useForecast<T>(slug: string, start: string, end: string) {
  const [forecast, setForecast] = useState<T>();

  const apiBase = "http://localhost:3000/forecast";
  const pLocation = `location=${slug}`;
  const pStart = `start=${start}`;
  const pEnd = `end=${end}`;

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`${apiBase}?${pLocation}&${pStart}&${pEnd}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.msg);
        } else {
          setForecast(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetcher();
  }, [pEnd, pLocation, pStart]);

  return forecast;
}

export default useForecast;
