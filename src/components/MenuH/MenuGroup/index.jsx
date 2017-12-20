import React from 'react'
import './index.css'

import {Collapse} from 'reactstrap'
import MenuItem from '../MenuItem'
import SubmenuGroup from '../SubmenuGroup'


export default class MenuGroup extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      isSubmenuOpen: false,
      selectedMenu: '',
      selectedSubmenu: ''
    }
  }

  getDefaultCSSClasses = () => {
    const classes = [this.props.classes || 'menu_group']

    return classes
  }


  

  getDefaultCSSLogoClasses = () => {
    const { isSubmenuOpen } = this.state
    var classes = ['defaultLogoCSSClasses']

    if (isSubmenuOpen) {
      classes.push ('icon-chevron-down')
    } else {
      classes.push ('icon-chevron-right')
    }

    return classes.join(' ')
  }

  handleLogoClick = (menu_row, i) => {
    this.setState ({
      isSubmenuOpen: !this.state.isSubmenuOpen
    })
  }

  handleRowClick = (menu_row, i) => {
    this.setState ({
      isSubmenuOpen: !this.state.isSubmenuOpen
    })
  }
  
  handleMenuSelect = (menuitem_name) => {
    this.setState ({
      selectedMenu: menuitem_name
    })
  }

  handleSubmenuSelect = (submenu_row, i) => {
    this.setState ({
      selectedSubmenu: submenu_row
    })
  }


  renderSubmenuGroup = (submenuitem_names) => {
    return submenuitem_names.map ((submenu_row, i) => {
      return (
        <SubmenuGroup
          key={i}
          submenuitem={submenu_row}
          onSubmenuSelect={() => this.handleSubmenuSelect(submenu_row, i)}
          selected={this.state.selectedSubmenu === submenu_row}
        />  
      )
    })
  }

  renderLogo = (submenuitem_names) => {
    if (submenuitem_names.length === 0) {
      return
    } else {
      return (
        <div
          className={this.getDefaultCSSLogoClasses()}
          onClick={() => this.handleLogoClick()}
        />
      )
    }
  }

  render () {
    const {menuitem_name, submenuitem_names} = this.props

    return (
      <div
          className={this.getDefaultCSSClasses()}
        >
        <div
          className='menu_row'
          onClick={() => this.handleRowClick()}
        >
          <MenuItem
            menuitem_name={menuitem_name}
            onMenuSelect={() => this.handleMenuSelect(menuitem_name)}
            isSubmenuOpen={this.state.isSubmenuOpen}
          />
          {this.renderLogo(submenuitem_names)}
        </div>

          <div className='submenu_group'>
            <Collapse isOpen={this.state.isSubmenuOpen}>
              {this.renderSubmenuGroup(submenuitem_names)}
            </Collapse>
          </div>  
      </div>  
    )
  }
}
