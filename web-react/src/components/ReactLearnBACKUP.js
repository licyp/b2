// import { Paper } from '@material-ui/core'
//
// import React, { Component } from 'react'
//
// class ReactComponents extends Component {
//   state = {
//     characters: [],
//     data: [],
//   }
//
//
//   componentDidMount() {
//     const url =
//       'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
//
//     fetch(url)
//       .then((result) => result.json())
//       .then((result) => {
//         this.setState({
//           data: result,
//         })
//       })
//   }
//
//   // TODO get it outside!!!
//   removeCharacter = (index) => {
//     const { characters } = this.state
//
//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index
//       }),
//     })
//   }
//
//   handleSubmit = (character) => {
//     this.setState({ characters: [...this.state.characters, character] })
//   }
//
//   render() {
//     const { characters, data } = this.state
//
//     const result = data.map((entry, index) => {
//       return <li key={index}>{entry}</li>
//     })
//
//     return (
//       <Paper className="App">
//         <ul>{result}</ul>
//         <h1>Hello, React!</h1>
//         <Table
//           characterData={characters}
//           removeCharacter={this.removeCharacter}
//         />
//         <Form handleSubmit={this.handleSubmit} />
//       </Paper>
//     )
//   }
// }
//
// const Table = (props) => {
//   const { characterData, removeCharacter } = props
//
//   return (
//     <table>
//       <TableHeader />
//       <TableBody
//         characterData={characterData}
//         removeCharacter={removeCharacter}
//       />
//     </table>
//   )
// }
//
// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   )
// }
//
// const TableBody = (props) => {
//   const rows = props.characterData.map((row, index) => {
//     return (
//       <tr key={index}>
//         <td>{row.name}</td>
//         <td>{row.job}</td>
//         <td>
//           <button onClick={() => props.removeCharacter(index)}>Delete</button>
//         </td>
//       </tr>
//     )
//   })
//
//   return <tbody>{rows}</tbody>
// }
//
// class Form extends Component {
//   initialState = {
//     name: '',
//     job: '',
//   }
//
//   state = this.initialState
//
//   // TODO get it outside!!!
//   handleChange = (event) => {
//     const { name, value } = event.target
//
//     this.setState({
//       [name]: value,
//     })
//   }
//   submitForm = () => {
//     this.props.handleSubmit(this.state)
//     this.setState(this.initialState)
//   }
//
//   render() {
//     const { name, job } = this.state
//
//     return (
//       <form>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           value={name}
//           onChange={this.handleChange}
//         />
//         <label htmlFor="job">Job</label>
//         <input
//           type="text"
//           name="job"
//           id="job"
//           value={job}
//           onChange={this.handleChange}
//         />
//         <input type="button" value="Submit" onClick={this.submitForm} />
//       </form>
//     )
//   }
// }
//
// export default ReactComponents
//
// // ReactComponents.propTypes = {
// // }
