import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch
} from '@material-ui/core'
import clsx from 'clsx'
import {getComparator, descendingComparator, stableSort} from './a_table.functions'
import {EnhancedTableHead} from './a_table.head'
import {EnhancedTableToolbar} from './a_table.toolbar'
import {useStyles} from './theme/a_component.style' // Original styles

// TODO add label selection for which node type to be displayed
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

export default function NodeList() {
  // const classes = useStyles(); // Original styles
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // // TODO add size option
  // const [dense, setDense] = React.useState(true); // Dense switch
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // // TODO add size option
  // const handleChangeDense = (event) => { //blank rows on last page
  //   setDense(event.target.checked); //blank rows on last page
  // }; //blank rows on last page

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage); //blank rows on last page

  // TODO Collapsible table as show details
  // TODO reorder columns



  return (
    <React.Fragment>
    <div
      // className={classes.root} // Original styles
    >
      <Paper
        // className={classes.MuiPaper} // Original styles
      >
        <EnhancedTableToolbar
          // classes={classes} // Original styles
          numSelected={selected.length}
        />
        <TableContainer
          // className={classes.MuiTableContainer} // Original styles
        >
          <Table
            // className={classes.MuiTable} // Original styles
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'} // Dense switch
            // TODO add size option
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              // classes={classes} // Original styles
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody
              // className={classes.MuiTableBody} // Original styles
            >
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      // className={classes.MuiTableRow} // Original styles
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell
                        // className={classes.MuiTableCell} // Original styles
                        padding="checkbox">
                        <Checkbox
                          // classes={classes} // Original styles
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell
                        // className={classes.MuiTableCell} // Original styles
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        // className={classes.MuiTableCell} // Original styles
                        align="right"
                      >{row.calories}</TableCell>
                      <TableCell
                        // className={classes.MuiTableCell} // Original styles
                        align="right"
                      >{row.fat}</TableCell>
                      <TableCell
                        // className={classes.MuiTableCell} // Original styles
                        align="right"
                      >{row.carbs}</TableCell>
                      <TableCell
                        // className={classes.MuiTableCell} // Original styles
                        align="right"
                      >{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {/*/!*{emptyRows > 0 && (*!/ //blank rows on last page*/}
              {/*/!*  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>*!/ //blank rows on last page*/}
              {/*/!*    <TableCell colSpan={6} />*!/ //blank rows on last page*/}
              {/*/!*  </TableRow>*!/ //blank rows on last page*/}
              {/*/!*)}*!/ //blank rows on last page*/}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          // className={classes.MuiTablePagination} // Original styles
          rowsPerPageOptions={[5, 10, 25]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/*<FormControlLabel// Dense switch*/}
      {/*  control={<Switch checked={dense} onChange={handleChangeDense} />} */}
      {/*  label="Dense padding" // Dense switch*/}
      {/*  // TODO*/}
      {/*/>*/}
    </div>
      </React.Fragment>
  );
}
