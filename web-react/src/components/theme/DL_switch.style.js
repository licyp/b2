import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const COLORS = {
  lightTrackRight: "#e2d286",
  lightTrackLeft: "#b8a96c",
  lightThumb: "#e2d286",
  lightSwitchBase: "#d2d2c9",
  lightHover: 'rgba(179,193,222,0.08)',
  lightColor: "#161616",
  darkTrackRight: "#052e80",
  darkTrackLeft: "#3192e0",
  darkThumb: "#3192e0",
  darkSwitchBase: "#d2d2c9",
  darkHover: 'rgba(179,193,222,0.08)',
  darkColor: "#c1c1c1",
  ThumbS:"",
};

const SwitchStylesDL = makeStyles((theme) => ({
  root: {
    // width: 50,
    // height: 30,
    // padding: 1,
  },
  switchBase: {
    // padding: 1,
    color: COLORS.lightSwitchBase,
  },
  thumb: {
    // width: 38,
    // height: 38,
    backgroundColor: COLORS.lightThumb,
  },
  track: {
    background: 'linear-gradient(to right,' + COLORS.lightTrackLeft + ',' + COLORS.lightTrackRight + ')',
    opacity: '1 !important',
    borderRadius: 5,
    position: 'relative',
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      width: '50%',
      transform: 'translateY(-50%)',
      color: COLORS.lightColor,
      fontSize: 7,
      textAlign: 'center',
    },
    '&:before': {
      content: '"🌙"',
      left: -1,
      opacity: 0,
    },
    '&:after': {
      content: '"🔆"',
      right: -1,
    },
  },
  checked: {
    '&$switchBase': {
      color: COLORS.darkSwitchBase,
      // transform: 'translateX(40px)',
      '&:hover': {
        backgroundColor: COLORS.darkHover,
      },
    },
    '& $thumb': {
      backgroundColor: COLORS.darkThumb,
    },
    '& + $track': {
      background: 'linear-gradient(to right,' + COLORS.darkTrackLeft + ',' + COLORS.darkTrackRight + ')',
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 0,
      }
    },
  },
}));

export {
  SwitchStylesDL,
}
