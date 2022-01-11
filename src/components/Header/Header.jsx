import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from '../../assets/search.svg'
import './Header.css'
import {HiHome} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {ImCompass2} from 'react-icons/im'
import {BsHeart} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header">
      <div className="hearder__logo">
        <img src={logo} alt="logo" width="103px" height="29px" />
      </div>
      <div className="header__search">
          <img src={searchIcon} alt="Search Icon" width="15px" />
         <input type="search" placeholder="Search" />
      </div>
      <div className="header__icons">
        <div className="header_icon">
          <HiHome />
          <RiMessengerLine />
          <ImCompass2 />
          <BsHeart />
          <FaUserCircle />
        </div>
          
      </div>
    </div>
  );
};

export default Header;
