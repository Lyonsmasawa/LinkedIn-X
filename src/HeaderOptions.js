import React from 'react'
import './HeaderOptions.css'
// import Avatar from 'react-avatar';
import {Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'


function HeaderOptions({ title, Icon, avatar, onClick }) {
  const user = useSelector(selectUser);
  
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && (
          <Avatar src={user?.photoURL} className="headerOption__icon">
            {user?.email[0]}
          </Avatar>
        )}
        <h3 className='headerOption__title'>{ title }</h3>
    </div>
  )
}

export default HeaderOptions