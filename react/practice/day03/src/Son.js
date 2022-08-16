import React, { Component, PureComponent } from 'react';
export default class Son extends PureComponent {
    state = {
        msg: 'xxx',
        obj: {
            name: '张三'
        }
    };
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log('son组件的shouldComponentUpdate执行了');
        console.log(nextProps,nextState)
        console.log(this.props,this.state)
        if (nextProps.count !== this.props.count || nextState.msg !== this.state.msg) {
            return true;
        }
        return false;
    } */ 
    handle = () => {
        // this.state.obj.name = '李四';
        let obj = {...this.state.obj}
        obj.name = '王五'
        this.setState({
            msg: 'yyy',
            obj
        });
    };
    render() {
        console.log('son组件更新了');
        return (<>
            <h1>{this.state.obj.name}</h1>
            <div>Son组件,{this.props.count}</div>
            <div>{this.state.msg}</div>
            <button onClick={this.handle}>son按钮</button>
        </>);
    }
}