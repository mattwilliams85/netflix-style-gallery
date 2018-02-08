import React from 'react'
import ImageLoader from 'react-load-image'
import PropTypes from 'prop-types'
import './style.css'

const Spinner = ({image = ''}) => {
  return (
    <ImageLoader
      src={image}>
      <img alt='fullScreen'/>
      <div>Error!</div>
      <div className='loader-wrap'>
        <div className='loader'></div>
      </div>
    </ImageLoader>

  )
}

export default Spinner

Spinner.propTypes = {
  image: PropTypes.string
}
