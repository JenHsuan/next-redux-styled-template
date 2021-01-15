import { wrapper } from "../components/store/store";
import Theme from '../components/themes/Theme';
import ThemeProviderWrapper from '../components/wrappers/ThemeProviderWrapper';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProviderWrapper theme={Theme}>
        <Component {...pageProps} />
      </ThemeProviderWrapper>
  )
}

export default wrapper.withRedux(MyApp);
