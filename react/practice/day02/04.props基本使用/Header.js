import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props) //不传就拿不到props，就打印undefined
    }
    state = { count: 1 };
    handleCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        console.log(this.props);
        const Test = this.props.Component
        // this.props.msg='123'
        this.props.xxx.name='ls'
        return (<div>
            <h3>{this.state.count}</h3>
            <div>{this.props.msg}</div>
            <div>{this.props.yyy}</div>
            <Test></Test>
            <button onClick={this.handleCount}>按钮</button>
        </div>);
    }
}