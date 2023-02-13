import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [col, setCol] = useState(true);
  return (
    <AppContext.Provider value={{ col, setCol }}>
      {props.children}
    </AppContext.Provider>
  );
};
