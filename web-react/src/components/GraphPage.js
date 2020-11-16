import React from 'react'

import BareBones from './BareBones'
import GraphViz from './graphViz'

export default function GraphPage() {
  return (
    <React.Fragment>
      <p>Graph visualization</p>
      <GraphViz />

      <p>Bare bone</p>
      <BareBones />
    </React.Fragment>
  )
}
