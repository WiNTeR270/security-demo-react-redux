import React, { Component } from 'react';
import Table from './components/Table/Table';
import Map from './components/Map/Map';
import Search from './components/Search/Search'; 
import { connect } from 'react-redux'; 
import './App.scss'; 
import {updateSearchText, runSearch, runRandomSearch} from './actions/index';
import logo from './static/biohazard.svg';
import { bindActionCreators } from 'redux'
import ProgressOverlay from './components/ProgressOverlay/ProgressOverlay';
import SearchResult from './components/SearchResult/SearchResult';

class App extends Component { 
  componentDidMount() {
    document.title = "Malicious IP Finder";
  }
  render() {
    return ( 
      <div className="security">
        <ProgressOverlay {...this.props}/>
        <div className="security-header">
          <img className="security-header__logo" src={logo}/>
          <Search {...this.props}/>
        </div>
            <SearchResult {...this.props}/>
            <div className="security-body">
                <Table {...this.props}/>
                <Map {...this.props}/>
            </div>
      </div>
    );
  }
}

// start of code change
const mapStateToProps = (state) => {
  console.log("Map state to props", state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateSearchText,
    runSearch,
    runRandomSearch
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
