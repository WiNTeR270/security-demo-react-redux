import React from 'react';
import PropTypes from 'prop-types';
import './ProgressOverlay.scss';
import { Spinner } from 'react-bootstrap';

const ProgressOverlay = (props) => { 
  if(!props.isSearching) return null;
  return (
    <div className="progress-overlay">
      <Spinner animation="border" variant="primary" className="progress-overlay__spinner"/>
      <label className="progress-overlay__text">Searching...</label> 
    </div>
  ) 
}
 
ProgressOverlay.propTypes = {
  isSearching: PropTypes.bool.isRequired
}

export default ProgressOverlay
