import React from 'react'

import BareBones from './BareBones'
import GraphViz from './graphViz'
import BareBonesSelector from './BareBonesSelector'
import { CompProp } from './a0CompWithProp'
import { EnhancedTableHead } from './table.head'
import { Table } from '@material-ui/core'

export default function GraphPage() {

  return (
    <React.Fragment>
      <p>Bone Selector</p>
      <BareBonesSelector />

      {/*<p>CompProp</p>*/}
      {/*<CompProp*/}
      {/*  numSelected= '6'*/}
      {/*  selected='Other'*/}
      {/*/>*/}


      <p>Graph visualization</p>
      <GraphViz />

      <p>Bare bone</p>
      <BareBones />
    </React.Fragment>
  )
}
