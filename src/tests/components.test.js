/* eslint-disable */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../components/App'
import { Home } from '../components/Home'
import Movie from '../components/Movie'
import ImagePreview from '../components/ImagePreview'
import Select from '../components/Select'
import { MemoryRouter } from 'react-router'
import ReactDOM from 'react-dom'

jest.mock('scroll-to-element', () => 'scroll-to-element')

Enzyme.configure({ adapter: new Adapter() })

describe('components', () => {
  describe('Home', () => {
    it('should render self', () => {
      const props = {
        movies: [],
        fetchMovies: () => {}
      }

      const wrapper = shallow(<Home {...props} />)

      expect(wrapper.find('.Home--root').length).toEqual(1)
    })
  }),
  describe('ImagePreview', () => {
    it('should render self', () => {
      const props = {
        active: {
          fullSizeImageUrl: 'http://placehold.it/120x120'
        },
        onClick: () => {}
      }

      const wrapper = shallow(<ImagePreview {...props} />)

      expect(wrapper.find('.img-mask').length).toEqual(1)
    })
  }),
  describe('Movie', () => {
    it('should render self', () => {
      const props = {
        movie: {},
        onClick: () => {},
        sectionTitle: () => { }
      }

      const wrapper = shallow(<Movie {...props} />)

      expect(wrapper.find('.movie').length).toEqual(1)
    })
  }),
  describe('Select', () => {
    it('should render self', () => {
      const props = {
        onClick: () => {},
      }

      const wrapper = shallow(<Select {...props} />)

      expect(wrapper.find('.select-wrap').length).toEqual(1)
    })
  })
})

