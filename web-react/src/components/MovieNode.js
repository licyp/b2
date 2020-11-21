import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
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

import { CREATE_STEP, REMOVE_STEP, GET_MOVIES } from './queries'
import TableContainer from '@material-ui/core/TableContainer'
import { EnhancedTableHead } from './table.head'
import { EnhancedTableMovieHead } from './tableMovie.head'
import { EnhancedTableToolbar } from './table.toolbar'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { Edit as EditIcon } from '@material-ui/icons'
import { Delete as DeleteIcon } from '@material-ui/icons'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'

// TODO Collapsible table as show details
// TODO reorder columns
// TODO add size option

// TODO add label selection for which node type to be displayed

function MovieNode() {
  const [filterState, setFilterState] = React.useState({ nameFilter: '' })
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('title')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  //TODO get default from config?
  const [valueMainSelection, setValueMainSelection] = React.useState('Movie')

  const handleChangeRadio = (event) => {
    setValueMainSelection(event.target.value)
  }

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
      const newSelecteds = data.Movie.map((n) => n.title)
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

  const isSelected = (title) => {
    return selected.indexOf(title) !== -1
  }

  const dataLength = () => {
    return data.MovieCount
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // TODO copy above: Peopel and Movie.length
  // add datathen length

  // const [selectedNode, setSelectedNode] = React.useState('none')
  // const [selectedQuery, setSelectedQuery] = React.useState('none')
  // const [selectedQueryDataLength, setSelectedQueryDataLength] = React.useState('none')
  //
  // const handleSelectNode = (name) => {
  //   let newSelectedNode
  //   let newSelectedQuery
  //   let newSelectedQueryDataLength
  //
  //   if (name === 'Person') {
  //     newSelectedNode = 'Person'
  //     newSelectedQuery = 'GET_PERSONS'
  //     newSelectedQueryDataLength='data.Person'
  //   } else if (name === 'Movie') {
  //     newSelectedNode = 'Movie'
  //     newSelectedQuery = 'GET_MOVIES'
  //     newSelectedQueryDataLength='data.Movie'
  //   } else   {
  //     newSelectedNode = ''
  //     newSelectedQuery = ''
  //     newSelectedQueryDataLength=''
  //   }
  //   setSelectedNode(newSelectedNode)
  //   setSelectedQuery(newSelectedQuery)
  //   setSelectedQueryDataLength(newSelectedQueryDataLength)
  // }

  // useEffect(()=>{
  //   handleSelectNode(valueMainSelection)
  //   console.log('selected radio: ' + valueMainSelection);
  //   console.log('selected NODE: ' + selectedNode);
  //   console.log('selected Query: ' + selectedQuery);
  //   // console.log('selected data length: ' + dataLengthw);
  // })

  const { loading, data, error } = useQuery(GET_MOVIES, {
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

  // console.log('Data back: ' + data)
  // console.log('Data length: ' + dataLength)
  console.log('Data selected: ' + selected)

  return (
    <React.Fragment>
      <Paper elevation={3}>
        <Typography className="Title" component="div" variant="h4">
          Movie
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <FormControl>
            <FormLabel>Node</FormLabel>
            <RadioGroup
              row
              aria-label="nodes"
              name="node"
              value={valueMainSelection}
              onChange={handleChangeRadio}
            >
              <FormControlLabel
                value="Person"
                control={<Radio />}
                label="Person"
              />
              <FormControlLabel
                value="Movie"
                control={<Radio />}
                label="Movie"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="(Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
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
            onSubmit={(e) => {
              e.preventDefault()
              createStep({ variables: { name: input.value } })
              input.value = ''
              window.location.reload()
            }}
          >
            <TextField
              label="Enter name of new node"
              margin="normal"
              variant="outlined"
              size="small"
              type="text"
              ref={(node) => {
                input = node
              }}
            ></TextField>
            <ButtonGroup>
              <Button
                variant="contained"
                type="submit"
              >
                Create
              </Button>
            </ButtonGroup>
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
                <EnhancedTableMovieHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={dataLength()}
                />
                <TableBody>
                  {data.Movie.map((row, index) => {
                    const isItemSelected = isSelected(row.title)
                    const labelId = `enhanced-table-checkbox-${index}`
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.title)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.title}
                        selected={isItemSelected}
                      >
                        {/*TODO add cells based on data landscape*/}
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        {/*<TableCell align="right">{row.id}</TableCell>*/}
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.released}</TableCell>
                        <TableCell align="right">{row.tagline}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup aria-label="outlined primary button group">
                            <Button
                              // className="btn btn-sm rounded-circle float-right"
                              onClick={() => {
                                console.log('Details: ' + row.id)
                                // TODO add action
                                // window.location.reload();
                              }}
                            >
                              <ExpandMoreIcon />
                            </Button>
                            <Button
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
                              onClick={() => {
                                console.log('Delete: ' + row.id)
                                // deleteStep({ variables: { id: row.id } });
                                // window.location.reload();
                                // TODO add action
                              }}
                              disabled
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

export default MovieNode
