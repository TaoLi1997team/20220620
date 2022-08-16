import React, { Component } from 'react';
import Far from './pages/Far';
// const context = React.createContext();
// const { Provider, Consumer } = React.createContext();
import context from './context';

export default class App extends Component {
  state = { msg: '默认值' };
  render() {
    return (
      <context.Provider value={this.state.msg}>
        <div>
          app组件 <Far></Far>
        </div>
      </context.Provider>
    );
  }
}
