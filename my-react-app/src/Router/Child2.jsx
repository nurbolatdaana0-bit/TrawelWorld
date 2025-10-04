import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Child2() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>{theme}</p>
    </div>
  );
}

export default Child2;