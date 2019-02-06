import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import AddTodo from './containers/AddTodo';
import Main from './containers/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
