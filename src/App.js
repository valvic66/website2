import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleToggle = () => {
    this.setState ({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    const {isOpen} = this.state
    const menu_data = [
      {id: 0, menuitem_name: 'Home', submenuitems: []},
      {id: 1, menuitem_name: 'Design and Marketing', submenuitems: ['Web Design', 'eCommerce', 'Digital Marketing', 'Branding Design', 'eLearning']},
      {id: 2, menuitem_name: 'Software', submenuitems: ['Software Development', 'Online Induction Software', 'Read and Sign Software', 'Staff Portal Software']},
      {id: 3, menuitem_name: 'About Us', submenuitems: ['About Keyzo', 'Join Our Team', 'Blog', 'Our Work', 'Partnerships']},
      {id: 4, menuitem_name: 'Contact Us', submenuitems: []}
    ]

    return (
      <div className='App'>
        <Header
          classes='page_landing_header'
          toggle={() => this.handleToggle()}
        />
        <Menu
          isOpen={isOpen}
          menu_data={menu_data}
        />
        <div>Collapsable menu</div>
      </div>
    )
  }
}

export default App
