import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
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
  TablePagination,
  Checkbox,
} from '@material-ui/core'
import { styles } from './theme/a_component.style'

import { GET_STEPS, CREATE_STEP, REMOVE_STEP } from './a_queries'
import Title from './Title'
import TableContainer from '@material-ui/core/TableContainer'
import { EnhancedTableHead } from './a_table.head'
import { EnhancedTableHeadB } from './b_table.head'
import { EnhancedTableToolbar } from './a_table.toolbar'
import { EnhancedTableToolbarB } from './b_table.toolbar'

function NodeListgql() {
  const [filterState, setFilterState] = React.useState({ nameFilter: '' })
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('name')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const getFilter = () => {
    return filterState.nameFilter.length > 0
      ? { name_contains: filterState.nameFilter }
      : {}
  }

  const handleFilterChange = (filterName) => (event) => {
    const val = event.target.value
    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.Step.map((n) => n.name)
      setSelected(newSelecteds)
      console.log('Before ALL selected: ' + selected.length)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
    console.log('Before Click selected: ' + selected.length)
  }

  const isSelected = (name) => {
    return selected.indexOf(name) !== -1
  }

  const dataLength = () => {
    return data.stepCount
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const { loading, data, error } = useQuery(GET_STEPS, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + '_' + order,
      filter: getFilter(),
    },
  })

  let input
  const [createStep] = useMutation(CREATE_STEP)
  // const [editStep] = useMutation(EDIT_STEP);
  const [deleteStep] = useMutation(REMOVE_STEP)

  console.log('Data back: ' + data)
  console.log('Data length: ' + dataLength)
  // console.log(toJSON(data))

  // console.log(data.Step.length)

  return (
    <React.Fragment>
      <Paper>
        <Title>Steps</Title>

        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <React.Fragment>
            {/*TODO stye as others*/}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                createStep({ variables: { name: input.value } })
                input.value = ''
                window.location.reload()
              }}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Enter todo"
                ref={(node) => {
                  input = node
                }}
              ></input>
              <button className="btn btn-primary px-5 my-2" type="submit">
                Submit
              </button>
            </form>

            <TextField
              id="search"
              label="Process Text Contains"
              value={filterState.nameFilter}
              onChange={handleFilterChange('nameFilter')}
              margin="normal"
              variant="outlined"
              type="text"
            />

            <EnhancedTableToolbarB numSelected={selected.length} />
            <TableContainer>
              <Table>
                {/*TODO 13 Slected (7 not visible)*/}
                <EnhancedTableHeadB
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={dataLength()}
                />
                <TableBody>
                  {data.Step.map((row, index) => {
                    const isItemSelected = isSelected(row.name)
                    const labelId = `enhanced-table-checkbox-${index}`
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        {/*TODO add cells based on data landscape*/}
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell align="right">{row.id}</TableCell>
                        <TableCell align="right">{row.ref}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.order}</TableCell>
                        <TableCell align="center">
                          <button
                            className="btn btn-sm rounded-circle float-right"
                            onClick={() => {
                              console.log('Edit: ' + row.id)
                              // TODO add action
                              // window.location.reload();
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger rounded-circle float-right"
                            onClick={() => {
                              console.log('Delete: ' + row.id)
                              // deleteStep({ variables: { id: row.id } });
                              // window.location.reload();
                              // TODO add action
                            }}
                          >
                            X
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              //       TODO fetch all data to 1-5 of 25
              count={dataLength()}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </React.Fragment>
        )}
      </Paper>
    </React.Fragment>
  )
}

export default NodeListgql
