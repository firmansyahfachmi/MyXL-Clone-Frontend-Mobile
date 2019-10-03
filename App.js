import React, {Component} from 'react';
import AppRoot from './src/Routes/Navigator';
import {Root} from 'native-base';

import {Provider} from 'react-redux';
import store from './src/Publics/Redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppRoot />
        </Root>
      </Provider>
    );
  }
}

export default App;
