import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://logos-marcas.com/wp-content/uploads/2020/04/Linkedin-s%C3%ADmbolo.png"
          alt=""
        />{' '}
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        &nbsp; &nbsp; &nbsp;
        <HeaderOption Icon={SupervisorAccountIcon} title="Network" />
        &nbsp; &nbsp; &nbsp;
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        &nbsp; &nbsp; &nbsp;
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        &nbsp; &nbsp; &nbsp;
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        &nbsp; &nbsp; &nbsp;
        <HeaderOption
          avatar="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
