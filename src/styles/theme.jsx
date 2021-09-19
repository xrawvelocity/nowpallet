import { createTheme } from '@mui/material/styles'

export const coloring = {
  primaryMain: '#FF8C00',
  primarySecond: '#FFA639',
  primaryThird: '#C66D00',
  secondaryMain: '#FF3D00',
  secondarySecond: '#FF6939',
  secondaryThird: '#C63000',
  paper: '#FFFFFF',
  default: '#F5F6F8',
  darker: '#DEDEDE',
  shadow: '#C2C2C2',
  black: '#1D1D1D',
  text: '#5C5C5C',
  lightText: '#8D8D8D',
  border: '#A5A5A5',
}

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif ",
    fontWeight: '400',

    fontSize: 20,
    button: {
      color: 'white',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: coloring.primaryMain, // #FF8C00
      second: coloring.primarySecond, //#FFA639
      third: coloring.primaryThird, //#C66D00
    },
    secondary: {
      main: coloring.secondaryMain, //#FF3D00
      second: coloring.secondarySecond, //#FF6939
      third: coloring.secondaryThird, // #C63000
    },
    background: {
      paper: coloring.paper, //#FFFFFF
      default: coloring.default, //#F5F6F8
      darker: coloring.darker, //#DEDEDE
      shadow: coloring.shadow, //#C2C2C2
      black: coloring.black, //#1D1D1D
    },

    text: {
      primary: coloring.text, // #5C5C5C
      white: coloring.paper, //#FFFFFF
      darkWhite: coloring.darker, //#DEDEDE
      lightText: coloring.lightText, // #8D8D8D
      border: coloring.border, //#a5a5a5
    },
  },
  components: {
    MuiInputBase: {
      input: {
        padding: '2px 12px !important',
      },
      inputAdornedStart: {
        paddingLeft: '0 !important',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
})
