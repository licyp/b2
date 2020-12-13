import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { EnhancedDisplayTitle } from './DisplayTitle'
import { EnhancedDisplayToolbar } from './DisplayToolbar'
import { EnhancedDisplayTableContainer } from './DisplayTableContainer'
import { EnhancedDisplayPagination } from './DisplayTablePagination'

const EnhancedDisplayContainer = (props) => {

  return (
    <React.Fragment>
<div className="test1">Container
      <EnhancedDisplayTitle />
      <EnhancedDisplayToolbar />
      <EnhancedDisplayTableContainer />
      <EnhancedDisplayPagination />
</div>
    </React.Fragment>
  )
}

EnhancedDisplayContainer.propTypes = {

}

export { EnhancedDisplayContainer }
