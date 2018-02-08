/* eslint-disable */
import reducer from '../redux/reducers'
import * as types from '../redux/actions/types'

const initalState = {
  home: {
    movies: []
  },
  router: { location: null }
}

describe('home reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initalState
    )
  })

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    let newState = initalState
    initalState.home.movies = ['test']

    expect(
      reducer({}, {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: ['test']
      })
    ).toEqual(newState)
  })
})
