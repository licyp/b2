// import React from "react";
// import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
// import { StyleCompact } from "./Compact.style.js";
//
// const defaultContextData = {
//   compact: false,
//   toggle: () => {}
// };
//
// const ContextCompact = React.createContext(defaultContextData);
// const useThemeCompact = () => React.useContext(ContextCompact);
//
// const useEffectCompactMode = () => {
//   const [themeState, setThemeState] = React.useState({
//     compact: false,
//     hasThemeMounted: false
//   });
//   React.useEffect(() => {
//     const lsCompact = localStorage.getItem("compact") === "true";
//     setThemeState({ ...themeState, compact: lsCompact, hasThemeMounted: true });
//   }, []);
//
//   return [themeState, setThemeState];
// };
//
// const ThemeProviderCompact = ({ children }) => {
//   const [themeState, setThemeState] = useEffectCompactMode();
//
//   if (!themeState.hasThemeMounted) {
//     return <div />;
//   }
//
//   const toggle = () => {
//     const compact = !themeState.compact;
//     localStorage.setItem("compact", JSON.stringify(compact));
//     setThemeState({ ...themeState, compact });
//   };
//
//   const computedTheme = themeState.compact ? StyleCompact("compact") : StyleCompact("normal");
//
//   return (
//     <EmotionThemeProvider theme={computedTheme}>
//       <ContextCompact.Provider
//         value={{
//           compact: themeState.compact,
//           toggle
//         }}
//       >
//         {children}
//       </ContextCompact.Provider>
//     </EmotionThemeProvider>
//   );
// };
//
// export { ThemeProviderCompact, useThemeCompact };
