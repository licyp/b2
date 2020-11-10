import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { lighten, makeStyles } from '@material-ui/core/styles'
import { StyleDL } from './DL.style'
import { useThemeDL } from './DL_context'
import React from 'react'


// const useStyles = makeStyles(theme => ({
//   appbar: props => ({
//     boxShadow: "none",
//     background: "transparent",
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     color: theme.palette.getContrastText(props)
//   }),
// }));
//
// const classes = useStyles(backgroundColor);

const WrapperDLKK = makeStyles((theme) => ({
  // MuiPaper: props => ({
  //   width: '100%',
  //   // marginBottom: theme.spacing(2),
  //   backgroundColor: 'rgba(41,31,31,0.95)' + ' !important',
  //   color: 'rgba(227,227,214,0.95)' + ' !important',
  //   borderStyle: props.theme.borderStyle,
  //   borderColor: props.theme.borderColor,
  //   borderWidth: props.theme.borderWidth,
  // }),
  // MuiPaper:{
  //     backgroundColor: 'rgba(41,31,31,0.95)' + ' !important',
  //     color: 'rgba(227,227,214,0.95)' + ' !important',
  //   borderStyle: theme.borderStyle,
  //   borderColor:  theme.borderColor,
  //   borderWidth: theme.borderWidth,
  // },
  // menuButton: props => ({
  //   marginRight: props.theme.spacing(2),
  //   "&:hover": {
  //     background: 'grey',
  //     borderStyle: 'groove',
  //     borderColor: 'coral',
  //     borderWidth: 7,
  //   },
  // }),
  // title: {
  //   background: 'blue',
  //   borderStyle: 'groove',
  //   borderColor: 'coral',
  //   borderWidth: 7,
  //   "&:hover": {
  //     background: 'pink',
  //   },
  // },
}))

const WrapperDL = styled.div(
  {
    '.visuallyHidden': {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },

    '.MuiPaper-root': {
      marginLeft: 8,
      marginRight: 8,
      marginTop: 24,
      overflowX: 'auto',
      margin: 'auto',
    },
  },

  (props) => ({
//General
    '.MuiContainer-root': {
      backgroundColor: props.theme.background,
      color: props.theme.color,
    },

    '.MuiDivider-root': {
      backgroundColor: props.theme.divider,
    },

    '.MuiPaper-root': {
      fontSize: props.theme.fontSize,
      backgroundColor: props.theme.background,
      color: props.theme.color,
      borderStyle: props.theme.borderStyle,
      borderColor: props.theme.borderColor,
      borderWidth: props.theme.borderWidth,
      marginBottom: props.theme.marginBottom,
      boxShadow: props.theme.boxShadow,
    },
//Table container
    '.MuiTableContainer-root': {
      size: props.theme.tableSize,
      },
//Table
      '.MuiTable-root': {
          size: props.theme.tableSize,
        },
//Table row
    '.MuiTableRow-root': {
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: props.theme.selectedHover
        // color: props.theme.color + ' !important',
      },
      '&.Mui-selected': {
        // backgroundColor: props.theme.selected + ' !important',
        color: props.theme.selected + ' !important',
      },
      '&:hover': {
        backgroundColor: props.theme.hover + ' !important',
        // color: props.theme.color + ' !important',
      },
    },

    '.MuiTableCell-root': {
      fontSize: props.theme.fontSize,
      // body: 'rgba(19,50,208,0.95)'+ ' !important',
      color: props.theme.color,
      borderBottomColor: props.theme.borderBottomColor,
    },
// Check box
    '.MuiCheckbox-colorSecondary': {
      fontSize: props.theme.fontSize,
      color: props.theme.selectedHover + ' !important',
      '&.Mui-checked': {
        color: props.theme.checked + ' !important',
      },
      '&.MuiCheckbox-indeterminate': {
        color: props.theme.checked + ' !important',
      },
      '&:hover': {
        backgroundColor: props.theme.hover,
        // color: props.theme.color + ' !important',
      },
    },
//Menu text and icon
    '.MuiIconButton-root': {
      // backgroundColor: props.theme.selected
      color: props.theme.color,
      '&:hover': {
        backgroundColor: props.theme.hover,
        // color: props.theme.color,
      },
    },

    '.MuiListItem-button': {
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
      '&:hover': {
        backgroundColor:  props.theme.hover,
        // color:  props.theme.color,
      },
    },

    '.MuiListItemIcon-root': {
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
      // '&:hover': {
      //   backgroundColor:  props.theme.hover,
      //   // color:  props.theme.color,
      // },
    },
//Pagination
    '.MuiTablePagination-root': {
// TODO
    },

    '.MuiTablePagination-caption': {
      fontSize: props.theme.fontSize,
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
    },

    '.MuiTablePagination-input': {
      fontSize: props.theme.fontSize,
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
      '&:hover': {
        backgroundColor:  props.theme.hover,
        // color:  props.theme.color,
      },
    },

    '.MuiIconButton-root.Mui-disabled': {
      color: props.theme.disabled,
    },

    '.MuiSelect-icon': {
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
      '&:hover': {
        backgroundColor:  props.theme.hover,
        // color:  props.theme.color,
      },
    },
//Header
    '.MuiTableRow-head': {
      fontSize: props.theme.fontSizeHeading,
      '&:hover': {
        backgroundColor: props.theme.background + ' !important',
        // color:  props.theme.color + !important',
      },
    },

    '.MuiTableSortLabel-root': {
      fontSize: props.theme.fontSizeHeading,
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
      '&:hover': {
        // backgroundColor:  props.theme.hover,
        color:  props.theme.hoverText,
      },
      '& svg': {
        color: props.theme.color + ' !important',
        '&:hover': {
          color: props.theme.hoverText + ' !important',
        },
      },
    },

    '.MuiTableSortLabel-active': {
      // backgroundColor:  props.theme.background,
      color:  props.theme.active + ' !important',
      '&:hover': {
        // backgroundColor:  props.theme.hover,
        color:  props.theme.hover,
      },
      '& svg': {
        color: props.theme.active + ' !important',
        '&:hover': {
          color: props.theme.hoverText + ' !important',
        },
      },
    },
//Toolbar
    '.ToolbarBase': {
      fontSize: props.theme.fontSizeTitle,
      flex: props.theme.flex,
      paddingLeft: props.theme.paddingLeft,
      paddingRight: props.theme.paddingRight,
      fontSizeTitle: props.theme.fontSizeTitle,
    },

    '.ToolbarInactive': {
      // backgroundColor:  props.theme.background,
      color:  props.theme.color,
    },

    '.ToolbarActive':{
      backgroundColor: props.theme.selectedHover + ' !important',
      color: props.theme.active + ' !important',
    },

    '.MuiTooltip':{
// TODO
    },
  })
)

export { WrapperDL, WrapperDLKK }
