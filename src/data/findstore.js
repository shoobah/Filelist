import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { SEARCHSTART, SEARCHSUCCESS, SEARCHFAILED, SETQUERY, SAVEQUERY, PAGEFORWARD, PAGEBACKWARD, SETFILTER } from './actionCreators'
import thunkMiddleware from 'redux-thunk'

// Define store shape
const initialState = {
  isFetching: false,
  fetchFailed: false,
  message: '',
  hits: [],
  total: 0,
  page: 0,
  query: {
    Text: '',
    Take: 10,
    Skip: 0,
    Order: '',
    MinDate: '1970-01-01',
    Type: '',
    Extensions: []
  }
}

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)

function findReducer (state = initialState, action) {
  switch (action.type) {
    case SEARCHSTART:
      return Object.assign({}, state, {
        isFetching: true,
        fetchFailed: false
      })
    case SEARCHSUCCESS:
      console.log('SEARCHSUCCESS');
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailed: false,
        message: action.message,
        hits: action.response.Hits,
        total: action.response.Total,
        query: action.query
      })
    case SEARCHFAILED:
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailed: true,
        message: action.message,
      })
    case SAVEQUERY:
      return Object.assign({}, state, {
        prevQuery: state.query
      })
    default:
      return state
  }
}

var store = createStoreWithMiddleware(findReducer)

export default store
