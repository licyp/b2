









const themeLight = {
  background: '#f5f5f5',
  color: '#0b2486',
  selected: 'rgba(11,36,134,0.25)',
  hover: 'rgba(11,36,134,0.10)',
  hoverText: 'rgba(9,55,234,0.99)',
  selectedHover: 'rgba(11,36,134,0.20)',
  checked: 'rgba(11,36,134,0.60)',
  disabled: 'rgb(134,134,134)',
  active: '#072dc6',
  borderBottomColor: 'rgb(134,134,134)',

  fontSize: 14,
  fontSizeHeading: 16,
  fontSizeTitle: 22,

  tableSize: 'small',
  none: 'none',
  zero: 0,

  paddingTitle: 20,
  paddingLabel: 8,
  padding: 6,
  paddingLeft: 16,
  paddingRight: 6,
  marginBottom: 16,
  flex: '1 1 100%',

  divider: 'rgba(1,7,38,0.15)',
  boxShadow: '0px 2px 3px -1px rgba(1,7,38,0.2), ' +
    '1px 0px 3px 0px rgba(1,7,38,0.14), ' +
    '0px -1px 1px 0px rgba(1,7,38,0.14), ' +
    '-1px 0px 1px 0px rgba(1,7,38,0.12)',

  // borderStyle: 'groove',
  // borderColor: 'coral',
  // borderWidth: 4,
}

const themeDark = {
  background: 'rgb(3,14,59)',
  color: '#968f8f',
  selected: 'rgba(119,124,152,0.5)',
  hover: 'rgba(119,124,152,0.5)',
  hoverText:  'rgba(222,213,213,0.99)',
  selectedHover: 'rgba(119,124,152,0.35)',
  checked: 'rgba(160,155,155,0.99)',
  disabled: 'rgb(86,86,86)',
  active: '#c8bfbf',
  borderBottomColor: 'rgb(86,86,86)',

  fontSize: 14,
  fontSizeHeading: 16,
  fontSizeTitle: 22,

  tableSize: 'small',
  none: 'none',
  zero: 0,

  paddingTitle: 20,
  paddingLabel: 8,
  padding: 6,
  paddingLeft: 16,
  paddingRight: 6,
  marginBottom: 16,
  flex: '1 1 100%',

  divider:  'rgba(150,143,143,0.15)',
  boxShadow: '0px 2px 3px -1px rgba(222,213,213,0.2), ' +
    '1px 0px 3px 0px rgba(222,213,213,0.14), ' +
    '0px -1px 1px 0px rgba(222,213,213,0.14), ' +
    '-1px 0px 1px 0px rgba(222,213,213,0.12)',

  // borderStyle: 'groove',
  // borderColor: 'coral',
  // borderWidth: 4,
}

const StyleDL = (mode) => (mode === 'dark' ? themeDark : themeLight)

export { StyleDL }
