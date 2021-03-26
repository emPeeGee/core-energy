import React from 'react';
import logo from '../../assets/img/logo.jpg';
import './Header.scss';

export function Header() {
  return (
    <header className="Header">
      <div className="core-container">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <h1>Customer Name</h1>
          </div>
          <div className="col-sm-4">
            <h1 className="Header__date">POSITION REPORT ‐ 02/03/2021</h1>
          </div>
          <div className="Header__logo col-sm-4">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
