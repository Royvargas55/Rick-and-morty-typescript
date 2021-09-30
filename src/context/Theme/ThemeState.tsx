import React, { FC, useState } from 'react';
import ThemeContext from './ThemeContext';

export const ThemeState: FC = (props) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(true);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        handleClick,
        darkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
