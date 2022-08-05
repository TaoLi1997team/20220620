import React, { Component } from 'react';
import Header from './Header';
import Test from './Test';
export default class App extends Component {
  state = { msg: 'app里面的数据' };
  render() {
    return (
      <div>
        <Header msg={this.state.msg} yyy={'hello'} xxx={{ name: 'zs' }} Component={Test}></Header>
      </div>
    );
  }
}

