import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOptions from './HeaderOptions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

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
            <HeaderOptions onClick={logoutOfApp} avatar={true} title={user?.displayName}/>
        </div>
    </div>
  )
}

export default Header