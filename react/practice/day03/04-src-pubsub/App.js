import React, { Component } from 'react';
import Far from './pages/Far';
import PubSub from 'pubsub-js';

export default class App extends Component {
  state = { msg: '默认值' };
  componentDidMount() {
    this.token = PubSub.subscribe('程序猿', function (msg,data) {
      console.log(msg,data)
    })
  }
  cancleS = () => {
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <div>
        app组件 <Far></Far>
        <button onClick={this.cancleS}>app按钮-取消订阅程序猿话题</button>
        <button onClick={() => {
          PubSub.publish('yyy','哼哈')
        }}>app按钮发布信息</button>
      </div>
    );
  }
}
