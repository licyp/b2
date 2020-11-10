import React from 'react'
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
  Switch,
} from '@material-ui/core'
import clsx from 'clsx'

import {
  getComparator,
  descendingComparator,
  stableSort,
} from './a_table.functions'
import { EnhancedTableHead } from './a_table.head'
import { EnhancedTableToolbar } from './a_table.toolbar'
import { useStyles } from './theme/a_component.style'
import { WrapperDL, WrapperDLKK } from './theme/DL_apply'
import { makeStyles } from '@material-ui/core/styles'
import { useThemeDL } from './theme/DL_context'
import { rowsOfData } from './a_data'
import { useQuery } from '@apollo/client'
// import { GET_STEPS } from './a_queries'

import { GET_STEPS, CREATE_STEP, REMOVE_STEP } from './a_queries'
import Title from './Title'

export default function NodeListData() {
  // const classes = useStyles();
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  // // TODO add size option
  // const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // const { loading, data, error } = useQuery(GET_STEPS, {
  //   variables: {
  //     first: rowsPerPage,
  //     offset: rowsPerPage * page,
  //     orderBy: orderBy + '_' + order,
  //   },
  // })

  const { loading, data, error } = useQuery(GET_STEPS, {})

  // const handleRequestSort = (event, property) => {
  //   const isAsc = orderBy === property && order === 'asc';
  //   setOrder(isAsc ? 'desc' : 'asc');
  //   setOrderBy(property);
  // };
  //
  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rowsOfData.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };
  //
  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }
  //
  //   setSelected(newSelected);
  // };
  //
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  //
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // // TODO add size option
  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // TODO Collapsible table as show details
  // TODO reorder columns

  console.log(rowsOfData)
  console.log(data)

  return (
    <React.Fragment>
      <div>
        <Paper>
          <div>
            {data && !loading && !error && (
              <TableBody>
                {data.Step.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{row.name}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            )}
          </div>

          <div>
            {data && !loading && !error && (
              <TableBody>
                {data.Step.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{row.name}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            )}
          </div>
        </Paper>
      </div>
    </React.Fragment>
  )
}
