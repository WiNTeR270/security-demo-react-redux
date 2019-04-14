import { combineReducers } from 'redux'
import { SEARCH_UPDATE_TEXT, SEARCH_INIT, SEARCH_SUCCESS, SEARCH_FAIL } from './../actions'

let initialState = { 
  // searchText: "172.245.173.13",
  searchText: null,
  isSearching: false,
  searchResult: null,
  // searchResult: {
  //   malicious: true,
  //   city: "Buffalo",
  //   company: null,
  //   country: "US",
  //   hostname: "172-245-173-13-host.colocrossing.com",
  //   ip: "172.245.173.13",
  //   latitude: 42.8864,
  //   longitude: -78.8781,
  //   phone: null,
  //   postal: 14202,
  //   region: "New York"
  // },
  searchError: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SEARCH_UPDATE_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case SEARCH_INIT:
      return {
        ...state,
        isSearching: true,
        searchError: false,
      };
      case SEARCH_SUCCESS: 
        return {
          ...state,
          isSearching: false,
          searchResult: action.payload,
        };
      case SEARCH_FAIL:
        return {
          ...state,
          searchError: true
        }
    default:
      return state
  }
}
export default reducer
