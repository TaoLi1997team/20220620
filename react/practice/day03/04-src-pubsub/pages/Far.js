import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Son from './Son'
export default class Far extends Component {
    componentDidMount() {
        PubSub.subscribe('程序猿', function (msg, data) {
            console.log('far组件接收到的:'+ msg,data)
        })
    }
  render() {
    return (
      <div>
            Far组件 <Son></Son>
            <button onClick={() => {
                PubSub.unsubscribe('程序猿')
            }}>取消话题</button>
            <button onClick={() => {
                PubSub.clearAllSubscriptions()
            }}>取消所有订阅</button>
      </div>
    )
  }
}
