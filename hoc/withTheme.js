import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// All the following keys are optional. We try our best to provide a great
// default value.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3393df',
      main: '#0078d7',
      dark: '#005496',
      contrastText: '#fff',
    },
    secondary: {
      light: '#737373',
      main: '#505050',
      dark: '#383838',
      contrastText: '#fff',
    },
  },
});

const withTheme = () => Component => {
  return function (props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props}/>
      </MuiThemeProvider>
    );
  }
}

export default withTheme
