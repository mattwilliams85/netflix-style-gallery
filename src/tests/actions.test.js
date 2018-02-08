/* eslint-disable */
import * as actions from '../redux/actions/home'
import * as types from '../redux/actions/types'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    nock('http://localhost:3001')
      .get('/api/movies?_sort=movieId&_order=asc')
      .reply(200, {
        movies: ['test']
      }, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
      });

    const expectedActions = [
      { type: types.FETCH_MOVIES_SUCCESS, payload: { movies: ['test'] } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchMovies())
      .then((test) => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

test('expect', () => {
  expect(1).toEqual(1)
})
