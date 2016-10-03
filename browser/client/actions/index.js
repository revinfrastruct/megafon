export function addEvent (event) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_EVENT',
      payload: event
    })
  }
}
