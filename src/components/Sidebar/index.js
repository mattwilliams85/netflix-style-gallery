import React from 'react'
import PropTypes from 'prop-types'
import scrollToElement from 'scroll-to-element'
import './style.css'
import language from '../../language'

const Sidebar = ({ movies, sort }) => {
  const anchors = [...new Set(movies.map(movie => movie[sort]))]

  function handleClick (selector) {
    if (sort === 'movieName') selector = selector.replace(/ /g, '-')
    scrollToElement(`#${selector}`, {
      offset: -100,
      ease: 'out-expo',
      duration: 1000
    })
  }

  return (
    <div className='sidebar'>
      <h2>Navigation</h2>
      {anchors.map((selector, i) => {
        return (
          <div key={i} className='title' onClick={handleClick.bind(this, selector)}>
            {sort === 'languageCode' ? language[selector] : selector}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar

Sidebar.propTypes = {
  movies: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired
}
