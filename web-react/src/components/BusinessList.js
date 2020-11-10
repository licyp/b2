import React from 'react'
import { useQuery, gql } from '@apollo/client'
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
} from '@material-ui/core'

import Title from './Title'

const styles = (theme) => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: 'auto',
  },
  table: {
    minWidth: 700,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 300,
  },
})

const GET_USER = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_UserOrdering]
    $filter: _UserFilter
  ) {
    User(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      id: userId
      name
      avgStars
      numReviews
    }
  }
`
const GET_BUSINESS = gql`
  query usersPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_BusinessOrdering]
    $filter: _BusinessFilter
  ) {
    Business(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      id: businessId
      name
      address
      state
    }
  }
`

function BusinessList(props) {
  const { classes } = props
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('name')
  const [page] = React.useState(0)
  const [rowsPerPage] = React.useState(10)
  const [filterState, setFilterState] = React.useState({ usernameFilter: '' })

  const getFilter = () => {
    return filterState.usernameFilter.length > 0
      ? { name_contains: filterState.usernameFilter }
      : {}
  }

  const { loading, data, error } = useQuery(GET_BUSINESS, {
    variables: {
      first: rowsPerPage,
      offset: rowsPerPage * page,
      orderBy: orderBy + '_' + order,
      filter: getFilter(),
    },
  })

  const handleSortRequest = (property) => {
    const newOrderBy = property
    let newOrder = 'desc'

    if (orderBy === property && order === 'desc') {
      newOrder = 'asc'
    }

    setOrder(newOrder)
    setOrderBy(newOrderBy)
  }

  const handleFilterChange = (filterName) => (event) => {
    const val = event.target.value

    setFilterState((oldFilterState) => ({
      ...oldFilterState,
      [filterName]: val,
    }))
  }

  return (
    <Paper className={classes.root}>
      <Title>Business List</Title>
      <TextField
        id="search"
        label="Business Name Contains"
        className={classes.textField}
        value={filterState.usernameFilter}
        onChange={handleFilterChange('usernameFilter')}
        margin="normal"
        variant="outlined"
        type="text"
        InputProps={{
          className: classes.input,
        }}
      />
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>Error</p>}
      {data && !loading && !error && (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell
                key="name"
                sortDirection={orderBy === 'name' ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={order}
                    onClick={() => handleSortRequest('name')}
                  >
                    Name
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="address"
                sortDirection={orderBy === 'address' ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-end" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'address'}
                    direction={order}
                    onClick={() => handleSortRequest('address')}
                  >
                    Address
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                key="state"
                sortDirection={orderBy === 'state' ? order : false}
              >
                <Tooltip title="Sort" placement="bottom-start" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === 'state'}
                    direction={order}
                    onClick={() => handleSortRequest('state')}
                  >
                    State
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.Business.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell>{n.address}</TableCell>
                  <TableCell>{n.state}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )
      }
    </Paper>
  )
}

export default withStyles(styles)(BusinessList)
