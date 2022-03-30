import React from "react";
import PropTypes from 'prop-types'
const Rating = (props) => {
  const { value, text, color } = props;
  return (
    <div className="rating">
      <p>
        {value} <i style={{color:color}} className="fas fa-star"></i> from {text && text}
      </p>
    </div>
  );
};

Rating.defaultProps = {
    color :"#00b4d8"
}
Rating.prototype = {
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    color: PropTypes.string
}
export default Rating;
