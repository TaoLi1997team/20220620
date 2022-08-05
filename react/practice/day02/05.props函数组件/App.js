import React, { Component } from 'react';
import Header from './Header';
export default class App extends Component {
  state = { msg: 'app里面的数据' };
  render() {
    return (
      <div>
        <Header list={[1,2,3]} name={'hello'} gender={'男'} obj={{name:'zs',color:'red',age:19}} age={20}></Header>
      </div>
    );
  }
}

