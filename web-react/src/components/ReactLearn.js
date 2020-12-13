import { Paper } from '@material-ui/core'

import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

function ReactComponents() {
  const [characters, setCharacters] = React.useState([])
  const [data, setData] = React.useState([])

  useEffect(() => {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result)
      })
  }, []) //If it has dependency list in there. it reruns only when listed changed, or all the time if there is nothings, or never if it is []

  // TODO get it outside!!!
  const removeCharacter = (index) => {
    const newCharacters = characters.filter((characters, i) => i !== index)
    setCharacters(newCharacters)
  }

  const handleSubmit = (character) => {
    setCharacters([...characters, character])
  }

  const result = data.map((entry, index) => {
    return <li key={index}>{entry}</li>
  })

  return (
    <Paper className="App">
      <ul>{result}</ul>
      <h1>Hello, React!</h1>
      <Table characterData={characters} removeCharacter={removeCharacter} />
      <Form handleSubmit={handleSubmit} />
    </Paper>
  )
}
Table.propTypes = {
  characterData: PropTypes.array.isRequired,
  removeCharacter: PropTypes.func.isRequired,
}
function Table(props) {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  )
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

TableBody.propTypes = {
  characterData: PropTypes.array.isRequired,
  removeCharacter: PropTypes.func.isRequired,
}
function TableBody(props) {
  const { characterData, removeCharacter } = props
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

function Form(props) {
  const { handleSubmit } = props

  const initialState = {
    name: '',
    job: '',
  }

  const [state, setState] = React.useState(initialState)
  // TODO get it outside!!!
  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const submitForm = () => {
    handleSubmit(state)
    setState(initialState)
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={state.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={state.job}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  )
}

export default ReactComponents
