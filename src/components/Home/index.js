import React, { Component } from 'react'
import PropTypes from 'prop-types'
import language from '../../language'
import ImagePreview from '../ImagePreview'
import Sidebar from '../Sidebar'
import Movie from '../Movie'
import Select from '../Select'
import './style.css'

export class Home extends Component {
  componentWillMount () {
    this.props.fetchMovies()

    this.setState({
      active: {},
      sort: 'movieName'
    })
  }

  handleClick (movie) {
    this.setState({ active: movie })
  }

  handleSort (sort) {
    this.setState({ sort })
    this.props.fetchMovies(sort)
  }

  clearActive () {
    this.setState({ active: {} })
  }

  render () {
    const { movies } = this.props
    const { active, sort } = this.state
    const { handleClick, handleSort, clearActive } = this

    let prevSelector

    const sectionTitle = (movie, key) => {
      let selector = movie[sort]

      if (prevSelector !== selector) {
        prevSelector = selector

        switch (sort) {
          case 'movieName':
            return <h2 id={ selector.replace(/ /g, '-')}> { selector }</h2>
          case 'languageCode':
            return <h2 id={selector}>{language[selector]}</h2>
          default:
            return <h2 id={selector} className='uppercase'>{selector}</h2>
        }
      }
    }

    return (
      <div className='Home--root'>
        <Sidebar movies={movies} sort={sort}/>

        <div className='header-wrap'>
          <h1>Promo Art</h1>
          <Select onClick={handleSort.bind(this)} />
        </div>

        <ImagePreview active={active} onClick={clearActive.bind(this)}/>

        <div>
          {movies.map((movie, i) =>
            <Movie key={i} movie={movie} sectionTitle={sectionTitle} onClick={handleClick.bind(this)} />
          )}
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  movies: PropTypes.array,
  fetchMovies: PropTypes.func.isRequired
}
