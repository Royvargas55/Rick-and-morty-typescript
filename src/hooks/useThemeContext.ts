import { useContext } from 'react';
import ThemeContext from '../context/Theme/ThemeContext';

const useThemeContext = () => {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error('App must be inside ThemeContext provider');
  }
  return value;
};

export default useThemeContext;
