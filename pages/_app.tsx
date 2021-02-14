import store from "../components/store/store";
import { Theme } from "../components/themes/Theme";
import ProviderWrapper from "../components/wrappers/ProviderWrapper";
import ThemeProviderWrapper from "../components/wrappers/ThemeProviderWrapper";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderWrapper store={store}>
      <ThemeProviderWrapper theme={Theme}>
        <Component {...pageProps} />
      </ThemeProviderWrapper>
    </ProviderWrapper>
  );
}

export default MyApp;

