import React from 'react'
import './HeaderOptions.css'
import Avatar from 'react-avatar';

function HeaderOptions({ title, Icon, avatar }) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && (<Avatar className="headerOption__icon" src={avatar}/>)}
        <h3 className='headerOption__title'>{ title }</h3>
    </div>
  )
}

export default HeaderOptions