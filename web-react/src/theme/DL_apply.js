import styled from '@emotion/styled'
import React from 'react'
import { calculateActiveTickIndex } from 'recharts/lib/util/ChartUtils'

const WrapperDL = styled.div(
  {

    '.test1': {
      border: 2,
      borderColor: 'red',
      borderStyle: 'dashed',
      // backgroundColor: 'red',
    },
    '.test2': {
      border: 2,
      borderColor: 'yellow',
      borderStyle: 'dashed',
      // backgroundColor: 'yellow',
    },
    '.test3': {
      border: 2,
      borderColor: 'blue',
      borderStyle: 'dashed',
      // backgroundColor: 'blue',
    },
    '.test4': {
      border: 2,
      borderColor: 'green',
      borderStyle: 'dashed',
      // backgroundColor: 'green',
    },
    '.test5': {
      border: 2,
      borderColor: 'orange',
      borderStyle: 'dashed',
      // backgroundColor: 'orange',
    },



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
      // TODO min with of app
      marginLeft: 8,
      marginRight: 8,
      marginTop: 24,
      overflowX: 'auto',
      margin: 'auto',
    },


    '.MuiIconButton-label': {
      // TODO add drawer to hide button
      '&:hidden': {
        display: 'none'
      },
    },

    '.MuiGrid-root': {
      background: 'blue',
      color: 'green',
    },

    '.MuiToolbar-root': {
      display: 'flex',
      justifyContent: 'space-between',
    },

    '.MuiTablePagination-root': {
      display: 'flex',
      justifyContent: 'flex-end',
      '&.MuiTableCell-root': {
        border: 'none',
      },
    },

    '.MuiTableCell-root': {
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
      borderRightWidth: 1,
      borderRightStyle: 'solid',
      '&:last-child': {
        borderRightStyle: 'none',
      },
      '&:first-child': {
        borderLeftStyle: 'none',
      },
    },


    '.Title': {
      marginLeft: 24,
      marginRight: 24,
      marginTop: 8,
      marginBottom:8,
      overflowX: 'auto',
      // margin: 'auto',
    },
  },

  (props) => ({
    '.makeStyles-root-1': {
      background: props.theme.backgroundPaper,
      color: props.theme.textMain,
    },

    '.MuiTypography-root': {
      // background: 'inherit',
      color: 'inherit',
    },

    '.MuiDivider-root': {
      backgroundColor: props.theme.borderMain,
    },

    '.MuiDrawer-paperAnchorDockedLeft': {
      borderRightColor: props.theme.borderMain,
    },

    '.MuiContainer-root': {
      background: 'inherit',
      color: 'inherit',
    },

    '.MuiPaper-root': {
      background: 'inherit',
      color: 'inherit',
      boxShadow: props.theme.boxShadow3
    },

    '.MuiGrid-root': {
      background: 'inherit',
      color: 'inherit',
    },

    '.MuiFormControl-root': {
      background: 'inherit',
      color: 'inherit',
    },

    '.MuiFormControlLabel-label': {
      background: 'inherit',
      color: 'inherit',
      '&.Mui-disabled': {
        background: 'inherit',
        color: props.theme.textDisabled,
      },
    },

    '.MuiFormLabel-root': {
      background: 'inherit',
      color: 'inherit',
      '&.Mui-focused': {
        background: 'inherit',
        color: props.theme.textActive,
      },
    },

    '.MuiInputBase-root': {
      background: 'inherit',
      color: 'inherit',
    },

    '.MuiOutlinedInput-root': {
      background: props.theme.backgroundInput,
      color: props.theme.textInput,
      '&:hover fieldset': {
        borderColor: props.theme.textActive,
      },
      '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
          background: props.theme.backgroundInputFocus,
          borderColor: props.theme.borderFocus,
        },
      },
      '.MuiOutlinedInput-notchedOutline': {
        background: props.theme.backgroundInput,
        borderColor: props.theme.borderMain,
      },
    },

    '.MuiButtonGroup-root': {
      background: 'inherit',
      color: 'inherit',
    },

    '.MuiButton-contained': {
      background: props.theme.maskHoverSelected,
      color: 'inherit',
      boxShadow: props.theme.boxShadow1
    },

    '.MuiButtonBase-root': {
      // background: 'inherit',
      color: 'inherit',
      '&:hover': {
        background: props.theme.maskHover,
        color: props.theme.textHover,
      },
      '&.Mui-disabled': {
        background: 'inherit',
        color: props.theme.textDisabled,
      },
      '&.Mui-checked': {
        background: 'inherit',
        color: props.theme.textActive,
        '&:hover': {
          background: props.theme.maskHover,
          color: 'inherit',
        },
      },
      '.MuiButton-label': {
        '&.Mui-disabled': {
          // background: 'inherit',
          color: props.theme.textDisabled,
        },
      },
    },

    '.MuiButton-label': {
      // background: 'inherit',
      color: 'inherit',
      '&:hover': {
        // background:'inherit',
        color: props.theme.textHover,
      },
    },

    '.MuiButton-outlined': {
      borderTopColor: props.theme.borderMainLight + ' !important',
      borderRightColor: props.theme.borderMainLight + ' !important',
      borderBottomColor: props.theme.borderMainLight + ' !important',
      borderLeftColor: props.theme.borderMainLight + ' !important',
    },

    '.MuiListItem-root': {
      background: 'inherit',
      color: 'inherit',
      '&:hover': {
        background: props.theme.maskHover,
        color: props.theme.textHover,
      },
      '&.Mui-disabled': {
        background: 'inherit',
        color: props.theme.textDisabled,
      },
    },

    '.MuiListItemIcon-root': {
      // background: 'inherit',
      color: 'inherit',
      '&:hover': {
        // background: props.theme.maskHover,
        color: props.theme.textHover,
      },
    },

    '.MuiTableContainer-root': {
      background: props.theme.backgroundTable,
    },

    '.MuiTable-root': {
      background: 'inherit',
    },
    '.MuiTableHead-root': {
      background: 'inherit',
    },

    '.MuiTableSortLabel-root': {
      background: 'inherit',
      color: 'inherit',
      '&:hover': {
        background: 'inherit' + ' !important',
        color: props.theme.textHover,
      },
      '&.MuiTableSortLabel-active': {
        background: 'inherit',
        color: 'white',
        '&:hover': {
          background: 'inherit',
          color: props.theme.textHoverActive,
        },
      },
    },

    '.MuiTableSortLabel-icon': {
      background: 'inherit',
      color: props.theme.textMain,
      '&:hover': {
        background: 'inherit',
        color: props.theme.textHover + ' !important',
      },
    },

    '.MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active, .MuiTableSortLabel-icon': {
      background: 'inherit',
      color: props.theme.textActive + ' !important',
      '&:hover': {
        background: 'inherit',
        color: props.theme.textHoverActive + ' !important',
      },
    },

    '.MuiTableBody-root': {
      background: 'inherit',
    },

    '.MuiToolbar-root': {
      background: props.theme.backgroundTable,
    },

    '.ToolbarInactive': {
      background: 'inherit',
      color: props.theme.textMain,
    },

    '.ToolbarActive': {
      backgroundColor: props.theme.maskSelected + ' !important',
      color: props.theme.textActive + ' !important',
    },

    '.MuiTablePagination-root': {
      background: 'inherit',
      color: 'inherit',
    },

    '.MuiTablePagination-select': {
      background: 'inherit',
      color: 'inherit',
      '&:hover': {
        background: props.theme.maskHover,
        color: props.theme.textHover,
      },
      // TODO style popup list
    },

    '.MuiTablePagination-selectIcon': {
      // background: 'inherit',
      color: 'inherit',
      // TODO style popup list
    },

    '.MuiTooltip-tooltip': {
      background: 'pink' + ' !important',
      color: 'white' + ' !important',
      // TODO style tooltip
    },

    '.MuiTableRow-root': {
      background: 'inherit',
      '&.Mui-selected, &.Mui-selected:hover': {
        background: props.theme.maskHoverSelected + ' !important',
      },
      '&.Mui-selected': {
        background: props.theme.maskSelected + ' !important',
      },
      // TODO don't hover header row
      // '&:hover, &:not:MuiTableHead-root': {
      //   background: props.theme.maskHover + ' !important',
      // },
      '&:hover': {
        background: props.theme.maskHover + ' !important',
      },
    },

    '.MuiTableCell-root': {
      color: 'inherit',
      borderBottomColor: props.theme.borderMain,
      borderLeftColor: props.theme.borderMainLight,
      borderRightColor: props.theme.borderMainLight,
    },
  })
)

export { WrapperDL }
