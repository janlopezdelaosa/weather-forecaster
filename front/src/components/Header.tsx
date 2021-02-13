import React from "react";
import dayjs from "dayjs";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h2 className="font-extrabold uppercase">Weather Forecaster</h2>
      <p className="text-xs">{dayjs().format("MMMM D, YYYY | hh:mm")}</p>
    </div>
  );
};

export default Header;
