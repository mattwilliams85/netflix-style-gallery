import * as type from '../actions/types'

const initialState = {
  movies: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload
      }

    default:
      return state
  }
}
