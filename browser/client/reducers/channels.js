import {handleActions} from 'redux-actions'
import {ADD_CHANNEL} from 'constants'

const initialState = [
  {
    topic: 'nmr',
    title: 'NMR 12e September',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  {
    topic: 'forbifart-sthlm',
    title: 'Förbifart Stockholm',
    description: 'Consectetur adipisicing elit, sed do eiusmod tempor.'
  }
]

export default handleActions({
  [ADD_CHANNEL] (state, action) {
    return [action.channel, ...state]
  }
}, initialState)
