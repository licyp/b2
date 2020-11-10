import { lighten, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
  TableFooter,
  TableSortLabel,
  Select,
  Checkbox
} from '@material-ui/core'


const styles = (theme)  => ({
  root: {
    maxWidth: 800,
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    margin: 'auto',
  },
  table: {
    minWidth: 800,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 300,
  },
})

const useToolbarStyles = makeStyles((theme) => ({
  // root: {
  //   paddingLeft: theme.spacing(2),
  //   paddingRight: theme.spacing(1),
  //   // fontSize: 15,
  // },
  // highlight:
  //   theme.palette.type === 'light'
  //     ? {
  //       color: theme.palette.secondary.main,
  //       backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  //     }
  //     : {
  //       color: theme.palette.text.primary,
  //       backgroundColor: theme.palette.secondary.dark,
  //     },
  // title: {
  //   flex: '1 1 100%',
  //   // fontSize: 20,
  // },
}));




const useStyles = makeStyles((theme) => ({

  MuiPaper: {
    width: '100%',
    // marginBottom: theme.spacing(2),
  },

  MuiTableContainer:{
    width: '100%',
  },

  MuiTable: {
    width: '100%',
  },

  MuiTableBody:{
    width: '100%',
  },
//Table row
  MuiTableRow: {
    width: '100%',
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: 'rgba(208,19,41,0.95)' + ' !important',
      // color: 'rgba(76,208,19,0.95)'+ ' !important',
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(47,208,19,0.95)' + ' !important',
      // color: 'rgba(98,208,19,0.95)'+ ' !important',
    },
    '&:hover': {
      backgroundColor: 'rgba(208,205,19,0.95)' + ' !important',
      // color: 'rgba(208,19,101,0.95)'+ ' !important',
    },
  },
//Table cell
  MuiTableCell:{
    // body: 'rgba(19,50,208,0.95)'+ ' !important',
    color: 'rgba(60,208,19,0.95)'+ ' !important',
  },

// Check box
  colorSecondary: {
    color: 'rgba(19,208,192,0.95)' + ' !important',
    '&$checked': {
      color: 'rgba(19,66,208,0.95)' + ' !important',
    },
    '&:hover': {
      backgroundColor: 'rgba(173,19,208,0.95)'+ ' !important',
      color: 'rgba(208,189,19,0.95)'+ ' !important',
    },
  },

//Table header
  MuiTableSortLabel: {
    color: 'rgba(208,189,19,0.95)' + ' !important',
    '&:hover': {
      backgroundColor: 'rgba(12,12,12,0.95)' + ' !important',
      color: 'rgba(234,234,234,0.95)'+ ' !important',
    },
    '& svg': {
      color: 'rgba(208,189,19,0.95)' + ' !important',
      '&:hover': {
        color: 'rgba(58,202,32,0.95)'+ ' !important',
      },
    },
  },

  visuallyHidden: {
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

//Taolbar
  MuiToolBarRoot: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    // fontSize: 15,
  },
  MuiToolBarActive:{
    backgroundColor: 'rgba(238,14,14,0.95)' + ' !important',
    color: 'rgba(58,202,32,0.95)'+ ' !important',
  },
  // highlight:
  //   theme.palette.type === 'light'
  //     ? {
  //       color: theme.palette.secondary.main,
  //       backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  //     }
  //     : {
  //       color: theme.palette.text.primary,
  //       backgroundColor: theme.palette.secondary.dark,
  //     },
  MuiToolbar: {
    backgroundColor: 'rgba(58,202,32,0.95)'+ ' !important',
    color:  'rgba(238,14,14,0.95)' + ' !important',
    flex: '1 1 100%',
    fontSize: 20,
  },


  MuiButton: {
    backgroundColor: 'rgba(58,202,32,0.95)'+ ' !important',
    color: 'rgba(208,189,19,0.95)' + ' !important',
    '&:hover': {
      backgroundColor: 'rgba(12,12,12,0.95)' + ' !important',
     },
    '& svg': {
      color: 'rgba(208,189,19,0.95)' + ' !important',
      '&:hover': {
        color: 'rgba(32,80,202,0.95)'+ ' !important',
      },
    },
  },
//Pagination
  MuiTablePagination: {
    color: 'rgba(239,246,5,0.95)' + ' !important',
    '&:hover': {
      color: 'rgba(234,234,234,0.95)'+ ' !important',
    },
    '& button': {
      // '&.Mui-selected, &.Mui-selected:hover': {
      '& svg': {
        '&:hover': {
          color: 'rgba(32,80,202,0.95)'+ ' !important',
        },
      },
      '&:hover': {
        backgroundColor: 'rgba(74,238,14,0.95)' + ' !important',
      },
      '&:$disabled': {
        color: 'rgba(16,212,196,0.95)'+ ' !important',
      },
    },
},






}));

export {
  useStyles,
  useToolbarStyles,
  styles,
}
