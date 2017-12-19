import React from 'react'
import './index.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogoMouseEnter: null    
    }
  }

  titleCSS = () => {
    const classes = ['description_card_title']
    const {isLogoMouseEnter} = this.state

    if (isLogoMouseEnter) {
      classes.push ('isMouseEnter')
    }

    return classes.join(' ')
  }

  descriptionCSS = () => {
    const classes = ['description_card_description']
    const {isLogoMouseEnter} = this.state

    if (isLogoMouseEnter) {
      classes.push ('isTransformed')
    }

    return classes.join(' ')
  }

  handleMouseEnter = () => {
    this.setState ({
      isLogoMouseEnter: true
    })
  }
  handleMouseLeave = () => {
    this.setState ({
      isLogoMouseEnter: false
    })
  }
  
  render () {
    const {isLogoMouseEnter} = this.state
    console.log(isLogoMouseEnter)

    return (
      <div className='description_card'>
        <div className='row justify-content-center'>
          <img 
            src={this.props.descriptionCardLogo}
            className='description_card_logo'
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
          />
        </div>
        <div className='row justify-content-center'>
          <div className={this.titleCSS()}>{this.props.descriptionCardTitle}</div>
        </div>
        <div className='row justify-content-center'>
          <div className={this.descriptionCSS()}>{this.props.descriptionCardDescription}</div>
        </div>
      </div>
    )
  }
}
