import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarWrapper, NavLink, NavText } from './style';

const Navbar = props => {
  return (
    <NavbarWrapper>
      <NavLink>
        <Link to="/react-beautiful-dnd">
          <NavText>React Beautiful DnD</NavText>
        </Link>
      </NavLink>
      <NavLink>
        <Link to="/react-grid-layout">
          <NavText>React Grid Layout</NavText>
        </Link>
      </NavLink>
    </NavbarWrapper>
  );
};

export default Navbar;
