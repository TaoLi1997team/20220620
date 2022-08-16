import React, { Component } from 'react';
import PubSub from 'pubsub-js'
export default class Son extends Component {
    handle = () => {
        PubSub.publish('程序猿','web前端开发')
    }
    componentDidMount() {
        PubSub.subscribe('yyy', (msg, data) => {
            // console.log(msg,data)
            console.log('yyy',data)
        })
    }
    render() {
        return <div>Son组件,
            <button onClick={this.handle}>发布信息</button>
        </div>
    }
}