import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { StyleDL } from './DL.style.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StyleSize } from './DL.style'

const defaultContextData = {
  dark: false,
  toggle: () => {},
  color: '',
}

const ContextDL = React.createContext(defaultContextData)
const useThemeDL = () => React.useContext(ContextDL)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeMounted: false,
    color: '',
  })
  React.useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true'
    setThemeState({
      ...themeState,
      dark: lsDark,
      hasThemeMounted: true,
    })
  }, [])

  return [themeState, setThemeState]
}

const ThemeProviderDL = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeMounted) {
    return <div />
  }

  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark: dark })
  }

  const color = (props) => {
    const color = props
    setThemeState({ ...themeState,  color: color })
  }

  // const computedTheme =    (
  //   themeState.dark ?
  //   StyleDL('dark')
  //   :
  //   StyleDL('light')
  // )


  let computedTheme =    (
    themeState.dark ?
      StyleDL('dark')
      :
      StyleDL('light')
  )

    switch(themeState.color){
      case 'dark':
        computedTheme=StyleDL('dark')
        break;
      case 'light':
        computedTheme= StyleDL('light')
        break;
      case 'def':
        computedTheme=StyleDL('themeDef')
        break;
      default:
    }



  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ContextDL.Provider
        value={{
          dark: themeState.dark,
          toggle,
          color,
        }}
      >
        {children}
      </ContextDL.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProviderDL, useThemeDL }
