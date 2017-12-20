import React, { Component } from 'react'
import './index.css'

import {Collapse} from 'reactstrap'
import MenuGroup from './MenuGroup'


export default class MenuH extends Component {
  getDefaultCSSClasses = () => {
    const {isMenuVisible} = this.props
    const classes = [this.props.classes || 'menu container']

    // if(isMenuVisible) {
    //   classes.push('isMenuVisible')
    // } else {
    //   classes.push('isMenuInvisible')
    // }

    return classes.join (' ')
  }

  renderMenuGroup = (menu_data) => {
    return menu_data.map ((menu_row, i) => {
      return (
        <MenuGroup
          key={i}
          menuitem_name={menu_row.menuitem_name}
          submenuitem_names={menu_row.submenuitems}
        />
      )
    })
  }  

  render () {
    const {menu_data} = this.props

    return (
      <div className={this.getDefaultCSSClasses()}>
        {/* <Collapse isOpen={this.props.isOpen}> */}
          {this.renderMenuGroup(menu_data)}
        {/* </Collapse> */}
      </div>  
    )  
  }
}
