import React, { Component } from 'react'
import './index.css'

import {
  Collapse,
  Navbar,
  // NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

export default class Menu extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isSubmenu1Open: false,
      isSubmenu2Open: false
    }
  }

  getDefaultCSSClasses = () => {
    const classes = [this.props.classes || 'menu']
    return classes.join (' ')
  } 

  getDefaultCSSLogo1Classes = () => {
    const { isSubmenu1Open } = this.state
    var classes = ''

    if (isSubmenu1Open) {
      classes = 'icon-chevron-down'
    } else {
      classes = 'icon-chevron-right'
    }

    return classes
  }

  getDefaultCSSLogo2Classes = () => {
    const { isSubmenu2Open } = this.state
    var classes = ''

    if (isSubmenu2Open) {
      classes = 'icon-chevron-down'
    } else {
      classes = 'icon-chevron-right'
    }

    return classes
  }

  toggleSubmenu1 = () => {
    this.setState ({
      isSubmenu1Open: !this.state.isSubmenu1Open
    })
  }

  toggleSubmenu2 = () => {
    this.setState ({
      isSubmenu2Open: !this.state.isSubmenu2Open
    })
  }

  render () {
    return (
      <div className={this.getDefaultCSSClasses()}>
        <Collapse isOpen={this.props.isOpen}>
          <div className="menu_item">
            <div className="menu_item_title">Home</div>
          </div>

          <div className="menu_item" onClick={() => this.toggleSubmenu1()}>
            <div className="menu_item_title">Design and Marketing</div>
            <div className={this.getDefaultCSSLogo1Classes()} />
          </div>
          
          <div className='menu_submenu_wrapper'>
            <Collapse isOpen={this.state.isSubmenu1Open} navbar>
              <div className='menu_subitem'>Web Design</div>
              <div className='menu_subitem'>eCommerce</div>
              <div className='menu_subitem'>Branding Design</div>
            </Collapse>
          </div>

          <div className="menu_item" onClick={() => this.toggleSubmenu2()}>
            <div className="menu_item_title">Software</div>
            <div className={this.getDefaultCSSLogo2Classes()} />
          </div>
          <div className='menu_submenu_wrapper'>
            <Collapse isOpen={this.state.isSubmenu2Open} navbar>
              <div className='menu_subitem'>Software Development</div>
              <div className='menu_subitem'>Online Induction Software</div>
              <div className='menu_subitem'>Staff Portal Software</div>
            </Collapse>
          </div>

        </Collapse>
      </div>
    )  
  }
}
