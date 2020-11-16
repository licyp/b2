import React from 'react'
import {
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core'

import { useQuery } from '@apollo/client'

import { GET_PERSONS } from './queries'


export default function BareBones() {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const { loading, data, error } = useQuery(GET_PERSONS, {})

// TODO get target from text string
  const Test="Person";
  const TestData = () => {
    return eval("data." + "Person")
  }
  // const dataLength = () => {
  //   return data.PersonCount
  // }
  // console.log('Data list:' + data)

  return (
    <React.Fragment>
      <div>
        <Paper>
          <div>Person TODO this from string
            {loading && !error && <p>Loading...</p>}
            {error && !loading && <p>Error</p>}
            {data && !loading && !error && (
              <TableBody>
                {TestData().map((row, index) => {
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
