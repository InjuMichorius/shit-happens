import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function NameInput() {

  return (
    <div className="name-input-wrapper">
      <FontAwesomeIcon icon={faCircleUser} className='icon' />
      <input type="text" placeholder="Spelernaam" />
    </div>
  );
}

NameInput.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NameInput;
