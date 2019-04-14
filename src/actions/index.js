const superagent = require('superagent');
export const SEARCH_UPDATE_TEXT = 'SEARCH_UPDATE_TEXT';
export const SEARCH_INIT = 'SEARCH_INIT';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

//  TODO: This should ideally come from a config.json file
const IP_SERVICE_URL = 'http://localhost:5000';

export const updateSearchText = (event) => {
  console.log('updating search text!', event.target.value);
  return {
    type: SEARCH_UPDATE_TEXT,
    payload: event.target.value
  }
}

export const runSearch = () => async(dispatch, getState) => {
  const {searchText} = getState();
  
  dispatch({type: SEARCH_INIT, action: 'text'});
  superagent
    .get(`${IP_SERVICE_URL}/api/maliciousIp/${searchText}`)
    .withCredentials()
    .set('Accept', 'application/json')
    .then(res => {
      console.log('API response', res.body);
      dispatch({type: SEARCH_SUCCESS, payload: res.body});
    }).catch(err => {
      console.error("Ran into a API query error", err); 
      dispatch({type: SEARCH_FAIL, payload: err});
    });
}

export const runRandomSearch = () => async(dispatch, getState) => {
  console.log('implement me')
}