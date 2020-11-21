import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { StyleDL } from "./DL.style.js";
import CssBaseline from '@material-ui/core/CssBaseline'

const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const ContextDL = React.createContext(defaultContextData);
const useThemeDL = () => React.useContext(ContextDL);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeMounted: false
  });
  React.useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProviderDL = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? StyleDL("dark") : StyleDL("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ContextDL.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ContextDL.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProviderDL, useThemeDL };
