import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';

it('no result renders without crashing', () => {
  testRender({
    searchResult: null
  });
});

it('malicious result renders without crashing', () => {
  testRender({
    searchResult: {
      ip: '0.0.0.0',
      malicious: true
    }
  });
});


it('safe result renders without crashing', () => {
  testRender({
    searchResult: {
      ip: '0.0.0.0',
      malicious: false
    }
  });
});

const testRender = (props) => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResult {...props}/>, div);
}