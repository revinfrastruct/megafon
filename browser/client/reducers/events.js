import {handleActions} from 'redux-actions'
import {ADD_EVENT} from 'constants'

const initialState = []

export default handleActions({
  [ADD_EVENT] (state, action) {
    return [action.payload, ...state]
  }
}, initialState)
