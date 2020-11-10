const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
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
  headCells,
};
