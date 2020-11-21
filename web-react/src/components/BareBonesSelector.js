import React from 'react'
import {
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
  Toolbar,
} from '@material-ui/core'

import { useQuery } from '@apollo/client'

import { GET_MOVIES, GET_PERSONS } from './queries'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import PersonNode from './PersonNode'
import MovieNode from './MovieNode'
import { CompProp } from './a0CompWithProp'

const BareBonesSelector=()=> {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // const { loading, data, error } = useQuery(GET_MOVIES, {})

  const [valueMainSelection, setValueMainSelection] = React.useState('Movie')

  const handleChangeRadio = (event) => {
    setValueMainSelection(event.target.value)
  }

  console.log('Selected: ' + valueMainSelection)

  // TODO get target from text string
  const Test = 'Person'
  const TestData = () => {
    return eval('data.' + 'Movie')
  }
  // const dataLength = () => {
  //   return data.PersonCount
  // }
  // console.log('Data list:' + data)

  return (
    <React.Fragment>
      <Grid container direction="row" justify="flex-start" alignItems="center" >
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
            <FormControlLabel value="Movie" control={<Radio />} label="Movie" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <div>
        <Paper
          elevation={5}
        >
          <div>
            TODO As prop from selector
            {valueMainSelection == 'Movie' ? (
              <MovieNode />
            ) : valueMainSelection == 'Person' ? (
              <PersonNode />
            ) : (

              <CompProp
              numSelected = '6'
              selected = 'Person'
              // query={useQuery(GET_MOVIES, {})}
              />

            )}
          </div>
        </Paper>
      </div>
    </React.Fragment>
  )
};

export default BareBonesSelector;

