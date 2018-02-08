import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Select extends Component {
  componentWillMount () {
    this.setState({ open: false })

    document.addEventListener('click', this.outerClick.bind(this), false)
  }

  outerClick (event) {
    const { open } = this.state

    if (!event || event.target.id === 'select') {
      this.setState({ open: !open })
      return
    }
    this.setState({ open: false })
  }

  render () {
    const { onClick } = this.props
    const { open } = this.state

    return (
      <div className='select-wrap'>
        <div className='select' tabIndex="0" id='select'>
          Sort By
        </div>
        <div className={`${open ? 'open' : ''} select-box`}>
          <div onClick={onClick.bind(this, 'movieName')}>Movie Title</div>
          <div onClick={onClick.bind(this, 'languageCode')}>Language Code</div>
          <div onClick={onClick.bind(this, 'imageType')}>Image Type</div>
        </div>
      </div>
    )
  }
}

export default Select

Select.propTypes = {
  onClick: PropTypes.func.isRequired
}
