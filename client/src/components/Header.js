import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerTitle">
        <Link to="/">Streamer</Link>
      </div>
      <div className="otherLink">
        <Link to="/">All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
