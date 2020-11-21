import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { purple } from '@material-ui/core/colors'

const themeDark = createMuiTheme({
  backgroundPaper: 'rgb(2,10,45)',
  backgroundTable: 'rgb(2,10,45)',
  backgroundInput: 'rgba(119,124,152,0.16)',
  backgroundInputFocus: 'rgba(2,10,45,0.11)',
  textMain: '#968f8f',
  textInput: '#c8bfbf',
  textActive: '#c8bfbf',
  textDisabled: 'rgb(86,86,86)',
  textHover: 'rgba(222,213,213,0.85)',
  textHoverActive: '#e9e1e1',
  maskHover: 'rgba(119,124,152,0.5)',
  maskSelected: 'rgba(119,124,152,0.5)',
  maskHoverSelected: 'rgba(119,124,152,0.35)',
  borderMain: 'rgb(86,86,86)',
  borderMainLight: 'rgba(86,86,86,0.28)',
  borderFocus: '#c8bfbf',
  boxShadowColor: 'rgba(86,86,86,0.28)',
  boxShadow5:
    '0px 3px 5px -1px rgba(86,86,86,0.28),' +
    '0px 3px 8px 0px rgba(86,86,86,0.24),' +
    '0px 1px 14px 0px rgba(86,86,86,0.20)',
  boxShadow3:
    '0px 3px 3px -2px rgba(86,86,86,0.28),' +
    '0px 3px 4px 0px rgba(86,86,86,0.24),' +
    '0px 1px 8px 0px rgba(86,86,86,0.20)',
  boxShadow1:
    '0px 2px 1px -1px rgba(86,86,86,0.28),' +
    '0px 1px 1px 0px rgba(86,86,86,0.24),' +
    '0px 1px 3px 0px rgba(86,86,86,0.20)',

  // TODO parametric shadow
})

const themeLight = createMuiTheme({
  backgroundPaper: '#f5f5f5',
  backgroundTable: '#f5f5f5',
          backgroundInput: 'rgba(11,36,134,0.06)',
  backgroundInputFocus: 'rgba(245,245,245,0.11)',
  textMain: '#0b2486',
  textInput: '#072dc6',
  textActive: '#072dc6',
  textDisabled: 'rgb(134,134,134)',
  textHover: 'rgba(9,55,234,0.85)',
  textHoverActive: 'rgb(9,55,234)',
  maskHover: 'rgba(11,36,134,0.10)',
  maskSelected:  'rgba(11,36,134,0.25)',
  maskHoverSelected: 'rgba(11,36,134,0.35)',
borderMain: 'rgb(134,134,134)',
  borderMainLight: 'rgba(134,134,134,0.28)',
  borderFocus: '#072dc6',
  boxShadowColor: 'rgba(134,134,134,0.28)',
  boxShadow5:
    '0px 3px 5px -1px rgba(134,134,134,0.28),' +
    '0px 3px 8px 0px rgba(134,134,134,0.24),' +
    '0px 1px 14px 0px rgba(134,134,134,0.20)',
  boxShadow3:
    '0px 3px 3px -2px rgba(134,134,134,0.28),' +
    '0px 3px 4px 0px rgba(134,134,134,0.24),' +
    '0px 1px 8px 0px rgba(134,134,134,0.20)',
  boxShadow1:
    '0px 2px 1px -1px rgba(134,134,134,0.28),' +
    '0px 1px 1px 0px rgba(134,134,134,0.24),' +
    '0px 1px 3px 0px rgba(134,134,134,0.20)',

})

// TODO check system setting, browser default style!!!!!!

// const themeLight = {
//   background: '#f5f5f5',
//   color: '#0b2486',
//   selected: 'rgba(11,36,134,0.25)',
//   hover: 'rgba(11,36,134,0.10)',
//   hoverText: 'rgba(9,55,234,0.99)',
//   selectedHover: 'rgba(11,36,134,0.20)',
//   checked: 'rgba(11,36,134,0.60)',
//   disabled: 'rgb(134,134,134)',
//   active: '#072dc6',
//   borderBottomColor: 'rgb(134,134,134)',
//
//   fontSize: 14,
//   fontSizeHeading: 16,
//   fontSizeTitle: 22,
//
//   tableSize: 'small',
//   none: 'none',
//   zero: 0,
//
//   paddingTitle: 20,
//   paddingLabel: 8,
//   padding: 6,
//   paddingLeft: 16,
//   paddingRight: 6,
//   marginBottom: 16,
//   flex: '1 1 100%',
//
//   divider: 'rgba(1,7,38,0.15)',
//   boxShadow: '0px 2px 3px -1px rgba(1,7,38,0.2), ' +
//     '1px 0px 3px 0px rgba(1,7,38,0.14), ' +
//     '0px -1px 1px 0px rgba(1,7,38,0.14), ' +
//     '-1px 0px 1px 0px rgba(1,7,38,0.12)',
//
//   // borderStyle: 'groove',
//   // borderColor: 'coral',
//   // borderWidth: 4,
// }
//
// const themeDark = {
//   background: 'rgb(2,10,45)',
//   color: '#968f8f',
//   selected: 'rgba(119,124,152,0.5)',
//   hover: 'rgba(119,124,152,0.5)',
//   hoverText:  'rgba(222,213,213,0.99)',
//   selectedHover: 'rgba(119,124,152,0.35)',
//   checked: 'rgba(160,155,155,0.99)',
//   disabled: 'rgb(86,86,86)',
//   active: '#c8bfbf',
//   borderBottomColor: 'rgb(86,86,86)',
//
//   fontSize: 14,
//   fontSizeHeading: 16,
//   fontSizeTitle: 22,
//
//   tableSize: 'small',
//   none: 'none',
//   zero: 0,
//
//   paddingTitle: 20,
//   paddingLabel: 8,
//   padding: 6,
//   paddingLeft: 16,
//   paddingRight: 6,
//   marginBottom: 16,
//   flex: '1 1 100%',
//
//   divider:  'rgba(150,143,143,0.15)',
//   boxShadow: '0px 2px 3px -1px rgba(222,213,213,0.2), ' +
//     '1px 0px 3px 0px rgba(222,213,213,0.14), ' +
//     '0px -1px 1px 0px rgba(222,213,213,0.14), ' +
//     '-1px 0px 1px 0px rgba(222,213,213,0.12)',
//
//   // borderStyle: 'groove',
//   // borderColor: 'coral',
//   // borderWidth: 4,
// }

const StyleDL = (mode) => (mode === 'dark' ? themeDark : themeLight)

export { StyleDL, themeDark, themeLight }
