import React from 'react';
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        };
    }
    handleCount() {
        console.log(this);
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (<div>
            <h3>{this.state.count}</h3>
            <button onClick={() => { this.handleCount(); }}>Num+1</button>
        </div >);
    }
}