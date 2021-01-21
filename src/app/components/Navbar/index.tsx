import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavbarWrapper, NavLink, NavText } from './style';
import { useInjectSaga } from 'utils/redux-injectors';

const Navbar = props => {
  const links = [
    {
      id: 1,
      to: '/react-beautiful-dnd',
      text: 'React Beautiful DnD',
    },
    {
      id: 2,
      to: '/react-grid-layout',
      text: 'React Grid Layout',
    },
  ];
  const [activeLink, setActiveLink] = useState(null);

  const onHandleClick = id => {
    setActiveLink(id);
  };

  return (
    <NavbarWrapper>
      {links.map(link => (
        <NavLink
          onClick={() => onHandleClick(link.id)}
          className={link.id === activeLink ? 'active' : ''}
          key={link.id}
        >
          <Link to={link.to}>
            <NavText>{link.text}</NavText>
          </Link>
        </NavLink>
      ))}
    </NavbarWrapper>
  );
};

export default Navbar;
