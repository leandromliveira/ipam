import React from 'react';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header className="headerContainer">
      <img src={logo} alt="logo do Ipam" />
      <p>Processo seletivo IPAM</p>
    </header>
  );
}
