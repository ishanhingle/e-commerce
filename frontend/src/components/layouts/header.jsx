import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height:13vh;
  border-radius:50px;
  margin:4px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
:hover{
  transform:scale(1.1);
  font-weight:600;
  color:white;
}
color:white`;



const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;


const Header=()=>{
    const [toggle, toggleNav] = useState(false);
  return <>
     <Nav>
        <Logo src="https://img.freepik.com/free-vector/supermarket-logo-template-concept_23-2148466562.jpg?w=826&t=st=1693194570~exp=1693195170~hmac=57cd857543fa0304eeffefa5a96bb16555948e431cb1e0f9a2b2d4341ba1be23"/>
        <Menu>
          <Item>
            <Link  to='/' >
              Home
            </Link>
          </Item>
          <Item>
            <Link to="/products">
              Products
            </Link>
          </Item>
          <Item>
            <Link to="user/account">
              Account
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link to="/">
              Home
            </Link>
          </Item>
          <Item>
            <Link to="/products">
              Products
            </Link>
          </Item>
          <Item>
            <Link to="/account">
              Account
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
  </>
}
export default Header;