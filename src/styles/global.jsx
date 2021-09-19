const globalStyles = (coloring) => {
  return {
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      webkitTapHighlightColor: 'transparent',
      transition: 'all .1s ease-in-out',
    },
    '*:focus, *:active': {
      outline: 'none !important',
    },
    html: {
      fontSize: '62.5%',
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
      overflowY: 'overlay',
      marginLeft: 'calc(100vw - 100%)',
    },
    '@media only screen and (max-width: 100em)': {
      html: {
        fontSize: '60%',
      },
    },
    '@media only screen and (max-width: 90em)': {
      html: {
        fontSize: '56.25%',
        overflowY: 'scroll !important',
      },
    },
    '@media only screen and (max-width: 65em)': {
      html: {
        fontSize: '50%',
      },
    },

    body: {
      fontFamily: 'Roboto, sans-serif',
      webkitFontSmoothing: 'antialiased',
      height: 'calc(100vh - 110px)',
      position: 'absolute',
      left: 0,
      top: '110px',
      width: '100vw',
      padding: '0 !important',
    },
    'a, a:link, a:visited': {
      textDecoration: 'none',
    },
    'a:focus, a:active': {
      outline: 'none',
    },
    '::-moz-selection': {
      backgroundColor: coloring.primaryMain,
      color: 'transparent',
    },
    '::selection': {
      backgroundColor: coloring.primaryMain,
      color: coloring.paper,
    },
    '*::-webkit-scrollbar-track': {
      borderRadius: '4px',
      backgroundColor: 'transparent',
      position: 'fixed',
    },
    '*::-webkit-scrollbar': {
      width: '5px',
      backgroundColor: 'transparent',
      position: 'fixed',
    },
    'body::-webkit-scrollbar': {
      width: '7px',
      backgroundColor: 'transparent',
      position: 'fixed',
    },
    '*::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: coloring.darker,
    },
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus':
      {
        border: '1px solid green',
        webkitTextFillColor: 'green',
        webkitBoxShadow: '0 0 0px 1000px #000 inset !important',
        transition: 'background-color 5000s ease-in-out 0s',
      },
    'input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    'input::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    'input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '#root': {
      height: 'auto',
    },
  }
}
export default globalStyles
