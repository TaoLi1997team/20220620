import React, { Component } from 'react';
import './index.css';
export default class Header extends Component {
    state = { todoName: '' };
    handle = e => {
        const value = e.target.value;
        this.setState({ todoName: value.trim() });
    };
    handleConfirm = e => {
        const keyCode = e.keyCode;
        if (keyCode === 13) {
            if (!this.state.todoName) return;
            this.props.addTodo(this.state.todoName);
            this.setState({ todoName: '' });
        }
    };
    render() {
        return (<div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认"
                value={this.state.todoName} onChange={this.handle}
                onKeyDown={this.handleConfirm}
            />
        </div>);
    }
}