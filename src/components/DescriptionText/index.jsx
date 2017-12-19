import React from 'react'
import './index.css'

export default function ({descriptionTitle, descriptionDescription}) {
  return (
    <div className='description container'>
      <div className='row'>
        <div className='description_title col'>{descriptionTitle}</div>
      </div>
      <div className='row'>
        <div className='description_description col'>{descriptionDescription}</div>
      </div>
    </div>
  )
}
