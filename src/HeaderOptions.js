import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({ title, Icon }) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        <h3 className='headerOption__title'>{ title }</h3>
    </div>
  )
}

export default HeaderOptions