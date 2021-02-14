import store from "../components/store/store";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../components/themes/Theme';
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
