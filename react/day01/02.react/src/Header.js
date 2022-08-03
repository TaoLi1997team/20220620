import React from 'react';
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            msg: '我是一段字符串'
        };
    }
    render() {
        console.log(this);
        return (<div>
            <h3>{this.state.count}</h3> <p>{this.state.msg}</p>
            <button onClick={async () => {
                await this.setState({
                    count: this.state.count + 1
                });
                console.log(this.state.count);
            }}>按钮+1</button>
        </div>);
    }
}
