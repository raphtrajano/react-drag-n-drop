import styled from 'styled-components/macro';

const NavbarWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  height: auto;
`;

const NavLink = styled.div`
  width: 190px;
  height: 30px;
  font-weight: bold;
  font-size: 16px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: aqua;
  border: 1px solid black;
  border-top: 0px;
  margin: 0 20px;
  transition: all 0.5s ease-in-out;
  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.1, 1);
  }
`;

const NavText = styled.p`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0;
  align-items: center;
  color: #000000;
`;

export { NavbarWrapper, NavLink, NavText };
