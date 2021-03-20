import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
//redux
import store from './redux/store';
import { Provider } from 'react-redux';
//route
import { BrowserRouter } from 'react-router-dom';

const MainApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));