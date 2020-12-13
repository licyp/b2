import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

// TODO filter at header headCells
// TODO order by multiple headings
// TODOSticky header row
// TODO scroll of No. of rows or columns are greater then
// TODO when intermediate on click unselect all

function EnhancedTableHead(props) {
  const { headCells, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
          <Tooltip
            title="Select visible, select all and then unselect all, including non-visible"
          >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all' }}
          />

        </Tooltip>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.key}
            // align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.key ? order : false}
            // TODO set headding baed on order? or movable?
            // order={headCell.order}
            align ={headCell.align}
                     // TODO add wrapping
          >
            <Tooltip
              title={headCell.tooltip}
            >
            <TableSortLabel
              active={orderBy === headCell.key}
              // TODO if date new ir string abc if number small
              headDataType={headCell.type}
              // direction={orderBy === headCell.key ? order : 'asc'}
              direction={headCell.sort}
              onClick={createSortHandler(headCell.key)}
            >
              {headCell.label}
              {orderBy === headCell.key ? (
                <span
                  className="visuallyHidden"
                >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
{/*TODO screen reader header text which head and direction of oder                  */}
                </span>
              ) : null}
            </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  headCells: PropTypes.object.isRequired,
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
