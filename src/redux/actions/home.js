/* global fetch */
import * as type from './types'
import 'whatwg-fetch'

export const clearMovies = (dispatch) => {
  dispatch({ type: type.CLEAR_MOVIES })
}

export const fetchMovies = (sort = 'movieId') => {
  return dispatch => {
    const path = `http://localhost:3001/api/movies?_sort=${sort}&_order=asc`

    dispatch(clearMovies)

    return fetch(path)
      .then(response => response.json())
      .then(body => dispatch({
        type: type.FETCH_MOVIES_SUCCESS,
        payload: body
      }))
  }
}
