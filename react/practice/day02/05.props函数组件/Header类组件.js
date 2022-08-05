import React from 'react';
import PropTypes from 'prop-types';
export default class Header extends React.Component {
    state = { count: 1 };
    handleCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        console.log(this.props);
        const arr = this.props.list;
        const newArr = arr.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
        });
        return (<div>
            {newArr}
        </div>);
    }
}
Header.propTypes = {
    list: PropTypes.array.isRequired,
    name: PropTypes.string,
    gender: PropTypes.oneOf(['男', '女']),
    obj: PropTypes.shape({
        color: PropTypes.string.isRequired,
        fontSize: PropTypes.number
    }).isRequired,
    age:PropTypes.number.isRequired
};
Header.defaultProps = {
    age: 18
};