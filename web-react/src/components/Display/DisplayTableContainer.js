import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const EnhancedDisplayTableContainer = (props) => {

  return (
    <React.Fragment>
      <div   className="test2">TableContainer
        <p className="test3">header</p>
        <p className="test3">body</p>
        <p className="test3">footer</p>
      </div>
    </React.Fragment>
  )
}

EnhancedDisplayTableContainer.propTypes = {

}

export { EnhancedDisplayTableContainer }
