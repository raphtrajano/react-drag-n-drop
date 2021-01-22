import styled from 'styled-components/macro';

const NavbarWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  height: auto;
  background-color: dimgrey;
  border: 3px solid black;
  .active {
    box-shadow: 0 0 15px cyan;
    background-color: aqua;
  }
`;

const NavLink = styled.div`
  width: 190px;
  height: 30px;
  font-weight: bold;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid black;
  border-top: 0px;
  margin: 0 20px;
  transition: all 0.5s ease-in-out;
  border-radius: 15px;
  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.1, 1);
  }
  @media (max-width: 465px) {
    margin: 5px 20px;
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
