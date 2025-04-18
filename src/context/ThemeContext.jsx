import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
