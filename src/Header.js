import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOptions from './HeaderOptions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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
            <HeaderOptions title="Home" Icon={HomeIcon}/>
        </div>
    </div>
  )
}

export default Header