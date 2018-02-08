import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Movie = ({ movie, sectionTitle, onClick }) => {
  return (
    <span>
      {sectionTitle(movie)}
      <div className='movie' onClick={onClick.bind(this, movie)}>
        <img src={movie.thumbnailUrl} alt='movie'/>
        <div className='caption'>
          <div><b>ID</b> - {movie.movieId}</div>
          <div><b>LANG</b> - {movie.languageCode}</div>
          <div><b>TYPE</b> - {movie.imageType}</div>
        </div>
      </div>
    </span>
  )
}

export default Movie

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  sectionTitle: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}
