import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import { Button, Form } from 'react-bootstrap';

const Search = (props) => { 
  return (
    <div className="security-search-bar">
        <Form.Control 
          size="lg"
          type="text" 
          placeholder="Search for a malicious IP" 
          value={props.searchText}
          onChange={props.updateSearchText}
          onKeyDown={(e) => {
            if(e.key == 'Enter'){
              props.runSearch();
            }
          }}
          className="security-search-bar__input"/>
        <Button variant="primary" onClick={props.runSearch}>
          Search
        </Button>
    </div>
  )
}

Search.propTypes = {
  runSearch: PropTypes.func.isRequired,
  updateSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string,
}

export default Search
