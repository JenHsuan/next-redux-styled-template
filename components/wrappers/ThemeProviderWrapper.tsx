import { ThemeProvider } from 'styled-components';

const ThemeProviderWrapper = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderWrapper

