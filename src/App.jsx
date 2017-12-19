import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Menu from './components/Menu'
import DescriptionText from './components/DescriptionText'
import DescriptionCard from './components/DescriptionCard'


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

      <div className="container">
        <img src="main_image.png" alt="main_image" className='img-fluid' />
      </div> 
   
      <div className="description_text_container container">
        <DescriptionText
          descriptionTitle='The most comprehensive Staff Training and Induction Software'
          descriptionDescription='A unique, web-based Online Induction System allowing inductees to access your training anywhere, at any time. A flexible system to include your corporate branding, forms and workflow, upload content, images, video and animation to build each induction module and allowing for multilingual access. The online induction training offers full reporting capabilities in who has taken the induction, when and the level of skills they maintain across all of your sites. Our in-house developers give you the ability to change or add features within the existing functionality and integrate with other systems providing a bespoke solutions for your business needs.'
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <DescriptionCard
              descriptionCardLogo='https://www.keyzo.co.uk/wp-content/uploads/2017/03/online-induction-cost-effective.svg'
              descriptionCardTitle='COST EFFECTIVE'
              descriptionCardDescription='Reduces the need for a face-to-face induction process and taking key members of staff off their day to day tasks.'
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <DescriptionCard
              descriptionCardLogo='https://www.keyzo.co.uk/wp-content/uploads/2017/03/online-induction-efficient.svg'
              descriptionCardTitle='EFFICIENT'
              descriptionCardDescription='Enhances learning with interactive questionnaires, streamline videos, modular assessment and configurable failure scenarios.'
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <DescriptionCard
              descriptionCardLogo='https://www.keyzo.co.uk/wp-content/uploads/2017/03/online-induction-documents.svg'
              descriptionCardTitle='THE RIGHT STUFF'
              descriptionCardDescription='Confidence that your new employees know the relevant information before they start work and that they feel a part of the company culture.'
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <DescriptionCard
              descriptionCardLogo='https://www.keyzo.co.uk/wp-content/uploads/2017/03/online-induction-accessible-anywhere.svg'
              descriptionCardTitle='ACCESSIBLE ANYWHERE'
              descriptionCardDescription='Internet based system allowing access on any device, at any location.'
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <DescriptionCard
              descriptionCardLogo='https://www.keyzo.co.uk/wp-content/uploads/2017/03/online-induction-white-label.svg'
              descriptionCardTitle='WHITE LABEL'
              descriptionCardDescription='Personalised and branded to match your company logo and colours.'
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <DescriptionCard
              descriptionCardLogo='https://www.keyzo.co.uk/wp-content/uploads/2017/03/online-induction-secure.svg'
              descriptionCardTitle='SECURE'
              descriptionCardDescription='Secure and fully robust system, as used in many other organisations throughout the UK and Europe.'
            />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App
