import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel,
  TextField,
  Grid,
} from '@material-ui/core'

import NodeList from './NodeList'
import NodeListData from './NodeListData'
import StepList2 from './StepList2'
import NodeListgql from './NodeListGQL'

import { TestPage } from './aa_test'
import { WrapperDL } from './theme/DL_apply'
// import { WrapperCompact } from './theme/Compact_apply'
import { useThemeDL } from './theme/DL_context'
import Toggle from './theme/a_toggle'

export default function BusinessListPage() {
  const themeStateDL = useThemeDL()

  return (
    <React.Fragment>
      <div>
        <div>
          <Toggle />
        </div>

        {/*<Paper>*/}
          <p>aa_test.js or NodeListgql</p>
          <NodeListgql />
        {/*</Paper>*/}

        {/*<Paper>*/}
          <p>Node list.js or StepList2</p>
          <StepList2 />
        {/*</Paper>*/}

        {/*<Paper>*/}
          <p>Node list.js NodeList</p>
          <NodeList />
        {/*</Paper>*/}
      </div>
    </React.Fragment>
  )
}
