import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import UpLoadImage from './pages/UpLoadImage/UpLoadImage';

export default class AwesomeImageGallery extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <UpLoadImage />
      </Provider>
    );
  }
}
