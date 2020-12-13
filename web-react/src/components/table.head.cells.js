const HeadCellsPerson = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Person Name' },
  { id: 'born', numeric: true, disablePadding: false, label: 'Born in Year' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
  // TODO add tooltip
];
const HeadCellsMovie = [
  { key: 'title', disablePadding: true, label: 'Title ' , type:'string', order:1, sort:'asc', align:'center',  tooltip:'Just a note Title'},
  { key: 'released',  disablePadding: false, label: 'Released Year' , type:'numeric', order:2,sort:'desc', align:'left', tooltip:'Just a note DATE'},
  { key: 'tagline',  disablePadding: false, label: 'Tagline', type:'string', order:3,sort:'desc', align:'justify',  tooltip:'Just a TEXT'},
  { key: 'action', disablePadding: false, label: 'Action', type:'object', order:4,sort:'asc', align:'right', tooltip:'Just a TODO'},
];

// TODO if date new on top
// TODO default oder asc/desc
// TODO default oder direction per headCells
// TODO default cell to be ordered from
// TODO add action column: edit in line, expand for details, duplicate, delete
// TODO action button open in new tab to see details
// TODO get headers from data labels or more like properties
// TODO drag and drop columns


export {
  HeadCellsPerson,
  HeadCellsMovie,
};
