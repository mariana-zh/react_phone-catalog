import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <nav className="nav">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/phones'}>Phones</NavLink>
        <NavLink to={'/tablets'}>Tablets</NavLink>
        <NavLink to={'/accessories'}>Accessories</NavLink>
        <div className="addition">
          <NavLink to={'/favourite'}>icon</NavLink> {/* change letter */}
          <NavLink to={'/cart'}>icon</NavLink>
        </div>
      </nav>
    </header>
  );
};
