import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import {headCellsB} from './b_table.head.cells'

// TODO data.heading as prop

function EnhancedTableHeadB(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  // TODO filter at header headCells
  // TODO order by multiple headings
  // TODOSticky header row
  // TODO scroll of No. of rows or columns are greater then
console.log('In header row count: ' + rowCount);


  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableCell>
        {headCellsB.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            // TODO add tooltip
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span
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

EnhancedTableHeadB.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export {
  EnhancedTableHeadB,
};
