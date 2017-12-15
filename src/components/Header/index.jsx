import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  getDefaultCSSClasses () {
    const classes = [this.props.classes || 'page_landing_header']
    return classes
  }

  render () {
    return (
      <div className={this.getDefaultCSSClasses()}>
        <div 
          className='page_landing_header_icon'
          onClick={this.props.toggle}
        >
          <div className='icon-bars' />
        </div>
        <div className='page_landing_header_logo'>
          <img
            src='keyzo-it-solutions-logo.png'
            alt='keyzo-it-solutions-logo'
            width='100'
          />
        </div>
      </div>
    )
  }
}
