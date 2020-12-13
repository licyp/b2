import React from 'react'

import { useThemeDL } from './DL_context'
import { SwitchStylesDL } from './DL_toggle.style'
import { Switch } from '@material-ui/core'

const DarkToggle = () => {
  const classes = SwitchStylesDL()
  const themeStateDL = useThemeDL()

  const [toggled, setToggled] = React.useState(themeStateDL.dark)
  // TODO use above to link check box to state

  function onChangeValue(event) {
    const newSwitched = event.target.value
    themeStateDL.color(newSwitched)
  }

  const toggle = (event) => {
    themeStateDL.toggle(event.target.value)
  }

  return (
    <div>
      {/*<button  onClick={() => themeStateDL.toggle()}>*/}
      {/*  {themeStateDL.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}*/}
      {/*</button>*/}
      {/*TODO add to context to make sure mode and check are aligned*/}

      <Switch
        classes={classes}
        checked={toggled}
        onChange={(e) => setToggled(e.target.checked)}
        // onClick={() => themeStateDL.toggle()}
        onClick={toggle}
        aria-label={{ checked: 'Dark mode', unchecked: 'Light mode' }}
      />
      <div onChange={onChangeValue}>
        <input type="radio" value="dark" name="color" /> dark
        <input type="radio" value="light" name="color" /> light
        <input type="radio" value="def" name="color" /> def
      </div>
    </div>
  )
}
// TODO add padding based on radio: compact whitesace def
export default DarkToggle
