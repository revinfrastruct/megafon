import {ADD_EVENT} from 'constants'

export function startListeningToEvents () {
  return (dispatch, getState) => {

  }
}

export function addEvent (event) {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_EVENT,
      payload: event
    })
  }
}
