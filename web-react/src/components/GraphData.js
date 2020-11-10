import React from 'react'

import BareBones from './BareBones'
import ListOfNode from './ListOfNode'
import DarkToggle from './theme/DarkToggle'

export default function GraphData() {

  return (
    <React.Fragment>
      <div>
        <div>
          <DarkToggle />
        </div>

        {/*<Paper>*/}
          <p>Data from Movie Base</p>
          <ListOfNode />
        {/*</Paper>*/}

        <p>Bare bone</p>
        <BareBones />

      </div>
    </React.Fragment>
  )
}
