import { useEffect, useState } from "react";

interface LocationData {
  country: string;
  name: string;
  slug: string;
}

function useLocations() {
  const apiBase = "http://localhost:3000/locations";
  const [locations, setLocations] = useState<LocationData[]>();

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`${apiBase}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.msg);
        } else {
          setLocations(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetcher();
  }, []);

  return locations;
}

export default useLocations;
