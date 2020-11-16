const HeadCellsPerson = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Person Name' },
  { id: 'born', numeric: true, disablePadding: false, label: 'Born in Year' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
  // TODO add tooltip
];
const HeadCellsMovie = [
  { id: 'released', numeric: true, disablePadding: false, label: 'Released Year' },
  { id: 'tagline', numeric: false, disablePadding: false, label: 'Tagline' },
  { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' },
  // TODO add tooltip
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
