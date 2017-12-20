import React from 'react'
import './index.css'


export default class SubmenuGroup extends React.Component {
  getDefaultCSSClasses = () => {
    const {selected} = this.props
    const classes = [this.props.classes || 'submenuitemL']

    if (selected) {
      classes.push ('isSubmenuClickedL')
    }

    return classes.join (' ')
  }

  render () {
    const {submenuitem, selectedSubmenu} = this.props

    return (
        <div 
          className={this.getDefaultCSSClasses()}
          onClick={this.props.onSubmenuSelect}
        >
          {submenuitem}
        </div>
    )
  }
}