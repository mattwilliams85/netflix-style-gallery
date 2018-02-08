import React from 'react'
import WebIcon from 'mdi-react/WebIcon'
import VideoIcon from 'mdi-react/VideoIcon'
import FileImageIcon from 'mdi-react/FileImageIcon'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'
import './style.css'

const ImagePreview = ({active, onClick}) => {
  return (
    <div className={`${active.movieId ? '' : 'hidden'} img-mask`} onClick={onClick}>

      <Spinner image={active.fullSizeImageUrl} />

      <h1>{active.movieName}</h1>
      <div className='wrapper'>
        <div>
          <WebIcon />
          <VideoIcon />
          <FileImageIcon />
        </div>
        <div>
          <div><b>Movie ID</b> - {active.movieId}</div>
          <div> <b>Language Code</b> - {active.languageCode} </div>
          <div> <b>Image Type</b> - {active.imageType}</div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview

ImagePreview.propTypes = {
  active: PropTypes.object,
  onClick: PropTypes.func.isRequired
}
