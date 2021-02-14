import { ThemeProvider } from 'styled-components';

function ThemeProviderWrapper({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderWrapper
