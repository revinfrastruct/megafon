import {handleActions} from 'redux-actions'
import {ADD_CHANNEL, SET_LIVE_TOGGLE} from 'constants'

const initialState = {
  isLive: true,
  channelList: [
    {
      topic: 'sthlm12nov2016',
      title: '#KämpaSTHLM',
      description: 'Liveticker den 12 november 2016 - en heldag av antifascistisk mångfald'
    }
  ]
}

export default handleActions({
  [ADD_CHANNEL] (state, action) {
    return Object.assign({}, state, {
      channelList: [action.channel, ...state.channelList]
    })
  },

  [SET_LIVE_TOGGLE] (state, action) {
    return Object.assign({}, state, {
      isLive: action.isLive
    })
  }
}, initialState)
