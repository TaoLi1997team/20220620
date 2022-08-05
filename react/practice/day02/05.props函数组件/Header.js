import React from 'react';
import PropTypes from 'prop-types';
export default function Header(props) {
  return (
      <div>Header组件{props.age}</div>
  )
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