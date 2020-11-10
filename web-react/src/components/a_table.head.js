import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import {headCells} from './a_table.head.cells'
import { useStyles } from './theme/a_component.style' // Original styles

function EnhancedTableHead(props) {
  // const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props; // Original styles
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  // TODO filter at header headCells
  // TODO order by multiple headings
  // TODOSticky header row
  // TODO scroll of No. of rows or columns are greater then

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            // classes={classes} // Original styles
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            // className={classes.MuiTableCell} // Original styles
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              // className={classes.MuiTableSortLabel} // Original styles
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span
                  // className={classes.visuallyHidden} // Original styles
                  className="visuallyHidden"
                >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
{/*TODO screen reader header text which head and direction of oder                  */}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // classes: PropTypes.object.isRequired, // Original styles
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export {
  EnhancedTableHead,
};
