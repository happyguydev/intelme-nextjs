import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';

import { GlobalProvider } from '../context/global';
import { toastContainerConfig } from '../util/toast';
import AuthenticationChecker from '../containers/authentication-checker';

import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';
import reduxStore from '../store/index';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = reduxStore;

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#089BAB',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  overrides: {
    MuiInput: {
      input: {
        '&::placeholder': {
          fontFamily: 'Poppins',
          color: '#DBDBDB',
          fontSize: '15px',
          fontWeight: 'normal',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <GlobalProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <AuthenticationChecker>
                <Component {...pageProps} />
                <ToastContainer {...toastContainerConfig} />
              </AuthenticationChecker>
            </PersistGate>
          </Provider>
        </GlobalProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
