import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockProps = {
    runSearch: () => {},
    updateSearchText: () => {},
    searchText: 'text',
  };
  ReactDOM.render(<Search {...mockProps}/>, div);
});