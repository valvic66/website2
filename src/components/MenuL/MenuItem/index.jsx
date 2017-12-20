import React from 'react'
import './index.css'


export default class MenuItem extends React.Component {
  getDefaultCSSMenuitemClasses = () => {
    var classes = [this.props.classes || 'menuitemL']
    
    if (this.props.isSubmenuOpen) {
      classes.push ('isMenuClickedL')
    } else {
      return classes
    }

    return classes.join(' ')
  }


  render () {
    const {menuitem_name} = this.props

    return (
      <div 
      className={this.getDefaultCSSMenuitemClasses()}
      onClick={this.props.onMenuSelect}
      >
        {menuitem_name}
      </div>
    )
  }
}