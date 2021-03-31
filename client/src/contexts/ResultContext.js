import React, { createContext, useState } from "react";

export const ResultContext = createContext();

const ResultContextProvider = (props) => {
  const [open, setOpen] = useState(false);

  const onResultClick = () => {
    setOpen(!open);
  };

  return (
    <ResultContext.Provider value={{ open, onResultClick }}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
