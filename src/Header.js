import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOptions from './HeaderOptions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOptions title="Home" Icon={HomeIcon}/>
            <HeaderOptions title="My Network" Icon={SupervisorAccountIcon}/>
            <HeaderOptions title="Jobs" Icon={BusinessCenterIcon}/>
            <HeaderOptions title="Messaging" Icon={ChatIcon}/>
            <HeaderOptions title="Notifications" Icon={NotificationsIcon}/>
            <HeaderOptions avatar="https://i.scdn.co/image/ab6775700000ee85b254071f06759aa4a4f6398b"
             title="Lyons"/>
        </div>
    </div>
  )
}

export default Header