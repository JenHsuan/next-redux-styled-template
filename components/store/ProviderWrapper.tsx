import { Provider } from 'react-redux';

function ProviderWrapper({ children, store }) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderWrapper
