const headCellsB = [
  { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
  { id: 'ref', numeric: false, disablePadding: false, label: 'Ref' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'order', numeric: true, disablePadding: false, label: 'Order' },
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
  headCellsB,
};
