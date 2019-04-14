import React from "react";
import { render } from "react-dom";
import {arrayOf, string, object } from 'prop-types';
import ReactTable from 'react-bootstrap/Table';
import './Table.scss';

class Table extends React.Component {
  static propTypes = {
    searchResult: object
  }
  constructor() {
    super();
  }


  renderRow(key, value) {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    )
  }

  render() { 
    let { searchResult } = this.props;
    if(!searchResult) return null;
    return (
      <ReactTable striped bordered hover variant="dark" className="security-table">
        <tbody>
          {this.renderRow("IP", searchResult.ip)}
          {this.renderRow("Latitude", searchResult.latitude)}
          {this.renderRow("Longitude", searchResult.longitude)}
          {this.renderRow("City", searchResult.city)}
          {this.renderRow("Region", searchResult.region)}
          {this.renderRow("Country", searchResult.country)}
          {this.renderRow("ZipCode", searchResult.postal)}
        </tbody>
      </ReactTable>
    );
  }
};

export default Table;