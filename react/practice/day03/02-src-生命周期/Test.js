import React, { Component } from "react";
export default class Test extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log('组件创建阶段-constructor');
    }
    render() {
        console.log('render函数-组件创建和更新阶段都会调用');
        return (<div>
            <div>Test组件,{this.state.count}</div>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1
                });
            }}>按钮</button>
        </div>);
    }
    componentDidMount = () => {
        console.log('组件创建完成阶段-componentDidMount');
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('更新阶段-componentDidUpdate',prevProps,prevState)
    }
    componentWillUnMount = () => {
        console.log('卸载阶段-componentWillUnMount')
    }
}