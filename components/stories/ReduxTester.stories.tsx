import { storiesOf, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import store from "../store/store";
import ProviderWrapper from '../store/ProviderWrapper';
import ThemeProviderWrapper from '../themes/ThemeProviderWrapper';
import { Theme }  from '../themes/Theme';

import ReduxTester from '../ReduxTester';

const withProvider = (story) => (
  <ProviderWrapper store={store}>
      <ThemeProviderWrapper theme={Theme}>
      { story() }
      </ThemeProviderWrapper>
    </ProviderWrapper>
)

storiesOf('Pages', module)
  .addDecorator(withProvider)
  .add('index', () => (
    <ReduxTester/>
  ))
