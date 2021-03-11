import { createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2ecc71',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        border: "2px solid #2ecc71",
        textTransform: "none",
        '&:hover': {
          backgroundColor: green[500],
          color: "#fff"
        },
        '&:focus': {
          border: '2px solid',
          borderColor: "#fff"
        },
      }
    }
  }
});

export default theme;