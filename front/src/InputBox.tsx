import React, { useEffect, useState } from "react";
import useLocations from "./api/locations";
import Search from "./svg/Search";
import Cross from "./svg/Cross";

interface InputBoxProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setForecast: React.Dispatch<React.SetStateAction<number[]>>;
}

const InputBox: React.FC<InputBoxProps> = ({ setCity, setForecast }) => {
  const [term, setTerm] = useState("");
  const locations = useLocations();

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    const location = locations?.filter(
      (l) => `${l.name}, ${l.country}` === e.target.value
    )[0];
    if (location !== undefined) {
      setCity(location.slug);
      setForecast([]);
    }
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-row">
        <Search className="relative left-0 w-5" />
        <input
          className="w-4/5 pl-3 pr-1 py-1 border-black border-solid rounded-lg border-2 outline-none"
          type="text"
          placeholder="City, Country"
          list="cities"
          onChange={onChange}
          value={term}
        />
        {term && (
          <Cross
            className="relative right-12 w-5"
            onClick={() => {
              setTerm("");
              setCity("");
              setForecast([]);
            }}
          />
        )}
      </div>

      <datalist id="cities">
        {locations &&
          locations.map((l) => (
            <option key={l.slug}>{`${l.name}, ${l.country}`}</option>
          ))}
      </datalist>
    </div>
  );
};

export default InputBox;
