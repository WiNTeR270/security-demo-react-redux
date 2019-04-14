import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

it('no result renders without crashing', () => {
  testRender({
    searchResult: null
  });
});

it('has result renders without crashing', () => {
  testRender({
    searchResult: {
      malicious: true,
      city: "Buffalo",
      company: null,
      country: "US",
      hostname: "172-245-173-13-host.colocrossing.com",
      ip: "172.245.173.13",
      latitude: 42.8864,
      longitude: -78.8781,
      phone: null,
      postal: 14202,
      region: "New York"
    }
  });
});


const testRender = (props) => {
  const div = document.createElement('div');
  ReactDOM.render(<Table {...props}/>, div);
}