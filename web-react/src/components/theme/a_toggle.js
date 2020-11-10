import React from 'react'

import { useThemeDL } from './DL_context'
import {SwitchStylesDL} from './DL_switch.style'
import {Switch} from '@material-ui/core'


// import { useThemeCompact } from './Compact_context'

const Toggle = () => {
  const classes = SwitchStylesDL();
  const themeStateDL = useThemeDL();
  const [toggled, setToggled] = React.useState(themeStateDL.dark);
  // {themeStateCompact.compact ? "Switch to Normal mode" : "Switch to Compact Mode"}
  // TODO use above to link check box to state
  // const themeStateCompact = useThemeCompact();
  // const [toggledCompact, setToggledCompact] = React.useState(themeStateCompact.dark);

  return (
    <div>
      {/*<button  onClick={() => themeStateDL.toggle()}>*/}
      {/*  {themeStateDL.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}*/}
      {/*</button>*/}
      {/*TODO add to context to make sure mode and check are aligned*/}
          <Switch
            classes={classes}
            checked={toggled}
            onChange={e => setToggled(e.target.checked)}
            onClick={() => themeStateDL.toggle()}
            aria-label={{ checked: "Dark mode", unchecked: "Light mode" }}
          />
      {/*<button  onClick={() => themeStateCompact.toggle()}>*/}
      {/*  {themeStateCompact.compact ? "Switch to Normal mode" : "Switch to Compact Mode"}*/}
      {/*</button>*/}
    </div>
  );
};

export default Toggle;
