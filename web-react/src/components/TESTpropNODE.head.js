import {
  Checkbox, IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField, Toolbar, Tooltip,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { HeadCellsMovie, HeadCellsPerson } from './table.head.cells'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_MOVIE, GET_MOVIES, REMOVE_MOVIE } from './queries'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { EnhancedTableToolbar } from './table.toolbar'
import TableContainer from '@material-ui/core/TableContainer'
import { EnhancedTableHead } from './table.enhancedHead'
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'

import FilterListIcon from '@material-ui/icons/FilterList'

// TODO data.heading as prop
// TODO filter at header headCells
// TODO order by multiple headings
// TODOSticky header row
// TODO scroll of No. of rows or columns are greater then
// TODO when intermediate on click unselect all

function EnhancedNode(props) {
  const {
    typeNodeProp,
    orderProp,
    orderByProp,
    headCellsProp,
    rowsPerPageProp,
    // errorProp,
    // loadingProp,
    // dataProp,
    dataKeyProp,
  } = props

  const [filterState, setFilterState] = React.useState({ nameFilter: '' })
  const [order, setOrder] = React.useState(orderProp)
  const [orderBy, setOrderBy] = React.useState(orderByProp)
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageProp)

  const headCellsData = headCellsProp
  const typeNode = typeNodeProp
  const dataKeyId = dataKeyProp

  const getFilter = () => {
    return filterState.nameFilter.length > 0
      ? // TODO add fuzzy search( or def heading)
        // TODO fuzzy filter, but field:date + name:test field???? maybe
        // TODO as prop
        { title_contains: filterState.nameFilter }
      : {}
  }

  // client.query({ query: YOUR_QUERY, variables: { });
  // TODO as prop
  const { loading, data, error } = useQuery(GET_MOVIES, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + '_' + order,
      filter: getFilter(),
    },
  })


  const dataLength = () => {
    return data.TotalCount
  }
  const dataTable = () => {
    // return data.Movie
    return eval('data.' + typeNode)
  }

  const dataKey = () => {
    return 'row.' + dataKeyId
  }


  let input
  const [createNode] = useMutation(CREATE_MOVIE)
  const [deleteNode] = useMutation(REMOVE_MOVIE)



  // doSomething= function () {
  //   console.log('ddd')
  // }

  function doSomething() {
    // alert('it works!');
    // e.preventDefault();
    console.log('ddd')
  }
  // function deleteOneNode(row) {
  //   console.log('Delete: ' + row.id)
  //   deleteNode({ variables: { title: row.title } });
  //   window.location.reload();
  // }
  // const deleteOneNode = (row) =>{
  //   console.log('Delete: ' + row.id)
  //   deleteNode({ variables: { title: row.title } });
  //   window.location.reload();
  // }




  // onSubmit={(e) => {
  //   e.preventDefault()
  //   // TODO get attributes as props
  //   createNode({ variables: { title: input.value } })
  //   input.value = ''
  //   window.location.reload()
  // }}



  // console.log('Data back: ' + data)
  // console.log('Data length: ' + dataLength)
  console.log('Data selected: ' + selected)

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      // TODO if blank select visible, if interim select all, if checked unselect all
      // const newSelecteds = dataTable().map((n) => n.title)
      const newSelecteds = dataTable().map((n) => eval('n.' + dataKeyId))
      setSelected(newSelecteds)
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
  }

  const isSelected = (name) => {
    return selected.indexOf(name) !== -1
    console.log(selected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleFilterChange = (nameFilter) => (event) => {
    const val = event.target.value
    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [nameFilter]: val,
    }))
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }


  return (
    <React.Fragment>
      <Paper elevation={3}>
        <Typography className="Title" component="div" variant="h4">
          {typeNode}
        </Typography>

        <Grid row container justify="space-evenly" alignItems="center">
          <TextField
            id="search"
            label="Name Contains"
            value={filterState.nameFilter}
            onChange={handleFilterChange('nameFilter')}
            margin="normal"
            variant="outlined"
            size="small"
            type="text"
          />

          <FormGroup
            row
            // TODO variant="primary"
            // onSubmit={doSomething}

            onSubmit={(e) => {
              e.preventDefault()
              console.log('Create: ' + input.value )
              createNode({ variables: { title: input.value  } });
              input.value = ''
              window.location.reload();
            }}

          >
            <TextField
              id="create"
              label="Enter name of new node"
              margin="normal"
              variant="outlined"
              size="small"
              type="text"
              ref={(node) => {
                input = node
              }}
            />

            {/*<ButtonGroup>*/}
              <Button variant="contained" type="submit"
              >
                Create
              </Button>
            {/*</ButtonGroup>*/}
          </FormGroup>
        </Grid>

        {loading && !error && <p>Loading...</p>}
        {error && !loading && <p>Error</p>}
        {data && !loading && !error && (
          <React.Fragment>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table>
                {/*TODO 13 Selected (7 not visible)*/}
                <EnhancedTableHead
                  headCells={headCellsData}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={dataLength()}
                />
                <TableBody>
                  {dataTable().map((row, index) => {
                    const isItemSelected = isSelected(eval(dataKey()))
                    const labelId = `enhanced-table-checkbox-${index}`
                    // Object.keys(row).map((key, id) => {
                    //   return <div>{key}</div>
                    // })
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={eval(dataKey())}
                        selected={isItemSelected}
                      >
                        {/*TODO add cells based on data landscape*/}
                        <TableCell padding="checkbox"
                                   onClick={(event) => handleClick(event, eval(dataKey()))}
                        >
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        {/*{Object.keys(row).map((key, id) => {*/}
                        {/*  id > 1 ? (*/}
                        {/*    console.log(key)*/}
                        {/*  ) : (*/}
                        {/*    console.log(id)*/}
                        {/*  )*/}
                        {/*})}*/}

                        {/*<TableCell align="right">{row.id}</TableCell>*/}











                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.released}</TableCell>
                        <TableCell align="right">{row.tagline}</TableCell>

                        <TableCell align="center">
                          <ButtonGroup aria-label="outlined primary button group">
                            <Button
                              // TODO variant="info"
                              // className="btn btn-sm rounded-circle float-right"
                              disabled
                              onClick={() => {
                                console.log('Details: ' + row.id)
                                // TODO add action
                                // window.location.reload();
                              }}
                            >
                              <ExpandMoreIcon />
                            </Button>
                            <Button
                              // TODO variant="danger"
                              // className="btn btn-sm rounded-circle float-right"
                              onClick={() => {
                                console.log('Edit: ' + row.id)
                                // TODO add action
                                // window.location.reload();
                              }}
                            >
                              <EditIcon />
                            </Button>
                            <Button
                              // className="btn btn-sm btn-danger rounded-circle float-right"
                              // TODO variant="danger"
                              // onClick={deleteOneNode(row)}
                              onClick={() => {
                                console.log('Delete: ' + row.id)
                                deleteNode({ variables: { title: row.title } });
                                window.location.reload();
                              }}
                            >
                              <DeleteIcon />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              // TODO as page options prop
              rowsPerPageOptions={[5, 10, 25, 100]}
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

EnhancedNode.propTypes = {
  typeNodeProp: PropTypes.string.isRequired,
  headCellsProp: PropTypes.object.isRequired,
  orderProp: PropTypes.oneOf(['asc', 'desc']).isRequired,
  // orderByProp: PropTypes.string.isRequired,
  // rowsPerPageProp: PropTypes.number.isRequired,
  // errorProp: PropTypes.bool.isRequired,
  dataKeyProp: PropTypes.string.isRequired,
}

export { EnhancedNode }
