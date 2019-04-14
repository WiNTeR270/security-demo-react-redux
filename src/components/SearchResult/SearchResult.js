import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.scss';
import { Alert } from 'react-bootstrap';

const SearchResult = (props) => {
  const { searchResult } = props;
  if(!searchResult)  { 
    return (
      <Alert variant="secondary" className="security-result">
        <Alert.Heading>Search for a IP Address</Alert.Heading>
        <p>
          IP addresses will be checked against Binary Defense Systems Artillery 
          Threat Intelligence and Banlist Feeds.
        </p>
      </Alert>
    );
  }  else if(searchResult.malicious) {
    return (
      <Alert variant="danger" className="security-result">
        <Alert.Heading>IP Address {searchResult.ip} is Malicious</Alert.Heading>
        <p>
          The searched IP address was found as potentially malicious in Binary Defense Systems Artillery 
          Threat Intelligence Feed and Banlist Feed.
        </p>
      </Alert>
    );
  } else {
    return (
      <Alert variant="success" className="security-result">
        <Alert.Heading>IP Address {searchResult.ip} is Safe</Alert.Heading>
        <p>
          The searched IP address was not found in the in Binary Defense Systems Artillery 
          Threat Intelligence Feed or Banlist Feed.
        </p>
      </Alert>
    );
  }
}

SearchResult.propTypes = {
  searchResult: PropTypes.object
}

export default SearchResult;