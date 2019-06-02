import React from 'react';
import spinnerImage from '../gear.gif';

const Spinner = () => {
    return (
      <div className="spinner">
        <img src={spinnerImage} alt="Loading..." />
      </div>
    )
}

export default Spinner;