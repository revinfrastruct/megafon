import {handleActions} from 'redux-actions'
import {ADD_EVENT, REMOVE_EVENT, SET_CHANNEL_FILTER} from 'constants'

const initialState = {
  channelFilter: null,
  eventList: []
}

export default handleActions({
  [ADD_EVENT] (state, action) {
    return Object.assign({}, state, {
      eventList: [action.event, ...state.eventList]
    })
  },

  [REMOVE_EVENT] (state, action) {
    const idx = state.eventList.findIndex(event => event.id === action.id)

    return Object.assign({}, state, {
      eventList: [
        ...state.eventList.splice(0, idx),
        ...state.eventList.slice(idx + 1)
      ]
    })
  },

  [SET_CHANNEL_FILTER] (state, action) {
    return Object.assign({}, state, {
      channelFilter: action.channelFilter
    })
  }
}, initialState)
