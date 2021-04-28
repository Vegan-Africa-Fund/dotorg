import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#88a384',
    },
    secondary: {
      main: '#48644c',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f2fff0',
    }
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        border: "4px solid #48644c",
        textTransform: "none",
        '&:hover': {
          backgroundColor: "#88a384",
          color: "#f2fff0"
        },
        '&:focus': {
          border: '2px solid',
          borderColor: "#f2fff0"
        },
      }
    }
  }
});

export default theme;
