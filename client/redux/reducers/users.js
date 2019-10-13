const GET_DATA = 'skillcrucial/users/GET_DATA'
const ERROR_HAPENNED = 'skillcrucial/users/ERROR_HAPENNED'
const REQUEST_DONE = 'skillcrucial/users/REQUEST_DONE'
const REQUEST_STARTED = 'skillcrucial/users/REQUEST_STARTED'

const initialState = {
  list: [],
  isRequesting: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        list: action.list
      }
    case REQUEST_DONE:
      return {
        ...state
      }
    case REQUEST_STARTED:
      return {
        ...state
      }
    default:
      return state
  }
}

export function getData(pageIndex = 0) {
  return (dispatch) => {
    dispatch({ type: REQUEST_STARTED })
    return fetch(`/api/users/${pageIndex}`)
      .then(res => res.json())
      .then((json) => {
        dispatch({
          type: GET_DATA,
          list: json
        })
        dispatch({ type: REQUEST_DONE })
      })
      .catch((err) => {
        dispatch({
          type: ERROR_HAPENNED,
          err
        })
        dispatch({ type: REQUEST_DONE })
      })
  }
}
