import React from 'react';
import ReactDOM from 'react-dom';
import ProgressOverlay from './ProgressOverlay';

it('no active search renders without crashing', () => {
  testRender({
    isSearching: false
  });
});

it('active search renders without crashing', () => {
  testRender({
    isSearching: true
  });
});


const testRender = (props) => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressOverlay {...props}/>, div);
}