import { wrapper } from "@/components/store/store";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Theme from '../components/themes/Theme';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);
