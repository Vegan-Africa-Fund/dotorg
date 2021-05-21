import React from 'react';
import PropTypes from 'prop-types';
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux';
import {createWrapper} from 'next-redux-wrapper'
import ConfigStore from '../store/configureStore'
import { ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core/';
import theme from '../theme';
import '../styles/globals.css';
 function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const store = ConfigStore()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

const makestore = () => ConfigStore();
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp);