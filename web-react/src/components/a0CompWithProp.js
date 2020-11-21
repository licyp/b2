import { IconButton, Paper, TableBody, TableCell, TableRow, Toolbar, Tooltip, Typography } from '@material-ui/core'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import PropTypes from 'prop-types'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MOVIES } from './queries'

// const CompProp = (props) => {
//   const { numSelected } = props
//
//   return (
//     <div>
//       <p>Hi</p>
//       <p>Number is {numSelected}</p>
//     </div>
//   )
// }

const CompProp = (props) => {
  const { numSelected, selected, query } = props
console.log(props.selected)

  // const [order, setOrder] = React.useState('asc')
  // const [orderBy, setOrderBy] = React.useState('calories')
  // const [selected, setSelected] = React.useState([])
  // const [page, setPage] = React.useState(0)
  // const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // const { loading, data, error } = () => {
  //   return { useQuery(GET_MOVIES, {}) }
  // }
  const { loading, data, error } = props.query


  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name)
  //   let newSelected = []
  //
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name)
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1))
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1))
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     )
  //   }
  //   setSelected(newSelected)
  // }




// TODO get target from text string
  const Test="Person";
  const TestData = () => {
    return eval("data." + "Movie")
  }
  // const dataLength = () => {
  //   return data.PersonCount
  // }
  // console.log('Data list:' + data)

  return (
    <React.Fragment>
      <div>
        <Paper>
          <p>Number is {numSelected} and {selected} is selected</p>
          <div>Person TODO this from string
            {loading && !error && <p>Loading...</p>}
            {error && !loading && <p>Error</p>}
            {data && !loading && !error && (
              <TableBody>
                {TestData().map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{row.title}</TableCell>
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






CompProp.propTypes = {
  numSelected: PropTypes.number.isRequired,
  selected: PropTypes.string.isRequired,
  query: PropTypes.func.isRequired,
}

export { CompProp }
