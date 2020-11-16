import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import {HeadCellsMovie} from './table.head.cells'

// TODO data.heading as prop
// TODO filter at header headCells
// TODO order by multiple headings
// TODOSticky header row
// TODO scroll of No. of rows or columns are greater then
// TODO when intermediate on click unselect all

function EnhancedTableMovieHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  // TODO filter at header headCells
  // TODO order by multiple headings
  // TODOSticky header row
  // TODO scroll of No. of rows or columns are greater then
  // TODO when intermediate on click unselect all
// console.log('In header row count: ' + rowCount);


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
        {HeadCellsMovie.map((headCell) => (
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

EnhancedTableMovieHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export {
  EnhancedTableMovieHead,
};
