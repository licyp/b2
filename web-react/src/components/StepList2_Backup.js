// import React from 'react'
// import { useQuery,  useMutation } from '@apollo/client'
// import { withStyles } from '@material-ui/core/styles'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Tooltip,
//   Paper,
//   TableSortLabel,
//   TextField,
// } from '@material-ui/core'
// import {styles} from './theme/a_component.style'
//
// import {GET_STEPS, CREATE_STEP, REMOVE_STEP} from './a_queries'
// import Title from './Title'
//
// function StepList2(props) {
//   const { classes } = props
//
//   const [order, setOrder] = React.useState('asc')
//   const [orderBy, setOrderBy] = React.useState('name')
//   const [page] = React.useState(0)
//   const [rowsPerPage] = React.useState(10)
//
//   const [filterState, setFilterState] = React.useState({ nameFilter: '' })
//
//   const getFilter = () => {
//     return filterState.nameFilter.length > 0
//       ? { name_contains: filterState.nameFilter }
//       : {}
//   }
//
//   const { loading, data, error } = useQuery(GET_STEPS, {
//     variables: {
//       first: rowsPerPage,
//       offset: rowsPerPage * page,
//       orderBy: orderBy + '_' + order,
//       filter: getFilter(),
//     },
//   })
//
//   const handleSortRequest = (property) => {
//     const newOrderBy = property
//     let newOrder = 'desc'
//     if (orderBy === property && order === 'desc') {
//       newOrder = 'asc'
//     }
//     setOrder(newOrder)
//     setOrderBy(newOrderBy)
//   }
//
//   const handleFilterChange = (filterName) => (event) => {
//     const val = event.target.value
//     setFilterState((oldFilterState) => ({
//       ...oldFilterState,
//       [filterName]: val,
//     }))
//   }
//
//   let input;
//   const [createStep] = useMutation(CREATE_STEP);
//   // const [editStep] = useMutation(EDIT_STEP);
//   const [deleteStep] = useMutation(REMOVE_STEP);
//
//   return (
//     <Paper className={classes.root}>
//     <React.Fragment>
//       <Title>Steps</Title>
//
//       <form onSubmit={e => {
//         e.preventDefault();
//         createStep({ variables: { name: input.value } });
//         input.value = '';
//         window.location.reload();
//       }}>
//         <input className="form-control" type="text" placeholder="Enter todo" ref={node => { input = node; }}></input>
//         <button className="btn btn-primary px-5 my-2" type="submit">Submit</button>
//       </form>
//
//       <TextField
//         id="search"
//         label="Process Text Contains"
//         className={classes.textField}
//         value={filterState.nameFilter}
//         onChange={handleFilterChange('nameFilter')}
//         margin="normal"
//         variant="outlined"
//         type="text"
//         InputProps={{
//           className: classes.input,
//         }}
//       />
//
//       {loading && !error && <p>Loading...</p>}
//       {error && !loading && <p>Error</p>}
//       {data && !loading && !error && (
//
//         <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//
//             <TableCell align="center"
//               key="licypId"
//               sortDirection={orderBy === 'licypId' ? order : false}
//             >
//               <Tooltip title="Sort by ID" placement="bottom-start" enterDelay={300}>
//                 <TableSortLabel
//                   active={orderBy === 'licypId'}
//                   direction={order}
//                   onClick={() => handleSortRequest('licypId')}
//                 >
//                   ID
//                 </TableSortLabel>
//               </Tooltip>
//             </TableCell>
//
//             <TableCell align="center"
//               key="ref"
//               sortDirection={orderBy === 'ref' ? order : false}
//             >
//               <Tooltip title="Sort by ref" placement="bottom-start" enterDelay={300}>
//                 <TableSortLabel
//                   active={orderBy === 'ref'}
//                   direction={order}
//                   onClick={() => handleSortRequest('ref')}
//                 >
//                   Ref
//                 </TableSortLabel>
//               </Tooltip>
//             </TableCell>
//
//             <TableCell align="center"
//               key="name"
//               sortDirection={orderBy === 'name' ? order : false}
//             >
//               <Tooltip title="Sort by name" placement="bottom-start" enterDelay={300}>
//                 <TableSortLabel
//                   active={orderBy === 'name'}
//                   direction={order}
//                   onClick={() => handleSortRequest('name')}
//                 >
//                   NAME
//                 </TableSortLabel>
//               </Tooltip>
//             </TableCell>
//
//             <TableCell align="center"
//               key="order"
//               sortDirection={orderBy === 'order' ? order : false}
//             >
//               <Tooltip title="Sort by order" placement="bottom-start" enterDelay={300}>
//                 <TableSortLabel
//                   active={orderBy === 'order'}
//                   direction={order}
//                   onClick={() => handleSortRequest('order')}
//                 >
//                   Order
//                 </TableSortLabel>
//               </Tooltip>
//             </TableCell>
//
//             <TableCell align="center">Action</TableCell>
//
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.Step.map((row) => (
//             <TableRow key={row.id}>
//               {/*<TableCell component="th" scope="row">*/}
//               {/*  {row.myid}*/}
//               {/*</TableCell>*/}
//               {/*<TableCell>{row.date.formatted}</TableCell>*/}
//               <TableCell>{row.id}</TableCell>
//               <TableCell>{row.ref}</TableCell>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.order}</TableCell>
//               <TableCell align="center">
//                 {/*<button className="btn btn-sm rounded-circle float-right" onClick={() => {*/}
//                 {/*  editStep({ variables: { id: row.id } });*/}
//                 {/*  window.location.reload();*/}
//                 {/*}}>Edit</button>*/}
//                 <button className="btn btn-sm btn-danger rounded-circle float-right" onClick={() => {
//                   deleteStep({ variables: { id: row.id } });
//                   window.location.reload();
//                 }}>X</button>
//               </TableCell>
//               {/*<TableCell align="right">{row.stars}</TableCell>*/}
//             </TableRow>
//           ))}
//
//
//         </TableBody>
//       </Table>
//       )}
//     </React.Fragment>
//     </Paper>
//   )
// }
//
// export default withStyles(styles)(StepList2)
