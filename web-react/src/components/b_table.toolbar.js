import { IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import PropTypes from 'prop-types'
import React from 'react'

const EnhancedTableToolbarB = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar ToolBarOff
      className={clsx("ToolbarInactive", {
        ["ToolbarActive"]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className="ToolbarBase"
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
          {/*TODO if selected delete them or download them*/}
        </Typography>
      ) : (
        <Typography
          className="ToolbarBase"
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Highlight and search
          {/*TODO add search when search button pressed*/}
          {/*TODO add highlight when text types in, light up all matches in table*/}
          {/*TODO add new*/}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip
          title="Delete"
        >
          <IconButton
            aria-label="delete"
          >
            <DeleteIcon />
            {/*TODO add functions to buttons*/}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          title="Filter list"
        >
          <IconButton
            aria-label="filter list"
          >
            <FilterListIcon />
            {/*TODO search name*/}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbarB.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export {
  EnhancedTableToolbarB,
};
