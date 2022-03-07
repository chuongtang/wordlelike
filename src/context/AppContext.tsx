import React, { Dispatch, SetStateAction, createContext, useState, ReactNode } from 'react';
// import { createContext, useState, useEffect } from 'react';
type appContextType = {
  level: number;
  setLevel: Dispatch<SetStateAction<number>>
};

const appContextDefaultValues: appContextType = {
  level:3,
  setLevel: () => {}
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export type Props = {
  children: ReactNode;
};

// Create a Provider to wrap around the app
export const AppContextProvider = (props: Props) => {
  const { children } = props;
  const [level, setLevel] = useState<number>(3);
  // Create context to feed into provider
  const context = { level, setLevel}
  // console.log('\x1b[32m%s\x1b[0m',level)
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContext